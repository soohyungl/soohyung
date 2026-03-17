"use client";

import { useEffect, useState } from "react";

export function Counter() {
  const [count, setCount] = useState("004827");

  useEffect(() => {
    // randomize slightly on mount for fun
    const base = 4827 + Math.floor(Math.random() * 12);
    setCount(String(base).padStart(6, "0"));
  }, []);

  return (
    <span className="font-mono text-[12px] inline-flex">
      {count.split("").map((digit, i) => (
        <span
          key={i}
          className="inline-block w-[14px] h-[20px] leading-[20px] text-center bg-black text-green-400 border border-grey"
        >
          {digit}
        </span>
      ))}
    </span>
  );
}
