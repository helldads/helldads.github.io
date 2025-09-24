// Formats helper library
export const numberFormatCompact = (
  n: number,
  locale = "en-US",
  maxFrac = 1,
  threshold = 1000,
  toLower = true,
) => {
  const abs = Math.abs(n);

  // Below threshold → regular formatted number (with grouping)
  if (abs < threshold) {
    return new Intl.NumberFormat(locale).format(n);
  }

  // At/above threshold → compact (e.g. 10.5K)
  const out = new Intl.NumberFormat(locale, {
    notation: "compact",
    maximumFractionDigits: maxFrac,
  }).format(n);

  return toLower ? out.toLowerCase() : out;
};
