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
          maxWidth: "620px",
          width: "100%",
          padding: "44px",
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
            top: 20,
            right: 20,
            background: "none",
            border: "none",
            color: "rgba(247, 243, 236, 0.5)",
            fontSize: "28px",
            cursor: "pointer",
            lineHeight: 1,
            padding: 4,
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247, 243, 236, 0.5)")}
          aria-label="Close"
        >
          &times;
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div style={{ marginBottom: "28px" }}>
              <div
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "10px",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ width: "16px", height: "1px", background: "var(--gold)" }} />
                Institutional Partnership · Division III
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "clamp(28px, 4.5vw, 38px)",
                  fontWeight: 300,
                  color: "var(--cream)",
                  lineHeight: 1.1,
                  margin: 0,
                }}
              >
                Partner With <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Mindvest Global</em>
              </h3>
              <p style={{ fontSize: "13.5px", color: "rgba(247, 243, 236, 0.55)", marginTop: "8px", lineHeight: 1.6 }}>
                Initiate an institutional culture transformation, enterprise leadership architecture, or consulting partnership for your organization.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }} className="modal-input-row">
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: "9px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "var(--gold-muted)",
                      marginBottom: "6px",
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
                      padding: "12px 16px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(201, 168, 76, 0.2)",
                      borderRadius: "2px",
                      color: "var(--cream)",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: "13.5px",
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
                      marginBottom: "6px",
                    }}
                  >
                    Workforce / Leadership Size
                  </label>
                  <select
                    value={formData.workforceSize}
                    onChange={(e) => setFormData({ ...formData, workforceSize: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "#1C1A4A",
                      border: "1px solid rgba(201, 168, 76, 0.2)",
                      borderRadius: "2px",
                      color: "var(--cream)",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: "13.5px",
                      outline: "none",
                      cursor: "pointer",
                    }}
                  >
                    <option value="25–100 Staff">25–100 Staff & Leadership</option>
                    <option value="100–500 Staff">100–500 Staff</option>
                    <option value="500–2,000 Staff">500–2,000 Staff</option>
                    <option value="2,000+ Enterprise">2,000+ Enterprise Scale</option>
                  </select>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }} className="modal-input-row">
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: "9px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "var(--gold-muted)",
                      marginBottom: "6px",
                    }}
                  >
                    Lead Executive / Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Zaid Alabi"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(201, 168, 76, 0.2)",
                      borderRadius: "2px",
                      color: "var(--cream)",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: "13.5px",
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
                      marginBottom: "6px",
                    }}
                  >
                    Executive Role / Designation *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Chief People Officer / MD"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(201, 168, 76, 0.2)",
                      borderRadius: "2px",
                      color: "var(--cream)",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: "13.5px",
                      outline: "none",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(201, 168, 76, 0.2)")}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }} className="modal-input-row">
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: "9px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "var(--gold-muted)",
                      marginBottom: "6px",
                    }}
                  >
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="executive@institution.com"
                    value={formData.corporateEmail}
                    onChange={(e) => setFormData({ ...formData, corporateEmail: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(201, 168, 76, 0.2)",
                      borderRadius: "2px",
                      color: "var(--cream)",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: "13.5px",
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
                      marginBottom: "6px",
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
                      padding: "12px 16px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(201, 168, 76, 0.2)",
                      borderRadius: "2px",
                      color: "var(--cream)",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: "13.5px",
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
                    marginBottom: "6px",
                  }}
                >
                  Primary Partnership Track
                </label>
                <select
                  value={formData.partnershipTrack}
                  onChange={(e) => setFormData({ ...formData, partnershipTrack: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    background: "#1C1A4A",
                    border: "1px solid rgba(201, 168, 76, 0.2)",
                    borderRadius: "2px",
                    color: "var(--cream)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "13.5px",
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
                    marginBottom: "6px",
                  }}
                >
                  Brief Overview of Institutional Vision & Challenge
                </label>
                <textarea
                  rows={3}
                  placeholder="Outline your enterprise transformation goals, culture misalignment, or strategic growth objectives..."
                  value={formData.brief}
                  onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(201, 168, 76, 0.2)",
                    borderRadius: "2px",
                    color: "var(--cream)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "13.5px",
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
                  marginTop: "8px",
                  padding: "16px",
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

              {/* Direct Booking Alternative */}
              <div
                style={{
                  marginTop: "14px",
                  paddingTop: "14px",
                  borderTop: "1px solid rgba(247, 243, 236, 0.08)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "11px",
                  color: "rgba(247, 243, 236, 0.5)",
                }}
              >
                <span>Direct Executive Advisory:</span>
                <a
                  href="https://calendly.com/mindvestglobalresources/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--gold)",
                    textDecoration: "none",
                    fontFamily: "var(--font-dm-mono), monospace",
                    letterSpacing: "1px",
                  }}
                >
                  Schedule Executive Briefing ↗
                </a>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div style={{ textAlign: "center", padding: "28px 8px" }}>
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
    </div>
  );
}
