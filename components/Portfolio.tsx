"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Sai Rohan Driving School",
    tag: "Education",
    url: "https://www.sairohandrivingschool.com/",
    description:
      "Clean, professional website for a driving school in Hyderabad with course info and lead capture.",
    color: "from-blue-500/10 to-indigo-500/10",
  },
  {
    name: "ShiRock Pet Boarding",
    tag: "Pet Services",
    url: "https://shirockpetboarding.com/",
    description:
      "Warm, trust-building site for a premium pet boarding service with gallery and booking info.",
    color: "from-amber-500/10 to-orange-500/10",
  },
  {
    name: "Lohith Path Labs",
    tag: "Healthcare",
    url: "https://www.lohithpathlabs.in/",
    description:
      "Professional lab website with test listings, home collection info, and contact details.",
    color: "from-emerald-500/10 to-teal-500/10",
  },
];

const tagColors: Record<string, string> = {
  Education: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Pet Services": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Healthcare: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[#6366f1] text-sm uppercase tracking-widest font-body mb-3">
          Our Work
        </p>
        <h2
          className="font-heading font-bold text-white leading-tight"
          style={{ fontSize: "clamp(36px, 5vw, 48px)" }}
        >
          Sites we&apos;ve built
          <br />
          <span className="text-[#6b7280]">for real businesses.</span>
        </h2>
      </motion.div>

      {/* Project cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {projects.map((project, i) => (
          <motion.a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden hover:border-[#6366f1]/40 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(99,102,241,0.1)] block"
          >
            {/* Preview area — gradient placeholder */}
            <div
              className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-[#111111]/40" />
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <ExternalLink size={18} className="text-white/60" />
                </div>
                <span className="text-xs text-white/40">
                  {new URL(project.url).hostname}
                </span>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#6366f1]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-heading font-bold text-white text-lg leading-tight">
                  {project.name}
                </h3>
                <span
                  className={`flex-shrink-0 text-xs px-2.5 py-1 rounded-full border font-body ${
                    tagColors[project.tag]
                  }`}
                >
                  {project.tag}
                </span>
              </div>
              <p className="text-[#9ca3af] text-sm leading-relaxed mb-4 font-body">
                {project.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-[#6366f1] font-medium group-hover:gap-2.5 transition-all">
                Visit Site
                <ExternalLink size={13} />
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Coming soon note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-sm text-[#6b7280] font-body"
      >
        More projects coming soon.
      </motion.p>
    </section>
  );
}
