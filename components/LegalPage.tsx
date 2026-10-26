import Link from "next/link";
import Footer from "@/components/Footer";
import { BUSINESS, LEGAL_LAST_UPDATED } from "@/lib/business";

export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="font-heading text-xl md:text-2xl font-bold text-white mb-4">
        {title}
      </h2>
      <div className="space-y-4 text-[#9ca3af] leading-relaxed">{children}</div>
    </section>
  );
}

export function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc pl-5 space-y-2 marker:text-[#6366f1]">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function ContactBlock() {
  return (
    <div className="rounded-xl border border-[#1f1f1f] bg-[#111111] p-5 text-sm text-[#9ca3af] space-y-1">
      <p className="text-white font-medium">{BUSINESS.name}</p>
      <p>Proprietor: {BUSINESS.owner}</p>
      {BUSINESS.addressLines.map((line) => (
        <p key={line}>{line}</p>
      ))}
      <p>
        Email:{" "}
        <a href={`mailto:${BUSINESS.email}`} className="text-[#818cf8] hover:text-white">
          {BUSINESS.email}
        </a>
      </p>
      <p>
        Phone:{" "}
        <a href={BUSINESS.phoneHref} className="text-[#818cf8] hover:text-white">
          {BUSINESS.phone}
        </a>
      </p>
      <p>Udyam Registration No.: {BUSINESS.udyam}</p>
    </div>
  );
}

export default function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="bg-[#0a0a0a] text-[#f5f5f5] min-h-screen">
      <header className="border-b border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-heading font-bold text-xl tracking-tight text-white hover:text-[#6366f1] transition-colors"
          >
            Laxis Solutions
          </Link>
          <Link
            href="/"
            className="text-sm text-[#9ca3af] hover:text-white transition-colors font-body"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-16 font-body">
        <p className="text-sm text-[#6366f1] font-medium mb-3">Legal</p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white text-balance">
          {title}
        </h1>
        <p className="mt-4 text-sm text-[#6b7280]">Last updated: {LEGAL_LAST_UPDATED}</p>
        {intro && <p className="mt-6 text-[#9ca3af] leading-relaxed">{intro}</p>}
        {children}
      </article>

      <Footer />
    </main>
  );
}
