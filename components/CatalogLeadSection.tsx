"use client";

import React, { useState } from "react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  interest: string;
}

const INTEREST_OPTIONS = [
  "Executive Keynote Speaking",
  "The Becoming Coaching",
  "Leadership Architecture Project",
  "Organisational Architecture Retainer",
] as const;

export default function CatalogLeadSection() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    interest: INTEREST_OPTIONS[0],
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [dispatchedEmail, setDispatchedEmail] = useState("");
  const [downloadUrl, setDownloadUrl] = useState<string>("/docs/Mindvest_Advisory_Catalog_Updated.pdf");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    // Basic validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.company.trim()) {
      setErrorMessage("Please complete all required fields.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/request-catalog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit catalog request. Please try again.");
      }

      setDispatchedEmail(formData.email.trim());
      if (data.downloadUrl) {
        setDownloadUrl(data.downloadUrl);
      }
      setIsSuccess(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred.";
      setErrorMessage(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      interest: INTEREST_OPTIONS[0],
    });
    setErrorMessage(null);
  };

  return (
    <section
      id="catalog-access"
      className="relative bg-[#0f172a] text-slate-100 py-24 px-6 md:px-12 lg:px-20 overflow-hidden border-y border-[#1e293b]"
      style={{
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(180, 83, 9, 0.08) 0%, transparent 40%),
          radial-gradient(circle at 90% 80%, rgba(245, 158, 11, 0.06) 0%, transparent 45%)
        `,
      }}
    >
      {/* Decorative architectural grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Value Proposition & Scope Breakdown */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Executive Badge */}
            <div className="inline-flex items-center self-start gap-2.5 px-3.5 py-1.5 rounded-full border border-[#b45309]/50 bg-[#b45309]/10 text-[#f59e0b] text-[11px] font-mono tracking-[2.5px] uppercase font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse" />
              INSTITUTIONAL GOVERNANCE &amp; KEYNOTES
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-[1.15] mb-6 font-serif">
              Access the Executive Advisory &amp; Architecture Catalog
            </h2>

            {/* Sub-heading */}
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8">
              Explore complete frameworks, session scopes, and investment fee structures for Executive Keynote Engagements, The Becoming Coaching, Leadership Architecture, and Organisational Re-engineering.
            </p>

            {/* Checked Bullet Points */}
            <div className="space-y-4 mb-8">
              {[
                "Executive Speaking & Keynote Retainers (₦1.0M – ₦2.5M)",
                "The Becoming 12-Week Executive Coaching Scope",
                "Full Organisational & Leadership Architecture Frameworks",
                "Native Cross-Synergies with Origin Platform (origin.com.ng)",
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3.5 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#b45309]/20 border border-[#f59e0b]/40 flex items-center justify-center text-[#f59e0b] mt-0.5 transition-colors group-hover:bg-[#f59e0b]/20">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-slate-200 text-sm sm:text-base font-normal leading-snug">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust / Catalog Meta Tag */}
            <div className="flex items-center gap-4 pt-6 border-t border-[#1e293b] text-xs font-mono text-slate-400">
              <span className="px-2.5 py-1 rounded bg-[#1e293b] text-slate-300 font-medium">
                2026 EDITION
              </span>
              <span>CONFIDENTIAL CORPORATE BRIEFING</span>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="hidden sm:inline text-amber-500/80">DIRECT PDF DISPATCH</span>
            </div>
          </div>

          {/* Right Column: Premium Form or Success Card */}
          <div className="lg:col-span-6">
            <div className="relative bg-[#131d33] border border-[#334155] rounded-2xl p-7 sm:p-10 shadow-2xl shadow-black/60 backdrop-blur-sm">
              {/* Subtle top amber highlight glow line */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#f59e0b] to-transparent opacity-75" />

              {!isSuccess ? (
                /* Gated Lead Capture Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-[#1e293b] pb-4 mb-2">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                      Request Executive Access
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Complete the briefing form below to receive the confidential catalog.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-lg bg-red-950/60 border border-red-800 text-red-200 text-xs sm:text-sm flex items-center gap-2.5">
                      <svg className="w-4 h-4 flex-shrink-0 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-mono tracking-wider uppercase text-slate-300 mb-1.5"
                    >
                      Full Name <span className="text-[#f59e0b]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Olumide Adeleke"
                      className="w-full px-4 py-3 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-colors"
                    />
                  </div>

                  {/* Corporate Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono tracking-wider uppercase text-slate-300 mb-1.5"
                    >
                      Official Corporate Email <span className="text-[#f59e0b]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. o.adeleke@enterprise.com"
                      className="w-full px-4 py-3 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-colors"
                    />
                  </div>

                  {/* Two-column layout for Phone & Company on tablets/desktops */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-mono tracking-wider uppercase text-slate-300 mb-1.5"
                      >
                        Phone Number <span className="text-[#f59e0b]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 800 000 0000"
                        className="w-full px-4 py-3 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-colors"
                      />
                    </div>

                    {/* Company Name */}
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-xs font-mono tracking-wider uppercase text-slate-300 mb-1.5"
                      >
                        Company / Organization <span className="text-[#f59e0b]">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Apex Holdings Ltd"
                        className="w-full px-4 py-3 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Primary Interest Dropdown */}
                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-xs font-mono tracking-wider uppercase text-slate-300 mb-1.5"
                    >
                      Primary Advisory Interest <span className="text-[#f59e0b]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full appearance-none px-4 py-3 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-sm focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-colors pr-10 cursor-pointer"
                      >
                        {INTEREST_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#0f172a] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full mt-2 py-4 px-6 rounded-lg bg-gradient-to-r from-[#b45309] via-[#d97706] to-[#f59e0b] text-[#0f172a] font-mono text-xs sm:text-sm font-bold uppercase tracking-[2px] shadow-lg shadow-amber-900/30 hover:brightness-110 active:scale-[0.99] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-[#0f172a]" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        <span>Processing Access...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Immediate Access (PDF)</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  {/* Confidentiality Microcopy */}
                  <p className="text-[11px] text-slate-400 text-center leading-relaxed pt-2">
                    Your information is confidential. The PDF catalog will be dispatched directly via{" "}
                    <a
                      href="mailto:support@mindvestglobalresources.com.ng"
                      className="text-slate-300 hover:text-[#f59e0b] underline transition-colors"
                    >
                      support@mindvestglobalresources.com.ng
                    </a>.
                  </p>
                </form>
              ) : (
                /* Success Confirmation State Card */
                <div className="py-6 text-center animate-fade-in flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#b45309]/20 border-2 border-[#f59e0b] flex items-center justify-center text-[#f59e0b] mb-6 shadow-lg shadow-amber-950/50">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>

                  <div className="inline-block px-3 py-1 rounded bg-[#b45309]/20 border border-[#b45309]/50 text-[#f59e0b] text-[11px] font-mono uppercase tracking-[2px] mb-3">
                    Verification Complete
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-4 font-serif">
                    Access Granted
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-md mb-8">
                    The 2026 Executive Advisory Catalog has been dispatched directly to{" "}
                    <strong className="text-white underline decoration-[#f59e0b] decoration-2 underline-offset-2">
                      {dispatchedEmail}
                    </strong>{" "}
                    via{" "}
                    <span className="text-[#f59e0b] font-mono text-xs">
                      support@mindvestglobalresources.com.ng
                    </span>.
                  </p>

                  <div className="w-full space-y-3 max-w-sm">
                    <a
                      href={downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-lg bg-gradient-to-r from-[#b45309] to-[#f59e0b] text-[#0f172a] font-mono text-xs uppercase font-bold tracking-wider hover:brightness-110 transition-all shadow-md"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                      </svg>
                      <span>Download PDF Directly Now</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full py-2.5 px-4 text-xs font-mono text-slate-400 hover:text-white uppercase tracking-wider transition-colors"
                    >
                      Request for another executive &rarr;
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
