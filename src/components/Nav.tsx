"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
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
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-7 flex justify-between items-center transition-all duration-500 ${
        scrolled ? "nav-scrolled" : ""
      }`}
    >
      <Link
        href="/"
        className="font-mono text-[11px] font-light tracking-[3px] uppercase text-ink no-underline hover:text-accent transition-colors duration-500"
      >
        Soohyung Lee
      </Link>

      <ul className="flex gap-10 list-none">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`font-mono text-[11px] font-light tracking-[2px] uppercase no-underline transition-colors duration-500 ${
                pathname === href
                  ? "text-accent"
                  : "text-mid hover:text-ink"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
