import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "soohyungl.com",
    template: "%s — soohyungl.com",
  },
  description: "The personal homepage of Soohyung Lee.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-xl mx-auto px-6 py-10">
          {children}
        </div>
      </body>
    </html>
  );
}
