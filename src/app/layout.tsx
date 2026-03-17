import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: {
    default: "Soohyung Lee",
    template: "%s — Soohyung Lee",
  },
  description: "soohyungl.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Outfit:wght@100;200;300;400;500&family=JetBrains+Mono:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <main className="animate-page-in">{children}</main>

        {/* colophon-style footer — print-influenced */}
        <footer className="mx-6 md:mx-12 border-t border-rule">
          <div className="py-8 flex justify-between items-center">
            <span className="font-mono text-[10px] tracking-[1px] text-ghost">
              SL / 2026
            </span>
            <span className="font-mono text-[10px] tracking-[1px] text-ghost">
              37.7749° N, 122.4194° W
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
