import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Send, Calendar, Clock } from "lucide-react";
import { Button } from "./ui/button";

export default function SubmissionPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-indigo-50/30 font-sans">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-slate-200/80 backdrop-blur-sm bg-white/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={goBack}
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-all duration-200 border border-slate-200"
              >
                <ArrowLeft size={18} />
              </button>
              <div>
                <h1 className="text-lg font-semibold text-slate-900 tracking-tight">
                  Solution Submission
                </h1>
                <p className="text-xs text-slate-500">
                  Submit your hackathon solution
                </p>
              </div>
            </div>
            <Link
              to="/submission-guidelines"
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-xl text-sm border border-indigo-100"
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Submission Guidelines</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-500 mb-6 shadow-lg shadow-indigo-500/30">
            <Send className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Submissions Opening Soon
          </h2>
          <p className="text-slate-600 max-w-md mx-auto">
            The submission portal will be available starting{" "}
            <span className="font-semibold text-indigo-600">
              January 19th, 2026
            </span>
            .
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
          <div className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-linear-to-br from-indigo-100 to-purple-100 mb-8">
              <Calendar className="w-12 h-12 text-indigo-600" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              📅 Submissions Start on 19th January!
            </h3>

            <p className="text-slate-600 mb-8 max-w-md mx-auto leading-relaxed">
              Thank you for your interest in participating in the hackathon! The
              submission form will be available on the start date. Please
              prepare your solution and check back on{" "}
              <span className="font-semibold text-indigo-600">
                January 19th, 2026
              </span>{" "}
              to submit your work.
            </p>

            <div className="flex items-center justify-center gap-2 text-slate-500 mb-8">
              <Clock className="w-5 h-5" />
              <span className="text-sm font-medium">Coming soon!</span>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <p className="text-sm text-slate-500 mb-4">
                In the meantime, make sure to review the submission guidelines:
              </p>
              <Link
                to="/submission-guidelines"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-xl transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                View Submission Guidelines
              </Link>
            </div>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="mt-8 text-center">
          <Button
            onClick={goBack}
            variant="outline"
            className="border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </main>
    </div>
  );
}

/*
 * ==================================================================================
 * COMMENTED OUT: Full Submission Form Code
 * Uncomment this code when submissions open on January 19th, 2026
 * ==================================================================================
 *
 * import React, { useState, FormEvent, useRef } from "react";
 * import { useNavigate, Link } from "react-router-dom";
 * import {
 *   ArrowLeft,
 *   Upload,
 *   Loader2,
 *   CheckCircle2,
 *   XCircle,
 *   BookOpen,
 *   Users,
 *   Hash,
 *   FileCode,
 *   Mail,
 *   MessageSquare,
 *   Package,
 *   Send,
 * } from "lucide-react";
 * import { Button } from "./ui/button";
 * import {
 *   Select,
 *   SelectContent,
 *   SelectItem,
 *   SelectTrigger,
 *   SelectValue,
 * } from "./ui/select";
 *
 * const problemStatements = [
 *   {
 *     value: "Bone Age Prediction",
 *     label: "BAP",
 *     description: "Bone Age Prediction",
 *   },
 *   {
 *     value: "Cataract Detection",
 *     label: "CD",
 *     description: "Cataract Detection",
 *   },
 *   {
 *     value: "Diabetic Retinopathy",
 *     label: "DR",
 *     description: "Diabetic Retinopathy",
 *   },
 * ];
 *
 * const problemStatementMap: Record<string, string> = {
 *   "Bone Age Prediction": "BAP",
 *   "Cataract Detection": "CD",
 *   "Diabetic Retinopathy": "DR",
 * };
 *
 * const libraries = [
 *   { value: "Tensorflow", label: "TensorFlow" },
 *   { value: "pytorch", label: "PyTorch" },
 *   { value: "Others", label: "Other (specify)" },
 * ];
 *
 * export default function SubmissionPage() {
 *   const navigate = useNavigate();
 *   const fileInputRef = useRef<HTMLInputElement>(null);
 *   const [teamNumber, setTeamNumber] = useState("");
 *   const [teamName, setTeamName] = useState("");
 *   const [problemStatement, setProblemStatement] = useState("");
 *   const [usedLibrary, setUsedLibrary] = useState("");
 *   const [usedLibraryOther, setUsedLibraryOther] = useState("");
 *   const [email, setEmail] = useState("");
 *   const [commitMessage, setCommitMessage] = useState("");
 *   const [file, setFile] = useState<File | null>(null);
 *   const [fileError, setFileError] = useState("");
 *   const [isSubmitting, setIsSubmitting] = useState(false);
 *   const [isDragging, setIsDragging] = useState(false);
 *   const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
 *   const [submitMessage, setSubmitMessage] = useState("");
 *
 *   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 *     const selectedFile = e.target.files?.[0];
 *     processFile(selectedFile);
 *   };
 *
 *   const processFile = (selectedFile: File | undefined) => {
 *     setFileError("");
 *     if (!selectedFile) {
 *       setFile(null);
 *       return;
 *     }
 *     const fileName = selectedFile.name.toLowerCase();
 *     if (!fileName.endsWith(".tar.gz") && !fileName.endsWith(".tgz")) {
 *       setFileError("Please upload a .tar.gz or .tgz file");
 *       setFile(null);
 *       return;
 *     }
 *     setFile(selectedFile);
 *   };
 *
 *   const handleDragOver = (e: React.DragEvent) => {
 *     e.preventDefault();
 *     setIsDragging(true);
 *   };
 *
 *   const handleDragLeave = (e: React.DragEvent) => {
 *     e.preventDefault();
 *     setIsDragging(false);
 *   };
 *
 *   const handleDrop = (e: React.DragEvent) => {
 *     e.preventDefault();
 *     setIsDragging(false);
 *     const droppedFile = e.dataTransfer.files[0];
 *     processFile(droppedFile);
 *   };
 *
 *   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
 *     e.preventDefault();
 *
 *     // Validation
 *     if (!teamNumber.trim()) {
 *       setSubmitStatus("error");
 *       setSubmitMessage("Please enter a team number");
 *       return;
 *     }
 *     if (!teamName.trim()) {
 *       setSubmitStatus("error");
 *       setSubmitMessage("Please enter a team name");
 *       return;
 *     }
 *     if (!problemStatement) {
 *       setSubmitStatus("error");
 *       setSubmitMessage("Please select a problem statement");
 *       return;
 *     }
 *     if (!usedLibrary) {
 *       setSubmitStatus("error");
 *       setSubmitMessage("Please select or enter a used library");
 *       return;
 *     }
 *     if (usedLibrary === "Others" && !usedLibraryOther.trim()) {
 *       setSubmitStatus("error");
 *       setSubmitMessage("Please enter the library name");
 *       return;
 *     }
 *     if (!email.trim()) {
 *       setSubmitStatus("error");
 *       setSubmitMessage("Please enter your email address");
 *       return;
 *     }
 *     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 *     if (!emailRegex.test(email.trim())) {
 *       setSubmitStatus("error");
 *       setSubmitMessage("Please enter a valid email address");
 *       return;
 *     }
 *     if (!commitMessage.trim()) {
 *       setSubmitStatus("error");
 *       setSubmitMessage("Please enter a commit message");
 *       return;
 *     }
 *     if (!file) {
 *       setSubmitStatus("error");
 *       setSubmitMessage("Please upload a file");
 *       return;
 *     }
 *
 *     setIsSubmitting(true);
 *     setSubmitStatus(null);
 *     setSubmitMessage("");
 *
 *     try {
 *       const formData = new FormData();
 *       formData.append("teamNumber", teamNumber);
 *       formData.append("teamName", teamName);
 *       formData.append("problemStatement", problemStatementMap[problemStatement] || problemStatement);
 *       formData.append("usedLibrary", usedLibrary === "Others" ? usedLibraryOther : usedLibrary);
 *       formData.append("email", email.trim());
 *       formData.append("commitMessage", commitMessage.trim());
 *       formData.append("file", file);
 *
 *       const response = await fetch("/dhs-hackathon/upload", {
 *         method: "POST",
 *         body: formData,
 *       });
 *
 *       const responseData = await response.json().catch(() => ({}));
 *
 *       if (!response.ok) {
 *         const errorMessage = responseData.message || `Server error: ${response.status}`;
 *         throw new Error(errorMessage);
 *       }
 *
 *       setSubmitStatus("success");
 *       setSubmitMessage("Submission successful! Thank you for your submission. Redirecting...");
 *
 *       setTimeout(() => {
 *         navigate("/");
 *       }, 2000);
 *     } catch (error) {
 *       console.error("Submission error:", error);
 *       setSubmitStatus("error");
 *       setSubmitMessage(
 *         error instanceof Error
 *           ? `Submission failed: ${error.message}`
 *           : "Submission failed. Please try again."
 *       );
 *     } finally {
 *       setIsSubmitting(false);
 *     }
 *   };
 *
 *   const goBack = () => {
 *     navigate("/");
 *   };
 *
 *   // ... rest of the form JSX goes here
 *   // See the full form implementation in version control history
 * }
 */
