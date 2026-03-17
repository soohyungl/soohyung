"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-between px-6 md:px-12 pt-32 pb-8 relative overflow-hidden">
      {/* index marker */}
      <motion.span
        className="font-mono text-[10px] tracking-[2px] text-ghost"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        001
      </motion.span>

      {/* main composition */}
      <div className="flex-1 flex flex-col justify-center -mt-16">
        {/* first name — massive, ultra light */}
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease }}
        >
          <motion.h1
            className="font-display font-normal text-[clamp(60px,14vw,200px)] leading-[0.88] tracking-[-0.04em]"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease }}
          >
            Soohyung
          </motion.h1>
        </motion.div>

        {/* thin rule cutting through */}
        <motion.div
          className="my-5 md:my-6 flex items-center gap-5"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
          style={{ transformOrigin: "left" }}
        >
          <div className="flex-1 h-px bg-rule" />
          <span className="font-mono text-[10px] tracking-[3px] text-ghost uppercase">
            Personal
          </span>
        </motion.div>

        {/* last name — italic, offset right */}
        <motion.div
          className="overflow-hidden ml-auto mr-0 md:mr-[10%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease }}
        >
          <motion.h1
            className="font-display italic font-normal text-[clamp(60px,14vw,200px)] leading-[0.88] tracking-[-0.04em]"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease }}
          >
            Lee
          </motion.h1>
        </motion.div>
      </div>

      {/* bottom bar — colophon details */}
      <motion.div
        className="flex justify-between items-end pt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <Link
          href="/about"
          className="group flex items-center gap-3 no-underline"
        >
          <span className="w-6 h-px bg-ghost group-hover:w-10 group-hover:bg-accent transition-all duration-500" />
          <span className="font-mono text-[10px] tracking-[2px] uppercase text-mid group-hover:text-accent transition-colors duration-500">
            Enter
          </span>
        </Link>

        <span className="font-mono text-[10px] tracking-[1px] text-ghost">
          Est. 1995
        </span>
      </motion.div>
    </section>
  );
}
