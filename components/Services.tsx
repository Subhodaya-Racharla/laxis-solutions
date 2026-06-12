"use client";

import { motion, type Variants } from "framer-motion";
import { Globe, ShoppingBag, ShoppingCart } from "lucide-react";
import TiltCard from "./TiltCard";

const WA_LINK =
  "https://wa.me/917416214865?text=Hi%2C%20I%27d%20like%20a%20free%20quote%20for%20my%20website.";

const services = [
  {
    icon: Globe,
    title: "Landing Pages",
    price: "From ₹5,000",
    description:
      "A high-converting, mobile-first landing page that showcases your business professionally. Perfect for local shops, professionals, and service providers.",
    features: [
      "Up to 5 sections",
      "Mobile responsive",
      "WhatsApp click-to-chat",
      "Google Maps embed",
      "Basic SEO",
    ],
    delivery: "5–7 days",
  },
  {
    icon: ShoppingBag,
    title: "WhatsApp Stores",
    price: "From ₹7,000",
    description:
      "A product catalogue with WhatsApp-powered checkout. Customers browse, add to cart, and order via WhatsApp — zero payment gateway needed.",
    features: [
      "Up to 15 products",
      "WhatsApp order flow",
      "Add to cart",
      "Admin panel",
      "2 revisions",
    ],
    delivery: "10–12 days",
  },
  {
    icon: ShoppingCart,
    title: "Full E-commerce",
    price: "From ₹15,000",
    description:
      "A complete online store with Razorpay payment gateway, unlimited products, order management, and a full admin dashboard.",
    features: [
      "Razorpay integration",
      "Unlimited products",
      "Order management",
      "Sales dashboard",
      "1-month support",
    ],
    delivery: "12–15 days",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.0, 0.0, 0.2, 1] } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[#6366f1] text-sm uppercase tracking-widest font-body mb-3">
          What We Build
        </p>
        <h2
          className="font-heading font-bold text-white leading-tight"
          style={{ fontSize: "clamp(36px, 5vw, 48px)" }}
        >
          Everything your business needs
          <br />
          <span className="text-[#6b7280]">to win online.</span>
        </h2>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6"
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div key={service.title} variants={cardVariants}>
            <TiltCard className="h-full">
            <div
              className="group bg-[#111111] border border-[#1f1f1f] rounded-2xl p-8 flex flex-col gap-5 cursor-default transition-all duration-300 hover:border-[#6366f1]/50 hover:shadow-[0_8px_40px_rgba(99,102,241,0.15)] h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-[#6366f1]/10 flex items-center justify-center group-hover:bg-[#6366f1]/20 transition-colors">
                <Icon size={22} className="text-[#6366f1]" />
              </div>

              <div>
                <p className="text-[#6366f1] text-sm font-medium mb-1">
                  {service.price}
                </p>
                <h3 className="font-heading font-bold text-white text-2xl">
                  {service.title}
                </h3>
              </div>

              <p className="text-[#9ca3af] text-sm leading-relaxed font-body">
                {service.description}
              </p>

              <ul className="space-y-2 flex-1">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-[#9ca3af]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-4 border-t border-[#1f1f1f]">
                <span className="text-xs text-[#6b7280]">
                  Delivered in {service.delivery}
                </span>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#6366f1] hover:text-white transition-colors font-medium"
                >
                  Get Started →
                </a>
              </div>
            </div>
            </TiltCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
