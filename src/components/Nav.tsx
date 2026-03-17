"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/gallery", label: "gallery" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="font-mono text-[12px] mb-10">
      <span className="text-grey">[ </span>
      {links.map(({ href, label }, i) => (
        <span key={href}>
          {pathname === href ? (
            <span className="text-text no-underline font-bold">{label}</span>
          ) : (
            <Link href={href} className="underline">
              {label}
            </Link>
          )}
          {i < links.length - 1 && (
            <span className="text-grey"> | </span>
          )}
        </span>
      ))}
      <span className="text-grey"> ]</span>
    </nav>
  );
}
