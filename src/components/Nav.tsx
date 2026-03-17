"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-8 flex justify-between items-center transition-all duration-400 ${
        scrolled ? "nav-scrolled" : ""
      }`}
    >
      <Link
        href="/"
        className="text-korean font-medium text-base tracking-tight text-ink no-underline hover:opacity-60 transition-opacity"
      >
        이수형
      </Link>

      <ul className="flex gap-6 md:gap-10 list-none">
        {links.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                className={`relative text-xs md:text-[13px] font-light tracking-[1.5px] uppercase text-ink no-underline pb-0.5
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-px after:bg-warm after:transition-all after:duration-400 after:ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
                `}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
