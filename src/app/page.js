"use client"

import FAQ from "@/components/LandingPage/FAQ";
import Features from "@/components/LandingPage/Features";
import HeroSection from "@/components/LandingPage/HeroSection";
import HowItWorks from "@/components/LandingPage/HowItWorks";
import TrustedBy from "@/components/LandingPage/TrustedBy";
import WhyTableMitra from "@/components/LandingPage/WhyTableMitra";
import CTA from "@/components/LandingPage/CTA";
import Footer from "@/components/LandingPage/Footer";

export default function Home() {
  return (
    <div className="  text-[40px]">
      
      
      <HeroSection />
      <TrustedBy/>
      <HowItWorks />
      <WhyTableMitra />
      <Features/>
      {/* <FAQ /> */}
      <CTA />
      <Footer />
    </div>
  );
}
