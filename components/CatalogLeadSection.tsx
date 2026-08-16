"use client";

import React, { useState, useEffect } from "react";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [dispatchedEmail, setDispatchedEmail] = useState("");
  const [downloadUrl, setDownloadUrl] = useState<string>("/docs/Mindvest_Advisory_Catalog_Updated.pdf");

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

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

    // Validation
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
      // Automatically open the interactive Read-Me catalog modal upon submission
      setIsModalOpen(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred.";
      setErrorMessage(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setIsModalOpen(false);
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
    <>
      <section
        id="catalog-access"
        className="relative bg-[#0f172a] text-slate-100 py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden border-y border-[#1e293b]"
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
            {/* Left Column: Value Proposition & Scope Breakdown */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              {/* Executive Badge */}
              <div className="inline-flex items-center self-start gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-[#b45309]/50 bg-[#b45309]/10 text-[#f59e0b] text-[10px] sm:text-[11px] font-mono tracking-[2px] sm:tracking-[2.5px] uppercase font-semibold mb-4 sm:mb-6">
                <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse" />
                INSTITUTIONAL GOVERNANCE &amp; KEYNOTES
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-[1.2] sm:leading-[1.15] mb-4 sm:mb-6 font-serif">
                Access the Executive Advisory &amp; Architecture Catalog
              </h2>

              {/* Sub-heading */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-light leading-relaxed mb-6 sm:mb-8">
                Explore complete frameworks, session scopes, and investment fee structures for Executive Keynote Engagements, The Becoming Coaching, Leadership Architecture, and Organisational Re-engineering.
              </p>

              {/* Checked Bullet Points */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  "Executive Speaking & Keynote Retainers",
                  "The Becoming 12-Week Executive Coaching Scope",
                  "Full Organisational & Leadership Architecture Frameworks",
                  "Native Cross-Synergies with Origin Platform (origin.com.ng)",
                ].map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#b45309]/20 border border-[#f59e0b]/40 flex items-center justify-center text-[#f59e0b] mt-0.5 transition-colors group-hover:bg-[#f59e0b]/20">
                      <svg
                        className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-slate-200 text-xs sm:text-sm lg:text-base font-normal leading-snug">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* Trust / Catalog Meta Tag */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-5 sm:pt-6 border-t border-[#1e293b] text-[11px] sm:text-xs font-mono text-slate-400">
                <span className="px-2.5 py-1 rounded bg-[#1e293b] text-slate-300 font-medium">
                  2026 EDITION
                </span>
                <span>CONFIDENTIAL CORPORATE BRIEFING</span>
                <span className="hidden sm:inline text-slate-600">•</span>
                <span className="text-amber-500/90 font-medium">INSTANT DISPATCH</span>
              </div>
            </div>

            {/* Right Column: Form or Success State */}
            <div className="lg:col-span-6 w-full">
              <div className="relative bg-[#131d33] border border-[#334155] rounded-2xl p-5 sm:p-8 lg:p-10 shadow-2xl shadow-black/60 backdrop-blur-sm">
                {/* Amber top highlight line */}
                <div className="absolute top-0 left-6 right-6 sm:left-8 sm:right-8 h-[2px] bg-gradient-to-r from-transparent via-[#f59e0b] to-transparent opacity-75" />

                {!isSuccess ? (
                  /* Gated Lead Capture Form */
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div className="border-b border-[#1e293b] pb-3 sm:pb-4 mb-2">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white tracking-tight">
                        Request Executive Access
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1">
                        Complete the briefing form below to unlock the fee structure &amp; catalog.
                      </p>
                    </div>

                    {errorMessage && (
                      <div className="p-3 sm:p-3.5 rounded-lg bg-red-950/60 border border-red-800 text-red-200 text-xs sm:text-sm flex items-center gap-2.5">
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
                        className="block text-[11px] sm:text-xs font-mono tracking-wider uppercase text-slate-300 mb-1"
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
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-base sm:text-sm placeholder-slate-500 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-colors"
                      />
                    </div>

                    {/* Corporate Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[11px] sm:text-xs font-mono tracking-wider uppercase text-slate-300 mb-1"
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
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-base sm:text-sm placeholder-slate-500 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-colors"
                      />
                    </div>

                    {/* Phone & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-[11px] sm:text-xs font-mono tracking-wider uppercase text-slate-300 mb-1"
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
                          className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-base sm:text-sm placeholder-slate-500 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className="block text-[11px] sm:text-xs font-mono tracking-wider uppercase text-slate-300 mb-1"
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
                          className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-base sm:text-sm placeholder-slate-500 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Primary Interest */}
                    <div>
                      <label
                        htmlFor="interest"
                        className="block text-[11px] sm:text-xs font-mono tracking-wider uppercase text-slate-300 mb-1"
                      >
                        Primary Advisory Interest <span className="text-[#f59e0b]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          className="w-full appearance-none px-3.5 py-2.5 sm:px-4 sm:py-3 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-base sm:text-sm focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-colors pr-10 cursor-pointer"
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
                      className="w-full min-h-[48px] mt-2 py-3.5 sm:py-4 px-5 sm:px-6 rounded-lg bg-gradient-to-r from-[#b45309] via-[#d97706] to-[#f59e0b] text-[#0f172a] font-mono text-xs sm:text-sm font-bold uppercase tracking-[1.5px] sm:tracking-[2px] shadow-lg shadow-amber-900/30 hover:brightness-110 active:scale-[0.99] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 touch-manipulation"
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
                    <p className="text-[10px] sm:text-[11px] text-slate-400 text-center leading-relaxed pt-1 sm:pt-2">
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
                  <div className="py-4 sm:py-6 text-center animate-fade-in flex flex-col items-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#b45309]/20 border-2 border-[#f59e0b] flex items-center justify-center text-[#f59e0b] mb-4 sm:mb-6 shadow-lg shadow-amber-950/50">
                      <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>

                    <div className="inline-block px-3 py-1 rounded bg-[#b45309]/20 border border-[#b45309]/50 text-[#f59e0b] text-[10px] sm:text-[11px] font-mono uppercase tracking-[2px] mb-2 sm:mb-3">
                      Verification Complete
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white tracking-tight mb-3 sm:mb-4 font-serif">
                      Access Granted
                    </h3>

                    <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed max-w-md mb-6">
                      The 2026 Executive Advisory Catalog has been dispatched directly to{" "}
                      <strong className="text-white underline decoration-[#f59e0b] decoration-2 underline-offset-2 break-all">
                        {dispatchedEmail}
                      </strong>{" "}
                      via{" "}
                      <span className="text-[#f59e0b] font-mono text-[11px] sm:text-xs">
                        support@mindvestglobalresources.com.ng
                      </span>.
                    </p>

                    <div className="w-full space-y-3 max-w-sm">
                      {/* Primary Button: Open the Read-Me Interactive Catalog */}
                      <button
                        type="button"
                        onClick={() => setIsModalOpen(true)}
                        className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 py-3 sm:py-4 px-4 sm:px-6 rounded-lg bg-gradient-to-r from-[#b45309] via-[#d97706] to-[#f59e0b] text-[#0f172a] font-mono text-xs uppercase font-bold tracking-wider hover:brightness-110 active:scale-[0.99] transition-all shadow-lg shadow-amber-950/40 touch-manipulation"
                      >
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                        </svg>
                        <span>Open Interactive Catalog Reader</span>
                      </button>

                      {/* Secondary Link: Direct PDF download */}
                      <a
                        href={downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full min-h-[42px] inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded-lg bg-[#1e293b] hover:bg-[#334155] text-slate-200 border border-[#334155] font-mono text-xs uppercase tracking-wider transition-colors touch-manipulation"
                      >
                        <svg className="w-4 h-4 text-[#f59e0b] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        <span>Download Raw PDF File</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleReset}
                        className="w-full py-2 px-4 text-xs font-mono text-slate-400 hover:text-white uppercase tracking-wider transition-colors"
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

      {/* ========================================================================= */}
      {/* Interactive Read-Me Executive Catalog Modal Reader                         */}
      {/* ========================================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-10 bg-black/85 backdrop-blur-md animate-fade-in">
          {/* Modal Container */}
          <div className="relative w-full max-w-5xl max-h-[96vh] sm:max-h-[92vh] flex flex-col bg-[#0b1120] border border-[#334155] rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden text-slate-100">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-[#1e293b] bg-[#0f172a]">
              <div className="flex items-center gap-2 sm:gap-3 overflow-hidden">
                <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-[#b45309]/20 border border-[#b45309]/50 text-[#f59e0b] text-[9px] sm:text-[10px] font-mono uppercase tracking-widest font-semibold whitespace-nowrap">
                  CONFIDENTIAL BRIEFING
                </span>
                <span className="hidden md:inline text-xs font-mono text-slate-400 truncate">
                  Mindvest Global Resources Ltd.
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded bg-[#1e293b] hover:bg-[#334155] text-[11px] sm:text-xs font-mono text-slate-200 border border-[#334155] transition-colors whitespace-nowrap"
                >
                  <svg className="w-3.5 h-3.5 text-[#f59e0b]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  <span className="hidden sm:inline">Download PDF</span>
                  <span className="sm:hidden">PDF</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-8 h-8 rounded-lg bg-[#1e293b] hover:bg-[#334155] text-slate-300 hover:text-white flex items-center justify-center transition-colors flex-shrink-0"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Scrollable Document Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-10 space-y-8 sm:space-y-10 custom-scrollbar overscroll-contain">
              {/* Document Banner Title */}
              <div className="border-b border-[#1e293b] pb-6 sm:pb-8">
                <div className="text-[#f59e0b] font-mono text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] uppercase font-bold mb-1.5 sm:mb-2">
                  MINDVEST GLOBAL RESOURCES
                </div>
                <h1 className="text-xl sm:text-3xl lg:text-4xl font-light text-white font-serif tracking-tight leading-snug">
                  Executive Advisory &amp; Architecture Catalog
                </h1>
                <p className="text-xs sm:text-sm lg:text-base text-slate-400 mt-1.5 sm:mt-2">
                  Service Offerings, Keynote Engagements &amp; Pricing Framework (2026 Edition)
                </p>
              </div>

              {/* Value Philosophy */}
              <div className="bg-[#131d33] border-l-4 border-[#f59e0b] p-4 sm:p-6 rounded-r-xl">
                <h3 className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#f59e0b] font-bold mb-1.5 sm:mb-2">
                  EXECUTIVE POSITIONING &amp; VALUE PHILOSOPHY
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-slate-200 leading-relaxed font-light">
                  At Mindvest Global Resources, we do not provide generic consulting or hourly advisory. We engineer high-yield human capital, deliver transformational keynote addresses, design resilient corporate governance, and build scalable organizational architectures. Our pricing structure reflects enterprise-level outcomes—transforming leadership alignment, driving market authority, and securing measurable bottom-line yield.
                </p>
              </div>

              {/* 1. Master Pricing Table */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-[#1e293b] pb-2">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-serif font-light text-white">
                    1. Advisory &amp; Speaking Master Pricing Table
                  </h2>
                  <span className="text-[10px] sm:text-xs font-mono text-slate-400">
                    Outcome-based fee schedules across keynotes &amp; transformation
                  </span>
                </div>

                {/* Responsive Table Container with horizontal touch scroll */}
                <div className="overflow-x-auto rounded-xl border border-[#1e293b] bg-[#0f172a] -mx-1 sm:mx-0">
                  <table className="w-full text-left text-xs sm:text-sm min-w-[620px]">
                    <thead>
                      <tr className="border-b border-[#1e293b] bg-[#1e293b]/60 text-slate-300 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider">
                        <th className="py-3 px-3 sm:px-6">Service Line</th>
                        <th className="py-3 px-3 sm:px-6">Core Deliverables &amp; Scope</th>
                        <th className="py-3 px-3 sm:px-6">Target Client Profile</th>
                        <th className="py-3 px-3 sm:px-6 text-right">Investment Level</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1e293b] text-slate-300">
                      <tr className="hover:bg-[#131d33] transition-colors">
                        <td className="py-3.5 px-3 sm:px-6 font-semibold text-white">
                          Executive Keynote Speaking
                          <div className="text-[10px] sm:text-[11px] font-normal text-slate-400 font-mono">On-Site / Virtual</div>
                        </td>
                        <td className="py-3.5 px-3 sm:px-6 leading-relaxed">
                          High-impact keynotes on Leadership Architecture, Organizational Re-engineering, Mindset Transformation, and Enterprise Vision.
                        </td>
                        <td className="py-3.5 px-3 sm:px-6 text-slate-300">
                          Corporate AGMs, industry summits, executive retreats, global conferences.
                        </td>
                        <td className="py-3.5 px-3 sm:px-6 text-right font-mono font-bold text-[#f59e0b] whitespace-nowrap">
                          ₦1,000,000 –<br />₦2,500,000
                          <div className="text-[9px] sm:text-[10px] text-slate-400 font-normal">per keynote session</div>
                        </td>
                      </tr>

                      <tr className="hover:bg-[#131d33] transition-colors">
                        <td className="py-3.5 px-3 sm:px-6 font-semibold text-white">
                          The Becoming Coaching
                          <div className="text-[10px] sm:text-[11px] font-normal text-slate-400 font-mono">12-Week Executive Program</div>
                        </td>
                        <td className="py-3.5 px-3 sm:px-6 leading-relaxed">
                          Personal vision architecture, high-performance executive mindset, identity re-engineering, strategic branding, and elite accountability.
                        </td>
                        <td className="py-3.5 px-3 sm:px-6 text-slate-300">
                          Mid-to-senior executives, high-yield founders, emerging C-suite leaders.
                        </td>
                        <td className="py-3.5 px-3 sm:px-6 text-right font-mono font-bold text-[#f59e0b] whitespace-nowrap">
                          ₦750,000 –<br />₦1,500,000
                          <div className="text-[9px] sm:text-[10px] text-slate-400 font-normal">per coachee</div>
                        </td>
                      </tr>

                      <tr className="hover:bg-[#131d33] transition-colors">
                        <td className="py-3.5 px-3 sm:px-6 font-semibold text-white">
                          Leadership Architecture
                          <div className="text-[10px] sm:text-[11px] font-normal text-slate-400 font-mono">60–90 Day Transformation</div>
                        </td>
                        <td className="py-3.5 px-3 sm:px-6 leading-relaxed">
                          On-site executive alignment workshops, bespoke executive pipelines, succession planning, and decision-rights mapping.
                        </td>
                        <td className="py-3.5 px-3 sm:px-6 text-slate-300">
                          Expanding mid-market enterprises, scale-ups, and family businesses.
                        </td>
                        <td className="py-3.5 px-3 sm:px-6 text-right font-mono font-bold text-[#f59e0b] whitespace-nowrap">
                          ₦2,500,000 –<br />₦5,000,000
                          <div className="text-[9px] sm:text-[10px] text-slate-400 font-normal">flat project fee</div>
                        </td>
                      </tr>

                      <tr className="hover:bg-[#131d33] transition-colors">
                        <td className="py-3.5 px-3 sm:px-6 font-semibold text-white">
                          Organisational Architecture
                          <div className="text-[10px] sm:text-[11px] font-normal text-slate-400 font-mono">Full Restructuring / Retainer</div>
                        </td>
                        <td className="py-3.5 px-3 sm:px-6 leading-relaxed">
                          End-to-end corporate restructuring, process engineering, culture transformation, strategic policy blueprints, and quarterly board advisory.
                        </td>
                        <td className="py-3.5 px-3 sm:px-6 text-slate-300">
                          Established corporate groups, multi-division enterprises, institutional clients.
                        </td>
                        <td className="py-3.5 px-3 sm:px-6 text-right font-mono font-bold text-[#f59e0b] whitespace-nowrap">
                          ₦5,000,000 –<br />₦15,000,000+
                          <div className="text-[9px] sm:text-[10px] text-slate-400 font-normal">or ₦1.5M–₦3M/mo retainer</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 2. Detailed Service Scope & Delivery Frameworks */}
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-serif font-light text-white border-b border-[#1e293b] pb-2">
                  2. Detailed Service Scope &amp; Delivery Frameworks
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {/* Pillar 1 */}
                  <div className="p-4 sm:p-5 rounded-xl bg-[#0f172a] border border-[#1e293b] hover:border-[#f59e0b]/50 transition-colors">
                    <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[#f59e0b] font-bold mb-1">
                      KEYNOTE ADDRESS
                    </div>
                    <h4 className="text-sm sm:text-base font-semibold text-white mb-1.5 sm:mb-2">Executive Speaking</h4>
                    <p className="text-[11px] sm:text-xs text-slate-400 mb-3 sm:mb-4 leading-relaxed">
                      On-site keynotes and high-stakes executive retreat presentations.
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs text-slate-300">
                      <li className="flex items-center gap-2"><span className="text-[#f59e0b] flex-shrink-0">•</span> 60–90 min keynote presentation</li>
                      <li className="flex items-center gap-2"><span className="text-[#f59e0b] flex-shrink-0">•</span> Customized event theme alignment</li>
                      <li className="flex items-center gap-2"><span className="text-[#f59e0b] flex-shrink-0">•</span> Pre-event executive interview</li>
                      <li className="flex items-center gap-2"><span className="text-[#f59e0b] flex-shrink-0">•</span> Audience Q&amp;A &amp; engagement</li>
                      <li className="flex items-center gap-2"><span className="text-[#f59e0b] flex-shrink-0">•</span> VIP strategy roundtable inclusion</li>
                    </ul>
                  </div>

                  {/* Pillar 2 */}
                  <div className="p-4 sm:p-5 rounded-xl bg-[#0f172a] border border-[#1e293b] hover:border-[#f59e0b]/50 transition-colors">
                    <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[#f59e0b] font-bold mb-1">
                      HUMAN CAPITAL
                    </div>
                    <h4 className="text-sm sm:text-base font-semibold text-white mb-1.5 sm:mb-2">The Becoming Coaching</h4>
                    <p className="text-[11px] sm:text-xs text-slate-400 mb-3 sm:mb-4 leading-relaxed">
                      High-touch 1-on-1 intensive aligning personal authority with execution.
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs text-slate-300">
                      <li className="flex items-center gap-2"><span className="text-[#f59e0b] flex-shrink-0">•</span> Weekly 90-min 1-on-1 coaching</li>
                      <li className="flex items-center gap-2"><span className="text-[#f59e0b] flex-shrink-0">•</span> Executive personal audit</li>
                      <li className="flex items-center gap-2"><span className="text-[#f59e0b] flex-shrink-0">•</span> Identity re-engineering</li>
                      <li className="flex items-center gap-2"><span className="text-[#f59e0b] flex-shrink-0">•</span> Origin Platform publishing access</li>
                      <li className="flex items-center gap-2"><span className="text-[#f59e0b] flex-shrink-0">•</span> 24/7 strategic desk chat</li>
                    </ul>
                  </div>

                  {/* Pillar 3 */}
                  <div className="p-4 sm:p-5 rounded-xl bg-[#0f172a] border border-[#1e293b] hover:border-[#f59e0b]/50 transition-colors">
                    <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[#f59e0b] font-bold mb-1">
                      GOVERNANCE &amp; KEYNOTES
                    </div>
                    <h4 className="text-sm sm:text-base font-semibold text-white mb-1.5 sm:mb-2">Leadership Architecture</h4>
                    <p className="text-[11px] sm:text-xs text-slate-400 mb-3 sm:mb-4 leading-relaxed">
                      Structuring the leadership engine &amp; on-site alignment workshops.
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs text-slate-300">
                      <li className="flex items-center gap-2"><span className="text-[#f59e0b] flex-shrink-0">•</span> On-site executive speaking</li>
                      <li className="flex items-center gap-2"><span className="text-[#f59e0b] flex-shrink-0">•</span> Competency model mapping</li>
                      <li className="flex items-center gap-2"><span className="text-[#f59e0b] flex-shrink-0">•</span> Succession planning blueprints</li>
                      <li className="flex items-center gap-2"><span className="text-[#f59e0b] flex-shrink-0">•</span> C-suite governance frameworks</li>
                      <li className="flex items-center gap-2"><span className="text-[#f59e0b] flex-shrink-0">•</span> Board alignment workshops</li>
                    </ul>
                  </div>

                  {/* Pillar 4 */}
                  <div className="p-4 sm:p-5 rounded-xl bg-[#0f172a] border border-[#1e293b] hover:border-[#f59e0b]/50 transition-colors">
                    <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[#f59e0b] font-bold mb-1">
                      ENTERPRISE SCALE
                    </div>
                    <h4 className="text-sm sm:text-base font-semibold text-white mb-1.5 sm:mb-2">Organisational Architecture</h4>
                    <p className="text-[11px] sm:text-xs text-slate-400 mb-3 sm:mb-4 leading-relaxed">
                      Total structural re-engineering to eliminate friction and maximize yield.
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs text-slate-300">
                      <li className="flex items-center gap-2"><span className="text-[#f59e0b] flex-shrink-0">•</span> Full-scale corporate restructuring</li>
                      <li className="flex items-center gap-2"><span className="text-[#f59e0b] flex-shrink-0">•</span> Process optimization &amp; workflows</li>
                      <li className="flex items-center gap-2"><span className="text-[#f59e0b] flex-shrink-0">•</span> Culture &amp; performance systems</li>
                      <li className="flex items-center gap-2"><span className="text-[#f59e0b] flex-shrink-0">•</span> Multi-division brand alignment</li>
                      <li className="flex items-center gap-2"><span className="text-[#f59e0b] flex-shrink-0">•</span> Quarterly board advisory seats</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Document Footer */}
              <div className="pt-5 sm:pt-6 border-t border-[#1e293b] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono text-center sm:text-left">
                <div>
                  Mindvest Global Resources Ltd. · <a href="mailto:support@mindvestglobalresources.com.ng" className="text-[#f59e0b] hover:underline">support@mindvestglobalresources.com.ng</a>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-end">
                  <a
                    href="https://calendly.com/mindvestglobalresources/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center px-4 py-2.5 rounded bg-[#f59e0b] text-[#0f172a] font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors text-xs"
                  >
                    Schedule Executive Call &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
