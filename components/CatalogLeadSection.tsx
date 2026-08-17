"use client";

import React, { useState, useEffect, useRef } from "react";

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
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
        ref={sectionRef}
        id="catalog-access"
        style={{
          background: "#0A0D1A",
          padding: "120px 40px",
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(201,168,76,0.15)",
          borderBottom: "1px solid rgba(201,168,76,0.15)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="catalog-section"
      >
        {/* Ambient Radial Background Lighting */}
        <div
          style={{
            position: "absolute",
            top: -200,
            left: "15%",
            width: 700,
            height: 700,
            background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            right: "10%",
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(40,37,107,0.3) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        {/* Outer Frame Container */}
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: 64,
              alignItems: "center",
            }}
            className="catalog-grid"
          >
            {/* Left Column: Institutional Value Proposition */}
            <div>
              {/* Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 18px",
                  borderRadius: 100,
                  border: "1px solid rgba(201,168,76,0.4)",
                  background: "rgba(201,168,76,0.08)",
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "var(--gold)",
                    boxShadow: "0 0 10px var(--gold)",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 10,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "var(--gold-light)",
                    fontWeight: 600,
                  }}
                >
                  INSTITUTIONAL GOVERNANCE &amp; KEYNOTES
                </span>
              </div>

              {/* Headline */}
              <h2
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "clamp(32px, 4.2vw, 56px)",
                  fontWeight: 300,
                  color: "var(--cream)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.5px",
                  marginBottom: 24,
                }}
              >
                Access the Executive Advisory &amp; Architecture Catalog
              </h2>

              {/* Subheading */}
              <p
                style={{
                  fontSize: "clamp(14px, 1.15vw, 16px)",
                  color: "rgba(247,243,236,0.65)",
                  lineHeight: 1.8,
                  marginBottom: 36,
                  maxWidth: 620,
                  fontWeight: 300,
                }}
              >
                Explore complete frameworks, session scopes, and investment fee structures for Executive Keynote Engagements, The Becoming Coaching, Leadership Architecture, and Organisational Re-engineering.
              </p>

              {/* 4 Feature Bullets */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
                {[
                  "Executive Speaking & Keynote Retainers",
                  "The Becoming 12-Week Executive Coaching Scope",
                  "Full Organisational & Leadership Architecture Frameworks",
                  "Native Cross-Synergies with Origin Platform (origin.com.ng)",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                    }}
                  >
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: "rgba(201,168,76,0.15)",
                        border: "1px solid rgba(201,168,76,0.45)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--gold-light)",
                        fontSize: 11,
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </div>
                    <span
                      style={{
                        color: "var(--cream)",
                        fontSize: "clamp(13px, 1.05vw, 15px)",
                        fontWeight: 400,
                        letterSpacing: "0.2px",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Meta Tags */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  paddingTop: 24,
                  borderTop: "1px solid rgba(247,243,236,0.08)",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 10,
                    letterSpacing: "2px",
                    padding: "4px 10px",
                    borderRadius: 4,
                    background: "rgba(201,168,76,0.12)",
                    border: "1px solid rgba(201,168,76,0.25)",
                    color: "var(--gold-light)",
                    fontWeight: 600,
                  }}
                >
                  2026 EDITION
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 11,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "rgba(247,243,236,0.45)",
                  }}
                >
                  CONFIDENTIAL CORPORATE BRIEFING
                </span>
              </div>
            </div>

            {/* Right Column: Premium Executive Glass Card */}
            <div>
              <div
                style={{
                  background: "rgba(18, 16, 58, 0.75)",
                  backdropFilter: "blur(24px)",
                  border: "1px solid rgba(201, 168, 76, 0.35)",
                  borderRadius: 24,
                  padding: "48px 40px",
                  boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,76,0.1)",
                  position: "relative",
                  overflow: "hidden",
                }}
                className="form-glass-card"
              >
                {/* Glowing gold top line accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "10%",
                    right: "10%",
                    height: 2,
                    background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
                  }}
                />

                {!isSuccess ? (
                  /* Form State */
                  <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: 28 }}>
                      <div
                        style={{
                          fontFamily: "var(--font-cormorant), serif",
                          fontSize: 28,
                          color: "var(--cream)",
                          fontWeight: 400,
                          lineHeight: 1.2,
                          marginBottom: 6,
                        }}
                      >
                        Request Executive Access
                      </div>
                      <div
                        style={{
                          fontSize: 13,
                          color: "rgba(247,243,236,0.5)",
                          lineHeight: 1.5,
                        }}
                      >
                        Complete the briefing form below to unlock the fee structure &amp; catalog.
                      </div>
                    </div>

                    {errorMessage && (
                      <div
                        style={{
                          padding: "12px 16px",
                          borderRadius: 8,
                          background: "rgba(185,28,28,0.2)",
                          border: "1px solid rgba(239,68,68,0.4)",
                          color: "#fca5a5",
                          fontSize: 12,
                          marginBottom: 20,
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <span>⚠️</span>
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Inputs Container */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor="fullName"
                          style={{
                            display: "block",
                            fontFamily: "var(--font-dm-mono), monospace",
                            fontSize: 10,
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            color: "rgba(247,243,236,0.75)",
                            marginBottom: 8,
                          }}
                        >
                          Full Name <span style={{ color: "var(--gold)" }}>*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Dr. Olumide Adeleke"
                          style={{
                            width: "100%",
                            padding: "14px 16px",
                            background: "rgba(10, 13, 26, 0.8)",
                            border: "1px solid rgba(201, 168, 76, 0.25)",
                            borderRadius: 10,
                            color: "var(--cream)",
                            fontSize: 14,
                            outline: "none",
                            transition: "all 0.25s",
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = "var(--gold)";
                            e.target.style.boxShadow = "0 0 16px rgba(201, 168, 76, 0.2)";
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = "rgba(201, 168, 76, 0.25)";
                            e.target.style.boxShadow = "none";
                          }}
                        />
                      </div>

                      {/* Official Corporate Email */}
                      <div>
                        <label
                          htmlFor="email"
                          style={{
                            display: "block",
                            fontFamily: "var(--font-dm-mono), monospace",
                            fontSize: 10,
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            color: "rgba(247,243,236,0.75)",
                            marginBottom: 8,
                          }}
                        >
                          Official Corporate Email <span style={{ color: "var(--gold)" }}>*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. o.adeleke@enterprise.com"
                          style={{
                            width: "100%",
                            padding: "14px 16px",
                            background: "rgba(10, 13, 26, 0.8)",
                            border: "1px solid rgba(201, 168, 76, 0.25)",
                            borderRadius: 10,
                            color: "var(--cream)",
                            fontSize: 14,
                            outline: "none",
                            transition: "all 0.25s",
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = "var(--gold)";
                            e.target.style.boxShadow = "0 0 16px rgba(201, 168, 76, 0.2)";
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = "rgba(201, 168, 76, 0.25)";
                            e.target.style.boxShadow = "none";
                          }}
                        />
                      </div>

                      {/* Phone & Company Split Row */}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: 16,
                        }}
                        className="form-split-row"
                      >
                        <div>
                          <label
                            htmlFor="phone"
                            style={{
                              display: "block",
                              fontFamily: "var(--font-dm-mono), monospace",
                              fontSize: 10,
                              letterSpacing: "2px",
                              textTransform: "uppercase",
                              color: "rgba(247,243,236,0.75)",
                              marginBottom: 8,
                            }}
                          >
                            Phone <span style={{ color: "var(--gold)" }}>*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+234 800 000 0000"
                            style={{
                              width: "100%",
                              padding: "14px 16px",
                              background: "rgba(10, 13, 26, 0.8)",
                              border: "1px solid rgba(201, 168, 76, 0.25)",
                              borderRadius: 10,
                              color: "var(--cream)",
                              fontSize: 14,
                              outline: "none",
                              transition: "all 0.25s",
                            }}
                            onFocus={(e) => {
                              e.target.style.borderColor = "var(--gold)";
                              e.target.style.boxShadow = "0 0 16px rgba(201, 168, 76, 0.2)";
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor = "rgba(201, 168, 76, 0.25)";
                              e.target.style.boxShadow = "none";
                            }}
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="company"
                            style={{
                              display: "block",
                              fontFamily: "var(--font-dm-mono), monospace",
                              fontSize: 10,
                              letterSpacing: "2px",
                              textTransform: "uppercase",
                              color: "rgba(247,243,236,0.75)",
                              marginBottom: 8,
                            }}
                          >
                            Company / Entity <span style={{ color: "var(--gold)" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="e.g. Apex Holdings"
                            style={{
                              width: "100%",
                              padding: "14px 16px",
                              background: "rgba(10, 13, 26, 0.8)",
                              border: "1px solid rgba(201, 168, 76, 0.25)",
                              borderRadius: 10,
                              color: "var(--cream)",
                              fontSize: 14,
                              outline: "none",
                              transition: "all 0.25s",
                            }}
                            onFocus={(e) => {
                              e.target.style.borderColor = "var(--gold)";
                              e.target.style.boxShadow = "0 0 16px rgba(201, 168, 76, 0.2)";
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor = "rgba(201, 168, 76, 0.25)";
                              e.target.style.boxShadow = "none";
                            }}
                          />
                        </div>
                      </div>

                      {/* Primary Advisory Interest Dropdown */}
                      <div>
                        <label
                          htmlFor="interest"
                          style={{
                            display: "block",
                            fontFamily: "var(--font-dm-mono), monospace",
                            fontSize: 10,
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            color: "rgba(247,243,236,0.75)",
                            marginBottom: 8,
                          }}
                        >
                          Primary Advisory Interest <span style={{ color: "var(--gold)" }}>*</span>
                        </label>
                        <select
                          id="interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          style={{
                            width: "100%",
                            padding: "14px 16px",
                            background: "#0A0D1A",
                            border: "1px solid rgba(201, 168, 76, 0.25)",
                            borderRadius: 10,
                            color: "var(--cream)",
                            fontSize: 14,
                            outline: "none",
                            cursor: "pointer",
                          }}
                        >
                          {INTEREST_OPTIONS.map((opt) => (
                            <option key={opt} value={opt} style={{ background: "#0A0D1A", color: "#F7F3EC" }}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isLoading}
                        style={{
                          width: "100%",
                          padding: "18px 24px",
                          marginTop: 8,
                          background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)",
                          color: "var(--indigo-deep)",
                          fontFamily: "var(--font-dm-mono), monospace",
                          fontSize: 11,
                          letterSpacing: "3px",
                          textTransform: "uppercase",
                          fontWeight: 700,
                          border: "none",
                          borderRadius: 10,
                          cursor: isLoading ? "not-allowed" : "pointer",
                          boxShadow: "0 8px 30px rgba(201,168,76,0.3)",
                          transition: "all 0.3s",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 10,
                        }}
                        onMouseEnter={(e) => {
                          if (!isLoading) {
                            e.currentTarget.style.transform = "translateY(-2px)";
                            e.currentTarget.style.boxShadow = "0 14px 40px rgba(201,168,76,0.45)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "0 8px 30px rgba(201,168,76,0.3)";
                        }}
                      >
                        {isLoading ? "Processing Access..." : "Request Immediate Access (PDF) →"}
                      </button>

                      {/* Confidentiality Footer */}
                      <p
                        style={{
                          fontSize: 11,
                          color: "rgba(247,243,236,0.4)",
                          textAlign: "center",
                          margin: "6px 0 0 0",
                          lineHeight: 1.6,
                        }}
                      >
                        Your information is confidential. The PDF catalog will be dispatched directly via{" "}
                        <a
                          href="mailto:support@mindvestglobalresources.com.ng"
                          style={{ color: "var(--gold-light)", textDecoration: "underline" }}
                        >
                          support@mindvestglobalresources.com.ng
                        </a>.
                      </p>
                    </div>
                  </form>
                ) : (
                  /* Success Confirmation State */
                  <div style={{ textAlign: "center", padding: "16px 0" }}>
                    <div
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        background: "rgba(201,168,76,0.15)",
                        border: "2px solid var(--gold)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 28,
                        color: "var(--gold)",
                        margin: "0 auto 20px",
                        boxShadow: "0 0 30px rgba(201,168,76,0.3)",
                      }}
                    >
                      ✓
                    </div>

                    <div
                      style={{
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: 10,
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        color: "var(--gold)",
                        marginBottom: 10,
                      }}
                    >
                      Verification Complete
                    </div>

                    <div
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: 32,
                        color: "var(--cream)",
                        fontWeight: 300,
                        marginBottom: 16,
                      }}
                    >
                      Access Granted
                    </div>

                    <p
                      style={{
                        fontSize: 14,
                        color: "rgba(247,243,236,0.75)",
                        lineHeight: 1.7,
                        marginBottom: 28,
                      }}
                    >
                      The 2026 Executive Advisory Catalog has been dispatched directly to{" "}
                      <strong style={{ color: "var(--cream)", textDecoration: "underline" }}>
                        {dispatchedEmail}
                      </strong>{" "}
                      via{" "}
                      <span style={{ color: "var(--gold-light)", fontFamily: "var(--font-dm-mono)" }}>
                        support@mindvestglobalresources.com.ng
                      </span>.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      <button
                        type="button"
                        onClick={() => setIsModalOpen(true)}
                        style={{
                          width: "100%",
                          padding: "16px 24px",
                          background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)",
                          color: "var(--indigo-deep)",
                          fontFamily: "var(--font-dm-mono), monospace",
                          fontSize: 11,
                          letterSpacing: "3px",
                          textTransform: "uppercase",
                          fontWeight: 700,
                          border: "none",
                          borderRadius: 10,
                          cursor: "pointer",
                          boxShadow: "0 8px 30px rgba(201,168,76,0.3)",
                        }}
                      >
                        📖 Open Interactive Catalog Reader
                      </button>

                      <a
                        href={downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: "14px 20px",
                          borderRadius: 10,
                          background: "rgba(247,243,236,0.05)",
                          border: "1px solid rgba(201,168,76,0.3)",
                          color: "var(--cream)",
                          fontFamily: "var(--font-dm-mono), monospace",
                          fontSize: 11,
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                          textDecoration: "none",
                          display: "inline-block",
                        }}
                      >
                        ⬇ Download Official PDF
                      </a>

                      <button
                        type="button"
                        onClick={handleReset}
                        style={{
                          background: "transparent",
                          border: "none",
                          color: "rgba(247,243,236,0.45)",
                          fontFamily: "var(--font-dm-mono), monospace",
                          fontSize: 10,
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                          cursor: "pointer",
                          marginTop: 8,
                        }}
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

        {/* Responsive CSS */}
        <style>{`
          @media (max-width: 960px) {
            .catalog-section {
              padding: 70px 20px !important;
            }
            .catalog-grid {
              grid-template-columns: 1fr !important;
              gap: 48px !important;
            }
            .form-glass-card {
              padding: 32px 20px !important;
              border-radius: 18px !important;
            }
          }
          @media (max-width: 600px) {
            .form-split-row {
              grid-template-columns: 1fr !important;
              gap: 18px !important;
            }
          }
        `}</style>
      </section>

      {/* ========================================================================= */}
      {/* Interactive Read-Me Executive Catalog Modal Reader                         */}
      {/* ========================================================================= */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(5, 7, 15, 0.88)",
            backdropFilter: "blur(18px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 960,
              maxHeight: "92vh",
              background: "#0E1326",
              border: "1px solid rgba(201, 168, 76, 0.35)",
              borderRadius: 20,
              boxShadow: "0 25px 80px rgba(0,0,0,0.8)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "18px 24px",
                borderBottom: "1px solid rgba(201, 168, 76, 0.15)",
                background: "rgba(10, 13, 26, 0.95)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 9,
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    borderRadius: 4,
                    background: "rgba(201,168,76,0.15)",
                    border: "1px solid rgba(201,168,76,0.3)",
                    color: "var(--gold-light)",
                    fontWeight: 700,
                  }}
                >
                  CONFIDENTIAL EXECUTIVE BRIEFING
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <a
                  href={downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "6px 14px",
                    borderRadius: 6,
                    background: "var(--gold)",
                    color: "var(--indigo-deep)",
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 10,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Download PDF
                </a>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    background: "rgba(247,243,236,0.1)",
                    border: "1px solid rgba(247,243,236,0.2)",
                    borderRadius: 6,
                    color: "var(--cream)",
                    width: 32,
                    height: 32,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    fontSize: 16,
                  }}
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Scrollable Body */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "32px 36px",
                display: "flex",
                flexDirection: "column",
                gap: 36,
              }}
              className="modal-body-scroll"
            >
              {/* Document Banner */}
              <div style={{ borderBottom: "1px solid rgba(201,168,76,0.15)", paddingBottom: 20 }}>
                <div
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 10,
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: 8,
                  }}
                >
                  MINDVEST GLOBAL RESOURCES
                </div>
                <h1
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "clamp(24px, 3.5vw, 36px)",
                    fontWeight: 300,
                    color: "var(--cream)",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  Executive Advisory &amp; Architecture Catalog
                </h1>
                <p style={{ fontSize: 13, color: "rgba(247,243,236,0.5)", margin: "8px 0 0 0" }}>
                  Service Offerings, Keynote Engagements &amp; Pricing Framework (2026 Edition)
                </p>
              </div>

              {/* Value Philosophy */}
              <div
                style={{
                  background: "rgba(201,168,76,0.06)",
                  borderLeft: "3px solid var(--gold)",
                  padding: 20,
                  borderRadius: "0 10px 10px 0",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 10,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: 8,
                    fontWeight: 600,
                  }}
                >
                  EXECUTIVE POSITIONING &amp; VALUE PHILOSOPHY
                </div>
                <p style={{ fontSize: 14, color: "rgba(247,243,236,0.8)", lineHeight: 1.75, margin: 0, fontWeight: 300 }}>
                  At Mindvest Global Resources, we do not provide generic consulting or hourly advisory. We engineer high-yield human capital, deliver transformational keynote addresses, design resilient corporate governance, and build scalable organizational architectures. Our pricing structure reflects enterprise-level outcomes—transforming leadership alignment, driving market authority, and securing measurable bottom-line yield.
                </p>
              </div>

              {/* 1. Master Pricing Table */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14 }}>
                  <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 22, color: "var(--cream)" }}>
                    1. Advisory &amp; Speaking Master Pricing Table
                  </div>
                </div>

                <div style={{ overflowX: "auto", borderRadius: 10, border: "1px solid rgba(201,168,76,0.2)" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: 13, minWidth: 600 }}>
                    <thead>
                      <tr style={{ background: "rgba(201,168,76,0.12)", borderBottom: "1px solid rgba(201,168,76,0.2)", color: "var(--gold-light)", fontFamily: "var(--font-dm-mono)", fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase" }}>
                        <th style={{ padding: "12px 16px" }}>Service Line</th>
                        <th style={{ padding: "12px 16px" }}>Core Scope</th>
                        <th style={{ padding: "12px 16px" }}>Target Profile</th>
                        <th style={{ padding: "12px 16px", textAlign: "right" }}>Investment Level</th>
                      </tr>
                    </thead>
                    <tbody style={{ color: "rgba(247,243,236,0.85)" }}>
                      <tr style={{ borderBottom: "1px solid rgba(247,243,236,0.06)" }}>
                        <td style={{ padding: "14px 16px", fontWeight: 600, color: "var(--cream)" }}>
                          Executive Keynote Speaking
                          <div style={{ fontSize: 10, color: "var(--gold-muted)", fontFamily: "var(--font-dm-mono)" }}>On-Site / Virtual</div>
                        </td>
                        <td style={{ padding: "14px 16px", fontSize: 12 }}>High-impact keynotes on Leadership Architecture, Re-engineering, &amp; Enterprise Vision.</td>
                        <td style={{ padding: "14px 16px", fontSize: 12 }}>AGMs, Summits, Retreats</td>
                        <td style={{ padding: "14px 16px", textAlign: "right", fontFamily: "var(--font-dm-mono)", color: "var(--gold-light)", fontWeight: 700 }}>
                          ₦1.0M – ₦2.5M
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid rgba(247,243,236,0.06)" }}>
                        <td style={{ padding: "14px 16px", fontWeight: 600, color: "var(--cream)" }}>
                          The Becoming Coaching
                          <div style={{ fontSize: 10, color: "var(--gold-muted)", fontFamily: "var(--font-dm-mono)" }}>12-Week Intensive</div>
                        </td>
                        <td style={{ padding: "14px 16px", fontSize: 12 }}>Vision architecture, personal branding, &amp; executive mindset re-engineering.</td>
                        <td style={{ padding: "14px 16px", fontSize: 12 }}>Executives, Founders, C-Suite</td>
                        <td style={{ padding: "14px 16px", textAlign: "right", fontFamily: "var(--font-dm-mono)", color: "var(--gold-light)", fontWeight: 700 }}>
                          ₦750k – ₦1.5M
                        </td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid rgba(247,243,236,0.06)" }}>
                        <td style={{ padding: "14px 16px", fontWeight: 600, color: "var(--cream)" }}>
                          Leadership Architecture
                          <div style={{ fontSize: 10, color: "var(--gold-muted)", fontFamily: "var(--font-dm-mono)" }}>60–90 Day Project</div>
                        </td>
                        <td style={{ padding: "14px 16px", fontSize: 12 }}>Alignment workshops, pipeline design, succession planning, &amp; decision rights.</td>
                        <td style={{ padding: "14px 16px", fontSize: 12 }}>Scale-ups, Mid-Market Groups</td>
                        <td style={{ padding: "14px 16px", textAlign: "right", fontFamily: "var(--font-dm-mono)", color: "var(--gold-light)", fontWeight: 700 }}>
                          ₦2.5M – ₦5.0M
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: "14px 16px", fontWeight: 600, color: "var(--cream)" }}>
                          Organisational Architecture
                          <div style={{ fontSize: 10, color: "var(--gold-muted)", fontFamily: "var(--font-dm-mono)" }}>Corporate Retainer</div>
                        </td>
                        <td style={{ padding: "14px 16px", fontSize: 12 }}>Total corporate restructuring, process optimization, &amp; quarterly board advisory.</td>
                        <td style={{ padding: "14px 16px", fontSize: 12 }}>Conglomerates, Institutions</td>
                        <td style={{ padding: "14px 16px", textAlign: "right", fontFamily: "var(--font-dm-mono)", color: "var(--gold-light)", fontWeight: 700 }}>
                          ₦5.0M – ₦15.0M+
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 2. Detailed 4 Delivery Frameworks */}
              <div>
                <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 22, color: "var(--cream)", marginBottom: 16 }}>
                  2. Detailed Service Scope &amp; Delivery Frameworks
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: 16,
                  }}
                >
                  {[
                    {
                      tag: "KEYNOTE ADDRESS",
                      title: "Executive Speaking",
                      points: ["60–90 min keynote presentation", "Event theme alignment", "Pre-event interview", "VIP strategy roundtable"],
                    },
                    {
                      tag: "HUMAN CAPITAL",
                      title: "The Becoming Coaching",
                      points: ["Weekly 90-min 1-on-1 coaching", "Executive personal audit", "Identity re-engineering", "24/7 strategic desk chat"],
                    },
                    {
                      tag: "GOVERNANCE & KEYNOTES",
                      title: "Leadership Architecture",
                      points: ["On-site executive speaking", "Competency model mapping", "Succession planning blueprints", "Board alignment workshops"],
                    },
                    {
                      tag: "ENTERPRISE SCALE",
                      title: "Organisational Architecture",
                      points: ["Full corporate restructuring", "Process optimization & workflows", "Culture & performance systems", "Quarterly board advisory"],
                    },
                  ].map((col, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: 16,
                        borderRadius: 10,
                        background: "rgba(247,243,236,0.03)",
                        border: "1px solid rgba(201,168,76,0.2)",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-dm-mono), monospace",
                          fontSize: 9,
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                          color: "var(--gold)",
                          marginBottom: 6,
                          fontWeight: 700,
                        }}
                      >
                        {col.tag}
                      </div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "var(--cream)", marginBottom: 12 }}>
                        {col.title}
                      </div>
                      <ul style={{ margin: 0, paddingLeft: 14, fontSize: 11, color: "rgba(247,243,236,0.7)", lineHeight: 1.7 }}>
                        {col.points.map((pt, pIdx) => (
                          <li key={pIdx}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div
                style={{
                  borderTop: "1px solid rgba(201,168,76,0.15)",
                  paddingTop: 20,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: 12,
                  color: "rgba(247,243,236,0.5)",
                  flexWrap: "wrap",
                  gap: 12,
                }}
              >
                <div>
                  Mindvest Global Resources Ltd. · <a href="mailto:support@mindvestglobalresources.com.ng" style={{ color: "var(--gold)" }}>support@mindvestglobalresources.com.ng</a>
                </div>
                <a
                  href="https://calendly.com/mindvestglobalresources/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "8px 18px",
                    borderRadius: 6,
                    background: "var(--gold)",
                    color: "var(--indigo-deep)",
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 10,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Schedule Executive Call →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
