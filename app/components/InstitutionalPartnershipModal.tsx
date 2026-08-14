"use client";

import { useState } from "react";

interface InstitutionalPartnershipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InstitutionalPartnershipModal({
  isOpen,
  onClose,
}: InstitutionalPartnershipModalProps) {
  const [formData, setFormData] = useState({
    institutionName: "",
    contactName: "",
    title: "",
    corporateEmail: "",
    phone: "",
    workforceSize: "50–250 Staff",
    partnershipTrack: "Culture Transformation & Values Alignment",
    brief: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      institutionName: "",
      contactName: "",
      title: "",
      corporateEmail: "",
      phone: "",
      workforceSize: "50–250 Staff",
      partnershipTrack: "Culture Transformation & Values Alignment",
      brief: "",
    });
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999,
        background: "rgba(10, 8, 30, 0.82)",
        backdropFilter: "blur(16px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        animation: "fadeIn 0.3s ease forwards",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #1C1A4A 0%, #0F0D2E 100%)",
          border: "1px solid rgba(201, 168, 76, 0.35)",
          borderRadius: "4px",
          maxWidth: "920px",
          width: "100%",
          position: "relative",
          boxShadow: "0 30px 80px rgba(0, 0, 0, 0.8)",
          color: "var(--cream)",
          maxHeight: "92vh",
          overflowY: "auto",
          animation: "modalSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 18,
            zIndex: 10,
            background: "rgba(18, 16, 58, 0.6)",
            border: "1px solid rgba(201, 168, 76, 0.2)",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "rgba(247, 243, 236, 0.7)",
            fontSize: "24px",
            cursor: "pointer",
            lineHeight: 1,
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--gold)";
            e.currentTarget.style.borderColor = "var(--gold)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "rgba(247, 243, 236, 0.7)";
            e.currentTarget.style.borderColor = "rgba(201, 168, 76, 0.2)";
          }}
          aria-label="Close"
        >
          &times;
        </button>

        {!submitted ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "0.85fr 1.15fr",
            }}
            className="institutional-modal-grid"
          >
            {/* Left Column: Photo & Institutional Authority Panel */}
            <div
              style={{
                background: "linear-gradient(180deg, rgba(28, 26, 74, 0.95) 0%, rgba(15, 13, 46, 1) 100%)",
                borderRight: "1px solid rgba(201, 168, 76, 0.2)",
                padding: "40px 32px 36px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
              }}
              className="institutional-photo-col"
            >
              <div
                style={{
                  position: "absolute",
                  top: "20%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "260px",
                  height: "260px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(201, 168, 76, 0.18) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              <div>
                <div
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: "9px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: "16px",
                  }}
                >
                  Institutional Advisory
                </div>

                {/* Portrait Image */}
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "18px",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "240px",
                      position: "relative",
                      borderRadius: "4px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src="/images/zeki-inquiry.png"
                      alt="Zeki Ubor"
                      style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "310px",
                        objectFit: "contain",
                        display: "block",
                        filter: "drop-shadow(0 15px 30px rgba(0, 0, 0, 0.6))",
                        maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                      }}
                    />
                  </div>
                </div>

                {/* Name & Bio Details */}
                <div style={{ textAlign: "center" }}>
                  <h4
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "22px",
                      fontWeight: 600,
                      color: "var(--cream)",
                      lineHeight: 1.1,
                      margin: "0 0 4px 0",
                    }}
                  >
                    Zeki Ubor
                  </h4>
                  <div
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: "9px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      marginBottom: "12px",
                    }}
                  >
                    Principal & Founder · Mindvest Global
                  </div>

                  <p
                    style={{
                      fontSize: "12px",
                      color: "rgba(247, 243, 236, 0.65)",
                      lineHeight: 1.6,
                      fontStyle: "italic",
                      margin: "0 auto",
                      maxWidth: "260px",
                    }}
                  >
                    &ldquo;Structural design for institutions seeking to align human capital with monumental vision.&rdquo;
                  </p>
                </div>
              </div>

              {/* Direct Booking Option */}
              <div
                style={{
                  marginTop: "20px",
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(201, 168, 76, 0.15)",
                  textAlign: "center",
                }}
              >
                <a
                  href="https://calendly.com/mindvestglobalresources/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: "9.5px",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gold)")}
                >
                  <span>Book Executive Briefing</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Right Column: Institutional Form */}
            <div style={{ padding: "40px 36px 36px" }}>
              {/* Header */}
              <div style={{ marginBottom: "22px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: "9px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "var(--gold-muted)",
                    marginBottom: "6px",
                  }}
                >
                  Organizational Architecture · Division III
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "clamp(24px, 3.5vw, 32px)",
                    fontWeight: 300,
                    color: "var(--cream)",
                    lineHeight: 1.15,
                    margin: 0,
                  }}
                >
                  Partner With <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Mindvest Global</em>
                </h3>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }} className="modal-input-row">
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: "9px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: "var(--gold-muted)",
                        marginBottom: "5px",
                      }}
                    >
                      Institution / Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Zenith Bank, Dangote Group"
                      value={formData.institutionName}
                      onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(201, 168, 76, 0.2)",
                        borderRadius: "2px",
                        color: "var(--cream)",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: "13px",
                        outline: "none",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(201, 168, 76, 0.2)")}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: "9px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: "var(--gold-muted)",
                        marginBottom: "5px",
                      }}
                    >
                      Workforce / Team Scale
                    </label>
                    <select
                      value={formData.workforceSize}
                      onChange={(e) => setFormData({ ...formData, workforceSize: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        background: "#1C1A4A",
                        border: "1px solid rgba(201, 168, 76, 0.2)",
                        borderRadius: "2px",
                        color: "var(--cream)",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: "13px",
                        outline: "none",
                        cursor: "pointer",
                      }}
                    >
                      <option value="25–100 Staff">25–100 Staff</option>
                      <option value="100–500 Staff">100–500 Staff</option>
                      <option value="500–2,000 Staff">500–2,000 Staff</option>
                      <option value="2,000+ Enterprise">2,000+ Enterprise Scale</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }} className="modal-input-row">
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: "9px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: "var(--gold-muted)",
                        marginBottom: "5px",
                      }}
                    >
                      Lead Executive Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Zaid Alabi"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(201, 168, 76, 0.2)",
                        borderRadius: "2px",
                        color: "var(--cream)",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: "13px",
                        outline: "none",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(201, 168, 76, 0.2)")}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: "9px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: "var(--gold-muted)",
                        marginBottom: "5px",
                      }}
                    >
                      Executive Role / Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chief People Officer / MD"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(201, 168, 76, 0.2)",
                        borderRadius: "2px",
                        color: "var(--cream)",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: "13px",
                        outline: "none",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(201, 168, 76, 0.2)")}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }} className="modal-input-row">
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: "9px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: "var(--gold-muted)",
                        marginBottom: "5px",
                      }}
                    >
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="executive@company.com"
                      value={formData.corporateEmail}
                      onChange={(e) => setFormData({ ...formData, corporateEmail: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(201, 168, 76, 0.2)",
                        borderRadius: "2px",
                        color: "var(--cream)",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: "13px",
                        outline: "none",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(201, 168, 76, 0.2)")}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: "9px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: "var(--gold-muted)",
                        marginBottom: "5px",
                      }}
                    >
                      Direct Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+234 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(201, 168, 76, 0.2)",
                        borderRadius: "2px",
                        color: "var(--cream)",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: "13px",
                        outline: "none",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(201, 168, 76, 0.2)")}
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: "9px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "var(--gold-muted)",
                      marginBottom: "5px",
                    }}
                  >
                    Partnership Track
                  </label>
                  <select
                    value={formData.partnershipTrack}
                    onChange={(e) => setFormData({ ...formData, partnershipTrack: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      background: "#1C1A4A",
                      border: "1px solid rgba(201, 168, 76, 0.2)",
                      borderRadius: "2px",
                      color: "var(--cream)",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: "13px",
                      outline: "none",
                      cursor: "pointer",
                    }}
                  >
                    <option value="Culture Transformation & Values Alignment">Culture Transformation & Values Alignment</option>
                    <option value="Corporate Leadership Development & Team Architecture">Corporate Leadership Development & Team Architecture</option>
                    <option value="6–12 Month Strategic Consulting Retainer">6–12 Month Strategic Consulting Retainer</option>
                    <option value="Executive Boardroom Retreat & Keynote Strategy">Executive Boardroom Retreat & Keynote Strategy</option>
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: "9px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "var(--gold-muted)",
                      marginBottom: "5px",
                    }}
                  >
                    Overview of Institutional Vision & Challenge
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Outline your enterprise transformation goals, culture misalignment, or strategic growth objectives..."
                    value={formData.brief}
                    onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(201, 168, 76, 0.2)",
                      borderRadius: "2px",
                      color: "var(--cream)",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: "13px",
                      outline: "none",
                      resize: "vertical",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(201, 168, 76, 0.2)")}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    marginTop: "6px",
                    padding: "15px",
                    background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)",
                    color: "var(--indigo-deep)",
                    border: "1px solid rgba(201, 168, 76, 0.4)",
                    borderRadius: "2px",
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: "11px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    cursor: loading ? "wait" : "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 20px rgba(201, 168, 76, 0.25)",
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 8px 25px rgba(201, 168, 76, 0.4)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(201, 168, 76, 0.25)";
                  }}
                >
                  {loading ? "Transmitting Institutional Brief..." : "Submit Institutional Partnership Brief →"}
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* Success Screen */
          <div style={{ textAlign: "center", padding: "48px 24px" }}>
            <div
              style={{
                width: "68px",
                height: "68px",
                borderRadius: "50%",
                background: "rgba(201, 168, 76, 0.15)",
                border: "2px solid var(--gold)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
                fontSize: "30px",
                color: "var(--gold)",
                boxShadow: "0 0 35px rgba(201, 168, 76, 0.35)",
              }}
            >
              ✓
            </div>

            <div
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "10px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "10px",
              }}
            >
              Institutional Request Received
            </div>

            <h3
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "32px",
                fontWeight: 300,
                color: "var(--cream)",
                lineHeight: 1.2,
                marginBottom: "16px",
              }}
            >
              {formData.institutionName || "Enterprise Partnership"}
            </h3>

            <p
              style={{
                fontSize: "14px",
                color: "rgba(247, 243, 236, 0.7)",
                lineHeight: 1.8,
                maxWidth: "460px",
                margin: "0 auto 32px",
              }}
            >
              Thank you, <strong>{formData.contactName || "Executive"}</strong>. Your institutional partnership brief has been logged. Zeki Ubor and our Institutional Advisory Council will review your context and contact you within 24 hours to schedule an executive briefing.
            </p>

            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="https://calendly.com/mindvestglobalresources/30min"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "12px 24px",
                  background: "var(--gold)",
                  color: "var(--indigo-deep)",
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Book Immediate Calendar Slot ↗
              </a>
              <button
                onClick={handleReset}
                style={{
                  padding: "12px 24px",
                  background: "transparent",
                  color: "var(--cream)",
                  border: "1px solid rgba(247, 243, 236, 0.3)",
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @media (max-width: 768px) {
          .institutional-modal-grid {
            grid-template-columns: 1fr !important;
          }
          .institutional-photo-col {
            border-right: none !important;
            border-bottom: 1px solid rgba(201, 168, 76, 0.2) !important;
            padding: 28px 20px 24px !important;
          }
          .modal-input-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
