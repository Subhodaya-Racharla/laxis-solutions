"use client";

const clients = [
  "Sai Rohan Driving School",
  "ShiRock Pet Boarding",
  "Lohith Path Labs",
  "FruitAM",
  "Karun Cabs",
  "GVK Construction",
  "Asean Waters",
  "Cairo Box Cricket",
];

export default function Ticker() {
  const doubled = [...clients, ...clients];

  return (
    <section className="py-12 border-y border-[#1f1f1f] overflow-hidden">
      <p className="text-center text-xs text-[#6b7280] uppercase tracking-widest mb-6 font-body">
        Trusted by businesses across Hyderabad
      </p>
      <div className="relative flex overflow-hidden select-none">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" />

        <div className="flex animate-[ticker_35s_linear_infinite] whitespace-nowrap">
          {doubled.map((client, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 px-8 text-base text-[#6b7280] font-body"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] flex-shrink-0" />
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
