"use client";

import { useState, useRef, useEffect } from "react";

interface CaseDossier {
  id: string;
  tag: string;
  classification: string;
  sector: string;
  scale: string;
  title: string;
  challenge: string;
  intervention: string;
  metrics: { value: string; label: string }[];
  quote: string;
}

const DOSSIERS: CaseDossier[] = [
  {
    id: "dossier-01",
    tag: "Dossier 01 · Enterprise Architecture",
    classification: "Institutional Governance",
    sector: "Multilateral FMCG & Regional Logistics",
    scale: "1,200+ Personnel · West Africa Operations",
    title: "Dismantling Operational Silos & Executive Turnover in a Conglomerate",
    challenge:
      "A fast-growing multi-state consumer goods group was experiencing severe attrition across VP-level management. Executive communication had collapsed into defensive bureaucratic silos, delaying critical distribution pipelines and costing an estimated ₦380M annually in friction, supply bottlenecks, and emergency headhunting.",
    intervention:
      "Mindvest Global deployed the Human Architecture Framework (Layer III: Systems Infrastructure & Layer IV: Relational Room Dynamics). Over a 90-day intervention, we re-architected executive decision rights, instituted sovereign accountability matrixes, and eliminated five redundant reporting layers that were creating cognitive drag.",
    metrics: [
      { value: "42%", label: "Reduction in executive turnover" },
      { value: "18 Days", label: "Faster regional distribution cycle" },
      { value: "₦260M+", label: "Annualized operational savings" },
    ],
    quote:
      "“Mindvest Global did not give us another consulting slide deck. They diagnosed our internal structural load and gave our leadership team their stamina back.”",
  },
  {
    id: "dossier-02",
    tag: "Dossier 02 · Leadership Stamina",
    classification: "Founder & C-Suite Advisory",
    sector: "Series-A FinTech & Digital Payments",
    scale: "$14M+ Monthly Transaction Volume",
    title: "Decoupling Founder Identity from 80-Hour Operational Burnout",
    challenge:
      "The founder and CEO had become the ultimate bottleneck for an institutional scale-up. Working 80+ hour weeks, personally reviewing trivial code changes and customer disputes, the founder was approaching cardiovascular collapse while critical banking integration contracts stalled.",
    intervention:
      "Conducted a private 1-on-1 strategic recalibration centered on Layer I (Identity Sovereignty) and Layer II (Decision Architecture). We installed the B-U-I-L-D Decision Engineering Filter, transferred operational sovereignty to two senior department leads, and instituted clear executive boundaries.",
    metrics: [
      { value: "38 Hrs", label: "Founder focused workweek (down from 82)" },
      { value: "3 Major", label: "Commercial bank APIs closed autonomously" },
      { value: "2.3x", label: "Valuation multiple achieved on Series B" },
    ],
    quote:
      "“I went from feeling like a prisoner of my own company to operating as a true institutional architect. The clarity of mind I recovered is priceless.”",
  },
  {
    id: "dossier-03",
    tag: "Dossier 03 · Sovereign Assets",
    classification: "Generational Capital & Real Soil",
    sector: "Diaspora Executive Consortium (UK / US / UAE)",
    scale: "Private Family Offices & Global Leaders",
    title: "Channeling Volatile Currency into Sovereign Agricultural & Development Soil",
    challenge:
      "A collective of high-earning diaspora executives were suffering from inflationary dilution in paper currencies and had repeatedly been burned by unverified, litigious land syndicates when attempting to build generational real estate assets in their home continent.",
    intervention:
      "Through Mindvest Capital & Real Soil Development (Divisions II & III), we structured private institutional holdings, vetted uncontested title governance, and master-planned 14 hectares of prime developmental and agricultural land along the emerging industrial corridor.",
    metrics: [
      { value: "14 Hectares", label: "Clean, sovereign-titled real estate acquired" },
      { value: "28%", label: "Annualized land equity appreciation" },
      { value: "100%", label: "Encumbrance-free legal guarantee" },
    ],
    quote:
      "“Mindvest gave our capital what foreign banks could never provide: genuine soil, structural integrity, and sovereign African roots.”",
  },
];

export default function CaseDossiers() {
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

  const activeDossier = DOSSIERS[activeTab];

  return (
    <section
      ref={sectionRef}
      id="dossiers"
      style={{
        background: "var(--indigo-deep, #0A0818)",
        color: "#FDFAF5",
        padding: "120px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background architectural grid & glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 65%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div
          style={{
            maxWidth: 780,
            marginBottom: 60,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 16,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span style={{ width: 24, height: 1, background: "var(--gold)", display: "inline-block" }} />
            Institutional Governance · Field Evidence
          </div>

          <h2
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(36px, 4.8vw, 64px)",
              fontWeight: 300,
              color: "var(--cream)",
              lineHeight: 1.1,
              margin: "0 0 20px",
            }}
          >
            The Anatomy of an Engagement:<br />
            <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>
              Advisory Case Dossiers
            </em>
          </h2>

          <p
            style={{
              fontSize: 16,
              color: "rgba(247,243,236,0.65)",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            We do not sell theoretical coaching or generic consulting slides. We diagnose hidden structural friction, 
            reinforce internal foundations, and engineer sovereign execution capacity. Here is how our frameworks 
            deliver measurable institutional yield in the field.
          </p>
        </div>

        {/* Dossier Tabs */}
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 36,
            borderBottom: "1px solid rgba(201,168,76,0.15)",
            paddingBottom: 16,
          }}
        >
          {DOSSIERS.map((d, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={d.id}
                onClick={() => setActiveTab(index)}
                style={{
                  background: isActive ? "rgba(201,168,76,0.14)" : "transparent",
                  border: isActive ? "1px solid var(--gold)" : "1px solid rgba(247,243,236,0.1)",
                  color: isActive ? "var(--gold-light)" : "rgba(247,243,236,0.6)",
                  padding: "12px 24px",
                  borderRadius: 3,
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 11,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  fontWeight: isActive ? 700 : 500,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: isActive ? "#10B981" : "rgba(247,243,236,0.3)",
                    boxShadow: isActive ? "0 0 8px #10B981" : "none",
                  }}
                />
                <span>0{index + 1}. {d.classification}</span>
              </button>
            );
          })}
        </div>

        {/* Active Dossier Display Card */}
        <div
          key={activeDossier.id}
          style={{
            background: "linear-gradient(145deg, rgba(22,19,59,0.7) 0%, rgba(10,8,24,0.9) 100%)",
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: 6,
            padding: "44px 40px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            position: "relative",
            overflow: "hidden",
            animation: "dossierFade 0.5s ease forwards",
          }}
          className="dossier-card"
        >
          {/* Subtle top indicator bar */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              background: "linear-gradient(90deg, #10B981 0%, #C9A84C 50%, #10B981 100%)",
            }}
          />

          {/* Dossier Meta Strip */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 16,
              marginBottom: 24,
              paddingBottom: 16,
              borderBottom: "1px solid rgba(201,168,76,0.12)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 10.5,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  fontWeight: 600,
                }}
              >
                {activeDossier.tag}
              </span>
              <span style={{ color: "rgba(247,243,236,0.2)" }}>·</span>
              <span
                style={{
                  fontSize: 12,
                  color: "rgba(247,243,236,0.5)",
                  fontFamily: "var(--font-dm-mono), monospace",
                }}
              >
                {activeDossier.sector}
              </span>
            </div>

            <span
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10,
                padding: "4px 10px",
                background: "rgba(16,185,129,0.12)",
                border: "1px solid rgba(16,185,129,0.3)",
                color: "#34D399",
                borderRadius: 2,
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              {activeDossier.scale}
            </span>
          </div>

          {/* Dossier Title */}
          <h3
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(26px, 3.2vw, 38px)",
              fontWeight: 400,
              color: "var(--cream)",
              lineHeight: 1.2,
              margin: "0 0 28px",
            }}
          >
            {activeDossier.title}
          </h3>

          {/* Two-Column Diagnosis & Intervention */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 36,
              marginBottom: 36,
            }}
            className="dossier-grid"
          >
            {/* The Symptom */}
            <div
              style={{
                background: "rgba(0,0,0,0.25)",
                padding: "24px 22px",
                borderRadius: 4,
                borderLeft: "3px solid #E11D48",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 10,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#FB7185",
                  marginBottom: 10,
                  fontWeight: 700,
                }}
              >
                The Structural Symptom
              </div>
              <p
                style={{
                  fontSize: 14.5,
                  color: "rgba(247,243,236,0.75)",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {activeDossier.challenge}
              </p>
            </div>

            {/* The Architectural Intervention */}
            <div
              style={{
                background: "rgba(0,0,0,0.25)",
                padding: "24px 22px",
                borderRadius: 4,
                borderLeft: "3px solid #10B981",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 10,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#34D399",
                  marginBottom: 10,
                  fontWeight: 700,
                }}
              >
                The Architectural Intervention
              </div>
              <p
                style={{
                  fontSize: 14.5,
                  color: "rgba(247,243,236,0.75)",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {activeDossier.intervention}
              </p>
            </div>
          </div>

          {/* Metrics Yield Row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
              padding: "24px 20px",
              background: "rgba(201,168,76,0.06)",
              border: "1px solid rgba(201,168,76,0.18)",
              borderRadius: 4,
              marginBottom: 30,
            }}
            className="dossier-metrics"
          >
            {activeDossier.metrics.map((m, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "clamp(28px, 3.2vw, 40px)",
                    fontWeight: 700,
                    color: "var(--gold-light)",
                    lineHeight: 1,
                    marginBottom: 6,
                  }}
                >
                  {m.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 9.5,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: "rgba(247,243,236,0.6)",
                  }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Executive Testimonial Quote */}
          <div
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: 18,
              fontStyle: "italic",
              color: "rgba(247,243,236,0.9)",
              lineHeight: 1.6,
              borderLeft: "2px solid var(--gold)",
              paddingLeft: 18,
              marginBottom: 28,
            }}
          >
            {activeDossier.quote}
          </div>

          {/* Dossier Bottom Action Link */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 16,
              paddingTop: 20,
              borderTop: "1px solid rgba(201,168,76,0.12)",
            }}
          >
            <span
              style={{
                fontSize: 13,
                color: "rgba(247,243,236,0.45)",
                fontFamily: "var(--font-dm-mono), monospace",
              }}
            >
              Client identities anonymized under strict non-disclosure covenants · Verified outcome records
            </span>

            <a
              href="https://calendly.com/mindvestglobalresources/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "12px 26px",
                background: "var(--gold)",
                color: "var(--indigo-deep)",
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10.5,
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontWeight: 700,
                textDecoration: "none",
                borderRadius: 2,
                transition: "all 0.3s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--gold-light)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--gold)";
                el.style.transform = "translateY(0)";
              }}
            >
              <span>Request Diagnostic Consultation</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes dossierFade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          #dossiers { padding: 80px 24px !important; }
          .dossier-card { padding: 28px 20px !important; }
          .dossier-grid { grid-template-columns: 1fr !important; gap: 18px !important; }
          .dossier-metrics { grid-template-columns: 1fr !important; gap: 20px !important; text-align: left !important; }
          .dossier-metrics > div { text-align: left !important; }
        }
      `}</style>
    </section>
  );
}
