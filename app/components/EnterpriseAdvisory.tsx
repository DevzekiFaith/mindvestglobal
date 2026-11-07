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
    title: "Strategic Direction & Decision Architecture",
    subtitle: "Eliminating Cognitive Drag & Executive Bottlenecks",
    humanReality:
      "Most enterprises do not lose momentum from a lack of effort. They lose it from strategic drift — making reactive, 'cheap' compromises that cost millions in operational drag, or suffering from executive gridlock where every critical decision stalls at the founder's desk.",
    intervention:
      "We partner with founders, boards, and leadership teams to audit strategic direction, install the B-U-I-L-D Decision Framework, decouple the enterprise from founder micromanagement, and establish clear decision sovereignty across departments.",
    outcomes: [
      "Clarity on high-leverage priorities vs. expensive distractions",
      "Decentralized decision rights that empower senior department leads",
      "Elimination of cognitive drag across operational and strategic pipelines",
    ],
    quote:
      "“A strategy is only as strong as the quality of decisions made in private when pressure is at its peak.”",
  },
  {
    id: "leadership-alignment",
    number: "02",
    title: "Leadership Alignment & Executive Capacity",
    subtitle: "Restoring Stamina, Cohesion, & Emotional Sovereignty",
    humanReality:
      "Even the most brilliant business model collapses if the leaders expected to execute it are privately exhausted, operating in defensive silos, or burned out by the sheer weight of responsibility.",
    intervention:
      "Through confidential 1-on-1 executive advisory and leadership intensives, we help leaders rebuild their internal stamina, establish sovereign emotional boundaries, and transform defensive meetings into high-trust collaborative rooms.",
    outcomes: [
      "Restoration of executive stamina, focus, and mental clarity",
      "Dismantling of inter-departmental politics and executive silos",
      "Unified executive presence and shared commitment to vision",
    ],
    quote:
      "“You cannot build an enduring institution on top of an exhausted, fragmented leadership core.”",
  },
  {
    id: "culture-systems",
    number: "03",
    title: "Institutional Culture & Relational Dynamics",
    subtitle: "Designing High-Trust Rooms That Endure",
    humanReality:
      "Culture is never the slogan framed on an office wall; it is the unspoken room dynamics, the psychological safety, and the daily communication habits of your people under stress.",
    intervention:
      "We re-architect internal communication protocols, align human capital with the monumental vision of the enterprise, and install an authentic culture of sovereign accountability and excellence.",
    outcomes: [
      "Culture of radical ownership without fear or defensiveness",
      "Transparent communication protocols that eliminate passive aggression",
      "Alignment of team energy with measurable institutional milestones",
    ],
    quote:
      "“When people know the foundation is solid, they stop performing for survival and start building for legacy.”",
  },
];

const ENGAGEMENT_MODES = [
  {
    tag: "Format 01 · Immersion",
    title: "Executive Strategy Intensive",
    duration: "1–2 Day Immersion",
    desc: "A closed-door strategic room for founders and C-Suite teams to unblock stuck initiatives, audit decisions, and reset direction.",
    suitability: "Best for: Leadership retreats, post-funding resets, and annual strategic alignment.",
  },
  {
    tag: "Format 02 · Keynotes",
    title: "Strategic Keynotes & Briefings",
    duration: "Half-Day / Retreat Keynote",
    desc: "Transformational keynotes delivered by Zeki Ubor on human architecture, decision engineering, and institutional stamina.",
    suitability: "Best for: Corporate conventions, executive assemblies, and board retreats.",
  },
  {
    tag: "Format 03 · Partnership",
    title: "Executive Advisory Partnership",
    duration: "Ongoing Strategic Partnership",
    desc: "Ongoing confidential strategic sound-boarding and leadership development for the CEO and senior executive core.",
    suitability: "Best for: Rapidly scaling enterprises navigating complex leadership transitions.",
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
        background: "var(--indigo)", // Signature Brand Indigo #1C1A4A
        padding: "130px 60px",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(201, 168, 76, 0.15)",
        borderBottom: "1px solid rgba(201, 168, 76, 0.15)",
      }}
    >
      {/* Brand glowing orbs & architecture accents */}
      <div
        className="advisory-ambient-gold"
        style={{
          position: "absolute",
          top: -160,
          right: -160,
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(201, 168, 76, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        className="advisory-ambient-blue"
        style={{
          position: "absolute",
          bottom: -150,
          left: -150,
          width: 550,
          height: 550,
          background: "radial-gradient(circle, rgba(40, 37, 107, 0.7) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Section Header on Brand Color */}
        <div style={{ maxWidth: 940, marginBottom: 56 }}>
          <div
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 20,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span style={{ width: 20, height: 1, background: "var(--gold)", display: "inline-block" }} />
            Enterprise & Strategy Advisory
          </div>

          <h2
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(34px, 4.6vw, 62px)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "var(--cream)",
              letterSpacing: "-0.5px",
              marginBottom: 24,
            }}
          >
            Architecting Institutional Clarity,<br />
            <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>
              Leadership Capacity, & Strategic Execution.
            </em>
          </h2>

          <p
            style={{
              fontSize: 16.5,
              lineHeight: 1.85,
              color: "rgba(247, 243, 236, 0.75)",
              maxWidth: 780,
              margin: 0,
            }}
          >
            Most enterprises do not stall because they lack ambition. They stall because their leaders are carrying
            too much friction, their decisions are reactive, and their culture is built on borrowed templates. We partner
            with founders, executives, and leadership teams to install structural clarity from the inside out.
          </p>
        </div>

        {/* Tab Selection — Framer Motion Pill Buttons */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 14,
            marginBottom: 28,
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
                  padding: "20px 24px",
                  textAlign: "left",
                  cursor: "pointer",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
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
                    fontSize: 19,
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

        {/* Active Pillar Card — Brand Indigo Surface with Framer Motion AnimatePresence */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(40, 37, 107, 0.6) 0%, rgba(24, 22, 64, 0.85) 100%)",
            border: "1px solid rgba(201, 168, 76, 0.25)",
            padding: "48px 52px",
            marginBottom: 56,
            position: "relative",
            backdropFilter: "blur(16px)",
            boxShadow: "0 20px 60px rgba(10, 8, 24, 0.35)",
            overflow: "hidden",
          }}
          className="pillar-card"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "grid",
                gridTemplateColumns: "1.35fr 1fr",
                gap: 56,
                alignItems: "start",
              }}
              className="pillar-content-wrapper"
            >
              {/* Left Column: Human Reality & Architectural Intervention */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 9,
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: 10,
                  }}
                >
                  The Human Reality
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.32, delay: 0.08 }}
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: 27,
                    fontWeight: 500,
                    color: "var(--cream)",
                    lineHeight: 1.25,
                    marginBottom: 18,
                  }}
                >
                  {activePillar.subtitle}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.32, delay: 0.12 }}
                  style={{
                    fontSize: 15.5,
                    lineHeight: 1.85,
                    color: "rgba(247, 243, 236, 0.78)",
                    marginBottom: 30,
                  }}
                >
                  {activePillar.humanReality}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 9,
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: 10,
                  }}
                >
                  The Advisory Intervention
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.32, delay: 0.18 }}
                  style={{
                    fontSize: 15.5,
                    lineHeight: 1.85,
                    color: "rgba(247, 243, 236, 0.85)",
                    margin: 0,
                  }}
                >
                  {activePillar.intervention}
                </motion.p>
              </div>

              {/* Right Column: Key Outcomes & Guiding Conviction */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(201, 168, 76, 0.18)",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 26,
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
                      marginBottom: 16,
                    }}
                  >
                    Deliverables & Impact
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {activePillar.outcomes.map((outcome, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, delay: 0.14 + i * 0.05 }}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 12,
                          fontSize: 14,
                          lineHeight: 1.6,
                          color: "rgba(247, 243, 236, 0.88)",
                        }}
                      >
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "var(--gold)",
                            marginTop: 7,
                            flexShrink: 0,
                          }}
                        />
                        <span>{outcome}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Guiding Quote */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35, delay: 0.28 }}
                  style={{
                    borderTop: "1px solid rgba(201, 168, 76, 0.15)",
                    paddingTop: 22,
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: 17,
                    fontStyle: "italic",
                    lineHeight: 1.6,
                    color: "var(--gold-light)",
                  }}
                >
                  {activePillar.quote}
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Engagement Modes Grid — Brand Indigo Cards */}
        <div style={{ marginBottom: 48 }}>
          <div
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 9,
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            How We Engage
          </div>
          <h3
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(24px, 3vw, 38px)",
              fontWeight: 300,
              color: "var(--cream)",
              textAlign: "center",
              marginBottom: 36,
            }}
          >
            Structured Engagements for Growing Enterprises
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
            className="modes-grid"
          >
            {ENGAGEMENT_MODES.map((mode, i) => (
              <div
                key={i}
                style={{
                  background: "linear-gradient(135deg, rgba(40, 37, 107, 0.45) 0%, rgba(24, 22, 64, 0.7) 100%)",
                  border: "1px solid rgba(201, 168, 76, 0.18)",
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  position: "relative",
                  boxShadow: "0 10px 30px rgba(10, 8, 24, 0.2)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--gold)";
                  el.style.transform = "translateY(-4px)";
                  el.style.background = "linear-gradient(135deg, rgba(40, 37, 107, 0.65) 0%, rgba(28, 26, 74, 0.85) 100%)";
                  el.style.boxShadow = "0 20px 48px rgba(10, 8, 24, 0.35)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(201, 168, 76, 0.18)";
                  el.style.transform = "translateY(0)";
                  el.style.background = "linear-gradient(135deg, rgba(40, 37, 107, 0.45) 0%, rgba(24, 22, 64, 0.7) 100%)";
                  el.style.boxShadow = "0 10px 30px rgba(10, 8, 24, 0.2)";
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 9,
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      color: "var(--gold-muted)",
                      marginBottom: 12,
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
                      marginBottom: 8,
                    }}
                  >
                    {mode.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 10,
                      color: "var(--gold)",
                      marginBottom: 16,
                      fontWeight: 500,
                    }}
                  >
                    {mode.duration}
                  </div>
                  <p
                    style={{
                      fontSize: 14.5,
                      lineHeight: 1.7,
                      color: "rgba(247, 243, 236, 0.72)",
                      marginBottom: 20,
                    }}
                  >
                    {mode.desc}
                  </p>
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 10,
                    color: "rgba(247, 243, 236, 0.45)",
                    borderTop: "1px solid rgba(201, 168, 76, 0.12)",
                    paddingTop: 14,
                    lineHeight: 1.5,
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
            border: "1px solid rgba(201, 168, 76, 0.25)",
            padding: "34px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 28,
            flexWrap: "wrap",
            backdropFilter: "blur(10px)",
          }}
          className="integrity-strip"
        >
          <div style={{ maxWidth: 640 }}>
            <div
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 9,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 8,
              }}
            >
              The Standard of Integrity
            </div>
            <div
              style={{
                fontSize: 15,
                lineHeight: 1.75,
                color: "rgba(247, 243, 236, 0.85)",
              }}
            >
              Every enterprise engagement begins with an exploratory discovery conversation to diagnose your
              structural reality before proposal or invoicing. We do not prescribe before we inspect.
            </div>
          </div>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a
              href="https://calendly.com/mindvestglobalresources/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "16px 32px",
                background: "var(--gold)",
                color: "var(--indigo-deep)",
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 11,
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
                el.style.boxShadow = "0 10px 28px rgba(201, 168, 76, 0.35)";
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
                padding: "16px 28px",
                background: "transparent",
                color: "var(--cream)",
                border: "1px solid rgba(201, 168, 76, 0.4)",
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 11,
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
                el.style.borderColor = "rgba(201, 168, 76, 0.4)";
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
            padding: 80px 24px !important;
          }
          .advisory-tab-grid {
            grid-template-columns: 1fr !important;
          }
          .pillar-card {
            padding: 26px 20px !important;
          }
          .pillar-content-wrapper {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .modes-grid {
            grid-template-columns: 1fr !important;
          }
          .integrity-strip {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 28px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
