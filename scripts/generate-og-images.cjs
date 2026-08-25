const fs = require("fs");
const Module = require("module");
const path = require("path");

const sharp = require("sharp");
const ts = require("typescript");

const projectRoot = path.resolve(__dirname, "..");
const outputRoot = path.join(projectRoot, "public", "assets", "og");
const width = 1200;
const height = 630;

const originalResolveFilename = Module._resolveFilename;

Module._resolveFilename = function resolveFilename(
  request,
  parent,
  isMain,
  options,
) {
  if (request.startsWith("@/")) {
    return originalResolveFilename.call(
      this,
      path.join(projectRoot, request.slice(2)),
      parent,
      isMain,
      options,
    );
  }

  return originalResolveFilename.call(this, request, parent, isMain, options);
};

require.extensions[".ts"] = function compileTypeScript(module, filename) {
  const source = fs.readFileSync(filename, "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: {
      esModuleInterop: true,
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
    fileName: filename,
  });

  module._compile(output.outputText, filename);
};

const { getAllBuilds } = require("../data/builds.ts");
const { getBuildSocialDescription } = require("../lib/metadata.ts");
const { siteConfig } = require("../config/site.ts");

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function wrapText(text, maxLineLength, maxLines) {
  const words = String(text).replace(/\s+/g, " ").trim().split(" ");
  const lines = [];
  let currentLine = "";

  for (const word of words) {
    const nextLine = currentLine ? `${currentLine} ${word}` : word;

    if (nextLine.length <= maxLineLength) {
      currentLine = nextLine;
      continue;
    }

    if (currentLine) {
      lines.push(currentLine);
    }

    currentLine = word;

    if (lines.length === maxLines) {
      break;
    }
  }

  if (currentLine && lines.length < maxLines) {
    lines.push(currentLine);
  }

  if (lines.length === maxLines && words.join(" ").length > lines.join(" ").length) {
    lines[maxLines - 1] = `${lines[maxLines - 1].replace(/[.,;:!?-]*$/, "")}...`;
  }

  return lines;
}

function tspans(lines, x, lineHeight) {
  return lines
    .map((line, index) => {
      const dy = index === 0 ? 0 : lineHeight;

      return `<tspan x="${x}" dy="${dy}">${escapeXml(line)}</tspan>`;
    })
    .join("");
}

function createOverlaySvg({
  eyebrow,
  title,
  description,
  cta,
  titleMaxLineLength = 22,
}) {
  const titleLines = wrapText(title, titleMaxLineLength, 3);
  const descriptionLines = wrapText(description, 44, 4);

  return Buffer.from(`
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="shade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#080806" stop-opacity="0.96"/>
      <stop offset="0.55" stop-color="#080806" stop-opacity="0.88"/>
      <stop offset="1" stop-color="#080806" stop-opacity="0.16"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#shade)"/>
  <rect x="0" y="0" width="12" height="${height}" fill="#f7c948"/>
  <text x="72" y="96" fill="#f7c948" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="700" letter-spacing="3">${escapeXml(eyebrow)}</text>
  <text x="72" y="182" fill="#f6f2df" font-family="Arial, Helvetica, sans-serif" font-size="72" font-weight="800">${tspans(titleLines, 72, 78)}</text>
  <text x="72" y="430" fill="#e8e5d8" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="500">${tspans(descriptionLines, 72, 42)}</text>
  <rect x="72" y="532" width="250" height="58" rx="10" fill="#f7c948"/>
  <text x="100" y="570" fill="#10100c" font-family="Arial, Helvetica, sans-serif" font-size="29" font-weight="800">${escapeXml(cta)}</text>
  <text x="365" y="570" fill="#d8d2bd" font-family="Arial, Helvetica, sans-serif" font-size="29" font-weight="700">helldads.org</text>
</svg>`);
}

async function buildCard({
  sourceImage,
  destination,
  eyebrow,
  title,
  description,
  cta,
  titleMaxLineLength,
}) {
  const background = await sharp(sourceImage)
    .resize(width, height, { fit: "cover" })
    .blur(10)
    .modulate({ brightness: 0.58, saturation: 0.8 })
    .toBuffer();

  const foreground = await sharp(sourceImage)
    .resize(560, height, { fit: "cover", position: "center" })
    .toBuffer();

  const overlay = createOverlaySvg({
    eyebrow,
    title,
    description,
    cta,
    titleMaxLineLength,
  });

  await sharp(background)
    .composite([
      { input: foreground, left: 640, top: 0 },
      { input: overlay, left: 0, top: 0 },
    ])
    .webp({ effort: 5, quality: 88 })
    .toFile(destination);
}

async function main() {
  fs.rmSync(outputRoot, { force: true, recursive: true });
  fs.mkdirSync(path.join(outputRoot, "builds"), { recursive: true });

  await buildCard({
    sourceImage: path.join(projectRoot, "public", "assets", "join-the-helldads.webp"),
    destination: path.join(outputRoot, "helldads.webp"),
    eyebrow: "HELLDADS",
    title: "HellDads",
    description: siteConfig.shortDescription,
    cta: "Enlist today!",
    titleMaxLineLength: 18,
  });

  for (const build of getAllBuilds()) {
    if (!build.image) {
      continue;
    }

    await buildCard({
      sourceImage: path.join(projectRoot, "public", build.image),
      destination: path.join(outputRoot, "builds", `${build.slug}.webp`),
      eyebrow: "HELLDADS BUILD",
      title: build.title,
      description: getBuildSocialDescription(build),
      cta: "Watch it now!",
    });
  }

  console.log(`Generated Open Graph images in ${path.relative(projectRoot, outputRoot)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
