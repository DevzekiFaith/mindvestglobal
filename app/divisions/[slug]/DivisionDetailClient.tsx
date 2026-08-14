"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import OriginPopup from "../../components/OriginPopup";
import InquiryModal from "../../components/InquiryModal";
import InstitutionalPartnershipModal from "../../components/InstitutionalPartnershipModal";

// SVG Origin Logo Component
function OriginLogo({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <rect x="16" y="16" width="480" height="480" rx="130" fill="#10B981" stroke="#FDFAF5" strokeWidth="32" />
      <circle cx="256" cy="256" r="138" stroke="#FDFAF5" strokeWidth="56" />
    </svg>
  );
}

export interface DivisionData {
  roman: string;
  sub: string;
  name: string;
  desc: string;
  detailHeading: string;
  detailDesc: string;
  bulletPoints: string[];
  ctaLabel: string;
  ctaActionType?: "modal" | "calendly" | "institutional-modal";
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaActionType?: "modal" | "calendly" | "institutional-modal";
  secondaryCtaHref?: string;
  nextSlug: string;
  nextName: string;
  accent: string;
  image?: string;
  origin?: {
    name: string;
    label: string;
    href: string;
    tagline: string;
    desc: string;
  };
  founder?: {
    name: string;
    role: string;
    image: string;
    quote: string;
    bio: string;
    credentials: string[];
    links: { label: string; href: string; highlight?: boolean }[];
  };
}

export default function DivisionDetailClient({ data }: { data: DivisionData }) {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [institutionalModalOpen, setInstitutionalModalOpen] = useState(false);

  const handleCtaClick = (actionType?: string) => {
    if (actionType === "institutional-modal") {
      setInstitutionalModalOpen(true);
    } else {
      setInquiryModalOpen(true);
    }
  };

  return (
    <>
      <Nav />
      <main style={{ background: "var(--white)", minHeight: "100vh" }}>
        {/* Dynamic Premium Hero */}
        <section
          style={{
            background: "var(--indigo-deep)",
            padding: "160px 60px 90px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle light blobs */}
          <div
            style={{
              position: "absolute",
              top: -200,
              right: -100,
              width: 600,
              height: 600,
              background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -150,
              left: -150,
              width: 500,
              height: 500,
              background: "radial-gradient(circle, rgba(40,37,107,0.6) 0%, transparent 70%)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />

          <div style={{ maxWidth: 1300, margin: "0 auto", position: "relative", zIndex: 2 }}>
            {/* Breadcrumb / Back Link */}
            <div style={{ marginBottom: 36 }}>
              <Link
                href="/#divisions"
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 11,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "color 0.2s",
                }}
                className="back-link"
              >
                <span>←</span> Back to Divisions
              </Link>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: data.founder?.image || data.image ? "1.05fr 0.95fr" : "1.2fr 0.8fr",
                gap: 50,
                alignItems: "center",
              }}
              className="hero-grid"
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 10,
                    letterSpacing: "6px",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: 16,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <span style={{ width: 24, height: 1, background: "var(--gold)", display: "inline-block" }} />
                  {data.sub}
                </div>

                <h1
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "clamp(44px, 5.5vw, 76px)",
                    fontWeight: 300,
                    color: "var(--cream)",
                    lineHeight: 1.1,
                    marginBottom: 24,
                    letterSpacing: "-0.5px",
                  }}
                >
                  {data.name}
                </h1>

                <p
                  style={{
                    fontSize: 17,
                    color: "rgba(247,243,236,0.65)",
                    lineHeight: 1.8,
                    maxWidth: 600,
                    marginBottom: 32,
                  }}
                >
                  {data.desc}
                </p>

                {/* Hero Action Buttons */}
                <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                  {data.origin && (
                    <a
                      id="hero-origin-btn"
                      href={data.origin.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "14px 30px",
                        background: "#10B981",
                        color: "#FDFAF5",
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: "11px",
                        letterSpacing: "2.5px",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        textDecoration: "none",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        border: "1px solid rgba(16, 185, 129, 0.4)",
                        boxShadow: "0 4px 20px rgba(16, 185, 129, 0.25)",
                      }}
                      className="origin-hero-btn"
                    >
                      <OriginLogo size={18} />
                      <span>{data.origin.name} Platform</span>
                      <span style={{ fontSize: "14px" }}>↗</span>
                    </a>
                  )}

                  {data.founder ? (
                    <a
                      href="https://calendly.com/mindvestglobalresources/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "16px 36px",
                        background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)",
                        color: "var(--indigo-deep)",
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: "11px",
                        letterSpacing: "2.5px",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        textDecoration: "none",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        border: "1px solid rgba(201, 168, 76, 0.4)",
                        boxShadow: "0 6px 24px rgba(201, 168, 76, 0.25)",
                      }}
                      className="cta-btn"
                    >
                      <span>Book Executive Discovery Call</span>
                      <span style={{ fontSize: "14px" }}>↗</span>
                    </a>
                  ) : (
                    <button
                      onClick={() => handleCtaClick(data.ctaActionType)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "16px 36px",
                        background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)",
                        color: "var(--indigo-deep)",
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: "11px",
                        letterSpacing: "2.5px",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        border: "1px solid rgba(201, 168, 76, 0.4)",
                        boxShadow: "0 6px 24px rgba(201, 168, 76, 0.25)",
                        cursor: "pointer",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                      className="cta-btn"
                    >
                      <span>{data.ctaLabel}</span>
                      <span style={{ fontSize: "14px" }}>→</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Right Column: Dynamic Showcase (Hero Portrait / Generated Executive Session Image / Floating Roman) */}
              {data.founder?.image ? (
                /* Flipped Portrait for Division II */
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    minHeight: "440px",
                  }}
                  className="hero-portrait-container"
                >
                  <div
                    style={{
                      position: "absolute",
                      width: "360px",
                      height: "360px",
                      borderRadius: "50%",
                      border: "1px solid rgba(201, 168, 76, 0.3)",
                      background: "radial-gradient(circle, rgba(201, 168, 76, 0.15) 0%, rgba(40, 37, 107, 0.5) 75%)",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      pointerEvents: "none",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "clamp(160px, 18vw, 260px)",
                      fontWeight: 300,
                      color: "rgba(201,168,76,0.08)",
                      lineHeight: 1,
                      userSelect: "none",
                      top: "40%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      pointerEvents: "none",
                    }}
                  >
                    {data.roman}
                  </div>
                  <div
                    style={{
                      position: "relative",
                      zIndex: 2,
                      width: "100%",
                      maxWidth: "380px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={data.founder.image}
                      alt={data.founder.name}
                      style={{
                        width: "100%",
                        maxHeight: "480px",
                        objectFit: "contain",
                        transform: "scaleX(-1)",
                        filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.6))",
                        maskImage: "linear-gradient(to bottom, black 82%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to bottom, black 82%, transparent 100%)",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 8,
                      left: "50%",
                      transform: "translateX(-50%)",
                      zIndex: 3,
                      padding: "10px 24px",
                      background: "rgba(18, 16, 58, 0.88)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(201, 168, 76, 0.35)",
                      borderRadius: "2px",
                      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.4)",
                      textAlign: "center",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <div style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "17px",
                      fontWeight: 600,
                      color: "var(--cream)",
                      lineHeight: 1.1,
                      marginBottom: "3px",
                    }}>
                      {data.founder.name}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: "9px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                    }}>
                      Architect of Human Potential
                    </div>
                  </div>
                </div>
              ) : data.image ? (
                /* Generated Executive Boardroom Session Image for Division III (Organizational Architecture) */
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="hero-image-showcase"
                >
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "4px",
                      overflow: "hidden",
                      border: "1px solid rgba(201, 168, 76, 0.35)",
                      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.7)",
                      width: "100%",
                      maxWidth: "540px",
                    }}
                  >
                    <img
                      src={data.image}
                      alt="Organizational Architecture Culture Alignment Session"
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        filter: "brightness(0.95) contrast(1.05)",
                      }}
                    />
                    {/* Subtle gradient overlay at base */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "60px",
                        background: "linear-gradient(to top, rgba(18, 16, 58, 0.8) 0%, transparent 100%)",
                        pointerEvents: "none",
                      }}
                    />
                  </div>

                  {/* Floating Glassmorphic Badge */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: -16,
                      right: 20,
                      zIndex: 3,
                      padding: "10px 22px",
                      background: "rgba(18, 16, 58, 0.9)",
                      backdropFilter: "blur(14px)",
                      border: "1px solid rgba(201, 168, 76, 0.4)",
                      borderRadius: "2px",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <div style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: "9px",
                      letterSpacing: "2.5px",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      fontWeight: 700,
                    }}>
                      Institutional Culture Alignment
                    </div>
                  </div>
                </div>
              ) : (
                /* Giant floating Roman numeral background for other pages */
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                  }}
                  className="hero-roman-container"
                >
                  <div
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "clamp(180px, 20vw, 320px)",
                      fontWeight: 300,
                      color: "rgba(201,168,76,0.06)",
                      lineHeight: 1,
                      userSelect: "none",
                      letterSpacing: "-10px",
                    }}
                  >
                    {data.roman}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      width: 140,
                      height: 140,
                      border: "1px solid rgba(201,168,76,0.15)",
                      transform: "rotate(45deg)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Detailed Breakdown Section */}
        <section style={{ padding: "100px 60px", background: "var(--white)" }} id="details">
          <div style={{ maxWidth: 1300, margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.1fr 0.9fr",
                gap: 80,
                alignItems: "start",
              }}
              className="content-grid"
            >
              {/* Detailed statement + Founder Credentials */}
              <div>
                <h2
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "clamp(32px, 3.5vw, 48px)",
                    fontWeight: 400,
                    color: "var(--indigo)",
                    lineHeight: 1.2,
                    marginBottom: 28,
                  }}
                >
                  {data.detailHeading}
                </h2>
                <div
                  style={{
                    height: 1,
                    width: 80,
                    background: "var(--gold)",
                    marginBottom: 28,
                  }}
                />
                <p
                  style={{
                    fontSize: 16,
                    color: "var(--muted)",
                    lineHeight: 1.85,
                    marginBottom: 28,
                  }}
                >
                  {data.detailDesc}
                </p>

                {data.founder ? (
                  <div
                    style={{
                      marginTop: 32,
                      padding: "32px",
                      background: "var(--cream)",
                      borderLeft: "3px solid var(--gold)",
                      borderRadius: "2px",
                    }}
                  >
                    <blockquote
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: "21px",
                        fontStyle: "italic",
                        color: "var(--indigo)",
                        lineHeight: 1.5,
                        margin: "0 0 20px 0",
                      }}
                    >
                      &ldquo;{data.founder.quote}&rdquo;
                    </blockquote>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      {data.founder.credentials.map((cred, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "13px", color: "var(--text)" }}>
                          <span style={{ color: "var(--gold)", fontSize: "10px", marginTop: "4px" }}>◆</span>
                          <span>{cred}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p
                    style={{
                      fontSize: 15,
                      color: "var(--muted-light)",
                      lineHeight: 1.8,
                    }}
                  >
                    Through intentional architectural design, we align human capital, leadership structures, and organizational values to enable genuine growth. Discover how our frameworks translate high aspiration into unshakeable reality.
                  </p>
                )}
              </div>

              {/* Offerings list card + Optional Callout */}
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div
                  style={{
                    background: "var(--cream)",
                    border: "1px solid var(--cream-dark)",
                    padding: "44px 36px",
                    borderRadius: "2px",
                    boxShadow: "0 10px 40px rgba(28,26,74,0.03)",
                    position: "relative",
                  }}
                >
                  {/* Decorative gold corner */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: 24,
                      height: 24,
                      borderTop: "2px solid var(--gold)",
                      borderRight: "2px solid var(--gold)",
                    }}
                  />

                  <h3
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 11,
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      color: "var(--gold-muted)",
                      marginBottom: 28,
                      borderBottom: "1px solid var(--cream-dark)",
                      paddingBottom: 14,
                    }}
                  >
                    Core Frameworks & Models
                  </h3>

                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 20 }}>
                    {data.bulletPoints.map((point, index) => (
                      <li
                        key={index}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 16,
                          fontSize: 14.5,
                          color: "var(--indigo)",
                          fontWeight: 400,
                          lineHeight: 1.6,
                        }}
                      >
                        <span
                          style={{
                            marginTop: 6,
                            width: 8,
                            height: 8,
                            background: "var(--gold)",
                            borderRadius: "50%",
                            flexShrink: 0,
                            boxShadow: "0 0 8px rgba(201,168,76,0.4)",
                          }}
                        />
                        <div>
                          {point}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Origin Learning Platform Card for The Becoming Institute */}
                {data.origin && (
                  <div
                    style={{
                      background: "linear-gradient(135deg, rgba(16, 185, 129, 0.06) 0%, rgba(16, 185, 129, 0.02) 100%)",
                      border: "1px solid rgba(16, 185, 129, 0.25)",
                      padding: "32px 36px",
                      borderRadius: "2px",
                      position: "relative",
                      boxShadow: "0 6px 24px rgba(16, 185, 129, 0.05)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                      <OriginLogo size={26} />
                      <div>
                        <div
                          style={{
                            fontFamily: "var(--font-dm-mono), monospace",
                            fontSize: "12px",
                            letterSpacing: "2.5px",
                            textTransform: "uppercase",
                            color: "#059669",
                            fontWeight: 700,
                          }}
                        >
                          {data.origin.name} Platform
                        </div>
                        <div style={{ fontSize: "11px", color: "var(--muted)" }}>
                          {data.origin.tagline}
                        </div>
                      </div>
                    </div>

                    <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.7, marginBottom: "20px" }}>
                      {data.origin.desc}
                    </p>

                    <a
                      href={data.origin.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "12px 24px",
                        background: "#10B981",
                        color: "#FDFAF5",
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: "10px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                        border: "1px solid rgba(16, 185, 129, 0.4)",
                        boxShadow: "0 4px 15px rgba(16, 185, 129, 0.2)",
                      }}
                      className="origin-card-btn"
                    >
                      <OriginLogo size={16} />
                      <span>Access Origin Platform</span>
                      <span>↗</span>
                    </a>
                  </div>
                )}

                {/* Direct Executive Booking & Links for Leadership Architecture */}
                {data.founder && (
                  <div
                    style={{
                      background: "rgba(40,37,107,0.03)",
                      border: "1px solid rgba(201,168,76,0.2)",
                      padding: "28px 32px",
                      borderRadius: "2px",
                    }}
                  >
                    <h4
                      style={{
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: "11px",
                        letterSpacing: "2.5px",
                        textTransform: "uppercase",
                        color: "var(--gold-muted)",
                        marginBottom: "16px",
                      }}
                    >
                      Executive Channels
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      {data.founder.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "12px 18px",
                            background: link.highlight ? "var(--indigo)" : "var(--cream)",
                            color: link.highlight ? "var(--cream)" : "var(--indigo)",
                            border: link.highlight ? "1px solid var(--gold)" : "1px solid var(--cream-dark)",
                            fontFamily: "var(--font-dm-mono), monospace",
                            fontSize: "10px",
                            letterSpacing: "1.5px",
                            textTransform: "uppercase",
                            textDecoration: "none",
                            fontWeight: 600,
                            transition: "all 0.25s ease",
                          }}
                          className="founder-link-item"
                        >
                          <span>{link.label}</span>
                          <span>→</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Premium Call-To-Action (CTA) and Next Navigation Section */}
        <section
          style={{
            background: "var(--indigo-deep)",
            padding: "100px 60px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            borderTop: "1px solid rgba(201,168,76,0.1)",
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 300,
                color: "var(--cream)",
                lineHeight: 1.2,
                marginBottom: 36,
              }}
            >
              Begin the Design of<br />
              <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>
                Your Next Chapter.
              </em>
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 32,
              }}
            >
              {/* Primary Call to Action buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                {/* Primary Button */}
                {data.ctaActionType === "calendly" || data.ctaHref?.includes("calendly") ? (
                  <a
                    href={data.ctaHref || "https://calendly.com/mindvestglobalresources/30min"}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "18px 48px",
                      background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)",
                      color: "var(--indigo-deep)",
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 11,
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      textDecoration: "none",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      border: "1px solid rgba(201,168,76,0.4)",
                      display: "inline-block",
                      boxShadow: "0 4px 15px rgba(201, 168, 76, 0.2)",
                    }}
                    className="cta-btn"
                  >
                    {data.ctaLabel} ↗
                  </a>
                ) : (
                  <button
                    onClick={() => handleCtaClick(data.ctaActionType)}
                    style={{
                      padding: "18px 48px",
                      background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)",
                      color: "var(--indigo-deep)",
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 11,
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      border: "1px solid rgba(201,168,76,0.4)",
                      display: "inline-block",
                      boxShadow: "0 4px 15px rgba(201, 168, 76, 0.2)",
                      cursor: "pointer",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    className="cta-btn"
                  >
                    {data.ctaLabel} →
                  </button>
                )}

                {/* Secondary Button */}
                {data.secondaryCtaLabel && (
                  data.secondaryCtaActionType === "calendly" || data.secondaryCtaHref?.includes("calendly") ? (
                    <a
                      href={data.secondaryCtaHref || "https://calendly.com/mindvestglobalresources/30min"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "18px 40px",
                        background: "transparent",
                        color: "var(--gold)",
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: 11,
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        fontWeight: 600,
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                        border: "1px solid rgba(201,168,76,0.35)",
                        display: "inline-block",
                      }}
                      className="secondary-cta-btn"
                    >
                      {data.secondaryCtaLabel} ↗
                    </a>
                  ) : (
                    <button
                      onClick={() => handleCtaClick(data.secondaryCtaActionType)}
                      style={{
                        padding: "18px 40px",
                        background: "transparent",
                        color: "var(--gold)",
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: 11,
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        fontWeight: 600,
                        transition: "all 0.3s ease",
                        border: "1px solid rgba(201,168,76,0.35)",
                        display: "inline-block",
                        cursor: "pointer",
                      }}
                      className="secondary-cta-btn"
                    >
                      {data.secondaryCtaLabel} →
                    </button>
                  )
                )}

                {data.origin && (
                  <a
                    href={data.origin.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "18px 44px",
                      background: "#10B981",
                      color: "#FDFAF5",
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 11,
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      textDecoration: "none",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      border: "1px solid rgba(16, 185, 129, 0.4)",
                      boxShadow: "0 4px 20px rgba(16, 185, 129, 0.25)",
                    }}
                    className="origin-cta-btn"
                  >
                    <OriginLogo size={20} />
                    <span>Explore Origin Platform</span>
                    <span style={{ fontSize: "14px" }}>↗</span>
                  </a>
                )}
              </div>

              {/* Next Division Guide */}
              <div
                style={{
                  marginTop: 36,
                  paddingTop: 36,
                  borderTop: "1px solid rgba(247,243,236,0.1)",
                  width: "100%",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 9,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "rgba(247,243,236,0.4)",
                    display: "block",
                    marginBottom: 12,
                  }}
                >
                  Explore Another Division
                </span>
                <Link
                  href={`/divisions/${data.nextSlug}`}
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: 20,
                    fontStyle: "italic",
                    color: "var(--gold)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  className="next-division-link"
                >
                  Discover {data.nextName} →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      {data.origin && <OriginPopup />}

      {/* In-App Luxury Inquiry Modal for Personal & Leadership Advisory */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        divisionName={data.name}
      />

      {/* Institutional Partnership Modal for Enterprise & Organization Level */}
      <InstitutionalPartnershipModal
        isOpen={institutionalModalOpen}
        onClose={() => setInstitutionalModalOpen(false)}
      />

      {/* Embedded styles for dynamic effects and responsiveness */}
      <style>{`
        .back-link:hover {
          color: var(--gold-light) !important;
        }
        .cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 24px rgba(201, 168, 76, 0.4) !important;
          background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 100%) !important;
        }
        .secondary-cta-btn:hover {
          background: var(--gold) !important;
          color: var(--indigo-deep) !important;
          border-color: var(--gold) !important;
          transform: translateY(-3px);
        }
        .founder-link-item:hover {
          transform: translateX(4px);
          border-color: var(--gold) !important;
        }
        .origin-hero-btn:hover, .origin-card-btn:hover, .origin-cta-btn:hover {
          background: #059669 !important;
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(16, 185, 129, 0.4) !important;
        }
        .next-division-link:hover {
          color: var(--gold-light) !important;
        }

        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }
          .hero-roman-container, .hero-portrait-container, .hero-image-showcase {
            order: -1;
            margin-bottom: 20px;
          }
          .content-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          section {
            padding: 80px 24px !important;
          }
        }
      `}</style>
    </>
  );
}
