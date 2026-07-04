"use client";

import { useEffect, useRef, useState } from "react";

const credentials = [
  "B.Sc. Architecture — Enugu State University of Science and Technology",
  "BIM Specialist — Revit, AutoCAD, Lumion · Decade of architectural practice",
  "Frontend Engineer — React, Next.js, TypeScript · Tech Studio Academy",
  "Founder — Mindvest Global Resources LLC · Sagamu, Ogun State",
];

const brands = [
  { name: "Mindvest Global", role: "Founder & Director" },
  { name: "The Becoming Institute", role: "Lead Practitioner" },
  { name: "Elevation Studio", role: "Principal Designer" },
  { name: "Becoming — Podcast", role: "Host" },
];

export default function Founder() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

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
      style={{
        background: "var(--indigo-deep)",
        padding: "130px 60px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.9s ease, transform 0.9s ease",
      }}
    >
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 100,
            alignItems: "center",
          }}
          className="founder-grid"
        >
          {/* Left: quote + bio */}
          <div>
            <div style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 28,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}>
              <span style={{ width: 24, height: 1, background: "var(--gold)", display: "inline-block" }} />
              The Founder
            </div>

            <blockquote style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(24px, 3.2vw, 42px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--cream)",
              lineHeight: 1.45,
              marginBottom: 36,
              paddingLeft: 32,
              borderLeft: "2px solid var(--gold)",
              margin: "0 0 36px 0",
            }}>
              "You cannot transform others on a foundation you haven't designed
              yourself. Everything I build, I have first been through."
            </blockquote>

            <p style={{
              fontSize: 15,
              color: "rgba(247,243,236,0.42)",
              lineHeight: 1.85,
              marginBottom: 36,
            }}>
              Zeki Ubor is a licensed architect, BIM specialist, frontend engineer,
              and transformation practitioner — one of very few people who has formally
              trained in both the design of physical spaces and the design of human
              potential.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {credentials.map((cred, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                    fontSize: 13,
                    color: "rgba(247,243,236,0.42)",
                    lineHeight: 1.6,
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(-20px)",
                    transition: "opacity 0.7s ease, transform 0.7s ease",
                    transitionDelay: `${i * 100 + 300}ms`,
                  }}
                >
                  <span style={{
                    color: "var(--gold-muted)",
                    fontSize: 8,
                    marginTop: 5,
                    flexShrink: 0,
                  }}>
                    ◆
                  </span>
                  {cred}
                </div>
              ))}
            </div>
          </div>

          {/* Right: name block */}
          <div>
            <div style={{
              padding: "56px 52px",
              background: "rgba(40,37,107,0.45)",
              border: "1px solid rgba(201,168,76,0.14)",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Decorative corner */}
              <div style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 80,
                height: 80,
                borderBottom: "1px solid rgba(201,168,76,0.1)",
                borderLeft: "1px solid rgba(201,168,76,0.1)",
              }} />

              <div style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10,
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 24,
              }}>
                Principal & Founder
              </div>

              <div style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: 60,
                fontWeight: 300,
                color: "var(--cream)",
                lineHeight: 0.9,
                marginBottom: 12,
                letterSpacing: "-1px",
              }}>
                Zeki
                <br />
                <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Ubor</em>
              </div>

              <div style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 11,
                letterSpacing: "2px",
                color: "var(--gold-muted)",
                marginBottom: 36,
                textTransform: "uppercase",
              }}>
                Architect of Human Potential
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                {brands.map((brand, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "16px 0",
                      borderBottom: "1px solid rgba(201,168,76,0.09)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      opacity: visible ? 1 : 0,
                      transition: "opacity 0.6s ease",
                      transitionDelay: `${i * 100 + 400}ms`,
                    }}
                  >
                    <div style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: 18,
                      fontWeight: 600,
                      color: "var(--cream)",
                    }}>
                      {brand.name}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 9,
                      letterSpacing: "2px",
                      color: "var(--gold-muted)",
                      textTransform: "uppercase",
                    }}>
                      {brand.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .founder-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          section { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
