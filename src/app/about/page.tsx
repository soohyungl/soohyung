import { Nav } from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <>
      <header className="mb-6">
        <h1 className="text-2xl font-bold mb-1">About Me</h1>
        <p className="text-grey text-sm italic">
          soohyungl.com/about
        </p>
      </header>

      <Nav />

      <hr />

      {/* Photo placeholder */}
      <div className="my-8 flex gap-6 flex-col sm:flex-row">
        <div className="w-[180px] h-[240px] bg-light border border-grey flex items-center justify-center shrink-0">
          <span className="text-[11px] text-grey font-mono text-center px-2">
            [ your photo<br />here ]
          </span>
        </div>

        <div>
          <table className="text-[14px] border-collapse">
            <tbody>
              <TableRow label="Name" value="Soohyung Lee" />
              <TableRow label="Location" value="San Francisco, CA" />
              <TableRow label="Occupation" value="Placeholder" />
              <TableRow label="Email">
                <a href="mailto:hello@soohyungl.com" className="underline">
                  hello@soohyungl.com
                </a>
              </TableRow>
            </tbody>
          </table>
        </div>
      </div>

      <hr />

      <div className="my-8">
        <h2 className="text-lg font-bold mb-4">Bio</h2>
        <p className="mb-4">
          Placeholder paragraph. Write something personal here — how you&apos;d
          describe yourself to someone at a party, or a penpal you&apos;ve never
          met. The tone of this era was always direct and unguarded.
        </p>
        <p className="mb-4">
          Placeholder second paragraph. What you&apos;re interested in, what
          you&apos;ve been up to, what you think about. Keep it honest.
        </p>
      </div>

      <hr />

      <div className="my-8">
        <h2 className="text-lg font-bold mb-4">Interests</h2>
        <ul className="list-disc ml-5 space-y-1 text-[14px]">
          <li>Placeholder interest</li>
          <li>Placeholder interest</li>
          <li>Placeholder interest</li>
          <li>Placeholder interest</li>
          <li>Placeholder interest</li>
        </ul>
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

function TableRow({
  label,
  value,
  children,
}: {
  label: string;
  value?: string;
  children?: React.ReactNode;
}) {
  return (
    <tr>
      <td className="pr-6 py-1 text-grey font-mono text-[12px] align-top whitespace-nowrap">
        {label}:
      </td>
      <td className="py-1">{children ?? value}</td>
    </tr>
  );
}
