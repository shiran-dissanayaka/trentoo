"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/lib/content";
import { useActiveSection } from "@/lib/useActiveSection";
import { cn } from "@/lib/cn";

// Stable list of section ids to scroll-spy (all nav links + the contact CTA).
const SECTION_IDS = [...navLinks.map((l) => l.href.slice(1)), "contact"];

const GRADIENT =
  "linear-gradient(90deg, var(--color-g1), var(--color-g2) 55%, var(--color-g3))";

export function Nav() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const active = useActiveSection(SECTION_IDS);

  // ── Sliding gradient underline under the active desktop link ──
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false });

  const measure = useCallback(() => {
    const el = active ? linkRefs.current[active] : null;
    // offsetParent is null when the desktop nav is hidden (mobile) → hide it.
    if (el && el.offsetParent) {
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth, visible: true });
    } else {
      setIndicator((s) => ({ ...s, visible: false }));
    }
  }, [active]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    // Re-measure once fonts load (link widths can shift).
    document.fonts?.ready.then(measure).catch(() => {});
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  // Focus trap + Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const menu = menuRef.current;
    if (!menu) return;

    const focusables = Array.from(
      menu.querySelectorAll<HTMLElement>("a, button"),
    );
    focusables[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on resize up to desktop.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const contactActive = active === "contact";

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-base/70 backdrop-blur-[14px]">
      <Container>
        <nav
          className="flex h-[66px] items-center justify-between"
          aria-label="Primary"
        >
          <a
            href="#top"
            className="logo-link flex items-center gap-2.5 rounded-lg font-display text-xl font-bold tracking-[-0.01em]"
            aria-label="Trentoo — home"
          >
            <Logo size={28} />
            <span>Trentoo</span>
          </a>

          {/* Desktop links */}
          <div className="relative hidden items-center gap-[30px] min-[861px]:flex">
            {navLinks.map((l) => {
              const id = l.href.slice(1);
              const isActive = active === id;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  ref={(el) => {
                    linkRefs.current[id] = el;
                  }}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "text-[14.5px] transition-colors hover:text-paper",
                    isActive ? "text-paper" : "text-muted",
                  )}
                >
                  {l.label}
                </a>
              );
            })}
            <a
              href="#contact"
              aria-current={contactActive ? "true" : undefined}
              className={cn(
                "rounded-[9px] border px-4 py-[9px] font-mono text-[13px] text-paper transition-colors",
                contactActive
                  ? "border-violet bg-violet/12"
                  : "border-line hover:border-violet hover:bg-violet/8",
              )}
            >
              Start a project
            </a>

            {/* Sliding gradient underline */}
            <span
              aria-hidden
              className="nav-underline pointer-events-none absolute -bottom-2 h-[2px] rounded-full"
              style={{
                left: indicator.left,
                width: indicator.width,
                opacity: indicator.visible ? 1 : 0,
                background: GRADIENT,
              }}
            />
          </div>

          {/* Hamburger (mobile) */}
          <button
            ref={btnRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="relative h-11 w-11 rounded-[10px] border border-line bg-white/3 min-[861px]:hidden"
          >
            <span
              className={cn(
                "absolute left-[11px] right-[11px] h-0.5 rounded bg-paper transition-all duration-300",
                open ? "top-[21px] rotate-45" : "top-[15px]",
              )}
            />
            <span
              className={cn(
                "absolute left-[11px] right-[11px] top-[21px] h-0.5 rounded bg-paper transition-opacity duration-200",
                open ? "opacity-0" : "opacity-100",
              )}
            />
            <span
              className={cn(
                "absolute left-[11px] right-[11px] h-0.5 rounded bg-paper transition-all duration-300",
                open ? "top-[21px] -rotate-45" : "top-[27px]",
              )}
            />
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="border-b border-line bg-base/95 backdrop-blur-[14px] min-[861px]:hidden"
        >
          <Container className="flex flex-col gap-0.5 py-2 pb-4">
            {navLinks.map((l) => {
              const id = l.href.slice(1);
              const isActive = active === id;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative flex min-h-11 items-center rounded-lg px-3 py-3 text-[16px] text-paper transition-colors",
                    isActive ? "bg-white/5" : "hover:bg-white/4",
                  )}
                >
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-full"
                      style={{
                        background:
                          "linear-gradient(180deg, var(--color-g1), var(--color-g2) 55%, var(--color-g3))",
                      }}
                    />
                  )}
                  {l.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className={cn(
                "mt-2 flex min-h-11 items-center justify-center rounded-lg bg-paper px-2 py-3 font-display text-[16px] font-semibold text-[color:var(--color-base)]",
                contactActive && "ring-2 ring-violet ring-offset-2 ring-offset-base",
              )}
            >
              Start a project
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
