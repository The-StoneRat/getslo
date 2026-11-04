import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import StorySection from "@/components/StorySection";
import PrivacySection from "@/components/PrivacySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-on-surface font-body-md overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <StorySection />
        <PrivacySection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
