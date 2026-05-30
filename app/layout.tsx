import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://laxis.solutions"),
  title: "Laxis Solutions — Premium Web Design & Development Agency in Hyderabad",
  description:
    "We build fast, premium websites for businesses across Hyderabad and Pan India — delivered in 5–7 days. Landing pages, WhatsApp stores, and full e-commerce solutions.",
  keywords: [
    "web design hyderabad",
    "web development hyderabad",
    "website design india",
    "affordable website hyderabad",
    "landing page design",
    "whatsapp store",
    "ecommerce website india",
    "laxis solutions",
  ],
  authors: [{ name: "Laxis Solutions", url: "https://laxis.solutions" }],
  creator: "Laxis Solutions",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://laxis.solutions",
    siteName: "Laxis Solutions",
    title: "Laxis Solutions — Premium Web Design & Development Agency in Hyderabad",
    description:
      "Fast, premium websites for businesses across Hyderabad and Pan India — delivered in 5–7 days.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Laxis Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laxis Solutions — Web Design Agency Hyderabad",
    description: "Fast, premium websites for businesses across India.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://laxis.solutions",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0a0a0a] text-[#f5f5f5] font-body antialiased">
        {children}
      </body>
    </html>
  );
}
