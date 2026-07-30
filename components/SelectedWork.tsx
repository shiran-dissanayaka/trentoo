import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { workItems } from "@/lib/content";

export function SelectedWork() {
  return (
    <Section id="work" aria-labelledby="work-title">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Systems already running"
            titleId="work-title"
            description="A sample of what we've built — described by type. Full case studies on request."
          />
        </Reveal>

        <div className="mt-11 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {workItems.map((w, i) => (
            <Reveal key={w.title} index={i} className="h-full">
              <article className="card card--indigo flex h-full flex-col p-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted-dim">
                  {w.kicker}
                </span>
                <h3 className="mt-3 mb-[9px] font-display text-[17.5px] font-semibold leading-[1.25]">
                  {w.title}
                </h3>
                <p className="text-[14px] text-muted">{w.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {w.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-[5px] border border-line px-2 py-[3px] font-mono text-[10.5px] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
