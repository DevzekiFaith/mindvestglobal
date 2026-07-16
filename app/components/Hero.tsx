"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    label: "Phase I: The Blueprint",
    title: "Foundation of Identity",
    desc: "Decoupling from external expectations to design your original core identity.",
    img: "/images/becoming-stage-1.png",
  },
  {
    label: "Phase II: The Alignment",
    title: "Construction of Habits",
    desc: "Building daily practices, values, and systems that hold your structure together.",
    img: "/images/becoming-stage-2.png",
  },
  {
    label: "Phase III: The Elevation",
    title: "Expression of Impact",
    desc: "Stepping into original influence and architecting transformational culture.",
    img: "/images/becoming-stage-3.png",
  },
];

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://selar.com/543351n531");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  useEffect(() => {
    // Parallax on scroll
    const handleScroll = () => {
      const y = window.scrollY;
      if (headlineRef.current) {
        headlineRef.current.style.transform = `translateY(${y * 0.15}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "var(--indigo-deep)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "100px 60px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background orbs */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <div style={{
          position: "absolute",
          top: "10%",
          right: "15%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
          animation: "orb-drift 12s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute",
          bottom: "20%",
          left: "-5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(40,37,107,0.6) 0%, transparent 65%)",
          animation: "orb-drift 16s ease-in-out infinite reverse",
        }} />
        <div style={{
          position: "absolute",
          top: "40%",
          left: "40%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
          animation: "orb-drift 20s ease-in-out infinite 3s",
        }} />
      </div>

      {/* Grid lines */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {[25, 50, 75].map((pct) => (
          <div key={pct} style={{
            position: "absolute",
            left: `${pct}%`,
            top: 0,
            bottom: 0,
            width: 1,
            background: "rgba(201,168,76,0.04)",
          }} />
        ))}
        {[33, 66].map((pct) => (
          <div key={pct} style={{
            position: "absolute",
            top: `${pct}%`,
            left: 0,
            right: 0,
            height: 1,
            background: "rgba(201,168,76,0.04)",
          }} />
        ))}
      </div>

      {/* Architectural arch decoration */}
      <div style={{
        position: "absolute",
        top: 100,
        right: 60,
        width: 380,
        height: 380,
        border: "1px solid rgba(201,168,76,0.1)",
        borderRadius: "50% 50% 0 0",
        animation: "archReveal 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.8s",
        opacity: 0,
      }}>
        <div style={{
          position: "absolute",
          inset: 32,
          border: "1px solid rgba(201,168,76,0.06)",
          borderRadius: "50% 50% 0 0",
        }} />
        <div style={{
          position: "absolute",
          inset: 64,
          border: "1px solid rgba(201,168,76,0.03)",
          borderRadius: "50% 50% 0 0",
        }} />
        {/* Inner gold dot */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "var(--gold)",
          opacity: 0.4,
          animation: "pulse-gold 3s ease infinite",
        }} />
      </div>

      {/* Roman numeral accent */}
      <div style={{
        position: "absolute",
        top: 160,
        right: 80,
        fontFamily: "var(--font-cormorant), serif",
        fontSize: 14,
        letterSpacing: "8px",
        color: "rgba(201,168,76,0.25)",
        writingMode: "vertical-rl",
        textTransform: "uppercase",
        animation: "fadeIn 1s ease forwards 1.5s",
        opacity: 0,
      }}>
        Est. MMXXVI
      </div>

      {/* Main content */}
      <div
        className="hero-grid"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1300,
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: 60,
          alignItems: "center",
        }}
      >
        {/* Left Column: Text & CTA */}
        <div>
          {/* Eyebrow */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 36,
            opacity: 0,
            animation: "fadeUp 0.9s ease forwards 0.3s",
          }}>
            <div style={{ width: 48, height: 1, background: "var(--gold)" }} />
            <span style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "var(--gold)",
            }}>
              Mindvest Global Resources LLC · Est. 2026
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(46px, 6vw, 84px)",
              fontWeight: 300,
              lineHeight: 0.98,
              color: "var(--cream)",
              marginBottom: 36,
              opacity: 0,
              animation: "fadeUp 1s ease forwards 0.5s",
              letterSpacing: "-1px",
            }}
          >
            The Architecture
            <br />
            <em style={{
              fontStyle: "italic",
              color: "var(--gold-light)",
              display: "block",
            }}>
              of Becoming
            </em>
            <strong style={{
              fontWeight: 600,
              color: "var(--white)",
              display: "block",
            }}>
              Starts Here.
            </strong>
          </h1>

          {/* Sub */}
          <p style={{
            fontSize: 15,
            color: "rgba(247,243,236,0.5)",
            maxWidth: 540,
            lineHeight: 1.8,
            marginBottom: 48,
            opacity: 0,
            animation: "fadeUp 0.9s ease forwards 0.7s",
          }}>
            A transformational education enterprise built on the conviction that
            the most important structure any human being will ever build is the
            architecture of who they are becoming.
          </p>

          {/* CTAs */}
          <div style={{
            display: "flex",
            gap: 16,
            alignItems: "center",
            flexWrap: "wrap",
            opacity: 0,
            animation: "fadeUp 0.9s ease forwards 0.9s",
          }}>
            <a
              href="https://selar.com/543351n531"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "16px 36px",
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
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--gold-light)";
                el.style.transform = "translateY(-3px)";
                el.style.boxShadow = "0 16px 48px rgba(201,168,76,0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--gold)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              Join the Masterclass
            </a>
            <a
              href="#divisions"
              style={{
                padding: "16px 36px",
                border: "1px solid rgba(201,168,76,0.35)",
                color: "rgba(247,243,236,0.6)",
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 11,
                letterSpacing: "3px",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.3s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--gold)";
                el.style.color = "var(--gold)";
                el.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(201,168,76,0.35)";
                el.style.color = "rgba(247,243,236,0.6)";
                el.style.transform = "translateY(0)";
              }}
            >
              Explore Our Work
            </a>
          </div>

          {/* QR Code Scan Integration */}
          <div
            className="qr-premium-card"
            style={{
              opacity: 0,
              animation: "fadeUp 0.9s ease forwards 1.1s",
            }}
          >
            <div className="qr-image-container">
              <img src="/images/mindvest-qr.png" alt="Mindvest Masterclass QR Code" />
              <div className="qr-scanner-line" />
            </div>
            <div className="qr-premium-text-container">
              <span className="qr-premium-title">Scan to Register via Mobile</span>
              <p className="qr-premium-subtitle">
                Access the Masterclass checkout instantly on your phone or share it with others.
              </p>
              <div className="qr-action-buttons">
                <a
                  href="https://selar.com/543351n531"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="qr-action-btn qr-action-btn-primary"
                >
                  Register Now
                </a>
                <button
                  onClick={handleCopyLink}
                  className="qr-action-btn"
                  style={{ minWidth: "110px" }}
                >
                  {copied ? "✓ Copied!" : "📋 Copy Link"}
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Swiper */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 480,
            justifySelf: "center",
            opacity: 0,
            animation: "fadeUp 1.2s ease forwards 0.8s",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              background: "rgba(18, 16, 58, 0.4)",
              border: "1px solid rgba(201, 168, 76, 0.15)",
              padding: 24,
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              boxShadow: "0 24px 80px rgba(18, 16, 58, 0.6)",
            }}
          >
            {/* Visual decoration top line */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              background: "var(--gold)",
              opacity: 0.8,
            }} />

            {/* Image display */}
            <div style={{
              position: "relative",
              width: "100%",
              aspectRatio: "1.5",
              overflow: "hidden",
              border: "1px solid rgba(201, 168, 76, 0.08)",
              background: "var(--indigo-deep)",
            }}>
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: activeStep === idx ? 1 : 0,
                    transform: activeStep === idx ? "scale(1)" : "scale(1.05)",
                    transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={step.img}
                    alt={step.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom, transparent 60%, rgba(18, 16, 58, 0.7) 100%)",
                    pointerEvents: "none",
                  }} />
                </div>
              ))}
            </div>

            {/* Description write-up underneath with strict typography hierarchy */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8, minHeight: 110 }}>
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  style={{
                    display: activeStep === idx ? "block" : "none",
                    animation: "fadeIn 0.6s ease forwards",
                  }}
                >
                  <span style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 9,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    display: "block",
                    marginBottom: 4,
                  }}>
                    {step.label}
                  </span>
                  <h4 style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: 22,
                    fontWeight: 600,
                    color: "var(--white)",
                    lineHeight: 1.2,
                    marginBottom: 8,
                  }}>
                    {step.title}
                  </h4>
                  <p style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 13,
                    color: "rgba(247, 243, 236, 0.55)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Dots and Navigation Controls */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid rgba(201, 168, 76, 0.1)",
              paddingTop: 16,
              marginTop: 4,
            }}>
              {/* Dot Indicators */}
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                {steps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "10px 6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{
                      width: activeStep === idx ? 24 : 12,
                      height: 6,
                      background: activeStep === idx ? "var(--gold)" : "rgba(201, 168, 76, 0.25)",
                      borderRadius: "1px",
                      transition: "all 0.3s ease",
                    }} />
                  </button>
                ))}
              </div>

              {/* Prev / Next Buttons */}
              <div style={{ display: "flex", gap: 8 }}>
                <button
                  onClick={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)}
                  aria-label="Previous slide"
                  style={{
                    background: "none",
                    border: "1px solid rgba(201, 168, 76, 0.2)",
                    color: "var(--gold)",
                    cursor: "pointer",
                    padding: "4px 10px",
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 11,
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--gold)";
                    el.style.background = "rgba(201, 168, 76, 0.05)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(201, 168, 76, 0.2)";
                    el.style.background = "none";
                  }}
                >
                  ←
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  aria-label="Next slide"
                  style={{
                    background: "none",
                    border: "1px solid rgba(201, 168, 76, 0.2)",
                    color: "var(--gold)",
                    cursor: "pointer",
                    padding: "4px 10px",
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 11,
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--gold)";
                    el.style.background = "rgba(201, 168, 76, 0.05)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(201, 168, 76, 0.2)";
                    el.style.background = "none";
                  }}
                >
                  →
                </button>
              </div>
            </div>
          </div>
          <div style={{
            display: "inline-flex",
            alignSelf: "flex-start",
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "9px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#34D399",
            background: "rgba(16, 185, 129, 0.1)",
            border: "1px solid rgba(16, 185, 129, 0.3)",
            padding: "4px 10px",
            borderRadius: "100px",
            marginTop: "20px",
          }}>
            Educating
          </div>
          <a
            id="hero-origin-btn"
            href="https://sof-beta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              width: "100%",
              padding: "16px 36px",
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
              marginTop: "8px",
              textAlign: "center",
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
              style={{ flexShrink: 0, marginRight: "6px" }}
            >
              <rect x="16" y="16" width="480" height="480" rx="130" fill="#10B981" stroke="#FDFAF5" strokeWidth="32" />
              <circle cx="256" cy="256" r="138" stroke="#FDFAF5" strokeWidth="56" />
            </svg>
            <span style={{ fontWeight: 700 }}>Origin</span>
            <span style={{ fontSize: "14px" }}>↗</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute",
        bottom: 44,
        right: 60,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        opacity: 0,
        animation: "fadeUp 0.8s ease forwards 1.4s",
      }}>
        <span style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 9,
          letterSpacing: "4px",
          textTransform: "uppercase",
          color: "var(--gold-muted)",
          writingMode: "vertical-rl",
        }}>
          Scroll
        </span>
        <div style={{
          width: 1,
          height: 64,
          background: "linear-gradient(to bottom, var(--gold), transparent)",
          animation: "scrollPulse 2.5s ease infinite",
        }} />
      </div>

      <style>{`
        @media (max-width: 960px) {
          section { padding: 120px 24px 60px !important; min-height: auto !important; }
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; text-align: center; }
          .hero-grid > div:first-child { display: flex; flex-direction: column; align-items: center; }
          .hero-grid > div:first-child h1 { text-align: center; }
          .hero-grid > div:first-child p { text-align: center; margin-left: auto; margin-right: auto; }
          .hero-grid > div:first-child div { justify-content: center; }
          .hero-grid > div:last-child { max-width: 100% !important; }
          section > div:last-child { display: none; }
          h1 { font-size: clamp(42px, 12vw, 80px) !important; }
        }
        @keyframes pulse-green-highlight {
          0%, 100% {
            box-shadow: 0 4px 20px rgba(16, 185, 129, 0.15);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 0 16px rgba(16, 185, 129, 0.6);
            transform: scale(1.08);
          }
        }
        .pulse-highlight {
          animation: pulse-green-highlight 0.6s ease-in-out 3;
        }
      `}</style>
    </section>
  );
}
