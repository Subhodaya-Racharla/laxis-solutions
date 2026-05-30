"use client";

import { MessageCircle } from "lucide-react";

const WA_LINK =
  "https://wa.me/917416214865?text=Hi%2C%20I%27d%20like%20a%20free%20quote%20for%20my%20website.";

export default function MobileWhatsApp() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 md:hidden inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#22c35e] text-white font-medium px-6 py-3.5 rounded-full shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_32px_rgba(37,211,102,0.6)] transition-all duration-200 text-sm"
    >
      <MessageCircle size={18} />
      Get a Free Quote on WhatsApp
    </a>
  );
}
