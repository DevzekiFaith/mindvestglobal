"use client";

export default function Footer() {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#divisions", label: "Our Divisions" },
    { href: "#framework", label: "The Framework" },
    { href: "#masterclass", label: "Masterclass" },
    { href: "#who", label: "Who We Serve" },
  ];

  const divisions = [
    "The Becoming Institute",
    "The Leadership Architecture",
    "Organisational Architecture",
  ];

  return (
    <footer
      style={{
        background: "var(--indigo-deep)",
        padding: "90px 60px 52px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG decoration */}
      <div style={{
        position: "absolute",
        bottom: -200,
        right: -200,
        width: 500,
        height: 500,
        background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 65%)",
        borderRadius: "50%",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1300, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 60,
            marginBottom: 64,
            paddingBottom: 64,
            borderBottom: "1px solid rgba(201,168,76,0.08)",
          }}
          className="footer-top"
        >
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: 30,
              fontWeight: 300,
              color: "var(--cream)",
              marginBottom: 4,
              letterSpacing: "0.3px",
            }}>
              Mindvest Global
            </div>
            <div style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 9,
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "var(--gold-muted)",
              marginBottom: 24,
            }}>
              Architecting Human Potential
            </div>
            <p style={{
              fontSize: 13,
              color: "rgba(247,243,236,0.3)",
              lineHeight: 1.75,
              maxWidth: 280,
              marginBottom: 28,
            }}>
              A transformational education enterprise. Three divisions. One architecture.
              Ogun / Lagos State · Nigeria.
            </p>
            <a
              href="https://elevationstudio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--indigo-deep)",
                background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)",
                textDecoration: "none",
                padding: "12px 24px",
                border: "1px solid rgba(201,168,76,0.4)",
                fontWeight: 700,
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                boxShadow: "0 4px 15px rgba(201, 168, 76, 0.2)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-3px)";
                el.style.boxShadow = "0 12px 24px rgba(201, 168, 76, 0.4)";
                el.style.background = "linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 100%)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 4px 15px rgba(201, 168, 76, 0.2)";
                el.style.background = "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)";
              }}
            >
              ↗ Elevation Studio
            </a>
          </div>

          {/* Navigate */}
          <div>
            <div style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 9,
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 22,
            }}>
              Navigate
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: 15,
                      color: "rgba(247,243,236,0.32)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = "var(--cream)";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = "rgba(247,243,236,0.32)";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <div style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 9,
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 22,
            }}>
              Divisions
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {divisions.map((div, i) => (
                <li key={i}>
                  <a
                    href="#divisions"
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: 15,
                      color: "rgba(247,243,236,0.32)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = "var(--cream)";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = "rgba(247,243,236,0.32)";
                    }}
                  >
                    {div}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 9,
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 22,
            }}>
              Contact
            </div>

            {[
              { label: "Email", value: "mindvestglobalresources@gmail.com" },
              { label: "Location", value: "Ogun / Lagos State, Nigeria" },
              { label: "Programmes", value: "selar.com/543351n531" },
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: 18 }}>
                <div style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 9,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "var(--gold-muted)",
                  marginBottom: 4,
                }}>
                  {item.label}
                </div>
                <div style={{ fontSize: 13, color: "rgba(247,243,236,0.4)" }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}>
          <div style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 10,
            color: "rgba(247,243,236,0.18)",
            letterSpacing: "1px",
          }}>
            © 2026 Mindvest Global Resources LLC · All rights reserved
          </div>
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/company/mindvest-global" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 10,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "rgba(247,243,236,0.22)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "rgba(247,243,236,0.22)";
                }}
              >
                {social.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .footer-top { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
          footer { padding: 60px 24px 40px !important; }
        }
        @media (max-width: 600px) {
          .footer-top { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
