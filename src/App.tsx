import { Routes, Route } from "react-router-dom";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { TrilemmaSection } from "./components/TrilemmaSection";
import { SolutionSection } from "./components/SolutionSection";
import { DPGsSection } from "./components/DPGsSection";
import { HackathonSection } from "./components/HackathonSection";
import { SubmissionSection } from "./components/SubmissionSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import BoneAgeDataProvider from "./components/BoneAge";
import Cataract from "./components/Cataract";
import DiabeticRetinopathy from "./components/DiabeticRetinopathy";
import SubmissionPage from "./components/SubmissionPage";
import DatasetUploadPage from "./components/DatasetUploadPage";
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
      <SubmissionSection />
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
        <Route path="/cataract" element={<Cataract />} />
        <Route path="/diabetic-retinopathy" element={<DiabeticRetinopathy />} />
        <Route path="/submission" element={<SubmissionPage />} />
        <Route path="/dataset-upload" element={<DatasetUploadPage />} />
      </Routes>
    </>
  );
}
