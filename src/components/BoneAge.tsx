import { ReactElement, useState, useEffect } from "react";
import {
  ArrowLeft,
  FileImage,
  Users,
  Database,
  Activity,
  ScanLine,
  CheckCircle2,
  ShieldCheck,
  Download,
  Loader2,
  X,
  SearchCode,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { parquetReadObjects } from "hyparquet";

interface SampleRow {
  id: string;
  image_vector: string;
  Gender: string;
  Bone_Age: string;
}

/**
 * Converts a flattened RGB image vector string (512x512x3) to a base64 data URL
 * @param vectorString - Comma-separated string of RGB pixel values (0-255)
 * @param width - Width of the image (default: 512)
 * @param height - Height of the image (default: 512)
 * @returns base64 data URL that can be used as img src
 */
const vectorToRGBImageUrl = (
  vectorString: string,
  width: number = 512,
  height: number = 512
): string => {
  try {
    // Parse the comma-separated string into an array of numbers
    const pixels = vectorString.split(",").map((val) => parseInt(val.trim(), 10));

    // Create an off-screen canvas
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("Failed to get canvas context");
      return "";
    }

    // Create ImageData object
    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;

    // For RGB image (512x512x3), the vector has width*height*3 values
    // Fill the ImageData: R, G, B values come from consecutive positions in the vector
    for (let i = 0; i < width * height; i++) {
      const rIdx = i * 3;
      const gIdx = rIdx + 1;
      const bIdx = rIdx + 2;

      const idx = i * 4; // ImageData uses RGBA format (4 values per pixel)

      data[idx] = Math.min(255, Math.max(0, pixels[rIdx] || 0)); // R
      data[idx + 1] = Math.min(255, Math.max(0, pixels[gIdx] || 0)); // G
      data[idx + 2] = Math.min(255, Math.max(0, pixels[bIdx] || 0)); // B
      data[idx + 3] = 255; // A (fully opaque)
    }

    // Put the image data on the canvas
    ctx.putImageData(imageData, 0, 0);

    // Convert canvas to base64 data URL
    return canvas.toDataURL("image/png");
  } catch (error) {
    console.error("Error converting vector to image:", error);
    return "";
  }
};

const BoneAgeDataProvider = () => {
  const navigate = useNavigate();
  const [sampleData, setSampleData] = useState<SampleRow[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const loadParquetData = async () => {
      try {
        setIsLoading(true);
        setLoadError(null);

        // Use import.meta.env.BASE_URL to handle the configured base path (/dhs/hackathon/)
        const baseUrl = import.meta.env.BASE_URL;
        const fileUrl = `${baseUrl}datasets/boneage-dataset.parquet`.replace(/\/+/g, "/"); // Normalize slashes
        
        const response = await fetch(fileUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch parquet file: ${response.status} ${response.statusText}`);
        }
        const arrayBuffer = await response.arrayBuffer();

        // Read all rows as objects
        const data = await parquetReadObjects({
          file: arrayBuffer,
          columns: [
            "id",
            "image_vector",
            "Gender",
            "Bone_Age",
          ],
        }) as Record<string, any>[];

        // Transform to SampleRow format, ensuring string conversion
        const rows: SampleRow[] = data.map((row) => ({
          id: String(row.id || ""),
          image_vector: String(row.image_vector || ""),
          Gender: String(row.Gender || ""),
          Bone_Age: String(row.Bone_Age || ""),
        }));

        setSampleData(rows);
      } catch (error) {
        console.error("Error loading parquet file:", error);
        setLoadError(
          error instanceof Error ? error.message : "Failed to load sample data"
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadParquetData();
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedImageUrl) {
        setSelectedImageUrl(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [selectedImageUrl]);

  const goBack = () => {
    navigate("/");
    // Scroll to challenge problems section after navigation with 10px offset
    setTimeout(() => {
      const challengeSection = document.getElementById("challenge-problems");
      if (challengeSection) {
        const elementPosition = challengeSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 100;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
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
            <div className="flex gap-3">
              <button
                disabled={true}
                className="inline-flex items-center px-4 py-2 border border-slate-300 shadow-sm text-sm font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-not-allowed"
              >
                <Download size={16} className="mr-2" />
                Download Training Dataset
              </button>
              <a
                href="/dhs/hackathon/datasets/boneage-dataset.parquet"
                download="boneage-dataset.parquet"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                <Download size={16} className="mr-2" />
                Download Sample Testing Dataset
              </a>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <StatCard
            icon={<SearchCode className="text-red-600" />}
            label="Current Benchmark"
            value="7 months MAE"
          />
          <StatCard
            icon={<FileImage className="text-blue-600" />}
            label="Total Images"
            value="500+"
          />
          <StatCard
            icon={<ScanLine className="text-emerald-600" />}
            label="Image Dimension"
            value="512x512x3"
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
                {/* <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                  Ready for Use
                </span> */}
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
                  <SpecItem
                    label="Total Volume"
                    value="520 Patients (269 M & 251 F)"
                  />
                  {/* <SpecItem label="File Format" value="*.png (Lossless)" /> */}
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
                            className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider"
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
                          desc="0 - 18 years"
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
                {isLoading && (
                  <div className="p-12 text-center">
                    <Loader2 className="w-8 h-8 animate-spin text-indigo-600 mx-auto mb-4" />
                    <p className="text-sm text-slate-600">Loading sample data...</p>
                  </div>
                )}
                {loadError && (
                  <div className="p-12 text-center">
                    <p className="text-sm text-red-600">Error: {loadError}</p>
                  </div>
                )}
                {!isLoading && !loadError && sampleData && (
                  <table className="min-w-full text-sm text-left text-slate-600">
                    <thead className="bg-slate-900 text-xs uppercase font-semibold text-slate-200">
                      <tr>
                        <th className="px-6 py-3">ID</th>
                        <th className="px-6 py-3 text-center w-24">Preview</th>
                        <th className="px-6 py-3">image_vector</th>
                        <th className="px-6 py-3">Gender</th>
                        <th className="px-6 py-3">Bone Age</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {sampleData.map((row, idx) => {
                        const trimmedVector =
                          row.image_vector.length > 25
                            ? row.image_vector.substring(0, 25) + "..."
                            : row.image_vector;
                        const imageUrl = vectorToRGBImageUrl(row.image_vector);
                        return (
                          <tr key={idx} className="hover:bg-slate-50">
                            <td className="px-6 py-3 font-mono text-xs text-slate-900">
                              {row.id}
                            </td>
                            <td className="px-6 py-3 text-center">
                              {imageUrl ? (
                                <img
                                  src={imageUrl}
                                  alt={`Preview ${idx + 1}`}
                                  className="w-16 h-16 object-contain mx-auto rounded cursor-pointer hover:opacity-80 transition-opacity"
                                  onClick={() => setSelectedImageUrl(imageUrl)}
                                />
                              ) : (
                                <span className="text-slate-400 text-xs">N/A</span>
                              )}
                            </td>
                            <td className="px-6 py-3 font-mono text-xs max-w-[200px] truncate text-slate-600">
                              {trimmedVector}
                            </td>
                            <td className="px-6 py-3">{row.Gender}</td>
                            <td className="px-6 py-3 font-medium text-slate-900">
                              {row.Bone_Age}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
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
                      <strong>Generate Parquet Dataset:</strong> Reads images and
                      labels to create a single, memory-efficient Parquet file.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></div>
                    <span>
                      <strong>Automated Preprocessing:</strong> Resizes and pads
                      images to 512x512x3 RGB format automatically.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></div>
                    <span>
                      <strong>Memory Efficient:</strong> Processes and writes data
                      in batches to handle large datasets effectively.
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
                    href="https://colab.research.google.com/drive/1oREsVN8OG2jLvAsm41m18ZTyU8dL-kIY?usp=sharing"
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

      {/* Image Preview Modal */}
      {selectedImageUrl && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImageUrl(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImageUrl(null)}
              className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors z-10"
              aria-label="Close preview"
            >
              <X className="w-6 h-6 text-slate-900" />
            </button>
            <img
              src={selectedImageUrl}
              alt="Full size preview"
              className="w-full h-full object-contain max-h-[90vh]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

// --- Helper Components ---

interface StatCardProps {
  icon: ReactElement;
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

// interface SplitItemProps {
//   title: string;
//   badge: string;
//   badgeColor: string;
//   desc: string;
// }

// const SplitItem = ({ title, badge, badgeColor, desc }: SplitItemProps) => (
//   <div className="relative flex items-start bg-white p-4 rounded-lg border border-slate-200 shadow-sm z-10 mb-4">
//     <div className="shrink-0 mt-1">
//       <div className="h-3 w-3 rounded-full bg-slate-400 ring-4 ring-white"></div>
//     </div>
//     <div className="ml-4 w-full">
//       <div className="flex justify-between items-start flex-wrap gap-2">
//         <h4 className="text-sm font-bold text-slate-900">{title}</h4>
//         <span
//           className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${badgeColor}`}
//         >
//           {badge}
//         </span>
//       </div>
//       <p className="mt-1 text-xs text-slate-500 leading-relaxed">{desc}</p>
//     </div>
//   </div>
// );

export default BoneAgeDataProvider;
