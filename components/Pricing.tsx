"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const WA_LINK =
  "https://wa.me/917416214865?text=Hi%2C%20I%27d%20like%20a%20free%20quote%20for%20my%20website.";

const plans = [
  {
    name: "Starter",
    tagline: "Landing Page",
    price: "₹5,000",
    popular: false,
    features: [
      "Up to 5 sections",
      "Mobile responsive",
      "WhatsApp click-to-chat",
      "Google Maps embed",
      "Basic SEO (meta, OG tags)",
      "Contact form",
      "1 round of revisions",
      "Delivered in 5–7 days",
    ],
  },
  {
    name: "Growth",
    tagline: "WhatsApp Store",
    price: "₹7,000",
    popular: true,
    features: [
      "Everything in Starter",
      "Product listing (up to 15 products)",
      "Add to cart functionality",
      "WhatsApp order checkout",
      "Basic admin panel",
      "Add/edit/delete products",
      "2 rounds of revisions",
      "Delivered in 10–12 days",
    ],
  },
  {
    name: "Pro",
    tagline: "Full E-commerce",
    price: "₹15,000",
    popular: false,
    features: [
      "Everything in Growth",
      "Razorpay integration",
      "Unlimited products",
      "Order status management",
      "Payment status tracking",
      "Category management",
      "Basic sales dashboard",
      "In stock / Out of stock toggle",
      "1 month post-launch support",
      "3 rounds of revisions",
      "Delivered in 12–15 days",
    ],
  },
];

const addons = [
  { name: "Extra page", price: "₹500" },
  { name: "Logo design", price: "₹1,500" },
  { name: "Google Business Profile setup", price: "₹500" },
  { name: "Monthly maintenance", price: "₹500/month" },
  { name: "Domain + hosting setup", price: "₹500" },
  { name: "Admin panel", price: "₹5,000" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 lg:px-8 bg-[#0d0d0d]">
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
            Pricing
          </p>
          <h2
            className="font-heading font-bold text-white leading-tight"
            style={{ fontSize: "clamp(36px, 5vw, 48px)" }}
          >
            Simple, transparent
            <br />
            <span className="text-[#6b7280]">pricing. No surprises.</span>
          </h2>
        </motion.div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative bg-[#111111] rounded-2xl p-8 flex flex-col gap-6 ${
                plan.popular
                  ? "border-2 border-[#6366f1] shadow-[0_0_40px_rgba(99,102,241,0.2)]"
                  : "border border-[#1f1f1f]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#6366f1] text-white text-xs font-bold px-4 py-1 rounded-full tracking-wide">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div>
                <p className="text-[#6b7280] text-sm mb-1 font-body">
                  {plan.tagline}
                </p>
                <h3 className="font-heading font-bold text-white text-2xl">
                  {plan.name}
                </h3>
                <p className="font-heading font-bold text-4xl text-white mt-3">
                  {plan.price}
                </p>
              </div>

              <ul className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      size={15}
                      className="text-[#6366f1] flex-shrink-0 mt-0.5"
                    />
                    <span className="text-[#9ca3af] font-body">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center py-3.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                  plan.popular
                    ? "bg-[#6366f1] text-white hover:bg-[#4f46e5] hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                    : "bg-[#1f1f1f] text-white hover:bg-[#2a2a2a]"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        {/* Custom CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[#9ca3af] text-sm mb-16 font-body"
        >
          Need something custom?{" "}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6366f1] hover:underline"
          >
            Let&apos;s talk →
          </a>
        </motion.p>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-heading font-bold text-white text-2xl text-center mb-8">
            Add-ons
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {addons.map((addon) => (
              <div
                key={addon.name}
                className="bg-[#111111] border border-[#1f1f1f] rounded-xl px-5 py-4 flex items-center justify-between gap-3 hover:border-[#6366f1]/30 transition-colors"
              >
                <span className="text-sm text-[#9ca3af] font-body">
                  {addon.name}
                </span>
                <span className="text-sm font-medium text-white font-heading flex-shrink-0">
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
