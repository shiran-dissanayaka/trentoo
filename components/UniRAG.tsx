import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { uniragSteps } from "@/lib/content";

export function UniRAG() {
  return (
    <Section id="unirag" aria-labelledby="unirag-title">
      <Container>
        <Reveal>
          <div className="product-panel grid grid-cols-1 items-center gap-8 rounded-[20px] border border-line p-8 md:grid-cols-[1.1fr_1fr] md:gap-11 md:p-[46px]">
            <div>
              <span className="eyebrow">Trentoo product</span>
              <h2
                id="unirag-title"
                className="mt-4 mb-3.5 flex items-center gap-3 font-display text-[30px] font-bold tracking-[-0.02em]"
              >
                UniRAG <span className="badge">in development</span>
              </h2>
              <p className="mb-[22px] text-[16px] text-muted">
                UniRAG turns your own study material into an instant tutor.
                Upload your lecture notes, past papers, and syllabus, ask a
                question in plain language, and get a direct answer with the
                exact page and source it came from — so you can trust it and go
                check.
              </p>
              <span className="font-mono text-[13px] text-muted-dim">
                Built for students tired of scrolling PDFs the night before an
                exam.
              </span>
            </div>

            {/* Steps and connectors are flat children of .flow so the
                staggered nth-child reveal ordering works. */}
            <div
              className="flow"
              aria-label="How UniRAG works: upload, then ask, then answer"
            >
              {uniragSteps.flatMap((step, i) => {
                const nodes = [
                  <div key={step.n} className="flow-step">
                    <span className="flow-n">{step.n}</span>
                    <span className="flow-t">
                      <b>{step.title}</b> — {step.detail}
                    </span>
                  </div>,
                ];
                if (i < uniragSteps.length - 1) {
                  nodes.push(
                    <div key={`${step.n}-line`} className="flow-line" aria-hidden />,
                  );
                }
                return nodes;
              })}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
