"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Brief",
    description:
      "You share your business details, goals, and design preferences via WhatsApp or our form. Takes 10 minutes.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We craft a custom layout tailored to your brand — clean, modern, and conversion-focused.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop your site with fast-loading code, mobile responsiveness, and SEO foundations built in.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Your site goes live on a fast global CDN. We hand over the keys and make sure everything works perfectly.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#6366f1] text-sm uppercase tracking-widest font-body mb-3">
            Our Process
          </p>
          <h2
            className="font-heading font-bold text-white leading-tight"
            style={{ fontSize: "clamp(36px, 5vw, 48px)" }}
          >
            From idea to live site —
            <br />
            <span className="text-[#6b7280]">in days, not months.</span>
          </h2>
        </motion.div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1f1f1f] to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex md:flex-col items-start md:items-center gap-5 md:gap-0 md:px-6"
              >
                {/* Step dot / number bubble */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-[#111111] border border-[#1f1f1f] flex items-center justify-center group-hover:border-[#6366f1]">
                    <span className="font-heading font-bold text-[#6366f1] text-xl">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:text-center md:mt-6">
                  <h3 className="font-heading font-bold text-white text-xl mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#9ca3af] text-sm leading-relaxed font-body">
                    {step.description}
                  </p>
                </div>

                {/* Mobile connector */}
                {i < steps.length - 1 && (
                  <div className="md:hidden absolute left-7 top-16 bottom-0 w-px bg-[#1f1f1f] h-8" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
