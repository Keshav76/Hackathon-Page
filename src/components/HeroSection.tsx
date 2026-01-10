import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Calendar, MapPin } from "lucide-react";
import { FAQDialog } from "./FAQDialog";

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758202292826-c40e172eed1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neSUyMEFJJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NjM2MTAwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Medical AI Technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/90 via-blue-800/85 to-cyan-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center text-white">
        <div className="max-w-2xl inline-block px-4 py-2 bg-white backdrop-blur-sm rounded-full border border-cyan-400/30 mb-8">
          <p className="text-cyan-200">
            <img
              src="/dhs/hackathon/NHA-IITK-ICMR-Hackathon.png"
              alt="NHA-IITK-ICMR-Hackathon"
              className="w-full h-full object-cover"
            />
          </p>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 max-w-4xl mx-auto leading-tight">
          Federated Intelligence Hackathon
        </h1>

        <p className="text-xl md:text-2xl text-cyan-100 mb-4 max-w-3xl mx-auto">
          Trustworthy AI for Health
        </p>

        <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto">
          Building the future of healthcare AI through open benchmarking,
          privacy-preserving validation, and collaborative innovation
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <div className="flex items-center gap-2 text-cyan-100">
            <Calendar className="w-5 h-5" />
            <span>19th - 23rd January, 2026</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-cyan-400"></div>
          <div className="flex items-center gap-2 text-cyan-100">
            <MapPin className="w-5 h-5" />
            <span>IIT Kanpur / Online (Hybrid)</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="cursor-pointer bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-6 text-lg"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLScM9IN0b867oAN0xke3nLya7IJJS5iqc7YlMkUHJzDzOfasFQ/viewform",
                "_blank"
              )
            }
          >
            Register Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="cursor-pointer bg-gray-100 hover:bg-white text-blue-900 hover:text-blue-900 px-6 py-6 text-lg"
            onClick={() => {
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Learn More
          </Button>
          <FAQDialog
            className="cursor-pointer bg-gray-100 hover:bg-white text-blue-900 hover:text-blue-900 px-6 py-6 text-lg"
            noSymbol={true}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
