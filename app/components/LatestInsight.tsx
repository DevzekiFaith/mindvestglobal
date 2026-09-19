"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getFeaturedPost } from "@/lib/blog";

export default function LatestInsight() {
  const post = getFeaturedPost();
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

  if (!post) return null;

  return (
    <section
      ref={sectionRef}
      id="latest-insight"
      style={{
        padding: "120px 60px",
        background: "var(--indigo-deep)",
        position: "relative",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.9s ease, transform 0.9s ease",
      }}
    >
      {/* Background radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 100% 0%, rgba(201,168,76,0.06) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 0% 100%, rgba(28,26,74,0.6) 0%, transparent 55%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Label row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 48,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "var(--gold-muted)",
            }}
          >
            <span
              style={{
                width: 24,
                height: 1,
                background: "var(--gold-muted)",
                display: "inline-block",
              }}
            />
            Latest Insight
          </div>
          <Link
            href="/blog"
            id="homepage-view-all-insights"
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "rgba(247,243,236,0.4)",
              textDecoration: "none",
              transition: "color 0.2s",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--gold)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "rgba(247,243,236,0.4)")
            }
          >
            All Insights →
          </Link>
        </div>

        {/* Card */}
        <Link
          href={`/blog/${post.slug}`}
          id="homepage-latest-insight-card"
          style={{ textDecoration: "none", display: "block" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "5fr 7fr",
              border: "1px solid rgba(201,168,76,0.12)",
              borderRadius: 2,
              overflow: "hidden",
              transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
              cursor: "pointer",
            }}
            className="insight-card"
          >
            {/* Image */}
            <div
              style={{
                position: "relative",
                minHeight: 360,
                overflow: "hidden",
              }}
            >
              <Image
                src={post.heroImage}
                alt={post.heroImageAlt}
                fill
                style={{
                  objectFit: "cover",
                  transition: "transform 0.6s ease",
                  opacity: 0.8,
                }}
                className="insight-card-img"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to right, transparent 60%, rgba(18,16,58,0.5) 100%)",
                }}
              />
            </div>

            {/* Content */}
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                padding: "52px 56px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 20,
                borderLeft: "1px solid rgba(201,168,76,0.08)",
              }}
            >
              {/* Category */}
              <div
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 9,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "var(--gold)",
                    flexShrink: 0,
                  }}
                />
                {post.categoryLabel}
              </div>

              <h2
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "clamp(26px, 2.8vw, 40px)",
                  fontWeight: 400,
                  lineHeight: 1.15,
                  color: "var(--cream)",
                  margin: 0,
                  letterSpacing: "-0.2px",
                }}
              >
                {post.title}
              </h2>

              <p
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: 17,
                  fontStyle: "italic",
                  color: "rgba(247,243,236,0.45)",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {post.subtitle}
              </p>

              <p
                style={{
                  fontSize: 13,
                  color: "rgba(247,243,236,0.38)",
                  lineHeight: 1.7,
                  margin: 0,
                  maxWidth: 400,
                }}
              >
                {post.excerpt}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: 20,
                  borderTop: "1px solid rgba(201,168,76,0.1)",
                  marginTop: 4,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 10,
                    color: "rgba(247,243,236,0.35)",
                    letterSpacing: "1px",
                  }}
                >
                  {post.date} · {post.readTime}
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 10,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                  }}
                >
                  Read →
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <style>{`
        .insight-card:hover {
          border-color: rgba(201,168,76,0.28) !important;
          box-shadow: 0 32px 64px rgba(18,16,58,0.3);
          transform: translateY(-3px);
        }
        .insight-card:hover .insight-card-img {
          transform: scale(1.04);
        }
        @media (max-width: 900px) {
          .insight-card {
            grid-template-columns: 1fr !important;
          }
          section#latest-insight {
            padding: 80px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
