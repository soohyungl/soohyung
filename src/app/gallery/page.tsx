import { Nav } from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Gallery" };

const photos = [
  { caption: "Placeholder caption" },
  { caption: "Placeholder caption" },
  { caption: "Placeholder caption" },
  { caption: "Placeholder caption" },
  { caption: "Placeholder caption" },
  { caption: "Placeholder caption" },
  { caption: "Placeholder caption" },
  { caption: "Placeholder caption" },
  { caption: "Placeholder caption" },
];

export default function Gallery() {
  return (
    <>
      <header className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Gallery</h1>
        <p className="text-grey text-sm italic">
          soohyungl.com/gallery
        </p>
      </header>

      <Nav />

      <hr />

      <div className="my-8">
        <p className="mb-6 text-[14px]">
          Some pictures. Click to enlarge.
          <br />
          <span className="text-grey text-[12px]">
            ({photos.length} images)
          </span>
        </p>

        <div className="grid grid-cols-3 gap-3">
          {photos.map((photo, i) => (
            <div key={i} className="group">
              <div className="aspect-square bg-light border border-grey flex items-center justify-center cursor-pointer hover:border-text transition-colors">
                <span className="font-mono text-[10px] text-grey group-hover:text-text transition-colors">
                  {String(i + 1).padStart(2, "0")}.jpg
                </span>
              </div>
              <p className="text-[10px] text-grey mt-1.5 leading-tight">
                {photo.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      <hr />

      <div className="my-8 text-[12px] text-grey">
        <p className="mb-2">
          All photos taken by me unless otherwise noted.
        </p>
        <p>
          Images are optimized for 56k modems. Please be patient.
        </p>
      </div>

      <hr />

      <footer className="text-[11px] text-grey mt-8">
        <p>
          <a href="/" className="underline">
            ← Back to home
          </a>
        </p>
      </footer>
    </>
  );
}
