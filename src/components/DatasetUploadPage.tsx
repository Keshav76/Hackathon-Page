import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Upload, Loader2, CheckCircle2, XCircle } from "lucide-react";
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

export default function DatasetUploadPage() {
  const navigate = useNavigate();
  const [submitterName, setSubmitterName] = useState("");
  const [datasetType, setDatasetType] = useState("");
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

    // Validate file extension - CSV only
    const fileName = selectedFile.name.toLowerCase();
    if (!fileName.endsWith(".csv")) {
      setFileError("Please upload a CSV file only");
      setFile(null);
      e.target.value = "";
      return;
    }

    setFile(selectedFile);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!submitterName.trim()) {
      setSubmitStatus("error");
      setSubmitMessage("Please enter your name");
      return;
    }

    if (!datasetType) {
      setSubmitStatus("error");
      setSubmitMessage("Please select a dataset type");
      return;
    }

    if (!file) {
      setSubmitStatus("error");
      setSubmitMessage("Please upload a CSV file");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    try {
      const formData = new FormData();
      formData.append("submitterName", submitterName.trim());
      formData.append("datasetType", datasetType);
      formData.append("file", file);

      const response = await fetch("http://3.110.207.163:3000/data", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      await response.json().catch(() => ({}));

      setSubmitStatus("success");
      setSubmitMessage("Dataset uploaded successfully! Redirecting...");
      
      // Redirect to home page after successful submission
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Upload error:", error);
      setSubmitStatus("error");
      setSubmitMessage(
        error instanceof Error
          ? `Upload failed: ${error.message}`
          : "Upload failed. Please try again."
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
                  Upload Dataset
                </h1>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  Submit Your Data
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dataset Upload Form Section */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-8">
          <div className="px-6 py-5 border-b border-slate-100">
            <h3 className="text-lg font-bold text-slate-900">
              Dataset Upload Form
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            <div className="space-y-6">
              {/* Submitter Name */}
              <div className="space-y-2">
                <Label htmlFor="submitterName" className="text-sm font-medium text-slate-700">
                  Name of Submitter <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="submitterName"
                  type="text"
                  placeholder="Enter your name"
                  value={submitterName}
                  onChange={(e) => setSubmitterName(e.target.value)}
                  disabled={isSubmitting}
                  required
                  className="w-full"
                />
              </div>

              {/* Dataset Type */}
              <div className="space-y-2">
                <Label htmlFor="datasetType" className="text-sm font-medium text-slate-700">
                  Dataset Type <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={datasetType}
                  onValueChange={setDatasetType}
                  disabled={isSubmitting}
                  required
                >
                  <SelectTrigger id="datasetType" className="w-full">
                    <SelectValue placeholder="Select a dataset type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="BAP">BAP (Bone Age Prediction)</SelectItem>
                    <SelectItem value="DR">DR (Diabetic Retinopathy)</SelectItem>
                    <SelectItem value="CD">CD (Cataract Detection)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label htmlFor="file" className="text-sm font-medium text-slate-700">
                  Upload File (CSV) <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="file"
                    type="file"
                    accept=".csv"
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
                  Please upload a CSV file only
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
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2 w-5 h-5" />
                      Upload Dataset
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
