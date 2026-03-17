import { Reveal } from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 md:px-12">
      {/* page index */}
      <Reveal>
        <span className="font-mono text-[10px] tracking-[2px] text-ghost block mb-20 md:mb-28">
          002 — About
        </span>
      </Reveal>

      {/* main grid — intentionally asymmetric */}
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {/* photo — large, offset */}
        <Reveal className="col-span-12 md:col-span-5 md:col-start-1">
          <div className="photo-frame aspect-[3/4] w-full relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-[10px] tracking-[2px] uppercase text-ghost">
                Your photo here
              </span>
            </div>
          </div>
          {/* photo caption */}
          <div className="mt-3 flex justify-between items-center">
            <span className="font-mono text-[9px] tracking-[1.5px] text-ghost uppercase">
              Fig. 01
            </span>
            <span className="font-mono text-[9px] tracking-[1.5px] text-ghost">
              SF, 2026
            </span>
          </div>
        </Reveal>

        {/* text — positioned low, right side */}
        <div className="col-span-12 md:col-span-4 md:col-start-8 flex flex-col justify-end mt-12 md:mt-0">
          <Reveal delay={0.2}>
            <div className="w-6 h-px bg-accent mb-10" />
          </Reveal>

          <Reveal delay={0.3}>
            <h1 className="font-display text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.02em] mb-8">
              Soohyung{" "}
              <em className="italic">Lee</em>
            </h1>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="text-[14px] font-light text-mid leading-[2] mb-8">
              Placeholder. A few spare lines about yourself — 
              who you are, what occupies your mind, where you 
              exist. Say only what feels true. Leave the rest 
              to interpretation.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="space-y-4 mb-10">
              <InfoRow label="Based" value="San Francisco, CA" />
              <InfoRow label="Contact" value="hello@soohyungl.com" href="mailto:hello@soohyungl.com" />
            </div>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="h-px bg-rule" />
          </Reveal>
        </div>
      </div>

      {/* bottom pull quote / statement — optional, large */}
      <Reveal className="mt-24 md:mt-36">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-8 md:col-start-4">
            <p className="font-display italic text-[clamp(24px,3.5vw,42px)] leading-[1.3] tracking-[-0.01em] text-ghost">
              &ldquo;Placeholder — something you believe in, 
              or a sentence that captures how you see the world.&rdquo;
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function InfoRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-mono text-[10px] tracking-[2px] uppercase text-ghost w-16 shrink-0">
        {label}
      </span>
      {href ? (
        <a
          href={href}
          className="text-[13px] font-light text-ink no-underline hover:text-accent transition-colors duration-500"
        >
          {value}
        </a>
      ) : (
        <span className="text-[13px] font-light text-ink">{value}</span>
      )}
    </div>
  );
}
