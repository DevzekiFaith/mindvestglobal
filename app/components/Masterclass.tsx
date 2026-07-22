"use client";

import { useEffect, useRef, useState } from "react";

export default function Masterclass() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [waitlistLoading, setWaitlistLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://selar.com/543351n531");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setWaitlistLoading(true);
    setTimeout(() => {
      setWaitlistLoading(false);
      setWaitlistSubmitted(true);
    }, 1200);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="masterclass"
      style={{
        background: "var(--indigo)",
        padding: "130px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Large decorative quote mark */}
      <div style={{
        position: "absolute",
        top: -80,
        left: 40,
        fontFamily: "var(--font-cormorant), serif",
        fontSize: 600,
        color: "rgba(201,168,76,0.03)",
        lineHeight: 1,
        pointerEvents: "none",
        userSelect: "none",
      }}>
        "
      </div>

      {/* Decorative lines */}
      <div style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: 300,
        height: 300,
        border: "1px solid rgba(201,168,76,0.06)",
        borderRadius: "50% 0 0 50%",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1300, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
          className="masterclass-grid"
        >
          {/* Left */}
          <div>
            <div style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 20,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}>
              <span style={{ width: 24, height: 1, background: "var(--gold)", display: "inline-block" }} />
              Monthly Programme
            </div>

            <h2 style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(40px, 5vw, 68px)",
              fontWeight: 300,
              color: "var(--cream)",
              lineHeight: 1.05,
              marginBottom: 28,
            }}>
              Becoming a<br />
              <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>
                Person of Interest
              </em>
            </h2>

            <p style={{
              fontSize: 15,
              color: "rgba(247,243,236,0.45)",
              lineHeight: 1.85,
              marginBottom: 44,
            }}>
              The flagship monthly masterclass from The Becoming Institute. A live,
              structured session for people who are ready to stop performing borrowed
              identities and start designing an original life — deliberately,
              architecturally, and from the inside out.
            </p>

            {/* Feature list */}
            {[
              "Live, interactive format with Q&A",
              "Structured around the Human Architecture Framework",
              "Limited seats for intimate, high-impact experience",
              "Recording available for registered participants",
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginBottom: 12,
                  fontSize: 14,
                  color: "rgba(247,243,236,0.5)",
                }}
              >
                <span style={{
                  width: 16,
                  height: 16,
                  border: "1px solid rgba(201,168,76,0.4)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: 8,
                  color: "var(--gold)",
                }}>
                  ◆
                </span>
                {item}
              </div>
            ))}

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center", marginTop: 40 }}>
              <a
                href="https://selar.com/543351n531"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "18px 44px",
                  background: "var(--gold)",
                  color: "var(--indigo-deep)",
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 11,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "all 0.3s",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--gold-light)";
                  el.style.transform = "translateY(-3px)";
                  el.style.boxShadow = "0 16px 48px rgba(201,168,76,0.25)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--gold)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                Reserve Your Seat
              </a>

              <a
                href="https://sof-beta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "18px 44px",
                  background: "#10B981",
                  color: "#FDFAF5",
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "11px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  border: "1px solid rgba(16, 185, 129, 0.4)",
                  boxShadow: "0 4px 20px rgba(16, 185, 129, 0.15)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "#059669";
                  el.style.transform = "translateY(-3px)";
                  el.style.boxShadow = "0 12px 30px rgba(16, 185, 129, 0.4)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "#10B981";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 4px 20px rgba(16, 185, 129, 0.15)";
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 512 512"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ flexShrink: 0, marginRight: "2px" }}
                >
                  <rect x="16" y="16" width="480" height="480" rx="130" fill="#10B981" stroke="#FDFAF5" strokeWidth="32" />
                  <circle cx="256" cy="256" r="138" stroke="#FDFAF5" strokeWidth="56" />
                </svg>
                <span style={{ fontWeight: 700 }}>Origin</span>
                <span style={{ fontSize: "14px" }}>↗</span>
              </a>
            </div>
          </div>

          {/* Event card */}
          <div>
            <div style={{
              background: "rgba(40,37,107,0.5)",
              border: "1px solid rgba(201,168,76,0.18)",
              padding: "48px 44px",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Card corner accent */}
              <div style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 0,
                height: 0,
                borderTop: "60px solid rgba(201,168,76,0.08)",
                borderLeft: "60px solid transparent",
              }} />

              <div style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10,
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 20,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}>
                <span style={{ width: 24, height: 1, background: "var(--gold)", display: "inline-block" }} />
                Next Session
              </div>

              <h3 style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: 30,
                fontWeight: 600,
                color: "var(--white)",
                marginBottom: 32,
                lineHeight: 1.2,
              }}>
                Becoming a Person of Interest
              </h3>

              {/* Event details */}
              {[
                { icon: "📅", text: "Date TBA — Join the waitlist below" },
                { icon: "📍", text: "Virtual — Live & Interactive" },
                { icon: "⏱", text: "3 Hours · Q&A Included" },
                { icon: "👥", text: "Limited Seats — Intimate Session" },
              ].map((detail, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "center",
                    fontSize: 14,
                    color: "rgba(247,243,236,0.5)",
                    marginBottom: 12,
                  }}
                >
                  <div style={{
                    width: 32,
                    height: 32,
                    background: "rgba(201,168,76,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    flexShrink: 0,
                  }}>
                    {detail.icon}
                  </div>
                  {detail.text}
                </div>
              ))}

              {/* Waitlist form */}
              <div style={{
                margin: "24px 0",
                padding: "20px",
                background: "rgba(201,168,76,0.07)",
                border: "1px solid rgba(201,168,76,0.15)",
              }}>
                <div style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 9,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "var(--gold-muted)",
                  marginBottom: 12,
                }}>
                  Join the Waitlist
                </div>
                {waitlistSubmitted ? (
                  <div style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: 17,
                    color: "#34D399",
                    fontStyle: "italic",
                    lineHeight: 1.5,
                  }}>
                    ✓ You&apos;re on the list. We&apos;ll notify you the moment the next session opens.
                  </div>
                ) : (
                  <form onSubmit={handleWaitlist} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        background: "rgba(247,243,236,0.05)",
                        border: "1px solid rgba(201,168,76,0.25)",
                        color: "var(--cream)",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: 13,
                        padding: "10px 14px",
                        outline: "none",
                        width: "100%",
                        boxSizing: "border-box",
                      }}
                    />
                    <button
                      type="submit"
                      disabled={waitlistLoading}
                      style={{
                        background: waitlistLoading ? "rgba(201,168,76,0.4)" : "var(--gold)",
                        color: "var(--indigo-deep)",
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: 10,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        fontWeight: 600,
                        border: "none",
                        padding: "11px 20px",
                        cursor: waitlistLoading ? "not-allowed" : "pointer",
                        transition: "background 0.2s",
                      }}
                    >
                      {waitlistLoading ? "Adding you..." : "Notify Me →"}
                    </button>
                  </form>
                )}
              </div>

              <div style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: 44,
                fontWeight: 300,
                color: "var(--gold-light)",
                marginBottom: 6,
                lineHeight: 1,
              }}>
                ₦15,000
              </div>
              <div style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10,
                letterSpacing: "2px",
                color: "var(--gold-muted)",
                marginBottom: 28,
              }}>
                Per session · Early access pricing
              </div>

              <a
                href="https://selar.com/543351n531"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "100%",
                  textAlign: "center",
                  display: "block",
                  padding: "16px",
                  background: "var(--gold)",
                  color: "var(--indigo-deep)",
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 11,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--gold-light)";
                  el.style.boxShadow = "0 8px 32px rgba(201,168,76,0.3)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--gold)";
                  el.style.boxShadow = "none";
                }}
              >
                Register via Selar →
              </a>

              {/* Sleek inline QR display */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginTop: "24px",
                paddingTop: "24px",
                borderTop: "1px solid rgba(201,168,76,0.1)",
              }}>
                <div className="qr-image-container" style={{ width: "70px", height: "70px", padding: "4px", borderRadius: "6px" }}>
                  <img src="/images/mindvest-qr.png" alt="Scan to register" />
                  <div className="qr-scanner-line" />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: 600,
                    fontSize: "13px",
                    color: "var(--cream)",
                  }}>
                    Scan to Register
                  </span>
                  <span style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "11px",
                    color: "rgba(247, 243, 236, 0.45)",
                    lineHeight: "1.3",
                  }}>
                    Point your camera to purchase on mobile
                  </span>
                  <button
                    onClick={handleCopyLink}
                    style={{
                      background: "none",
                      border: "none",
                      color: "var(--gold-light)",
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: "9px",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      padding: "4px 0",
                      textAlign: "left",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gold-light)")}
                  >
                    {copied ? "✓ Link Copied" : "📋 Copy Link Shortcut"}
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .masterclass-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          section { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
