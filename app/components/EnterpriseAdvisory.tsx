"use client";

import { useRef, useEffect } from "react";

const ENGAGEMENT_MODES = [
  {
    tag: "Format 01 · Immersion",
    title: "Executive Strategy Intensive",
    duration: "1–2 Day Immersion",
    desc: "A closed-door strategic room for founders and C-Suite teams to unblock stuck initiatives, audit decisions, and reset direction.",
    suitability: "Leadership retreats & post-funding alignment",
  },
  {
    tag: "Format 02 · Keynotes",
    title: "Strategic Keynotes & Briefings",
    duration: "Half-Day / Keynote",
    desc: "Transformational keynotes delivered by Zeki Ubor on human architecture, decision engineering, and institutional stamina.",
    suitability: "Corporate conventions & executive assemblies",
  },
  {
    tag: "Format 03 · Partnership",
    title: "Executive Advisory Partnership",
    duration: "Ongoing Strategic Partnership",
    desc: "Confidential strategic sound-boarding and ongoing leadership development for the CEO and senior executive core.",
    suitability: "Scaling enterprises navigating leadership transitions",
  },
];

export default function EnterpriseAdvisory() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="advisory"
      style={{
        background: "var(--indigo)",
        padding: "96px 48px",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(201, 168, 76, 0.15)",
        borderBottom: "1px solid rgba(201, 168, 76, 0.15)",
      }}
    >
      {/* Brand glowing orbs */}
      <div
        className="advisory-ambient-gold"
        style={{
          position: "absolute",
          top: -140,
          right: -140,
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(201, 168, 76, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        className="advisory-ambient-blue"
        style={{
          position: "absolute",
          bottom: -140,
          left: -140,
          width: 480,
          height: 480,
          background: "radial-gradient(circle, rgba(40, 37, 107, 0.7) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Section Header */}
        <div style={{ maxWidth: 860, marginBottom: 52 }}>
          <div
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 14,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span style={{ width: 18, height: 1, background: "var(--gold)", display: "inline-block" }} />
            Enterprise & Strategy Advisory
          </div>

          <h2
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(30px, 4vw, 52px)",
              fontWeight: 300,
              lineHeight: 1.12,
              color: "var(--cream)",
              letterSpacing: "-0.5px",
              marginBottom: 16,
            }}
          >
            Architecting Institutional Clarity,<br />
            <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>
              Leadership Capacity, & Strategic Execution.
            </em>
          </h2>

          <p
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: "rgba(247, 243, 236, 0.75)",
              maxWidth: 720,
              margin: 0,
            }}
          >
            We partner with founders and executive teams to eliminate decision friction, restore leadership stamina,
            and scale an authentic culture of execution.
          </p>
        </div>

        {/* Engagement Modes Grid */}
        <div style={{ marginBottom: 44 }}>
          <div
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 9,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 10,
            }}
          >
            How We Engage
          </div>
          <h3
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 300,
              color: "var(--cream)",
              marginBottom: 28,
            }}
          >
            Structured Engagements for Growing Enterprises
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 18,
            }}
            className="modes-grid"
          >
            {ENGAGEMENT_MODES.map((mode, i) => (
              <div
                key={i}
                style={{
                  background: "linear-gradient(135deg, rgba(40, 37, 107, 0.45) 0%, rgba(24, 22, 64, 0.7) 100%)",
                  border: "1px solid rgba(201, 168, 76, 0.16)",
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  position: "relative",
                  boxShadow: "0 8px 24px rgba(10, 8, 24, 0.18)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--gold)";
                  el.style.transform = "translateY(-3px)";
                  el.style.background = "linear-gradient(135deg, rgba(40, 37, 107, 0.65) 0%, rgba(28, 26, 74, 0.85) 100%)";
                  el.style.boxShadow = "0 16px 40px rgba(10, 8, 24, 0.32)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(201, 168, 76, 0.16)";
                  el.style.transform = "translateY(0)";
                  el.style.background = "linear-gradient(135deg, rgba(40, 37, 107, 0.45) 0%, rgba(24, 22, 64, 0.7) 100%)";
                  el.style.boxShadow = "0 8px 24px rgba(10, 8, 24, 0.18)";
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 8.5,
                      letterSpacing: "2.5px",
                      textTransform: "uppercase",
                      color: "var(--gold-muted)",
                      marginBottom: 10,
                    }}
                  >
                    {mode.tag}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: 22,
                      color: "var(--cream)",
                      fontWeight: 600,
                      lineHeight: 1.2,
                      marginBottom: 6,
                    }}
                  >
                    {mode.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 9.5,
                      color: "var(--gold)",
                      marginBottom: 14,
                      fontWeight: 500,
                    }}
                  >
                    {mode.duration}
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.65,
                      color: "rgba(247, 243, 236, 0.72)",
                      marginBottom: 18,
                    }}
                  >
                    {mode.desc}
                  </p>
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 9.5,
                    color: "rgba(247, 243, 236, 0.45)",
                    borderTop: "1px solid rgba(201, 168, 76, 0.1)",
                    paddingTop: 12,
                    lineHeight: 1.4,
                  }}
                >
                  {mode.suitability}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Discovery & Integrity Commitment Strip */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(40, 37, 107, 0.5) 0%, rgba(28, 26, 74, 0.75) 100%)",
            border: "1px solid rgba(201, 168, 76, 0.22)",
            padding: "26px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
            backdropFilter: "blur(10px)",
          }}
          className="integrity-strip"
        >
          <div style={{ maxWidth: 600 }}>
            <div
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 9,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 6,
              }}
            >
              The Standard of Integrity
            </div>
            <div
              style={{
                fontSize: 14,
                lineHeight: 1.65,
                color: "rgba(247, 243, 236, 0.85)",
              }}
            >
              Every engagement starts with a confidential discovery call to diagnose your structural reality
              before proposal or invoicing.
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="https://calendly.com/mindvestglobalresources/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "14px 26px",
                background: "var(--gold)",
                color: "var(--indigo-deep)",
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10.5,
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontWeight: 700,
                textDecoration: "none",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--gold-light)";
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 8px 24px rgba(201, 168, 76, 0.35)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--gold)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              Book Discovery Call ↗
            </a>

            <a
              href="https://wa.me/2349119059859?text=Hello%20Mindvest%20Global%20Office,%20I%20am%20reaching%20out%20to%20inquire%20about%20enterprise%20and%20strategy%20advisory%20with%20Zeki%20Ubor."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "14px 24px",
                background: "transparent",
                color: "var(--cream)",
                border: "1px solid rgba(201, 168, 76, 0.35)",
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10.5,
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--gold)";
                el.style.color = "var(--gold)";
                el.style.transform = "translateY(-2px)";
                el.style.background = "rgba(201, 168, 76, 0.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(201, 168, 76, 0.35)";
                el.style.color = "var(--cream)";
                el.style.transform = "translateY(0)";
                el.style.background = "transparent";
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10B981", boxShadow: "0 0 6px #10B981" }} />
              Executive Desk (WhatsApp) ↗
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          section {
            padding: 64px 20px !important;
          }
          .modes-grid {
            grid-template-columns: 1fr !important;
          }
          .integrity-strip {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 24px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
