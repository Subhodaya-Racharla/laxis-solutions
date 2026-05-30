import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ActionButtons from "@/components/MobileWhatsApp";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-[#f5f5f5] pb-[60px] md:pb-0">
      <Navbar />
      <Hero />
      <Ticker />
      <Services />
      <HowItWorks />
      <Portfolio />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
      <ActionButtons />
    </main>
  );
}
