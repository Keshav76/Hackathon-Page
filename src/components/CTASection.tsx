import { FAQDialog } from "./FAQDialog";
import { Button } from "./ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function CTASection() {
  return (
    <section
      id="cta"
      className="py-20 bg-linear-to-br from-blue-600 via-cyan-600 to-blue-700 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
          <p className="text-white">Open for Registration</p>
        </div>

        <h2 className="text-4xl md:text-5xl text-white mb-6">
          Join Us in Building Trustworthy AI for Healthcare
        </h2>

        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          We invite all participants interested in building trust in AI models
          for healthcare to register and participate in this groundbreaking
          hackathon.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-2">
          <Button
            size="lg"
            className="cursor-pointer bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg group"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLScM9IN0b867oAN0xke3nLya7IJJS5iqc7YlMkUHJzDzOfasFQ/viewform",
                "_blank"
              )
            }
          >
            Register Your Team
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <FAQDialog className="-translate-y-px cursor-pointer bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-600 px-8 py-6 text-lg" />
          <Button
            size="lg"
            className="cursor-pointer bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-600 px-8 py-6 text-lg"
            onClick={() =>
              window.open("mailto:hackathon.support@nha.gov.in", "_blank")
            }
          >
            <Mail className="mr-2 w-5 h-5" />
            Contact Us
          </Button>
        </div>

        <div className="mb-12">
          {/* Add visible email below */}
          <p className="text-blue-100 text-sm mt-4">
            Or email us directly:{" "}
            <a
              href="mailto:hackathon.support@nha.gov.in"
              className="text-white underline"
            >
              hackathon.support@nha.gov.in
            </a>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-white">
          <div>
            <div className="text-4xl mb-2">50-75</div>
            <p className="text-blue-100">Expected Teams</p>
          </div>
          <div>
            <div className="text-4xl mb-2">3</div>
            <p className="text-blue-100">Challenge Problems</p>
          </div>
          <div>
            <div className="text-4xl mb-2">3 Weeks</div>
            <p className="text-blue-100">Competition Cycle</p>
          </div>
        </div>
      </div>
    </section>
  );
}
