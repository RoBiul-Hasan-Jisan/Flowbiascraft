import React from "react";
import { HeroSection } from "../components/AboutusExtra/HeroSection";
import { WhoWeAreSection } from "../components/AboutusExtra/WhoWeAreSection";
import { BenefitsSection } from "../components/AboutusExtra/BenefitsSection";


export default function AboutPage() {
  return (
    <div className="text-gray-800">
      <HeroSection />
      <WhoWeAreSection />
      <BenefitsSection />
    </div>
  );
}