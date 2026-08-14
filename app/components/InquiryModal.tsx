"use client";

import { useState } from "react";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  divisionName: string;
  defaultService?: string;
}

export default function InquiryModal({
  isOpen,
  onClose,
  divisionName,
  defaultService = "General Advisory",
}: InquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate instant secure processing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", phone: "", organization: "", message: "" });
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
        background: "rgba(10, 8, 30, 0.78)",
        backdropFilter: "blur(14px)",
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
          background: "linear-gradient(135deg, #1C1A4A 0%, #12103A 100%)",
          border: "1px solid rgba(201, 168, 76, 0.3)",
          borderRadius: "4px",
          maxWidth: "560px",
          width: "100%",
          padding: "40px",
          position: "relative",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.7)",
          color: "var(--cream)",
          maxHeight: "90vh",
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
                }}
              >
                Inquiry · {divisionName}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "clamp(26px, 4vw, 36px)",
                  fontWeight: 300,
                  color: "var(--cream)",
                  lineHeight: 1.1,
                  margin: 0,
                }}
              >
                Begin Your <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Engagement</em>
              </h3>
              <p style={{ fontSize: "13px", color: "rgba(247, 243, 236, 0.5)", marginTop: "8px", lineHeight: 1.6 }}>
                Submit your brief directly to Zeki Ubor and the Mindvest advisory team.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(201, 168, 76, 0.2)",
                    borderRadius: "2px",
                    color: "var(--cream)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "14px",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(201, 168, 76, 0.2)")}
                />
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
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(201, 168, 76, 0.2)",
                      borderRadius: "2px",
                      color: "var(--cream)",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: "14px",
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
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
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
                      fontSize: "14px",
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
                  Organization / Current Role
                </label>
                <input
                  type="text"
                  placeholder="e.g. Founder & CEO, Tech Corp"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(201, 168, 76, 0.2)",
                    borderRadius: "2px",
                    color: "var(--cream)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "14px",
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
                  What are you seeking to architect / transform?
                </label>
                <textarea
                  rows={3}
                  placeholder="Briefly describe your objectives, team size, or personal transition..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(201, 168, 76, 0.2)",
                    borderRadius: "2px",
                    color: "var(--cream)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "14px",
                    outline: "none",
                    resize: "vertical",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(201, 168, 76, 0.2)")}
                />
              </div>

              {/* Action Buttons */}
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
                {loading ? "Transmitting Brief..." : "Submit Inquiry Brief →"}
              </button>

              {/* Direct Alternative */}
              <div
                style={{
                  marginTop: "16px",
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(247, 243, 236, 0.08)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "11px",
                  color: "rgba(247, 243, 236, 0.5)",
                }}
              >
                <span>Prefer a live calendar slot?</span>
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
                  Book 30-Min Call ↗
                </a>
              </div>
            </form>
          </div>
        ) : (
          /* Success State */
          <div style={{ textAlign: "center", padding: "24px 8px" }}>
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: "rgba(201, 168, 76, 0.15)",
                border: "2px solid var(--gold)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
                fontSize: "28px",
                color: "var(--gold)",
                boxShadow: "0 0 30px rgba(201, 168, 76, 0.3)",
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
              Inquiry Received
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
              Thank you, <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>{formData.name || "Leader"}</em>.
            </h3>

            <p
              style={{
                fontSize: "14px",
                color: "rgba(247, 243, 236, 0.65)",
                lineHeight: 1.8,
                maxWidth: "420px",
                margin: "0 auto 32px",
              }}
            >
              Your brief for <strong>{divisionName}</strong> has been transmitted. Zeki Ubor and the advisory council will review your context and reach out within 24 hours.
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
                Schedule Calendar Time ↗
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
        @media (max-width: 600px) {
          .modal-input-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
