import { Nav } from "@/components/Nav";
import { Counter } from "@/components/Counter";

export default function Home() {
  return (
    <>
      <header className="mb-6">
        <h1 className="text-2xl font-bold mb-1">
          Welcome to Soohyung&apos;s Homepage
        </h1>
        <p className="text-grey text-sm italic">
          You have reached soohyungl.com
        </p>
      </header>

      <Nav />

      <hr />

      <div className="my-8">
        <p className="mb-4">
          Hello. My name is Soohyung Lee and this is my personal page on the
          World Wide Web.
        </p>
        <p className="mb-4">
          Placeholder — a short paragraph about yourself. What you&apos;re
          about, what you find interesting, what you&apos;re doing these days.
          Write like you&apos;re talking to a stranger who wandered in.
        </p>
        <p className="text-sm text-grey">
          I live in San Francisco, California.
        </p>
      </div>

      <hr />

      <div className="my-8">
        <h2 className="text-lg font-bold mb-4">Links</h2>
        <ul className="list-disc ml-5 space-y-1.5 text-[14px]">
          <li>
            <a href="/about" className="underline">
              About me
            </a>{" "}
            — a bit more info
          </li>
          <li>
            <a href="/gallery" className="underline">
              Gallery
            </a>{" "}
            — some pictures
          </li>
          <li>
            <a href="mailto:hello@soohyungl.com" className="underline">
              Email me
            </a>{" "}
            — I read everything
          </li>
        </ul>
      </div>

      <hr />

      <footer className="text-[11px] text-grey space-y-3 mt-8">
        <div className="flex items-center gap-2">
          <span>You are visitor no.</span>
          <Counter />
        </div>
        <p>
          This page is best viewed at 800×600.
          <br />
          Last updated: March 2026.
        </p>
        <p>
          Made by hand. No rights reserved.
        </p>
      </footer>
    </>
  );
}
