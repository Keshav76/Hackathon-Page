import React from "react";
import {
  ArrowLeft,
  Download,
  FileImage,
  Users,
  Database,
  Activity,
  ScanLine,
  Tag,
  Info,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const BoneAgeDataProvider = () => {
  const navigate = useNavigate();

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
                  Bone Age Prediction
                </h1>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  Data Provider Details
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Problem Statement Hero */}
        <div className="bg-[#1e1b4b] rounded-2xl shadow-xl p-8 md:p-10 mb-8 text-white relative overflow-hidden">
          {/* Abstract Background Shapes */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-indigo-500 opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6 text-indigo-300">
              <Activity size={20} />
              <span className="font-bold tracking-widest uppercase text-xs">
                Problem Statement
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-4xl leading-tight">
              Predict the chronological age of patients based on X-ray images of
              the wrist.
            </h2>
            <p className="text-indigo-100 text-lg max-w-3xl leading-relaxed opacity-90">
              Develop a machine learning model using a dataset of male and
              female minors (0-18 years) to automate pediatric bone age
              assessment.
            </p>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<FileImage className="text-blue-600" />}
            label="Total Images"
            value="500+"
          />
          <StatCard
            icon={<ScanLine className="text-emerald-600" />}
            label="Image Dimension"
            value="512x512"
          />
          <StatCard
            icon={<Users className="text-purple-600" />}
            label="Demographic"
            value="0-18 years"
          />
          <StatCard
            icon={<Database className="text-orange-600" />}
            label="Source"
            value="Dr. Anurag Gupta"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Detailed Requirements */}
          <div className="lg:col-span-2 space-y-8">
            {/* Dataset Contents */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">
                  Dataset Specification
                </h3>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                  Ready for Use
                </span>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
                  <SpecItem
                    label="Total Volume"
                    value="500+ Images (Balanced Split)"
                  />
                  {/* <SpecItem label="File Format" value="*.png (Lossless)" /> */}
                  <SpecItem label="Image Size" value="512x512 pixels" />
                  <SpecItem label="Color Space" value="Grayscale (1-channel)" />
                  <SpecItem
                    label="Capture Method"
                    value="X-Ray (Radiography)"
                  />
                </div>
              </div>
            </section>

            {/* Metadata & Labels */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-900">
                  Labels & Metadata
                </h3>
              </div>
              <div className="p-6 space-y-8">
                {/* Target Label */}
                {/* <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-100 rounded-lg">
                      <Tag className="h-6 w-6 text-indigo-700" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-indigo-900 uppercase tracking-wide mb-1">
                        Target Variable
                      </h4>
                      <p className="text-lg font-bold text-indigo-900">Age</p>
                      <p className="text-sm text-indigo-700 mt-1 leading-relaxed">
                        Measured in Years. This is the "Ground Truth" the model
                        must learn to predict.
                      </p>
                    </div>
                  </div>
                </div> */}

                {/* Metadata Table */}
                <div>
                  <div className="overflow-hidden border border-slate-200 rounded-lg">
                    <table className="min-w-full divide-y divide-slate-200">
                      <thead className="bg-slate-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider"
                          >
                            Field Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text -left text-xs font-semibold text-slate-500 uppercase tracking-wider"
                          >
                            Description/Values
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-slate-200">
                        <MetadataRow
                          field="Image_Vector"
                          desc="Numpy array image of the wrist"
                        />
                        <MetadataRow field="Gender" desc="Male / Female" />
                        <MetadataRow
                          field="Age (Target Variable)"
                          desc="0 - 18 years (Anonymized)"
                        />
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* Dataset Sample Preview */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/50">
                <h3 className="text-lg font-bold text-slate-900">
                  Dataset Sample
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left text-slate-600">
                  <thead className="bg-slate-900 text-xs uppercase font-semibold text-slate-200">
                    <tr>
                      <th className="px-6 py-3 w-16 text-center">#</th>
                      <th className="px-6 py-3">image_vector</th>
                      <th className="px-6 py-3">Gender</th>
                      <th className="px-6 py-3">Bone Age</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      {
                        id: 0,
                        vector: "0, 0, 0, 0, 0, 0, 0...",
                        gender: "Female",
                        age: "12.5",
                      },
                      {
                        id: 1,
                        vector: "0, 0, 0, 0, 0, 0, 0...",
                        gender: "Female",
                        age: "10.6",
                      },
                      {
                        id: 2,
                        vector: "0, 0, 0, 0, 0, 0, 0...",
                        gender: "Male",
                        age: "10.5",
                      },
                      {
                        id: 3,
                        vector: "0, 0, 0, 0, 0, 0, 0...",
                        gender: "Female",
                        age: "11.5",
                      },
                      {
                        id: 4,
                        vector: "0, 0, 0, 0, 0, 0, 0...",
                        gender: "Female",
                        age: "11.0",
                      },
                    ].map((row) => (
                      <tr key={row.id} className="hover:bg-slate-50">
                        <td className="px-6 py-3 font-mono text-xs text-slate-400">
                          {row.id}
                        </td>
                        <td className="px-6 py-3 font-mono text-xs max-w-[150px] truncate">
                          {row.vector}
                        </td>
                        <td className="px-6 py-3">{row.gender}</td>
                        <td className="px-6 py-3 font-medium text-slate-900">
                          {row.age}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* Right Column: Split & Info */}
          <div className="space-y-8">
            {/* Train / Test Split Strategy */}
            {/* Privacy & Compliance */}
            <section className="bg-[#1e293b] rounded-xl shadow-lg overflow-hidden text-white">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <ShieldCheck className="text-emerald-400" size={20} />
                  </div>
                  <h3 className="text-lg font-bold">Data Privacy</h3>
                </div>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  All patient data has been anonymized. Personal identifiers
                  have been removed in compliance with medical data standards.
                </p>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle2
                      size={16}
                      className="text-emerald-400 shrink-0"
                    />
                    <span>No PII (Personally Identifiable Info)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2
                      size={16}
                      className="text-emerald-400 shrink-0"
                    />
                    <span>Anonymized Age Codes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2
                      size={16}
                      className="text-emerald-400 shrink-0"
                    />
                    <span>Secure Source (Dr. Anurag Gupta)</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Data Preprocessing & Utilities */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-900">
                  Data Preprocessing & Utilities
                </h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  We are providing a preprocessing script which serves as a
                  robust template for preparing your data.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></div>
                    <span>
                      Convert photos in a folder to required dimensions
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></div>
                    <span>Store metadata in a CSV file automatically</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></div>
                    <span>
                      Merge existing data with processed data for a final CSV
                      ready for upload on the Federated Learning platform
                    </span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-amber-50 border border-amber-100 rounded-lg">
                  <p className="text-xs text-amber-800 mb-2">
                    <span className="font-semibold">Note:</span> The script is a
                    template and will require modifications from the user to fit
                    specific folder structures or data formats.
                  </p>
                  <a
                    href="https://colab.research.google.com/drive/1_QwOS-uh4hTAe7VAFeU5wjVSu-AQxbzH?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-medium text-indigo-600 hover:text-indigo-800 hover:underline transition-colors"
                  >
                    View Preprocessing Script in Google Colab
                    <ArrowLeft className="ml-1 w-3 h-3 rotate-180" />
                  </a>
                </div>
              </div>
            </section>

            {/* Important: Bring Your Own Dataset */}
            <section className="bg-linear-to-r from-red-50 to-orange-50 rounded-xl border-2 border-red-200 p-6 sticky top-6">
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="text-lg font-bold text-red-900 mb-2">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>{" "}
                    Important: Bring Your Own Dataset
                  </h3>
                  <p className="text-sm text-red-800 leading-relaxed mb-3">
                    <strong>You must prepare your own bone age dataset</strong>{" "}
                    in the exact format specified above to test and train your
                    model on our federated learning platform.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

// --- Helper Components ---

interface StatCardProps {
  icon: React.ReactElement;
  label: string;
  value: string;
}

const StatCard = ({ icon, label, value }: StatCardProps) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-4">
      <div className="p-2 bg-slate-50 rounded-lg">{icon}</div>
    </div>
    <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
    <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mt-1">
      {label}
    </p>
  </div>
);

interface SpecItemProps {
  label: string;
  value: string;
}

const SpecItem = ({ label, value }: SpecItemProps) => (
  <div className="flex flex-col">
    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
      {label}
    </span>
    <span className="text-base font-medium text-slate-900">{value}</span>
  </div>
);

interface MetadataRowProps {
  field: string;
  desc: string;
}

const MetadataRow = ({ field, desc }: MetadataRowProps) => (
  <tr className="hover:bg-slate-50 transition-colors">
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
      {field}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
      {desc}
    </td>
  </tr>
);

interface SplitItemProps {
  title: string;
  badge: string;
  badgeColor: string;
  desc: string;
}

const SplitItem = ({ title, badge, badgeColor, desc }: SplitItemProps) => (
  <div className="relative flex items-start bg-white p-4 rounded-lg border border-slate-200 shadow-sm z-10 mb-4">
    <div className="shrink-0 mt-1">
      <div className="h-3 w-3 rounded-full bg-slate-400 ring-4 ring-white"></div>
    </div>
    <div className="ml-4 w-full">
      <div className="flex justify-between items-start flex-wrap gap-2">
        <h4 className="text-sm font-bold text-slate-900">{title}</h4>
        <span
          className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${badgeColor}`}
        >
          {badge}
        </span>
      </div>
      <p className="mt-1 text-xs text-slate-500 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default BoneAgeDataProvider;
