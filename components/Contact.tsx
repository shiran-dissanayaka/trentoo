import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { CONTACT_EMAIL, GITHUB_URL, LOCATION } from "@/lib/site";

export function Contact() {
  return (
    <Section id="contact" aria-labelledby="contact-title">
      <Container>
        <Reveal>
          <div className="rounded-[22px] border border-line bg-gradient-to-br from-surface to-surface-2 px-6 py-10 text-center sm:px-12 sm:py-14">
            <span className="eyebrow justify-center">Let&apos;s build</span>
            <h2
              id="contact-title"
              className="my-4 font-display text-[clamp(30px,4vw,44px)] font-semibold leading-[1.08] tracking-[-0.02em]"
            >
              Have something to build?
            </h2>
            <p className="mx-auto mb-[30px] max-w-[34rem] text-[17px] text-muted">
              Whether it&apos;s a web app, an internal tool, or an AI assistant
              — tell us what you need and we&apos;ll tell you honestly how
              we&apos;d approach it.
            </p>
            <div className="flex flex-wrap justify-center gap-3.5">
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-cta">
                Start a project
              </a>
              <a
                href={GITHUB_URL}
                className="btn btn-ghost"
                target="_blank"
                rel="noopener"
              >
                View GitHub
              </a>
            </div>
            <div className="mt-[34px] flex flex-wrap justify-center gap-x-[26px] gap-y-2 border-t border-line pt-[26px] font-mono text-[13px] text-muted">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="transition-colors hover:text-paper"
              >
                {CONTACT_EMAIL}
              </a>
              <span aria-hidden>·</span>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener"
                className="transition-colors hover:text-paper"
              >
                {GITHUB_URL.replace(/^https?:\/\//, "")}
              </a>
              <span aria-hidden>·</span>
              <span>{LOCATION}</span>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
