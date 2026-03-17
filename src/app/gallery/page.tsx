"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

const photos = [
  { aspect: "aspect-[4/5]", col: "col-span-12 md:col-span-5 md:col-start-1" },
  { aspect: "aspect-[3/2]", col: "col-span-12 md:col-span-4 md:col-start-7 md:mt-32" },
  { aspect: "aspect-[1/1]", col: "col-span-12 md:col-span-3 md:col-start-2 md:mt-[-40px]" },
  { aspect: "aspect-[2/3]", col: "col-span-12 md:col-span-4 md:col-start-6" },
  { aspect: "aspect-[16/9]", col: "col-span-12 md:col-span-7 md:col-start-4 md:mt-[-20px]" },
  { aspect: "aspect-[3/4]", col: "col-span-12 md:col-span-4 md:col-start-1" },
];

export default function Gallery() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 md:px-12">
      {/* page index */}
      <Reveal>
        <span className="font-mono text-[10px] tracking-[2px] text-ghost block mb-20 md:mb-28">
          003 — Gallery
        </span>
      </Reveal>

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {photos.map((photo, i) => (
          <Reveal
            key={i}
            delay={i * 0.08}
            className={`${photo.col} mt-6 md:mt-0`}
          >
            <motion.div
              className="group relative cursor-default"
              whileHover="hover"
            >
              <motion.div
                className={`photo-frame ${photo.aspect} w-full`}
                variants={{
                  hover: { scale: 0.98 },
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              {/* index label */}
              <div className="mt-2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-mono text-[9px] tracking-[1.5px] text-ghost">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[9px] tracking-[1.5px] text-ghost">
                  Placeholder
                </span>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>

      {/* bottom note */}
      <Reveal className="mt-24 md:mt-32">
        <div className="flex items-center gap-4">
          <div className="w-8 h-px bg-rule" />
          <span className="font-mono text-[10px] tracking-[2px] text-ghost uppercase">
            Ongoing
          </span>
        </div>
      </Reveal>
    </section>
  );
}
