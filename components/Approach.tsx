import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { approachItems } from "@/lib/content";

export function Approach() {
  return (
    <Section id="approach" aria-labelledby="approach-title">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we work"
            title="Small, focused, engineer-led"
            titleId="approach-title"
          />
        </Reveal>

        <div className="mt-11 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {approachItems.map((a, i) => (
            <Reveal key={a.n} index={i} className="h-full">
              <article className="card flex h-full flex-col p-7">
                <span className="font-mono text-[13px] text-g2">{a.n}</span>
                <h3 className="mt-3 mb-[9px] font-display text-[19px] font-semibold">
                  {a.title}
                </h3>
                <p className="text-[15px] text-muted">{a.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
