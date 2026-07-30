import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { services } from "@/lib/content";
import { cn } from "@/lib/cn";

export function Services() {
  return (
    <Section id="services" aria-labelledby="services-title">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="One team across the whole stack"
            titleId="services-title"
            description="Most studios do one layer. Trentoo builds the interface, the backend, and the data and AI flowing through it — so your product holds together end to end."
          />
        </Reveal>

        <div className="mt-11 grid grid-cols-1 gap-[18px] md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} index={i} className="h-full">
              <article className="card flex h-full flex-col gap-[13px] p-7">
                <div className="flex items-start justify-between">
                  <div className="flex h-[42px] w-[42px] items-center justify-center rounded-[11px] border border-line bg-surface-2 text-violet">
                    <Icon name={s.icon} />
                  </div>
                  <span className={cn("tag", s.tag === "Core" && "tag--core")}>
                    {s.tag}
                  </span>
                </div>
                <h3 className="font-display text-[20px] font-semibold tracking-[-0.01em]">
                  {s.title}
                </h3>
                <p className="text-[15px] text-muted">{s.description}</p>
                <ul className="mt-0.5 flex flex-wrap gap-[7px]">
                  {s.stack.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-line px-[9px] py-1 font-mono text-[11.5px] text-muted-dim"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
