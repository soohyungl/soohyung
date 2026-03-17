import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "About" };

const skills = [
  "Placeholder Skill",
  "Placeholder Skill",
  "Placeholder Skill",
  "Placeholder Skill",
  "Placeholder Skill",
  "Placeholder Skill",
  "Placeholder Skill",
  "Placeholder Skill",
];

export default function About() {
  return (
    <>
      {/* ─── HEADER ─── */}
      <section className="pt-36 md:pt-52 pb-16 md:pb-20 px-6 md:px-12 relative">
        <span className="kr-deco absolute top-32 md:top-40 right-6 md:right-12 text-[clamp(48px,8vw,120px)] leading-none">
          자기소개
        </span>
        <h1 className="text-display text-[clamp(56px,9vw,130px)] tracking-tighter">
          About
          <em className="block ml-6 md:ml-16 lg:ml-28 italic text-warm">me</em>
        </h1>
      </section>

      <div className="mx-6 md:mx-12 hairline" />

      {/* ─── CONTENT ─── */}
      <section className="px-6 md:px-12 pt-16 md:pt-20 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 md:gap-20 max-w-[1100px]">
        <Reveal>
          <aside className="flex flex-col gap-10 md:gap-12 pt-2">
            <SidebarBlock label="Location" value="San Francisco, CA" kr="샌프란시스코" />
            <SidebarBlock label="Role" value="Placeholder Role Title" />
            <SidebarBlock label="Focus" value="Placeholder focus area" />
          </aside>
        </Reveal>

        <div className="flex flex-col gap-8">
          <Reveal delay={0.1}>
            <p className="text-base font-light leading-relaxed text-grey-1">
              Placeholder paragraph about who you are. Write naturally — where
              you&apos;re from, how you got here, what your day-to-day looks like.
              This should feel personal without being overly formal. Two to three
              sentences that give a visitor a real sense of you.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base font-light leading-relaxed text-grey-1">
              A second paragraph that goes deeper. What motivates you
              professionally? What kinds of problems do you enjoy? What&apos;s your
              approach to work? This is the space to be specific about what makes
              your perspective unique.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-base font-light leading-relaxed text-grey-1">
              A third paragraph, optional. Could cover your broader interests,
              what you&apos;re currently thinking about, or where you see yourself
              heading. Keep it honest and concise.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section className="px-6 md:px-12 py-20 md:py-24 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-20 max-w-[1100px]">
        <Reveal>
          <span className="text-[11px] font-normal tracking-[3px] uppercase text-grey-1 pt-1.5">
            Capabilities
          </span>
        </Reveal>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <span className="text-sm font-light px-6 py-2.5 border border-grey-2 hover:bg-ink hover:text-paper hover:border-ink transition-all duration-400 cursor-default">
                {skill}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <Reveal className="py-20 md:py-28 flex flex-col items-center text-center gap-8 px-6">
        <div className="hairline-short" />
        <p className="text-display italic text-[clamp(32px,5vw,56px)] text-ink">
          Interested in working together?
        </p>
        <a
          href="mailto:hello@soohyungl.com"
          className="text-sm font-normal tracking-[2px] uppercase text-ink no-underline pb-1 border-b-[1.5px] border-warm hover:text-warm transition-colors"
        >
          Get in touch
        </a>
      </Reveal>
    </>
  );
}

function SidebarBlock({
  label,
  value,
  kr,
}: {
  label: string;
  value: string;
  kr?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[11px] font-normal tracking-[3px] uppercase text-grey-1">
        {label}
      </span>
      <span className="text-display text-lg text-ink leading-relaxed">
        {value}
      </span>
      {kr && <span className="kr-deco text-xs mt-0.5">{kr}</span>}
    </div>
  );
}
