"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Send, CheckCircle, Phone } from "lucide-react";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const WA_LINK =
  "https://wa.me/917416214865?text=Hi%2C%20I%27d%20like%20a%20free%20quote%20for%20my%20website.";

const contactOptions = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 7416214865",
    href: "tel:+917416214865",
    color: "text-[#6366f1]",
    bg: "bg-[#6366f1]/10",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 7416214865",
    href: WA_LINK,
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    icon: Mail,
    label: "Email",
    value: "subhodaya.r@gmail.com",
    href: "mailto:subhodaya.r@gmail.com",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "@laxis.solutions",
    href: "https://www.instagram.com/laxis.solutions/",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
];

const services = [
  "Landing Page (₹5,000)",
  "WhatsApp Store (₹7,000)",
  "Full E-commerce (₹15,000)",
  "Custom / Not sure yet",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    business_name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSuccess(true);
      setForm({
        name: "",
        business_name: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch {
      setError("Something went wrong. Please WhatsApp us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-[#0d0d0d]">
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
            Contact
          </p>
          <h2
            className="font-heading font-bold text-white leading-tight"
            style={{ fontSize: "clamp(36px, 5vw, 48px)" }}
          >
            Let&apos;s Build
            <br />
            <span className="text-[#6b7280]">Something.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — contact options */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#9ca3af] text-base mb-8 font-body leading-relaxed">
              Ready to take your business online? Reach out through any of the
              channels below, or fill in the form and we&apos;ll get back to you
              within a few hours.
            </p>
            <div className="space-y-4">
              {contactOptions.map((opt) => {
                const Icon = opt.icon;
                return (
                  <a
                    key={opt.label}
                    href={opt.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-[#111111] border border-[#1f1f1f] rounded-xl px-5 py-4 hover:border-[#6366f1]/40 transition-all group"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl ${opt.bg} flex items-center justify-center`}
                    >
                      <Icon size={18} className={opt.color} />
                    </div>
                    <div>
                      <p className="text-xs text-[#6b7280] font-body">
                        {opt.label}
                      </p>
                      <p className="text-white text-sm font-medium">
                        {opt.value}
                      </p>
                    </div>
                    <span className="ml-auto text-[#6b7280] group-hover:text-[#6366f1] transition-colors text-lg">
                      →
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {success ? (
              <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-10 flex flex-col items-center gap-4 text-center">
                <CheckCircle size={40} className="text-[#6366f1]" />
                <h3 className="font-heading font-bold text-white text-2xl">
                  Message Sent!
                </h3>
                <p className="text-[#9ca3af] font-body text-sm">
                  We&apos;ll get back to you within a few hours. You can also
                  WhatsApp us for faster replies.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#6366f1] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#4f46e5] transition-colors mt-2"
                >
                  Open WhatsApp
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-8 flex flex-col gap-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[#6b7280] font-body">
                      Your Name *
                    </label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ravi Kumar"
                      className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg px-4 py-2.5 text-sm text-white placeholder-[#4b5563] focus:outline-none focus:border-[#6366f1] transition-colors font-body"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[#6b7280] font-body">
                      Business Name *
                    </label>
                    <input
                      required
                      name="business_name"
                      value={form.business_name}
                      onChange={handleChange}
                      placeholder="Sri Krishna Stores"
                      className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg px-4 py-2.5 text-sm text-white placeholder-[#4b5563] focus:outline-none focus:border-[#6366f1] transition-colors font-body"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[#6b7280] font-body">
                    Phone / WhatsApp *
                  </label>
                  <input
                    required
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg px-4 py-2.5 text-sm text-white placeholder-[#4b5563] focus:outline-none focus:border-[#6366f1] transition-colors font-body"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[#6b7280] font-body">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#6366f1] transition-colors font-body appearance-none cursor-pointer"
                  >
                    <option value="">Select a service…</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[#6b7280] font-body">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your business and what you need..."
                    className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg px-4 py-2.5 text-sm text-white placeholder-[#4b5563] focus:outline-none focus:border-[#6366f1] transition-colors font-body resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm font-body">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 bg-[#6366f1] hover:bg-[#4f46e5] text-white font-medium py-3.5 rounded-xl transition-all duration-200 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    "Sending…"
                  ) : (
                    <>
                      Send Message
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
