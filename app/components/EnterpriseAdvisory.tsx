"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AdvisoryPillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  humanReality: string;
  intervention: string;
  outcomes: string[];
  quote: string;
}

const PILLARS: AdvisoryPillar[] = [
  {
    id: "strategic-direction",
    number: "01",
    title: "Strategic Direction & Decisions",
    subtitle: "Eliminating Cognitive Drag & Founder Bottlenecks",
    humanReality:
      "When every critical decision stalls at the top, enterprises suffer compounding execution drag, reactive compromises, and strategic drift.",
    intervention:
      "We install the B-U-I-L-D Decision Framework, establish autonomous decision rights across departments, and de-bottleneck founder reliance.",
    outcomes: [
      "High-leverage focus vs. expensive operational distractions",
      "Decentralized decision rights for senior leadership leads",
    ],
    quote: "“A strategy is only as strong as decisions made under peak pressure.”",
  },
  {
    id: "leadership-alignment",
    number: "02",
    title: "Leadership Alignment & Stamina",
    subtitle: "Restoring C-Suite Cohesion & Stamina",
    humanReality:
      "Even brilliant models collapse when leaders are privately exhausted, operating in defensive silos, or burned out by the weight of responsibility.",
    intervention:
      "Confidential 1-on-1 executive advisory and intensives that rebuild internal stamina, establish sovereign boundaries, and align the leadership core.",
    outcomes: [
      "Restoration of executive focus, energy, and mental clarity",
      "Dismantling of inter-departmental politics and silos",
    ],
    quote: "“Enduring institutions cannot stand on an exhausted leadership core.”",
  },
  {
    id: "culture-systems",
    number: "03",
    title: "Institutional Culture & Dynamics",
    subtitle: "Designing High-Trust Execution Environments",
    humanReality:
      "Culture is never an office slogan; it is the daily communication habits, psychological safety, and unspoken room dynamics under stress.",
    intervention:
      "We re-architect internal communication protocols, eliminate relational friction, and install an authentic standard of ownership.",
    outcomes: [
      "Transparent communication protocols that eliminate passive aggression",
      "Unified team energy aligned with measurable milestones",
    ],
    quote: "“When the foundation is solid, teams stop surviving and build for legacy.”",
  },
];

const ENGAGEMENT_MODES = [
  {
    tag: "Format 01 · Immersion",
    title: "Executive Strategy Intensive",
    duration: "1–2 Day Immersion",
    desc: "Closed-door strategic room for founders and C-Suites to unblock initiatives, audit decisions, and reset direction.",
    suitability: "Leadership retreats & post-funding alignment",
  },
  {
    tag: "Format 02 · Keynotes",
    title: "Strategic Keynotes & Briefings",
    duration: "Half-Day / Keynote",
    desc: "Transformational keynotes by Zeki Ubor on human architecture, decision engineering, and institutional stamina.",
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
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

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

  const activePillar = PILLARS[activeTab];

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
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Section Header */}
        <div style={{ maxWidth: 860, marginBottom: 40 }}>
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
              fontSize: 15.5,
              lineHeight: 1.75,
              color: "rgba(247, 243, 236, 0.75)",
              maxWidth: 720,
              margin: 0,
            }}
          >
            We partner with founders and executive teams to eliminate decision friction, restore leadership stamina,
            and scale an authentic culture of execution.
          </p>
        </div>

        {/* Tab Selection */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
            marginBottom: 22,
          }}
          className="advisory-tab-grid"
        >
          {PILLARS.map((pillar, idx) => {
            const isActive = activeTab === idx;
            return (
              <motion.button
                key={pillar.id}
                onClick={() => setActiveTab(idx)}
                whileTap={{ scale: 0.985 }}
                style={{
                  background: isActive
                    ? "linear-gradient(135deg, rgba(40, 37, 107, 0.8) 0%, rgba(28, 26, 74, 0.95) 100%)"
                    : "rgba(40, 37, 107, 0.25)",
                  border: isActive ? "1px solid rgba(201, 168, 76, 0.45)" : "1px solid rgba(201, 168, 76, 0.12)",
                  padding: "16px 20px",
                  textAlign: "left",
                  cursor: "pointer",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  overflow: "hidden",
                }}
                animate={{
                  borderColor: isActive ? "rgba(201, 168, 76, 0.45)" : "rgba(201, 168, 76, 0.12)",
                }}
                transition={{ duration: 0.25 }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(201, 168, 76, 0.3)";
                    el.style.background = "rgba(40, 37, 107, 0.45)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(201, 168, 76, 0.12)";
                    el.style.background = "rgba(40, 37, 107, 0.25)";
                  }
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePillarTabIndicator"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: "linear-gradient(90deg, var(--gold) 0%, rgba(201,168,76,0.3) 100%)",
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 32 }}
                  />
                )}
                <div
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 9,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: isActive ? "var(--gold)" : "rgba(247, 243, 236, 0.45)",
                    transition: "color 0.3s ease",
                  }}
                >
                  Pillar {pillar.number}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: 18,
                    fontWeight: 500,
                    color: "var(--cream)",
                    lineHeight: 1.25,
                    transition: "color 0.3s ease",
                  }}
                >
                  {pillar.title}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Active Pillar Card — Compact & Elegant */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(40, 37, 107, 0.6) 0%, rgba(24, 22, 64, 0.85) 100%)",
            border: "1px solid rgba(201, 168, 76, 0.22)",
            padding: "36px 40px",
            marginBottom: 44,
            position: "relative",
            backdropFilter: "blur(16px)",
            boxShadow: "0 16px 48px rgba(10, 8, 24, 0.3)",
            overflow: "hidden",
          }}
          className="pillar-card"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "grid",
                gridTemplateColumns: "1.3fr 1fr",
                gap: 40,
                alignItems: "start",
              }}
              className="pillar-content-wrapper"
            >
              {/* Left Column: Reality & Intervention */}
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 9,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: 6,
                  }}
                >
                  The Reality
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: 23,
                    fontWeight: 500,
                    color: "var(--cream)",
                    lineHeight: 1.25,
                    marginBottom: 10,
                  }}
                >
                  {activePillar.subtitle}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    fontSize: 14.5,
                    lineHeight: 1.7,
                    color: "rgba(247, 243, 236, 0.76)",
                    marginBottom: 20,
                  }}
                >
                  {activePillar.humanReality}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 9,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: 6,
                  }}
                >
                  The Intervention
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    fontSize: 14.5,
                    lineHeight: 1.7,
                    color: "rgba(247, 243, 236, 0.85)",
                    margin: 0,
                  }}
                >
                  {activePillar.intervention}
                </motion.p>
              </div>

              {/* Right Column: Key Outcomes & Quote */}
              <motion.div
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(201, 168, 76, 0.16)",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 9,
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      marginBottom: 12,
                    }}
                  >
                    Deliverables & Impact
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {activePillar.outcomes.map((outcome, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 10,
                          fontSize: 13.5,
                          lineHeight: 1.55,
                          color: "rgba(247, 243, 236, 0.88)",
                        }}
                      >
                        <span
                          style={{
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            background: "var(--gold)",
                            marginTop: 7,
                            flexShrink: 0,
                          }}
                        />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    borderTop: "1px solid rgba(201, 168, 76, 0.14)",
                    paddingTop: 16,
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: 15.5,
                    fontStyle: "italic",
                    lineHeight: 1.5,
                    color: "var(--gold-light)",
                  }}
                >
                  {activePillar.quote}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Engagement Modes Grid — Compact */}
        <div style={{ marginBottom: 38 }}>
          <div
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 9,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 10,
              textAlign: "center",
            }}
          >
            How We Engage
          </div>
          <h3
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(22px, 2.6vw, 32px)",
              fontWeight: 300,
              color: "var(--cream)",
              textAlign: "center",
              marginBottom: 24,
            }}
          >
            Structured Engagements for Growing Enterprises
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
            }}
            className="modes-grid"
          >
            {ENGAGEMENT_MODES.map((mode, i) => (
              <div
                key={i}
                style={{
                  background: "linear-gradient(135deg, rgba(40, 37, 107, 0.45) 0%, rgba(24, 22, 64, 0.7) 100%)",
                  border: "1px solid rgba(201, 168, 76, 0.16)",
                  padding: "24px 22px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  position: "relative",
                  boxShadow: "0 8px 24px rgba(10, 8, 24, 0.18)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--gold)";
                  el.style.transform = "translateY(-3px)";
                  el.style.background = "linear-gradient(135deg, rgba(40, 37, 107, 0.65) 0%, rgba(28, 26, 74, 0.85) 100%)";
                  el.style.boxShadow = "0 14px 36px rgba(10, 8, 24, 0.3)";
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
                      marginBottom: 8,
                    }}
                  >
                    {mode.tag}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: 20,
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
                      marginBottom: 12,
                      fontWeight: 500,
                    }}
                  >
                    {mode.duration}
                  </div>
                  <p
                    style={{
                      fontSize: 13.5,
                      lineHeight: 1.6,
                      color: "rgba(247, 243, 236, 0.72)",
                      marginBottom: 16,
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
                    paddingTop: 10,
                    lineHeight: 1.4,
                  }}
                >
                  {mode.suitability}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Discovery & Integrity Commitment Strip — Compact */}
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
          .advisory-tab-grid {
            grid-template-columns: 1fr !important;
          }
          .pillar-card {
            padding: 24px 18px !important;
          }
          .pillar-content-wrapper {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
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
