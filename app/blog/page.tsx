import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Insights & Perspectives | Mindvest Global",
  description:
    "Thought leadership, personal evolution frameworks, and perspectives from Zeki Ubor and the Mindvest Global team. Ideas on identity, leadership, and the architecture of becoming.",
  openGraph: {
    title: "Insights & Perspectives | Mindvest Global",
    description:
      "Thought leadership on personal evolution, leadership architecture, and the spaces we inhabit — from Zeki Ubor and Mindvest Global.",
    type: "website",
    url: "https://www.mindvestglobalresources.com.ng/blog",
  },
};

export default function BlogListingPage() {
  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <>
      <Nav />
      <main style={{ background: "var(--white)", minHeight: "100vh" }}>
        {/* ── Hero Header ─────────────────────────────────── */}
        <section
          style={{
            background: "var(--indigo-deep)",
            paddingTop: 160,
            paddingBottom: 100,
            paddingLeft: 60,
            paddingRight: 60,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background atmosphere */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 70% 60% at 100% 0%, rgba(201,168,76,0.07) 0%, transparent 55%), radial-gradient(ellipse 50% 70% at 0% 100%, rgba(28,26,74,0.8) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />
          {/* Grid lines */}
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            {[25, 50, 75].map((p) => (
              <div
                key={p}
                style={{
                  position: "absolute",
                  left: `${p}%`,
                  top: 0,
                  bottom: 0,
                  width: 1,
                  background: "rgba(201,168,76,0.04)",
                }}
              />
            ))}
          </div>

          <div style={{ maxWidth: 1300, margin: "0 auto", position: "relative", zIndex: 1 }}>
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
              <span
                style={{
                  width: 24,
                  height: 1,
                  background: "var(--gold-muted)",
                  display: "inline-block",
                }}
              />
              Mindvest Global · Insights
            </div>
            <h1
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(44px, 5.5vw, 80px)",
                fontWeight: 300,
                lineHeight: 1.08,
                color: "var(--cream)",
                letterSpacing: "-0.5px",
                maxWidth: 700,
                marginBottom: 28,
              }}
            >
              Ideas that{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Architect</em>
              <br />
              the Way Forward
            </h1>
            <p
              style={{
                fontSize: 16,
                color: "rgba(247,243,236,0.5)",
                lineHeight: 1.75,
                maxWidth: 520,
              }}
            >
              Perspectives on personal evolution, leadership, identity design, and the spaces we
              inhabit — written from the interior of the work we do.
            </p>
          </div>
        </section>

        {/* ── Featured Post ───────────────────────────────── */}
        {featured && (
          <section
            style={{
              padding: "80px 60px",
              background: "var(--white)",
            }}
          >
            <div style={{ maxWidth: 1300, margin: "0 auto" }}>
              <div
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: 10,
                  letterSpacing: "5px",
                  textTransform: "uppercase",
                  color: "var(--gold-muted)",
                  marginBottom: 36,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
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
                Featured Insight
              </div>

              <Link
                href={`/blog/${featured.slug}`}
                style={{ textDecoration: "none", display: "block" }}
                id="blog-featured-post"
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 0,
                    background: "var(--indigo-deep)",
                    borderRadius: 2,
                    overflow: "hidden",
                    border: "1px solid rgba(201,168,76,0.12)",
                    transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                    cursor: "pointer",
                  }}
                  className="featured-card"
                >
                  {/* Image side */}
                  <div
                    style={{
                      position: "relative",
                      minHeight: 460,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={featured.heroImage}
                      alt={featured.heroImageAlt}
                      fill
                      style={{ objectFit: "cover", transition: "transform 0.6s ease" }}
                      className="featured-card-img"
                      priority
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to right, transparent 70%, rgba(18,16,58,0.6) 100%)",
                      }}
                    />
                  </div>

                  {/* Content side */}
                  <div
                    style={{
                      padding: "60px 56px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: 24,
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
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "var(--gold)",
                          display: "inline-block",
                          flexShrink: 0,
                        }}
                      />
                      {featured.categoryLabel}
                    </div>

                    <h2
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: "clamp(28px, 2.8vw, 42px)",
                        fontWeight: 400,
                        lineHeight: 1.15,
                        color: "var(--cream)",
                        margin: 0,
                        letterSpacing: "-0.3px",
                      }}
                    >
                      {featured.title}
                    </h2>

                    <p
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: 18,
                        fontStyle: "italic",
                        color: "rgba(247,243,236,0.5)",
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      {featured.subtitle}
                    </p>

                    <p
                      style={{
                        fontSize: 14,
                        color: "rgba(247,243,236,0.4)",
                        lineHeight: 1.7,
                        margin: 0,
                        maxWidth: 380,
                      }}
                    >
                      {featured.excerpt}
                    </p>

                    {/* Meta */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 20,
                        paddingTop: 16,
                        borderTop: "1px solid rgba(201,168,76,0.1)",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontSize: 13,
                            fontWeight: 500,
                            color: "var(--cream)",
                            letterSpacing: "0.2px",
                          }}
                        >
                          {featured.author}
                        </div>
                        <div
                          style={{
                            fontSize: 11,
                            color: "rgba(247,243,236,0.35)",
                            fontFamily: "var(--font-dm-mono), monospace",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {featured.date} · {featured.readTime}
                        </div>
                      </div>
                      <div style={{ marginLeft: "auto" }}>
                        <span
                          style={{
                            fontFamily: "var(--font-dm-mono), monospace",
                            fontSize: 10,
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            color: "var(--gold)",
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                          }}
                        >
                          Read →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* ── All Posts Grid (for future posts) ───────────── */}
        {rest.length > 0 && (
          <section style={{ padding: "0 60px 100px" }}>
            <div style={{ maxWidth: 1300, margin: "0 auto" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 32,
                }}
              >
                {rest.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <article
                      style={{
                        background: "var(--white)",
                        border: "1px solid var(--cream-dark)",
                        borderRadius: 2,
                        overflow: "hidden",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
                        <Image
                          src={post.heroImage}
                          alt={post.heroImageAlt}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div style={{ padding: "28px 28px 32px" }}>
                        <div
                          style={{
                            fontFamily: "var(--font-dm-mono), monospace",
                            fontSize: 9,
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            color: "var(--gold-muted)",
                            marginBottom: 12,
                          }}
                        >
                          {post.categoryLabel}
                        </div>
                        <h3
                          style={{
                            fontFamily: "var(--font-cormorant), serif",
                            fontSize: 22,
                            fontWeight: 400,
                            color: "var(--indigo)",
                            lineHeight: 1.25,
                            margin: "0 0 12px",
                          }}
                        >
                          {post.title}
                        </h3>
                        <p
                          style={{
                            fontSize: 13,
                            color: "var(--muted)",
                            lineHeight: 1.65,
                            margin: "0 0 20px",
                          }}
                        >
                          {post.excerpt}
                        </p>
                        <div
                          style={{
                            fontFamily: "var(--font-dm-mono), monospace",
                            fontSize: 10,
                            color: "var(--muted-light)",
                            letterSpacing: "1px",
                          }}
                        >
                          {post.date} · {post.readTime}
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Coming Soon CTA ─────────────────────────────── */}
        <section
          style={{
            padding: "80px 60px 120px",
            background: "var(--cream)",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <div
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10,
                letterSpacing: "5px",
                textTransform: "uppercase",
                color: "var(--gold-muted)",
                marginBottom: 20,
              }}
            >
              More Perspectives Coming
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(32px, 3.5vw, 48px)",
                fontWeight: 300,
                color: "var(--indigo)",
                lineHeight: 1.2,
                marginBottom: 20,
              }}
            >
              Every insight is written from{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold-muted)" }}>
                inside the work
              </em>
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "var(--muted)",
                lineHeight: 1.75,
                marginBottom: 40,
              }}
            >
              We write when there is something worth saying. Not on a schedule — on depth.
              Return here for frameworks, field notes, and perspectives shaped by real
              transformation work.
            </p>
            <Link
              href="/#divisions"
              style={{
                display: "inline-block",
                padding: "14px 36px",
                background: "var(--indigo)",
                color: "var(--cream)",
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 11,
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.25s",
              }}
              id="blog-explore-divisions"
            >
              Explore the Divisions →
            </Link>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .featured-card:hover {
          border-color: rgba(201,168,76,0.3) !important;
          box-shadow: 0 40px 80px rgba(18,16,58,0.15);
          transform: translateY(-4px);
        }
        .featured-card:hover .featured-card-img {
          transform: scale(1.03);
        }
        @media (max-width: 900px) {
          .featured-card {
            grid-template-columns: 1fr !important;
          }
          section {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>
    </>
  );
}
