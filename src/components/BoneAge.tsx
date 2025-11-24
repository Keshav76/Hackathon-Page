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
            value="400+"
            subtext="Male & Female combined"
          />
          <StatCard
            icon={<ScanLine className="text-emerald-600" />}
            label="Image Dimension"
            value="512x512"
            subtext="512x512 pixels"
          />
          <StatCard
            icon={<Users className="text-purple-600" />}
            label="Demographic"
            value="0-18 years"
            subtext="Male & Female Minors"
          />
          <StatCard
            icon={<Database className="text-orange-600" />}
            label="Source"
            value="Dr. Anurag Gupta"
            subtext="Hospital / Clinical Source"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Detailed Requirements */}
          <div className="lg:col-span-2 space-y-8">
            {/* Dataset Contents */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">
                  1. Dataset Specification
                </h3>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                  Ready for Use
                </span>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
                  <SpecItem
                    label="Total Volume"
                    value="400+ Images (Balanced Split)"
                  />
                  <SpecItem label="File Format" value="*.png (Lossless)" />
                  <SpecItem
                    label="Image Size"
                    value="512x512 pixels"
                  />
                  <SpecItem label="Color Space" value="Grayscale (1-channel)" />
                  <SpecItem
                    label="Capture Method"
                    value="X-Ray (Radiography)"
                  />
                  <SpecItem
                    label="Source Origin"
                    value="Clinical Data (Hospital)"
                  />
                </div>
              </div>
            </section>

            {/* Metadata & Labels */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-900">
                  2. Labels & Metadata
                </h3>
              </div>
              <div className="p-6 space-y-8">
                {/* Target Label */}
                <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-100 rounded-lg">
                      <Tag className="h-6 w-6 text-indigo-700" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-indigo-900 uppercase tracking-wide mb-1">
                        Target Variable
                      </h4>
                      <p className="text-lg font-bold text-indigo-900">
                        Age
                      </p>
                      <p className="text-sm text-indigo-700 mt-1 leading-relaxed">
                        Measured in Years & Months. This is the "Ground Truth"
                        the model must learn to predict.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Metadata Table */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Database size={16} className="text-slate-500" />
                    Metadata Fields (Fairness Check)
                  </h4>
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
                          field="Image"
                          desc="Numpy array image of the wrist"
                        />
                        <MetadataRow field="Gender" desc="Male / Female" />
                        <MetadataRow
                          field="Age"
                          desc="0 - 18 years (Anonymized)"
                        />
                      </tbody>
                    </table>
                  </div>
                </div>
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
                      className="text-emerald-400 flex-shrink-0"
                    />
                    <span>No PII (Personally Identifiable Info)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2
                      size={16}
                      className="text-emerald-400 flex-shrink-0"
                    />
                    <span>Anonymized Age Codes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2
                      size={16}
                      className="text-emerald-400 flex-shrink-0"
                    />
                    <span>Secure Source (Dr. Anurag Gupta)</span>
                  </li>
                </ul>
              </div>
            </section>
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"> 
              <div className="px-6 py-5 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-900">
                  3. Data Split Strategy
                </h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-slate-600 leading-relaxed">
                  The dataset is split into 80% training and 20% testing sets.
                </p>
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
  subtext: string;
}

const StatCard = ({ icon, label, value, subtext }: StatCardProps) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-4">
      <div className="p-2 bg-slate-50 rounded-lg">{icon}</div>
    </div>
    <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
    <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mt-1">
      {label}
    </p>
    <p className="text-xs text-slate-400 mt-2">{subtext}</p>
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
    <div className="flex-shrink-0 mt-1">
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
