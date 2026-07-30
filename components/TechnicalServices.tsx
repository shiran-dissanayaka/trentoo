import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { technicalServices } from "@/lib/content";

/**
 * Local / on-site offering. Deliberately lower on the page and styled more
 * plainly than the premium studio services, so it reads as a separate,
 * everyday-support track rather than diluting the studio positioning.
 */
export function TechnicalServices() {
  return (
    <Section
      id="technical"
      aria-labelledby="technical-title"
      className="border-t border-line/70 bg-surface/30"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Local & on-site"
            title="Technical services"
            titleId="technical-title"
            description="Hands-on computer help for individuals and small offices — remote or on-site around Kandy. Practical, no-fuss, and fairly priced."
          />
        </Reveal>

        <ul className="mt-11 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          {technicalServices.map((t, i) => (
            <Reveal key={t.title} index={i} as="li" className="h-full">
              <div className="tech-card flex h-full items-start gap-3.5 rounded-card border border-line bg-surface-2/50 p-5">
                <div className="tech-ico flex h-9 w-9 flex-none items-center justify-center rounded-[9px] border border-line bg-base/40 text-muted">
                  <Icon name={t.icon} size={18} />
                </div>
                <div>
                  <h3 className="font-display text-[15.5px] font-semibold leading-snug">
                    {t.title}
                  </h3>
                  <p className="mt-1 text-[13.5px] text-muted-dim">
                    {t.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
