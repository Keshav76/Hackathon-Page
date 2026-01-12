import { Button } from "./ui/button";
import { Upload, ArrowRight, Database, BookOpen } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

export function SubmissionSection() {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl shadow-lg border border-slate-200 p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-2 bg-indigo-100 rounded-full mb-4">
              <p className="text-indigo-700 font-semibold text-sm">
                Ready to Submit?
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Make Your Submission
            </h2>
          </div>

          {/* Two options */}
          <div className="space-y-6">
            {/* Submit Solution */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-white rounded-xl border border-slate-200">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Want to submit your solution?
                </h3>
                <p className="text-slate-600 mb-3">
                  Submit your team's solution with code and model files. Upload your tar.gz file and complete the submission form.
                </p>
                <Link
                  to="/submission-guidelines"
                  className="inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-700 font-medium transition-colors bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg"
                >
                  <BookOpen className="w-4 h-4" />
                  View Submission Guidelines
                </Link>
              </div>
              <div className="shrink-0">
                <Button
                  size="lg"
                  className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg group"
                  onClick={() => navigate("/submission")}
                >
                  <Upload className="mr-2 w-5 h-5" />
                  Submit Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Upload Dataset */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-white rounded-xl border border-slate-200">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Want to contribute a dataset?
                </h3>
                <p className="text-slate-600">
                  Help improve AI models by contributing your dataset. Upload a CSV file with your data samples.
                </p>
              </div>
              <div className="shrink-0">
                <Button
                  size="lg"
                  variant="outline"
                  className="cursor-pointer border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-6 text-lg group"
                  onClick={() => navigate("/dataset-upload")}
                >
                  <Database className="mr-2 w-5 h-5" />
                  Upload Dataset
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
