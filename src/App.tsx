import React from "react";
import { Routes, Route } from "react-router-dom";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { TrilemmaSection } from "./components/TrilemmaSection";
import { SolutionSection } from "./components/SolutionSection";
import { DPGsSection } from "./components/DPGsSection";
import { HackathonSection } from "./components/HackathonSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import BoneAgeDataProvider from "./components/BoneAge";
import ScrollToTop from "./components/ScrollToTop";

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <HackathonSection />
      <AboutSection />
      <TrilemmaSection />
      <SolutionSection />
      <DPGsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bone-age" element={<BoneAgeDataProvider />} />
      </Routes>
    </>
  );
}
