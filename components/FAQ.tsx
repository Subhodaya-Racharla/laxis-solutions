"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How long does it take to build my website?",
    a: "Depending on the plan, we deliver in 5–15 days. Landing pages take 5–7 days, WhatsApp stores take 10–12 days, and full e-commerce sites take 12–15 days.",
  },
  {
    q: "Do you provide hosting?",
    a: "We deploy your website on Vercel's free tier, which gives you fast global CDN delivery at no cost. Domain registration charges are separate — usually ₹700–₹1,500/year depending on the domain you choose.",
  },
  {
    q: "Can I update the site myself?",
    a: "Yes — the ₹7,000 WhatsApp Store and ₹15,000 E-commerce plans include a simple admin panel where you can add, edit, or delete products, manage visibility, and track orders without touching any code.",
  },
  {
    q: "What if I need changes after launch?",
    a: "The ₹15,000 Pro plan includes 1 month of free post-launch support. For other plans, you can opt for monthly maintenance at ₹500/month, which covers minor updates and content changes.",
  },
  {
    q: "Do you work with clients outside Hyderabad?",
    a: "Absolutely. We work with clients across Pan India. Everything from brief to delivery happens over WhatsApp and video calls — location is no barrier.",
  },
  {
    q: "How do I get started?",
    a: "Just click 'Get a Free Quote' or WhatsApp us directly at +91 7416214865. We'll ask a few quick questions about your business and get back to you within a few hours.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#1f1f1f]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 gap-4 text-left group"
      >
        <span className="font-body font-medium text-base text-white group-hover:text-[#6366f1] transition-colors">
          {q}
        </span>
        <span className="flex-shrink-0 w-7 h-7 rounded-full border border-[#1f1f1f] flex items-center justify-center text-[#6b7280] group-hover:border-[#6366f1] group-hover:text-[#6366f1] transition-colors">
          {open ? <Minus size={13} /> : <Plus size={13} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[#9ca3af] text-sm leading-relaxed font-body">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[#6366f1] text-sm uppercase tracking-widest font-body mb-3">
          FAQ
        </p>
        <h2
          className="font-heading font-bold text-white leading-tight"
          style={{ fontSize: "clamp(36px, 5vw, 48px)" }}
        >
          Frequently asked
          <br />
          <span className="text-[#6b7280]">questions.</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-3xl mx-auto"
      >
        {faqs.map((faq) => (
          <FAQItem key={faq.q} q={faq.q} a={faq.a} />
        ))}
      </motion.div>
    </section>
  );
}
