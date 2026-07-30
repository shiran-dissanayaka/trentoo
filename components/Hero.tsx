import { Container } from "@/components/Container";
import { SignalCard } from "@/components/SignalCard";

export function Hero() {
  return (
    <section
      id="top"
      className="relative"
      aria-labelledby="hero-title"
    >
      <Container className="grid grid-cols-1 items-center gap-10 pt-[64px] pb-[56px] md:grid-cols-[1.15fr_1fr] md:gap-[56px] md:pt-[96px] md:pb-[84px]">
        <div>
          <span
            className="eyebrow hero-anim"
            style={{ animationDelay: "0.05s" }}
          >
            Software · Systems · AI
          </span>
          <h1
            id="hero-title"
            className="hero-anim my-[22px] font-display text-[clamp(38px,6vw,64px)] font-semibold leading-[1.02] tracking-[-0.02em]"
            style={{ animationDelay: "0.16s" }}
          >
            We turn ideas into{" "}
            <span className="brand-gradient-text">working systems</span>.
          </h1>
          <p
            className="hero-anim mb-[34px] max-w-[32rem] text-[18px] text-muted"
            style={{ animationDelay: "0.27s" }}
          >
            Trentoo is a software and web studio building fast, reliable
            products — from full-stack web apps to AI tools that answer real
            questions from your own data. Based in Sri Lanka, working anywhere.
          </p>
          <div
            className="hero-anim flex flex-wrap gap-3.5"
            style={{ animationDelay: "0.38s" }}
          >
            <a href="#contact" className="btn btn-primary">
              Start a project
            </a>
            <a href="#work" className="btn btn-ghost">
              See the work
            </a>
          </div>
        </div>

        <div className="hero-anim" style={{ animationDelay: "0.5s" }}>
          <SignalCard />
        </div>
      </Container>
    </section>
  );
}
