import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="min-h-screen flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-20 relative">
        {/* Korean watermark */}
        <span className="kr-deco absolute top-28 md:top-36 right-6 md:right-12 text-[80px] md:text-[clamp(80px,14vw,200px)] leading-none [writing-mode:vertical-rl] opacity-0 animate-[fade-kr_1.4s_cubic-bezier(0.22,1,0.36,1)_0.3s_forwards]">
          소개
        </span>

        <h1 className="text-display text-[clamp(52px,8vw,120px)] max-w-[900px] relative z-10 opacity-0 translate-y-8 animate-[hero-in_1s_cubic-bezier(0.22,1,0.36,1)_0.1s_forwards]">
          Soohyung <em className="italic text-warm">Lee</em>
        </h1>

        <div className="mt-10 flex items-center gap-6 opacity-0 animate-[hero-in_1s_cubic-bezier(0.22,1,0.36,1)_0.5s_forwards]">
          <div className="hairline-short" />
          <p className="text-[15px] font-light text-grey-1 max-w-xs leading-relaxed">
            Placeholder text about what you do. A sentence or two that gives
            visitors context.
          </p>
        </div>

        <style>{`
          @keyframes fade-kr { to { opacity: 1; } }
          @keyframes hero-in { to { opacity: 1; transform: translateY(0); } }
        `}</style>
      </section>

      {/* ─── BAND ─── */}
      <section className="px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-12 md:gap-16">
        <Reveal>
          <BandItem
            label="About"
            href="/about"
            heading="Who I am and what I care about"
            text="Placeholder paragraph. A brief teaser about your background that makes someone want to click through and learn more."
            kr="자기소개"
          />
        </Reveal>

        <div className="hidden md:block w-px bg-grey-2 min-h-[160px]" />

        <Reveal delay={0.2}>
          <BandItem
            label="Work"
            href="/work"
            heading="Things I've built and contributed to"
            text="Placeholder paragraph. A taste of the kind of work you do, enough to spark curiosity without giving everything away."
            kr="프로젝트"
          />
        </Reveal>
      </section>

      {/* ─── QUOTE ─── */}
      <Reveal className="py-20 md:py-28 flex flex-col items-center text-center gap-5 px-6">
        <div className="hairline-short" />
        <p className="text-display italic text-[clamp(24px,3.5vw,40px)] text-ink max-w-xl leading-snug">
          &ldquo;Placeholder for a quote, motto, or guiding thought that means
          something to you.&rdquo;
        </p>
        <span className="text-korean font-extralight text-sm text-grey-1">
          — 여기에 출처
        </span>
      </Reveal>
    </>
  );
}

function BandItem({
  label,
  href,
  heading,
  text,
  kr,
}: {
  label: string;
  href: string;
  heading: string;
  text: string;
  kr: string;
}) {
  return (
    <div className="flex flex-col gap-5">
      <span className="text-[11px] font-normal tracking-[3px] uppercase text-grey-1">
        {label}
      </span>
      <h2 className="text-display text-[clamp(28px,3.5vw,44px)]">
        <Link
          href={href}
          className="text-ink no-underline group/link inline-flex items-baseline gap-3"
        >
          {heading}
          <span className="text-warm text-[0.6em] opacity-0 -translate-x-2 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:opacity-100 group-hover/link:translate-x-0">
            →
          </span>
        </Link>
      </h2>
      <p className="text-[15px] font-light text-grey-1 leading-relaxed max-w-md">
        {text}
      </p>
      <span className="kr-deco text-[13px] mt-2">{kr}</span>
    </div>
  );
}
