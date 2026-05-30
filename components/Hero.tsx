"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      orbRef.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Orb */}
      <div
        ref={orbRef}
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-transform duration-700 ease-out animate-[orbPulse_5s_ease-in-out_infinite]"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(99,102,241,0.06) 50%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
          opacity: 0.04,
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#111111] border border-[#1f1f1f] rounded-full px-4 py-1.5 text-xs sm:text-sm text-[#9ca3af] mb-6 sm:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#6366f1] animate-pulse" />
          Based in Hyderabad · Serving Pan India
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-bold leading-none tracking-tight mb-6"
          style={{ fontSize: "clamp(42px, 8vw, 96px)" }}
        >
          Your Business
          <br />
          Deserves a
          <br />
          <span className="text-[#6366f1]">Real</span> Website.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-[#9ca3af] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-body"
        >
          We build fast, premium websites for businesses across Hyderabad and
          Pan India — delivered in{" "}
          <span className="text-white">5–7 days.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#6366f1] hover:bg-[#4f46e5] text-white font-medium px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] text-base"
          >
            View Plans
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center border border-[#1f1f1f] hover:border-[#6366f1] text-white font-medium px-8 py-3.5 rounded-full transition-all duration-200 text-base hover:bg-[#6366f1]/5"
          >
            See Our Work
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-row items-center justify-center gap-8 sm:gap-12 mt-12 sm:mt-16 text-center"
        >
          {[
            { value: "8+", label: "Clients Served" },
            { value: "5–7", label: "Days Delivery" },
            { value: "₹5k", label: "Starting Price" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-heading font-bold text-3xl text-white">
                {stat.value}
              </span>
              <span className="text-sm text-[#6b7280]">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
}
