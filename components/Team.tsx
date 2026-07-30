import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { SocialIcon } from "@/components/SocialIcon";
import { team } from "@/lib/content";
import { cn } from "@/lib/cn";

// Photos live in /public/team (see each member's `photo` in lib/content.ts).
// They're shown in a circular frame, so roughly-square images look best.

const iconBase =
  "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line transition-colors";

function MemberLink({
  href,
  label,
  external,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: ReactNode;
}) {
  // "#" (or empty) = not-yet-filled placeholder → dimmed, non-clickable.
  if (!href || href === "#") {
    return (
      <span
        className={cn(iconBase, "cursor-default text-muted-dim opacity-40")}
        role="img"
        aria-label={`${label} (coming soon)`}
        title="Link coming soon"
      >
        {children}
      </span>
    );
  }
  return (
    <a
      href={href}
      aria-label={label}
      className={cn(iconBase, "text-muted hover:border-violet hover:text-paper")}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
    >
      {children}
    </a>
  );
}

export function Team() {
  return (
    <Section id="team" aria-labelledby="team-title">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="The team"
            title="The people behind Trentoo"
            titleId="team-title"
            description="A small, senior team that designs, builds, and ships — you work directly with the people writing the code."
          />
        </Reveal>

        <ul className="mt-11 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => {
            const first = m.name.split(" ")[0];
            return (
              <Reveal key={m.name} index={i} as="li" className="h-full">
                <article className="card flex h-full flex-col items-center p-7 text-center">
                  <span className="mb-4 inline-block rounded-full bg-[linear-gradient(135deg,var(--color-g1),var(--color-g2)_55%,var(--color-g3))] p-[2px]">
                    <span className="block rounded-full bg-base p-[3px]">
                      <Image
                        src={m.photo}
                        alt={m.name}
                        width={84}
                        height={84}
                        className="h-[84px] w-[84px] rounded-full object-cover"
                      />
                    </span>
                  </span>

                  <h3 className="font-display text-[18px] font-semibold tracking-[-0.01em]">
                    {m.name}
                  </h3>
                  <p className="mt-1 font-mono text-[11.5px] uppercase tracking-[0.12em] text-muted-dim">
                    {m.role}
                  </p>
                  <p className="mt-3 text-[14px] text-muted">{m.bio}</p>

                  <div className="mt-5 flex items-center gap-2.5">
                    <MemberLink
                      href={m.linkedin}
                      label={`${first} on LinkedIn`}
                      external
                    >
                      <SocialIcon name="linkedin" />
                    </MemberLink>
                    <MemberLink
                      href={m.github}
                      label={`${first} on GitHub`}
                      external
                    >
                      <SocialIcon name="github" />
                    </MemberLink>
                    <MemberLink href={`mailto:${m.email}`} label={`Email ${first}`}>
                      <SocialIcon name="mail" />
                    </MemberLink>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
