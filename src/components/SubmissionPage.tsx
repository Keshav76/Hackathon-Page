import React, { useState, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Upload, Loader2, CheckCircle2, XCircle, BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const problemStatements = [
  "Bone Age Prediction",
  "Cataract Detection",
  "Diabetic Retinopathy",
];

// Map full problem statement names to short forms expected by backend
const problemStatementMap: Record<string, string> = {
  "Bone Age Prediction": "BAP",
  "Cataract Detection": "CD",
  "Diabetic Retinopathy": "DR",
};

export default function SubmissionPage() {
  const navigate = useNavigate();
  const [teamNumber, setTeamNumber] = useState("");
  const [teamName, setTeamName] = useState("");
  const [problemStatement, setProblemStatement] = useState("");
  const [usedLibrary, setUsedLibrary] = useState("");
  const [usedLibraryOther, setUsedLibraryOther] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const [submitMessage, setSubmitMessage] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFileError("");

    if (!selectedFile) {
      setFile(null);
      return;
    }

    // Validate file extension
    const fileName = selectedFile.name.toLowerCase();
    if (!fileName.endsWith(".tar.gz") && !fileName.endsWith(".tgz")) {
      setFileError("Please upload a .tar.gz or .tgz file");
      setFile(null);
      e.target.value = "";
      return;
    }

    setFile(selectedFile);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!teamNumber.trim()) {
      setSubmitStatus("error");
      setSubmitMessage("Please enter a team number");
      return;
    }

    if (!teamName.trim()) {
      setSubmitStatus("error");
      setSubmitMessage("Please enter a team name");
      return;
    }

    if (!problemStatement) {
      setSubmitStatus("error");
      setSubmitMessage("Please select a problem statement");
      return;
    }

    if (!usedLibrary) {
      setSubmitStatus("error");
      setSubmitMessage("Please select or enter a used library");
      return;
    }

    if (usedLibrary === "Others" && !usedLibraryOther.trim()) {
      setSubmitStatus("error");
      setSubmitMessage("Please enter the library name");
      return;
    }

    if (!file) {
      setSubmitStatus("error");
      setSubmitMessage("Please upload a file");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    try {
      const formData = new FormData();
      formData.append("teamNumber", teamNumber);
      formData.append("teamName", teamName);
      // Convert full problem statement name to short form for backend
      formData.append("problemStatement", problemStatementMap[problemStatement] || problemStatement);
      formData.append("usedLibrary", usedLibrary === "Others" ? usedLibraryOther : usedLibrary);
      formData.append("file", file);

      const response = await fetch("/dhs-hackathon/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json().catch(() => ({}));

      setSubmitStatus("success");
      setSubmitMessage("Submission successful! Thank you for your submission. Redirecting...");
      
      // Redirect to home page after successful submission
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
      setSubmitMessage(
        error instanceof Error
          ? `Submission failed: ${error.message}`
          : "Submission failed. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-900 pb-12">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={goBack}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <div className="flex flex-col">
                <h1 className="text-lg font-bold text-slate-900 leading-tight">
                  Make Your Submission
                </h1>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  Submit Your Solution
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Submission Form Section */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-8">
          <div className="px-6 py-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h3 className="text-lg font-bold text-slate-900">
              Submission Form
            </h3>
            <Link
              to="/submission-guidelines"
              className="inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-700 font-medium transition-colors bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg text-sm"
            >
              <BookOpen className="w-4 h-4" />
              View Submission Guidelines
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            <div className="space-y-6">
              {/* Team Number */}
              <div className="space-y-2">
                <Label htmlFor="teamNumber" className="text-sm font-medium text-slate-700">
                  Team Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="teamNumber"
                  type="text"
                  placeholder="Enter your team number"
                  value={teamNumber}
                  onChange={(e) => setTeamNumber(e.target.value)}
                  disabled={isSubmitting}
                  required
                  className="w-full"
                />
              </div>

              {/* Team Name */}
              <div className="space-y-2">
                <Label htmlFor="teamName" className="text-sm font-medium text-slate-700">
                  Team Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="teamName"
                  type="text"
                  placeholder="Enter your team name"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  disabled={isSubmitting}
                  required
                  className="w-full"
                />
              </div>

              {/* Problem Statement */}
              <div className="space-y-2">
                <Label htmlFor="problemStatement" className="text-sm font-medium text-slate-700">
                  Problem Statement <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={problemStatement}
                  onValueChange={setProblemStatement}
                  disabled={isSubmitting}
                  required
                >
                  <SelectTrigger id="problemStatement" className="w-full">
                    <SelectValue placeholder="Select a problem statement" />
                  </SelectTrigger>
                  <SelectContent>
                    {problemStatements.map((problem) => (
                      <SelectItem key={problem} value={problem}>
                        {problem}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Used Library */}
              <div className="space-y-2">
                <Label htmlFor="usedLibrary" className="text-sm font-medium text-slate-700">
                  Used Library <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={usedLibrary}
                  onValueChange={(value) => {
                    setUsedLibrary(value);
                    if (value !== "Others") {
                      setUsedLibraryOther("");
                    }
                  }}
                  disabled={isSubmitting}
                  required
                >
                  <SelectTrigger id="usedLibrary" className="w-full">
                    <SelectValue placeholder="Select a library" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Tensorflow">Tensorflow</SelectItem>
                    <SelectItem value="pytorch">pytorch</SelectItem>
                    <SelectItem value="Others">Others</SelectItem>
                  </SelectContent>
                </Select>
                {usedLibrary === "Others" && (
                  <Input
                    type="text"
                    placeholder="Enter library name"
                    value={usedLibraryOther}
                    onChange={(e) => setUsedLibraryOther(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full mt-2"
                  />
                )}
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label htmlFor="file" className="text-sm font-medium text-slate-700">
                  Upload File (tar.gz) <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="file"
                    type="file"
                    accept=".tar.gz,.tgz"
                    onChange={handleFileChange}
                    disabled={isSubmitting}
                    className="cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200"
                  />
                </div>
                {fileError && (
                  <p className="text-sm text-red-600 flex items-center gap-1 mt-2">
                    <XCircle className="w-4 h-4" />
                    {fileError}
                  </p>
                )}
                {file && !fileError && (
                  <div className="mt-2 p-3 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-sm text-green-800 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="font-medium">File selected:</span>
                      <span>{file.name}</span>
                    </p>
                  </div>
                )}
                <p className="text-xs text-slate-500 mt-1">
                  Please upload a .tar.gz or .tgz file containing your code and model
                </p>
              </div>

              {/* Submit Status Messages */}
              {submitStatus && (
                <div
                  className={`p-4 rounded-md border flex items-start gap-3 ${
                    submitStatus === "success"
                      ? "bg-green-50 border-green-200 text-green-800"
                      : "bg-red-50 border-red-200 text-red-800"
                  }`}
                >
                  {submitStatus === "success" ? (
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  )}
                  <p className="text-sm font-medium">{submitMessage}</p>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2 w-5 h-5" />
                      Submit
                    </>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
