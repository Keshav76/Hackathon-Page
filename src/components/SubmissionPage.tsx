import React, { useState, FormEvent, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft,
  Upload,
  Loader2,
  CheckCircle2,
  XCircle,
  BookOpen,
  Users,
  Hash,
  FileCode,
  Mail,
  MessageSquare,
  Package,
  Send,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const problemStatements = [
  {
    value: "Bone Age Prediction",
    label: "BAP",
    description: "Bone Age Prediction",
  },
  {
    value: "Cataract Detection",
    label: "CD",
    description: "Cataract Detection",
  },
  {
    value: "Diabetic Retinopathy",
    label: "DR",
    description: "Diabetic Retinopathy",
  },
];

const problemStatementMap: Record<string, string> = {
  "Bone Age Prediction": "BAP",
  "Cataract Detection": "CD",
  "Diabetic Retinopathy": "DR",
};

const libraries = [
  { value: "Tensorflow", label: "TensorFlow" },
  { value: "pytorch", label: "PyTorch" },
  { value: "Others", label: "Other (specify)" },
];

export default function SubmissionPage() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [teamNumber, setTeamNumber] = useState("");
  const [teamName, setTeamName] = useState("");
  const [problemStatement, setProblemStatement] = useState("");
  const [usedLibrary, setUsedLibrary] = useState("");
  const [usedLibraryOther, setUsedLibraryOther] = useState("");
  const [email, setEmail] = useState("");
  const [commitMessage, setCommitMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const [submitMessage, setSubmitMessage] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    processFile(selectedFile);
  };

  const processFile = (selectedFile: File | undefined) => {
    setFileError("");
    if (!selectedFile) {
      setFile(null);
      return;
    }
    const fileName = selectedFile.name.toLowerCase();
    if (!fileName.endsWith(".tar.gz") && !fileName.endsWith(".tgz")) {
      setFileError("Please upload a .tar.gz or .tgz file");
      setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      return;
    }
    setFile(selectedFile);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    processFile(droppedFile);
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
    if (!email.trim()) {
      setSubmitStatus("error");
      setSubmitMessage("Please enter your email address");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setSubmitStatus("error");
      setSubmitMessage("Please enter a valid email address");
      return;
    }
    if (!commitMessage.trim()) {
      setSubmitStatus("error");
      setSubmitMessage("Please enter a commit message");
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
      formData.append(
        "problemStatement",
        problemStatementMap[problemStatement] || problemStatement
      );
      formData.append(
        "usedLibrary",
        usedLibrary === "Others" ? usedLibraryOther : usedLibrary
      );
      formData.append("email", email.trim());
      formData.append("commitMessage", commitMessage.trim());
      formData.append("file", file);

      const response = await fetch("/dhs-hackathon/upload", {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json().catch(() => ({}));

      if (!response.ok) {
        const errorMessage =
          responseData.message || `Server error: ${response.status}`;
        throw new Error(errorMessage);
      }

      setSubmitStatus("success");
      setSubmitMessage(
        "Submission successful! Thank you for your submission. Redirecting..."
      );

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
            Submit Your Solution
          </h2>
          <p className="text-slate-600 max-w-md mx-auto">
            Upload your hackathon solution. Please ensure all required fields
            are filled correctly.
          </p>
        </div>

        {/* Submission Form Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Team Number */}
            <div className="space-y-2">
              <Label
                htmlFor="teamNumber"
                className="flex items-center gap-2 text-sm font-medium text-slate-700"
              >
                <Hash className="w-4 h-4 text-indigo-600" />
                Team Number
                <span className="text-red-500">*</span>
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
              <Label
                htmlFor="teamName"
                className="flex items-center gap-2 text-sm font-medium text-slate-700"
              >
                <Users className="w-4 h-4 text-indigo-600" />
                Team Name
                <span className="text-red-500">*</span>
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
              <Label
                htmlFor="problemStatement"
                className="flex items-center gap-2 text-sm font-medium text-slate-700"
              >
                <FileCode className="w-4 h-4 text-indigo-600" />
                Problem Statement
                <span className="text-red-500">*</span>
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
                  {problemStatements.map((ps) => (
                    <SelectItem key={ps.value} value={ps.value}>
                      <span className="font-medium">{ps.label}</span>
                      <span className="text-slate-500 ml-2">
                        — {ps.description}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Used Library */}
            <div className="space-y-2">
              <Label
                htmlFor="usedLibrary"
                className="flex items-center gap-2 text-sm font-medium text-slate-700"
              >
                <Package className="w-4 h-4 text-indigo-600" />
                Used Library
                <span className="text-red-500">*</span>
              </Label>
              <Select
                value={usedLibrary}
                onValueChange={setUsedLibrary}
                disabled={isSubmitting}
                required
              >
                <SelectTrigger id="usedLibrary" className="w-full">
                  <SelectValue placeholder="Select or specify a library" />
                </SelectTrigger>
                <SelectContent>
                  {libraries.map((lib) => (
                    <SelectItem key={lib.value} value={lib.value}>
                      {lib.label}
                    </SelectItem>
                  ))}
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

            {/* Email */}
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="flex items-center gap-2 text-sm font-medium text-slate-700"
              >
                <Mail className="w-4 h-4 text-indigo-600" />
                Email Address
                <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                required
                className="w-full"
              />
            </div>

            {/* Commit Message */}
            <div className="space-y-2">
              <Label
                htmlFor="commitMessage"
                className="flex items-center gap-2 text-sm font-medium text-slate-700"
              >
                <MessageSquare className="w-4 h-4 text-indigo-600" />
                Commit Message
                <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="commitMessage"
                placeholder="Enter a brief commit message describing your submission"
                value={commitMessage}
                onChange={(e) => setCommitMessage(e.target.value)}
                disabled={isSubmitting}
                required
                rows={3}
                className="w-full resize-none"
              />
            </div>

            {/* File Upload */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <Upload className="w-4 h-4 text-indigo-600" />
                Upload File (.tar.gz or .tgz)
                <span className="text-red-500">*</span>
              </Label>
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`relative cursor-pointer rounded-xl border-2 border-dashed transition-all duration-300 p-8 text-center ${
                  isDragging
                    ? "border-indigo-500 bg-indigo-50"
                    : file
                    ? "border-indigo-400 bg-indigo-50/50"
                    : "border-slate-300 hover:border-indigo-400 bg-slate-50 hover:bg-indigo-50/30"
                } ${isSubmitting ? "pointer-events-none opacity-50" : ""}`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".tar.gz,.tgz"
                  onChange={handleFileChange}
                  disabled={isSubmitting}
                  className="hidden"
                />
                {file ? (
                  <div className="flex flex-col items-center gap-2">
                    <CheckCircle2 className="w-8 h-8 text-indigo-600" />
                    <p className="text-sm font-medium text-slate-900">
                      {file.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      Click or drag to replace
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <Upload className="w-8 h-8 text-slate-400" />
                    <p className="text-sm font-medium text-slate-700">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-slate-500">
                      .tar.gz or .tgz files only
                    </p>
                  </div>
                )}
              </div>
              {fileError && (
                <p className="text-sm text-red-600 flex items-center gap-1 mt-2">
                  <XCircle className="w-4 h-4" />
                  {fileError}
                </p>
              )}
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
                    <Send className="mr-2 w-5 h-5" />
                    Submit Solution
                  </>
                )}
              </Button>
            </div>
          </form>
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
