import Link from "next/link";
import { BUSINESS } from "@/lib/business";

function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Absolute section links so they also work from /privacy, /terms, etc.
const navLinks = [
  { label: "Work", href: "/#portfolio" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Data Deletion", href: "/data-deletion" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              className="font-heading font-bold text-xl text-white hover:text-[#6366f1] transition-colors"
            >
              Laxis Solutions
            </Link>
            <p className="text-[#6b7280] text-sm font-body">
              Websites that work as hard as you do.
            </p>
            <p className="text-[#4b5563] text-xs font-body mt-1">
              Based in Hyderabad · Serving Pan India
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#6b7280] hover:text-white transition-colors font-body"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <a
            href="https://www.instagram.com/laxis.solutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#6b7280] hover:text-white transition-colors font-body group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#111111] border border-[#1f1f1f] flex items-center justify-center group-hover:border-[#6366f1] transition-colors">
              <InstagramIcon size={14} />
            </div>
            @laxis.solutions
          </a>
        </div>

        {/* Registered business details */}
        <div className="mt-8 pt-6 border-t border-[#1f1f1f] grid gap-6 md:grid-cols-2 text-xs font-body text-[#6b7280]">
          <div className="space-y-1">
            <p className="text-[#9ca3af] font-medium">Registered office</p>
            <p>{BUSINESS.addressOneLine}</p>
            <p>
              <a href={BUSINESS.phoneHref} className="hover:text-white transition-colors">
                {BUSINESS.phone}
              </a>
              {" · "}
              <a href={`mailto:${BUSINESS.email}`} className="hover:text-white transition-colors">
                {BUSINESS.email}
              </a>
            </p>
            <p>Udyam Reg. No.: {BUSINESS.udyam}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end md:items-start">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-6 pt-6 border-t border-[#1f1f1f] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#4b5563] font-body">
            © {new Date().getFullYear()} Laxis Solutions. All rights reserved.
          </p>
          <p className="text-xs text-[#4b5563] font-body">
            Built by{" "}
            <span className="text-[#6366f1]">Laxis Solutions</span> · Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
}
