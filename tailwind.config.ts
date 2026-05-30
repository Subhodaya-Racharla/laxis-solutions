import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        card: "#111111",
        accent: "#6366f1",
        "accent-hover": "#4f46e5",
        "accent-light": "#818cf8",
        "border-subtle": "#1f1f1f",
        muted: "#6b7280",
      },
      fontFamily: {
        heading: ["'Neue Montreal'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      animation: {
        ticker: "ticker 35s linear infinite",
        "orb-pulse": "orbPulse 5s ease-in-out infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        orbPulse: {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.08)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
