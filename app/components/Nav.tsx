"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#divisions", label: "Divisions" },
    { href: "#framework", label: "Framework" },
    { href: "#masterclass", label: "Masterclass" },
    { href: "#who", label: "Who We Serve" },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? "16px 60px" : "28px 60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          background: scrolled ? "rgba(253,250,245,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(237,231,218,0.8)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 60px rgba(28,26,74,0.08)" : "none",
        }}
      >
        {/* Logo */}
        <Link href="#" style={{ display: "flex", flexDirection: "column", gap: 2, textDecoration: "none" }}>
          <div style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: 22,
            fontWeight: 600,
            color: scrolled ? "var(--indigo)" : "var(--cream)",
            letterSpacing: "0.5px",
            lineHeight: 1,
            transition: "color 0.4s",
          }}>
            Mindvest Global
          </div>
          <div style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 8,
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "var(--gold-muted)",
          }}>
            Architecting Human Potential
          </div>
        </Link>

        {/* Desktop links */}
        <ul style={{ display: "flex", gap: 36, listStyle: "none", alignItems: "center", margin: 0, padding: 0 }}
            className="nav-desktop">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 13,
                  color: scrolled ? "var(--muted)" : "rgba(247,243,236,0.65)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  letterSpacing: "0.3px",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = scrolled ? "var(--indigo)" : "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = scrolled ? "var(--muted)" : "rgba(247,243,236,0.65)";
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://selar.com/543351n531"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "11px 28px",
                background: "var(--gold)",
                color: "var(--indigo-deep)",
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 11,
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
                fontWeight: 500,
                transition: "all 0.25s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = "var(--gold-light)";
                (e.target as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "var(--gold)";
                (e.target as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Start Becoming
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="nav-mobile-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            display: "none",
            flexDirection: "column",
            gap: 5,
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 24,
                height: 1,
                background: scrolled ? "var(--indigo)" : "var(--cream)",
                transition: "all 0.3s",
                transformOrigin: "center",
                transform: mobileOpen
                  ? i === 0 ? "rotate(45deg) translate(4px, 4px)" : i === 2 ? "rotate(-45deg) translate(4px, -4px)" : "scaleX(0)"
                  : "none",
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "var(--indigo-deep)",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 32,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: 36,
                fontWeight: 300,
                color: "var(--cream)",
                textDecoration: "none",
                transition: "color 0.2s",
                letterSpacing: "1px",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://selar.com/543351n531"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            style={{
              marginTop: 16,
              padding: "14px 36px",
              background: "var(--gold)",
              color: "var(--indigo-deep)",
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 11,
              letterSpacing: "3px",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Start Becoming
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 960px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
          nav { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
    </>
  );
}
