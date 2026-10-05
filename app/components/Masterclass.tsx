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
    navigator.clipboard.writeText("https://origin.com.ng/events");
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
                href="https://www.origin.com.ng"
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
                href="https://www.origin.com.ng"
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
            <div
              style={{
                background: "linear-gradient(160deg, #0c0a2a 0%, #11103a 55%, #0a0818 100%)",
                border: "1px solid rgba(201, 168, 76, 0.18)",
                padding: "0",
                position: "relative",
                overflow: "hidden",
                borderRadius: "8px",
                boxShadow: "0 32px 80px -12px rgba(4, 3, 18, 0.85), 0 0 0 1px rgba(255,255,255,0.04)",
              }}
              className="masterclass-event-card"
            >
              {/* Gold accent top bar */}
              <div style={{ height: "3px", background: "linear-gradient(90deg, #C9A84C 0%, #FFF9EB 50%, #C9A84C 100%)" }} />

              {/* Poster header band */}
              <div
                style={{
                  padding: "20px 24px 16px",
                  borderBottom: "1px solid rgba(201,168,76,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "4px 10px",
                    borderRadius: "100px",
                    background: "rgba(52, 211, 153, 0.1)",
                    border: "1px solid rgba(52, 211, 153, 0.28)",
                    color: "#34D399",
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: "9px",
                    letterSpacing: "1.4px",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "#34D399",
                      boxShadow: "0 0 7px #34D399",
                      display: "inline-block",
                    }}
                  />
                  Enrollment Open
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: "9px",
                    letterSpacing: "1.2px",
                    textTransform: "uppercase",
                    color: "var(--gold-light)",
                    opacity: 0.7,
                  }}
                >
                  Cohort 2026
                </span>
              </div>

              {/* Bold poster title block */}
              <div
                style={{
                  padding: "22px 24px 0",
                  position: "relative",
                }}
              >
                {/* Large decorative background text */}
                <div
                  style={{
                    position: "absolute",
                    top: 8,
                    right: -4,
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "110px",
                    fontWeight: 700,
                    color: "rgba(201,168,76,0.04)",
                    lineHeight: 1,
                    pointerEvents: "none",
                    userSelect: "none",
                    letterSpacing: "-4px",
                  }}
                >
                  MC
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: "8.5px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "var(--gold-light)",
                    marginBottom: "8px",
                    opacity: 0.8,
                  }}
                >
                  Flagship Accelerator · Human Architecture
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "clamp(36px, 4vw, 48px)",
                    fontWeight: 700,
                    lineHeight: 0.95,
                    margin: "0 0 6px",
                    letterSpacing: "-1px",
                    color: "#FDFAF5",
                    textTransform: "uppercase",
                  }}
                >
                  Becoming a<br />
                  <span
                    style={{
                      background: "linear-gradient(135deg, #FFF9EB 10%, #E8C97A 55%, #C9A84C 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontStyle: "italic",
                    }}
                  >
                    Person of
                  </span>
                  <br />
                  Interest
                </h3>
              </div>

              {/* 4-stat colour-blocked grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1px",
                  margin: "20px 0 0",
                  background: "rgba(201,168,76,0.1)",
                  borderTop: "1px solid rgba(201,168,76,0.1)",
                }}
              >
                {[
                  {
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E8C97A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                        <circle cx="12" cy="15" r="1.5" fill="#E8C97A" />
                      </svg>
                    ),
                    label: "Schedule",
                    value: "Sat & Sun",
                    sub: "5:00 PM WAT",
                    accent: "rgba(201,168,76,0.08)",
                  },
                  {
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    ),
                    label: "Delivery",
                    value: "Virtual",
                    sub: "Worldwide + Hubs",
                    accent: "rgba(56,189,248,0.06)",
                  },
                  {
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 2 7 12 12 22 7 12 2" />
                        <polyline points="2 17 12 22 22 17" />
                        <polyline points="2 12 12 17 22 12" />
                      </svg>
                    ),
                    label: "Structure",
                    value: "2-Day",
                    sub: "Intensive + Q&A",
                    accent: "rgba(167,139,250,0.06)",
                  },
                  {
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                        <polyline points="3 3 3 8 8 8" />
                        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                      </svg>
                    ),
                    label: "Immersion",
                    value: "21-Day",
                    sub: "WhatsApp Sprint",
                    accent: "rgba(52,211,153,0.06)",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="poster-stat-cell"
                    style={{
                      background: stat.accent,
                      padding: "14px 16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    <div style={{ opacity: 0.85 }}>{stat.icon}</div>
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-cormorant), serif",
                          fontSize: "22px",
                          fontWeight: 700,
                          color: "#FDFAF5",
                          lineHeight: 1,
                        }}
                      >
                        {stat.value}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-dm-mono), monospace",
                          fontSize: "8px",
                          letterSpacing: "0.8px",
                          color: "rgba(247,243,236,0.5)",
                          marginTop: "2px",
                          textTransform: "uppercase",
                        }}
                      >
                        {stat.sub}
                      </div>
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: "7.5px",
                        letterSpacing: "1.2px",
                        textTransform: "uppercase",
                        color: "var(--gold-light)",
                        opacity: 0.7,
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing + CTA block */}
              <div style={{ padding: "18px 24px 22px" }}>
                {/* Pricing row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "14px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: "32px",
                        fontWeight: 700,
                        color: "var(--gold-light)",
                        lineHeight: 1,
                      }}
                    >
                      ₦35,000
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: "10px",
                        color: "rgba(247,243,236,0.45)",
                      }}
                    >
                      / $25 USD
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: "15px",
                        color: "rgba(247,243,236,0.28)",
                        textDecoration: "line-through",
                        marginLeft: "2px",
                      }}
                    >
                      ₦95,000
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: "8px",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: "var(--gold-light)",
                      padding: "3px 8px",
                      borderRadius: "3px",
                      background: "rgba(201,168,76,0.12)",
                      border: "1px solid rgba(201,168,76,0.28)",
                      fontWeight: 600,
                    }}
                  >
                    Save 63%
                  </span>
                </div>

                {/* CTA Button */}
                <a
                  href="https://origin.com.ng/events"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="poster-cta-btn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "15px 20px",
                    background: "linear-gradient(135deg, #E8C97A 0%, #C9A84C 100%)",
                    color: "#0a0818",
                    textDecoration: "none",
                    borderRadius: "4px",
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: "10.5px",
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    boxShadow: "0 8px 24px rgba(201,168,76,0.28)",
                    transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(-2px)";
                    el.style.boxShadow = "0 14px 36px rgba(201,168,76,0.42)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "0 8px 24px rgba(201,168,76,0.28)";
                  }}
                >
                  <span>Reserve Your Seat</span>
                  <span
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: "rgba(10,8,24,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                    }}
                  >
                    ↗
                  </span>
                </a>

                {/* Footer micro-line */}
                <div
                  style={{
                    marginTop: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: "8px",
                      color: "rgba(247,243,236,0.3)",
                      letterSpacing: "0.5px",
                    }}
                  >
                    via
                  </span>
                  <a
                    href="https://origin.com.ng/events"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: "8px",
                      color: "rgba(201,168,76,0.5)",
                      textDecoration: "none",
                      letterSpacing: "0.5px",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-light)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(201,168,76,0.5)")}
                  >
                    origin.com.ng/events ↗
                  </a>
                  <span style={{ color: "rgba(247,243,236,0.15)", fontSize: "8px" }}>•</span>
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText("https://origin.com.ng/events");
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    style={{
                      background: "none",
                      border: "none",
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: "8px",
                      color: copied ? "#34D399" : "rgba(247,243,236,0.3)",
                      cursor: "pointer",
                      padding: 0,
                      letterSpacing: "0.5px",
                      transition: "color 0.2s",
                    }}
                  >
                    {copied ? "✓ Copied" : "Copy Link"}
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <style>{`
        .poster-stat-cell {
          transition: background 0.2s ease;
        }
        .poster-stat-cell:hover {
          filter: brightness(1.15);
        }
        .poster-cta-btn:hover {
          letter-spacing: 3px;
        }
        @media (max-width: 960px) {
          .masterclass-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          section { padding: 80px 24px !important; }
        }
        @media (max-width: 600px) {
          .masterclass-event-card { border-radius: 6px !important; }
        }
      `}</style>
    </section>
  );
}
