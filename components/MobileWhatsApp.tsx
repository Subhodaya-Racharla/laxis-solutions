"use client";

import { Phone, MessageCircle } from "lucide-react";

const WA_LINK =
  "https://wa.me/917416214865?text=Hi%2C%20I%27d%20like%20a%20free%20quote%20for%20my%20website.";
const CALL_LINK = "tel:+917416214865";

export default function ActionButtons() {
  return (
    <>
      {/* ── Mobile: full-width bottom bar ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t border-[#1f1f1f] bg-[#0a0a0a]/95 backdrop-blur-xl">
        <a
          href={CALL_LINK}
          className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium text-white border-r border-[#1f1f1f] hover:bg-[#111111] active:bg-[#1f1f1f] transition-colors"
        >
          <Phone size={17} className="text-[#6366f1]" />
          Call Us
        </a>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium text-white bg-[#25D366] hover:bg-[#22c35e] active:bg-[#1db954] transition-colors"
        >
          <MessageCircle size={17} />
          WhatsApp
        </a>
      </div>

      {/* ── Desktop: floating side buttons ── */}
      <div className="hidden md:flex fixed right-5 bottom-8 z-50 flex-col gap-3">
        <a
          href={CALL_LINK}
          title="Call us"
          className="group w-12 h-12 rounded-full bg-[#111111] border border-[#1f1f1f] hover:border-[#6366f1] flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-200"
        >
          <Phone size={18} className="text-[#6366f1]" />
        </a>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp us"
          className="group w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#22c35e] flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-200"
        >
          <MessageCircle size={18} className="text-white" />
        </a>
      </div>
    </>
  );
}
