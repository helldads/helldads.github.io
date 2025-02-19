import { title } from "@/components/primitives";

import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { Divider } from "@heroui/divider";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { HeartFilledIcon } from "@/components/icons";

export default function LegalPage() {
  return (
    <div>
      <h1 className={title()}>
        HellDads Community Website - Legal Information
      </h1>

      <h2 className="text-xl font-semibold mt-6">
        1. Legal Notice (Impressum)
      </h2>
      <p>
        This website is a non-commercial fan project maintained by volunteers of
        the HellDads gaming community. It is hosted on GitHub Pages and is not
        affiliated with Arrowhead Game Studios or Sony Interactive
        Entertainment.
      </p>

      <h3 className="text-lg font-semibold mt-4">Contact</h3>
      <p>
        For inquiries, please reach out via email at{" "}
        <Link isExternal showAnchorIcon href="mailto:patres.inferni@gmail.com">
          patres.inferni@gmail.com
        </Link>{" "}
        or contact the moderators of the{" "}
        <Link showAnchorIcon href="https://www.reddit.com/r/HellDads">
          r/HellDads
        </Link>{" "}
        subreddit on Reddit.
      </p>

      <h3 className="text-lg font-semibold mt-4">Hosting Provider</h3>
      <p>
        <strong>GitHub, Inc.</strong>
        <br />
        88 Colin P. Kelly Jr. Street
        <br />
        San Francisco, CA 94107, USA
      </p>

      <Divider className="my-4" />

      <h2 className="text-xl font-semibold">2. Privacy Policy</h2>

      <h3 className="text-lg font-semibold mt-4">Data Collection</h3>
      <p>
        This website does not actively collect personal data. However, GitHub
        Pages may log IP addresses and technical details for security and
        operational purposes. Additionally, we use Google Analytics to gain
        insights into our audience, with anonymised tracking in compliance with
        GDPR.
      </p>

      <h3 className="text-lg font-semibold mt-4">Data Usage</h3>
      <p>
        All automatically collected data is used solely for website
        functionality and security. We do not track visitors, sell data, or
        display targeted advertisements.
      </p>

      <h3 className="text-lg font-semibold mt-4">Third-Party Services</h3>
      <p>
        This website may display content and provide links to third-party
        platforms, including <strong>Reddit, Discord, and YouTube</strong>.
        These services process data according to their own privacy policies.
      </p>

      <h3 className="text-lg font-semibold mt-4">User Rights</h3>
      <p>
        If you have concerns about data processing, you may contact{" "}
        <Link isExternal showAnchorIcon href="mailto:patres.inferni@gmail.com">
          patres.inferni@gmail.com
        </Link>{" "}
        or the{" "}
        <Link showAnchorIcon href="https://www.reddit.com/r/HellDads">
          r/HellDads
        </Link>{" "}
        subreddit moderators.
      </p>

      <Divider className="my-4" />

      <h2 className="text-xl font-semibold">3. Terms of Use</h2>
      <ul className="list-disc pl-6">
        <li>
          This website is provided <strong>&quot;as is&quot;</strong>, without
          warranties of any kind.
        </li>
        <li>
          The community and moderators are not liable for user-generated content
          on third-party platforms linked from this website.
        </li>
        <li>
          Any inappropriate content reported to us will be reviewed and may be
          removed at our discretion.
        </li>
        <li>
          By using this site, you acknowledge that it is an{" "}
          <strong>unofficial fan project</strong> with no formal affiliation.
        </li>
        <li>
          All content is voluntarily provided by the community and respects the
          rights of original creators.
        </li>
        <li>
          We do not collect personal information; all communication is handled
          through our social media platforms.
        </li>
        <li>
          Any conflicts should be reported via email or the related platform.
        </li>
      </ul>

      <Divider className="my-4" />

      <h2 className="text-xl font-semibold">
        4. Copyright & Trademark Disclaimer
      </h2>
      <ul className="list-disc pl-6">
        <li>
          &quot;Helldivers 2&quot; and related assets are the property of{" "}
          <strong>
            Arrowhead Game Studios and Sony Interactive Entertainment
          </strong>
          .
        </li>

        <li>
          This fan website does not claim ownership of these trademarks and
          operates under <strong>fair use principles</strong>.
        </li>
        <li>
          If any copyright holders wish for specific content to be removed,
          please contact{" "}
          <Link
            isExternal
            showAnchorIcon
            href="mailto:patres.inferni@gmail.com"
          >
            patres.inferni@gmail.com
          </Link>
          .
        </li>
      </ul>

      <Divider className="my-4" />

      <h2 className="text-xl font-semibold">
        5. License for Community-Created Content &amp; Media
      </h2>
      <p>
        All content, images and media created by the HellDads community, unless
        stated otherwise, are licensed under the:
      </p>
      <p>
        <strong>
          <Link
            isExternal
            showAnchorIcon
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          >
            Creative Commons Attribution-NonCommercial-ShareAlike (CC BY-NC-SA)
          </Link>
        </strong>
      </p>
      <p>
        This means you are free to share and adapt the material as long as you
        provide proper attribution, do not use it for commercial purposes, and
        distribute any modified content under the same license.
      </p>
      <div className="py-6">
        <Link
          isExternal
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        >
          <Image height={40} src="/assets/cc-by-nc-sa.png" />
        </Link>
      </div>

      <p>
        For inquiries regarding media usage, please contact{" "}
        <Link isExternal showAnchorIcon href="mailto:patres.inferni@gmail.com">
          patres.inferni@gmail.com
        </Link>
        .
      </p>

      <h3 className="text-lg font-semibold mt-4">Attributions</h3>

      <Card className="max-w-[320px]">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src="/assets/djchechin.webp"
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                Chechin
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                u/djchechin
              </h5>
            </div>
          </div>
          <Button
            isExternal
            showAnchorIcon
            as={Link}
            color="primary"
            radius="full"
            size="sm"
            variant="solid"
            href="https://www.reddit.com/user/djchechin/"
          >
            Open Profile
          </Button>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400">
          <p>
            Special thanks to Chechin, the artist behind our community logo and
            many other assets that enrich the Helldivers community.{" "}
            <HeartFilledIcon className="inline" />
          </p>
          <ul>
            <li>
              <Link href="/assets/djchechin.webp">djchechin.webp</Link>
            </li>
            <li>
              <Link href="/assets/emoji-helldad.png">emoji-helldad.png</Link>
            </li>
            <li>
              <Link href="/assets/emoji-junior-cadet.webp">
                emoji-junior-cadet.webp
              </Link>
            </li>
            <li>
              <Link href="/assets/emoji-triplets.webp">
                emoji-triplets.webp
              </Link>
            </li>
            <li>
              <Link href="/assets/emoji-twins.webp">emoji-twins.webp</Link>
            </li>
            <li>
              <Link href="/assets/freedom-alliance-logo.webp">
                freedom-alliance-logo.webp
              </Link>
            </li>
            <li>
              <Link href="/assets/freedomalliance-logo.webp">
                freedomalliance-logo.webp
              </Link>
            </li>
            <li>
              <Link href="/assets/helldads-logo-150x150.png">
                helldads-logo-150x150.png
              </Link>
            </li>
            <li>
              <Link href="/assets/helldads-logo.svg">helldads-logo.svg</Link>
            </li>
            <li>
              <Link href="/assets/join-the-helldads.webp">
                join-the-helldads.webp
              </Link>
            </li>
          </ul>
        </CardBody>
        <CardFooter className="gap-3">
          <div className="flex">
            <Link
              isExternal
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            >
              <Image height={32} src="/assets/cc-by-nc-sa.png" />
            </Link>
          </div>
          <div className="flex">
            <Button
              isExternal
              as={Link}
              className="bg-white text-black"
              href="https://buymeacoffee.com/chechin"
              startContent={
                <Image height={32} src="/assets/buy-me-a-coffee-logo.svg" />
              }
              variant="bordered"
            >
              Buy me a coffee
            </Button>
          </div>
        </CardFooter>
      </Card>

      <p className="italic mt-6 text-center">
        This document is subject to updates as necessary to reflect changes in
        policies or legal requirements.
      </p>
    </div>
  );
}
