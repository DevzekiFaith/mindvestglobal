"use client";

import { useState, useRef, useEffect } from "react";

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
  const [animating, setAnimating] = useState(false);
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

  const handleTabChange = (idx: number) => {
    if (idx === activeTab) return;
    setAnimating(true);
    setActiveTab(idx);
    setTimeout(() => {
      setAnimating(false);
    }, 350);
  };

  const activePillar = PILLARS[activeTab];

  return (
    <section
      ref={sectionRef}
      id="advisory"
      style={{
        background: "var(--cream)",
        padding: "130px 60px",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid var(--cream-dark)",
        borderBottom: "1px solid var(--cream-dark)",
      }}
    >
      {/* Subtle warm ambient glows */}
      <div
        style={{
          position: "absolute",
          top: -160,
          right: -160,
          width: 550,
          height: 550,
          background: "radial-gradient(circle, rgba(201, 168, 76, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -140,
          left: -140,
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(28, 26, 74, 0.04) 0%, transparent 70%)",
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
        {/* Section Header */}
        <div style={{ maxWidth: 920, marginBottom: 60 }}>
          <div
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "var(--gold-muted)",
              marginBottom: 20,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span style={{ width: 20, height: 1, background: "var(--gold-muted)", display: "inline-block" }} />
            Enterprise & Strategy Advisory
          </div>

          <h2
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(34px, 4.6vw, 62px)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "var(--indigo)",
              letterSpacing: "-0.5px",
              marginBottom: 24,
            }}
          >
            Architecting Institutional Clarity,<br />
            <em style={{ fontStyle: "italic", color: "var(--gold-muted)" }}>
              Leadership Capacity, & Strategic Execution.
            </em>
          </h2>

          <p
            style={{
              fontSize: 16.5,
              lineHeight: 1.85,
              color: "var(--muted)",
              maxWidth: 780,
              margin: 0,
            }}
          >
            Most enterprises do not stall because they lack ambition. They stall because their leaders are carrying
            too much friction, their decisions are reactive, and their culture is built on borrowed templates. We partner
            with founders, executives, and leadership teams to install structural clarity from the inside out.
          </p>
        </div>

        {/* Tab Selection — Clean Ivory/Cream Surface */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 14,
            marginBottom: 26,
          }}
          className="advisory-tab-grid"
        >
          {PILLARS.map((pillar, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => handleTabChange(idx)}
                style={{
                  background: isActive ? "var(--white)" : "rgba(255, 255, 255, 0.45)",
                  border: isActive ? "1px solid rgba(201, 168, 76, 0.45)" : "1px solid var(--cream-dark)",
                  padding: "22px 26px",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  boxShadow: isActive ? "0 8px 30px rgba(28, 26, 74, 0.05)" : "none",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(201, 168, 76, 0.3)";
                    el.style.background = "var(--white)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--cream-dark)";
                    el.style.background = "rgba(255, 255, 255, 0.45)";
                  }
                }}
              >
                {isActive && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: "var(--gold)",
                    }}
                  />
                )}
                <div
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 9,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: isActive ? "var(--gold-muted)" : "var(--muted-light)",
                    transition: "color 0.3s ease",
                  }}
                >
                  Pillar {pillar.number}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: 19,
                    fontWeight: 600,
                    color: "var(--indigo)",
                    lineHeight: 1.25,
                    transition: "color 0.3s ease",
                  }}
                >
                  {pillar.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Card — Warm Light Surface */}
        <div
          style={{
            background: "var(--white)",
            border: "1px solid var(--cream-dark)",
            padding: "48px 52px",
            marginBottom: 56,
            position: "relative",
            boxShadow: "0 12px 48px rgba(28, 26, 74, 0.04)",
          }}
          className="pillar-card"
        >
          <div
            key={activePillar.id}
            className={`pillar-content-wrapper ${animating ? "gliding-in" : "glide-settled"}`}
            style={{
              display: "grid",
              gridTemplateColumns: "1.35fr 1fr",
              gap: 56,
              alignItems: "start",
            }}
          >
            {/* Left Column: Human Reality & Architectural Intervention */}
            <div>
              <div
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 9,
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  color: "var(--gold-muted)",
                  marginBottom: 10,
                }}
              >
                The Human Reality
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: 27,
                  fontWeight: 400,
                  color: "var(--indigo)",
                  lineHeight: 1.25,
                  marginBottom: 18,
                }}
              >
                {activePillar.subtitle}
              </h3>
              <p
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.85,
                  color: "var(--muted)",
                  marginBottom: 30,
                }}
              >
                {activePillar.humanReality}
              </p>

              <div
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 9,
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  color: "var(--gold-muted)",
                  marginBottom: 10,
                }}
              >
                The Advisory Intervention
              </div>
              <p
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.85,
                  color: "var(--text)",
                  margin: 0,
                }}
              >
                {activePillar.intervention}
              </p>
            </div>

            {/* Right Column: Key Outcomes & Guiding Conviction */}
            <div
              style={{
                background: "var(--cream)",
                border: "1px solid var(--cream-dark)",
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
                    color: "var(--gold-muted)",
                    marginBottom: 16,
                  }}
                >
                  Deliverables & Impact
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {activePillar.outcomes.map((outcome, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                        fontSize: 14,
                        lineHeight: 1.6,
                        color: "var(--text)",
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
                    </div>
                  ))}
                </div>
              </div>

              {/* Guiding Quote */}
              <div
                style={{
                  borderTop: "1px solid var(--cream-dark)",
                  paddingTop: 22,
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: 17,
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  color: "var(--indigo-mid)",
                }}
              >
                {activePillar.quote}
              </div>
            </div>
          </div>
        </div>

        {/* Engagement Modes Grid */}
        <div style={{ marginBottom: 48 }}>
          <div
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 9,
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "var(--gold-muted)",
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
              color: "var(--indigo)",
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
                  background: "var(--white)",
                  border: "1px solid var(--cream-dark)",
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  position: "relative",
                  boxShadow: "0 4px 20px rgba(28, 26, 74, 0.02)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(201, 168, 76, 0.4)";
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 16px 40px rgba(28, 26, 74, 0.07)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--cream-dark)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 4px 20px rgba(28, 26, 74, 0.02)";
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
                      color: "var(--indigo)",
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
                      color: "var(--gold-muted)",
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
                      color: "var(--muted)",
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
                    color: "var(--muted-light)",
                    borderTop: "1px solid var(--cream-dark)",
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

        {/* Discovery & Integrity Commitment Strip — Clean Ivory Panel */}
        <div
          style={{
            background: "var(--white)",
            border: "1px solid var(--cream-dark)",
            padding: "34px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 28,
            flexWrap: "wrap",
            boxShadow: "0 8px 32px rgba(28, 26, 74, 0.03)",
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
                color: "var(--gold-muted)",
                marginBottom: 8,
              }}
            >
              The Standard of Integrity
            </div>
            <div
              style={{
                fontSize: 15,
                lineHeight: 1.75,
                color: "var(--text)",
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
                background: "var(--indigo)",
                color: "var(--cream)",
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 11,
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--indigo-mid)";
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 12px 30px rgba(28, 26, 74, 0.2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--indigo)";
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
                color: "var(--indigo)",
                border: "1px solid var(--indigo)",
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
                el.style.background = "var(--indigo)";
                el.style.color = "var(--cream)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "transparent";
                el.style.color = "var(--indigo)";
                el.style.transform = "translateY(0)";
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10B981" }} />
              Executive Desk (WhatsApp) ↗
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes advisoryContentGlide {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pillar-content-wrapper.gliding-in {
          animation: advisoryContentGlide 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .pillar-content-wrapper.glide-settled {
          opacity: 1;
          transform: translateY(0);
        }

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
