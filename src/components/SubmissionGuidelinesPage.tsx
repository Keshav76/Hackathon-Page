import { useNavigate } from "react-router-dom";
import { ArrowLeft, FileText, CheckCircle, AlertTriangle, Package, Code, BookOpen } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import guidelinesContent from "../guidelines/Guidelines.md?raw";

export default function SubmissionGuidelinesPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-900 pb-12">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={goBack}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <div className="flex flex-col">
                <h1 className="text-lg font-bold text-slate-900 leading-tight flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-indigo-600" />
                  Submission Guidelines
                </h1>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  Model Submission Contract
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        {/* Quick Navigation Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <a href="#directory-structure" className="group p-4 bg-white rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all hover:scale-[1.02]">
            <Package className="w-6 h-6 text-indigo-600 mb-2 group-hover:scale-110 transition-transform" />
            <p className="text-sm font-medium text-slate-700">Directory Structure</p>
          </a>
          <a href="#inference-contract" className="group p-4 bg-white rounded-xl border border-slate-200 hover:border-cyan-300 hover:shadow-md transition-all hover:scale-[1.02]">
            <Code className="w-6 h-6 text-cyan-600 mb-2 group-hover:scale-110 transition-transform" />
            <p className="text-sm font-medium text-slate-700">Inference Contract</p>
          </a>
          <a href="#readme-format" className="group p-4 bg-white rounded-xl border border-slate-200 hover:border-violet-300 hover:shadow-md transition-all hover:scale-[1.02]">
            <FileText className="w-6 h-6 text-violet-600 mb-2 group-hover:scale-110 transition-transform" />
            <p className="text-sm font-medium text-slate-700">README Format</p>
          </a>
          <a href="#checklist" className="group p-4 bg-white rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all hover:scale-[1.02]">
            <CheckCircle className="w-6 h-6 text-emerald-600 mb-2 group-hover:scale-110 transition-transform" />
            <p className="text-sm font-medium text-slate-700">Final Checklist</p>
          </a>
        </div>

        {/* Important Notice */}
        <div className="mb-8 p-4 bg-amber-50 rounded-xl border border-amber-200">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-amber-800 font-semibold text-sm">Important</p>
              <p className="text-amber-700 text-sm mt-1">
                Please read these guidelines carefully before submitting. Non-compliant submissions will be rejected automatically.
              </p>
            </div>
          </div>
        </div>

        {/* Markdown Content */}
        <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="px-6 md:px-10 py-8 md:py-10">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-200">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => {
                  const text = String(children);
                  let id = "";
                  if (text.includes("Directory")) id = "directory-structure";
                  else if (text.includes("Inference") || text.includes("inference.py")) id = "inference-contract";
                  else if (text.includes("README")) id = "readme-format";
                  else if (text.includes("Checklist")) id = "checklist";
                  return (
                    <h2 id={id} className="text-2xl font-bold text-slate-900 mt-10 mb-4 flex items-center gap-3 scroll-mt-20">
                      <span className="w-1 h-7 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-full" />
                      {children}
                    </h2>
                  );
                },
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-none space-y-2 mb-4 ml-4">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside space-y-2 mb-4 text-slate-600">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-slate-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 shrink-0" />
                    <span>{children}</span>
                  </li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-indigo-500 pl-4 py-2 my-6 bg-indigo-50 rounded-r-lg">
                    <div className="text-indigo-800 italic">{children}</div>
                  </blockquote>
                ),
                code: ({ className, children, ...props }) => {
                  const isInline = !className;
                  if (isInline) {
                    return (
                      <code className="px-1.5 py-0.5 bg-slate-100 text-indigo-700 rounded text-sm font-mono" {...props}>
                        {children}
                      </code>
                    );
                  }
                  return (
                    <code className={`${className} text-sm`} {...props}>
                      {children}
                    </code>
                  );
                },
                pre: ({ children }) => (
                  <pre className="bg-slate-900 rounded-xl p-4 overflow-x-auto mb-6 border border-slate-200 text-sm font-mono text-slate-100">
                    {children}
                  </pre>
                ),
                table: ({ children }) => (
                  <div className="overflow-x-auto mb-6 rounded-xl border border-slate-200">
                    <table className="w-full text-sm">
                      {children}
                    </table>
                  </div>
                ),
                thead: ({ children }) => (
                  <thead className="bg-slate-50 border-b border-slate-200">
                    {children}
                  </thead>
                ),
                th: ({ children }) => (
                  <th className="px-4 py-3 text-left text-slate-700 font-semibold">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-100">
                    {children}
                  </td>
                ),
                hr: () => (
                  <hr className="my-8 border-slate-200" />
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-indigo-600 hover:text-indigo-700 underline underline-offset-2 transition-colors"
                    target={href?.startsWith("http") ? "_blank" : undefined}
                    rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {children}
                  </a>
                ),
                strong: ({ children }) => (
                  <strong className="text-slate-900 font-semibold">{children}</strong>
                ),
                em: ({ children }) => (
                  <em className="text-slate-700 italic">{children}</em>
                ),
              }}
            >
              {guidelinesContent}
            </ReactMarkdown>
          </div>
        </article>

        {/* Bottom CTA */}
        <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-violet-50 rounded-2xl border border-indigo-200 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to Submit?</h3>
          <p className="text-slate-600 mb-4">Make sure your submission follows all the guidelines above.</p>
          <button
            onClick={() => navigate("/submission")}
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg"
          >
            Go to Submission Form
          </button>
        </div>
      </main>
    </div>
  );
}
