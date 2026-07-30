import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { SITE_TAGLINE } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-4 border-t border-line py-[34px]">
      <Container className="flex flex-wrap items-center justify-between gap-4">
        <a
          href="#top"
          className="logo-link flex items-center gap-2.5 font-display text-[17px] font-bold"
          aria-label="Trentoo — home"
        >
          <Logo size={24} />
          <span>Trentoo</span>
        </a>
        <small className="font-mono text-[12px] text-muted-dim">
          © {year} Trentoo · {SITE_TAGLINE}
        </small>
      </Container>
    </footer>
  );
}
