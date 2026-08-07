import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

const TITLE = "Privacy Policy — Trentoo";
const DESCRIPTION =
  "How Trentoo collects, uses, and protects your information on trentoo.com — what we receive when you get in touch, why we use it, and your choices.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/privacy" },
  openGraph: {
    type: "article",
    url: "/privacy",
    title: TITLE,
    description: DESCRIPTION,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

/** Human-readable last-updated date shown under the title. */
const LAST_UPDATED = "August 8, 2026";

export default function PrivacyPage() {
  const mailto = `mailto:${CONTACT_EMAIL}`;

  return (
    <Container as="article" className="max-w-[720px] py-[72px] md:py-[92px]">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 rounded font-mono text-[13px] text-muted transition-colors hover:text-paper"
      >
        <span aria-hidden>←</span> Back to home
      </Link>

      <h1 className="mt-6 font-display text-[clamp(32px,5vw,46px)] font-bold leading-[1.05] tracking-[-0.02em]">
        Privacy Policy
      </h1>
      <p className="mt-3 font-mono text-[13px] text-muted-dim">
        Last updated: {LAST_UPDATED}
      </p>

      <div className="legal mt-10">
        <p>
          {SITE_NAME}{" "}
          (&quot;we&quot;, &quot;us&quot;) builds software, web, and
          AI products and provides technical services. This policy explains what
          information we collect through trentoo.com, why we collect it, and what
          we do with it.
        </p>

        <h2>Who we are</h2>
        <p>
          {SITE_NAME} is a software and web studio based in Kandy, Sri Lanka. You
          can reach us at{" "}
          <a href={mailto}>{CONTACT_EMAIL}</a>.
        </p>

        <h2>What we collect</h2>
        <p>
          <strong>Information you give us.</strong> If you email us, we receive
          whatever you send — typically your name, email address, and the content
          of your message.
        </p>
        <p>
          <strong>Information collected automatically.</strong> Our hosting
          provider records standard technical information when you visit, such as
          your IP address, browser type, the pages you view, and the time of your
          visit. This is used to keep the site running securely and reliably.
        </p>

        <h2>Why we use it</h2>
        <p>
          We use this information to reply to your enquiry, to provide services
          you ask us for, and to keep the website secure and working properly. We
          do not use it for automated decision-making or profiling.
        </p>
        <p>
          If you give us feedback about our work, we use it internally to improve
          our services. We don&apos;t publish it, quote it, or identify you
          without asking your permission first.
        </p>

        <h2>What we don&apos;t do</h2>
        <p>
          We do not sell your personal information. We do not share it with third
          parties for their own marketing. We do not send marketing email to
          people who have only contacted us with a question.
        </p>

        <h2>Service providers</h2>
        <p>
          We use a small number of third-party services to run the site and our
          business, and your information may pass through them:
        </p>
        <ul>
          <li>
            <strong>Cloudflare</strong> — hosting, domain, and content delivery
            for trentoo.com
          </li>
          <li>
            <strong>Zoho Mail</strong> — our business email
          </li>
        </ul>
        <p>
          These providers process data on our behalf and are subject to their own
          privacy policies.
        </p>

        <h2>How long we keep it</h2>
        <p>
          We keep enquiry emails for as long as needed to handle your request and
          to maintain a record of our work together. Technical logs are kept for
          a short period for security and troubleshooting. If you would like us to
          delete information we hold about you, email{" "}
          <a href={mailto}>{CONTACT_EMAIL}</a> and we will do so where we are not
          required to keep it.
        </p>

        <h2>Cookies</h2>
        <p>
          This site does not use cookies for advertising or cross-site tracking.
          Our hosting provider may set essential cookies needed for security and
          performance.
        </p>

        <h2>Your choices</h2>
        <p>
          You can ask us what information we hold about you, ask us to correct it,
          or ask us to delete it. Email <a href={mailto}>{CONTACT_EMAIL}</a> and
          we will respond.
        </p>

        <h2>Children</h2>
        <p>
          This site is not directed at children under 13, and we do not knowingly
          collect their information.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          If we change this policy, we will update the date at the top of this
          page.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy: <a href={mailto}>{CONTACT_EMAIL}</a>
        </p>
      </div>
    </Container>
  );
}
