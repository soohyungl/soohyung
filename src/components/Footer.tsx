export function Footer() {
  return (
    <footer className="mx-6 md:mx-12 border-t border-grey-2 px-0 py-12 md:py-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
      <div className="text-korean font-extralight text-sm text-grey-1">
        이수형 — 2026
      </div>
      <div className="font-light text-xs text-grey-1 md:text-right leading-relaxed">
        <a
          href="mailto:hello@soohyungl.com"
          className="text-ink no-underline border-b border-grey-2 hover:border-warm transition-colors"
        >
          hello@soohyungl.com
        </a>
        <br />
        San Francisco
      </div>
    </footer>
  );
}
