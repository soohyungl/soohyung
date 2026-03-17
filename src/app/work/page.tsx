"use client";

import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Project Name",
    kr: "프로젝트 설명",
    desc: "Placeholder description. What this project was, what your role was, and what impact it had. Keep it to two or three sentences.",
    tags: ["Tag One", "Tag Two", "Tag Three"],
    color: "#C8553D",
  },
  {
    name: "Project Name",
    kr: "프로젝트 설명",
    desc: "Placeholder description. What this project was, what your role was, and what impact it had. Keep it to two or three sentences.",
    tags: ["Tag One", "Tag Two"],
    color: "#1B3DE5",
  },
  {
    name: "Project Name",
    kr: "프로젝트 설명",
    desc: "Placeholder description. What this project was, what your role was, and what impact it had. Keep it to two or three sentences.",
    tags: ["Tag One", "Tag Two", "Tag Three"],
    color: "#111",
  },
  {
    name: "Project Name",
    kr: "프로젝트 설명",
    desc: "Placeholder description. What this project was, what your role was, and what impact it had. Keep it to two or three sentences.",
    tags: ["Tag One", "Tag Two"],
    color: "#2D8F6F",
  },
];

export default function Work() {
  return (
    <>
      {/* ─── HEADER ─── */}
      <section className="pt-36 md:pt-52 pb-16 md:pb-20 px-6 md:px-12 relative">
        <span className="kr-deco absolute top-32 md:top-40 right-6 md:right-12 text-[clamp(48px,8vw,120px)] leading-none">
          프로젝트
        </span>
        <h1 className="text-display text-[clamp(56px,9vw,130px)] tracking-tighter">
          Selected
          <em className="block ml-6 md:ml-16 lg:ml-28 italic text-warm">
            work
          </em>
        </h1>
        <p className="mt-10 text-base font-light text-grey-1 leading-relaxed max-w-md">
          Placeholder text. A short intro to the kind of work you do and what
          these projects represent.
        </p>
      </section>

      <div className="mx-6 md:mx-12 hairline" />

      {/* ─── PROJECTS ─── */}
      <section className="px-6 md:px-12">
        {projects.map((project, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <ProjectRow index={i} {...project} />
          </Reveal>
        ))}
      </section>

      {/* ─── BOTTOM ─── */}
      <Reveal className="py-20 md:py-28 flex flex-col items-center text-center gap-6 px-6">
        <div className="hairline-short" />
        <p className="text-display italic text-[clamp(22px,3vw,36px)] text-grey-1 max-w-lg leading-snug">
          Placeholder — a closing thought about collaboration or what
          you&apos;re looking for next.
        </p>
        <a
          href="mailto:hello@soohyungl.com"
          className="text-sm font-normal tracking-[2px] uppercase text-ink no-underline pb-1 border-b-[1.5px] border-warm hover:text-warm transition-colors"
        >
          Let&apos;s talk
        </a>
      </Reveal>
    </>
  );
}

function ProjectRow({
  index,
  name,
  kr,
  desc,
  tags,
  color,
}: {
  index: number;
  name: string;
  kr: string;
  desc: string;
  tags: string[];
  color: string;
}) {
  const isLight = color === "#111" || color === "#1B3DE5";

  return (
    <motion.div
      className="group relative grid grid-cols-1 md:grid-cols-[100px_1fr] gap-2 md:gap-12 py-10 md:py-14 border-t border-grey-2 last:border-b cursor-default overflow-hidden"
      whileHover="hovered"
    >
      {/* color wash */}
      <motion.div
        className="absolute inset-0 -mx-6 md:-mx-12 z-0 pointer-events-none"
        style={{ backgroundColor: color }}
        variants={{
          hovered: { opacity: 1 },
        }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      <span
        className={`text-display text-sm italic opacity-40 pt-2 relative z-10 transition-colors duration-400 ${
          isLight ? "group-hover:text-paper" : "group-hover:text-ink"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="flex flex-col gap-4 relative z-10">
        <motion.h2
          className={`text-display text-[clamp(32px,4.5vw,64px)] tracking-tight leading-none transition-colors duration-400 ${
            isLight ? "group-hover:text-paper" : "group-hover:text-ink"
          }`}
          variants={{ hovered: { x: 12 } }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {name}
        </motion.h2>

        <span
          className={`text-korean font-extralight text-sm opacity-30 transition-all duration-400 ${
            isLight
              ? "group-hover:text-paper group-hover:opacity-50"
              : "group-hover:opacity-50"
          }`}
        >
          {kr}
        </span>

        <p
          className={`text-[15px] font-light leading-relaxed max-w-lg opacity-55 transition-all duration-400 ${
            isLight
              ? "group-hover:text-paper group-hover:opacity-80"
              : "group-hover:opacity-80"
          }`}
        >
          {desc}
        </p>

        <div className="flex gap-4 mt-2 flex-wrap">
          {tags.map((tag, i) => (
            <span
              key={i}
              className={`text-[11px] tracking-[2px] uppercase font-normal opacity-35 transition-all duration-400 ${
                isLight
                  ? "group-hover:text-paper group-hover:opacity-60"
                  : "group-hover:opacity-60"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
