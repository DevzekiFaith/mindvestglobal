"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { BlogPost } from "@/lib/blog";

// ─── Post content map ──────────────────────────────────────────────────────
// Each post slug maps to its JSX content body
import { DiasporaPostContent } from "../content/designing-self-before-designing-space";

const contentMap: Record<string, React.FC> = {
  "designing-self-before-designing-space": DiasporaPostContent,
};

// ─── Share button ──────────────────────────────────────────────────────────
function ShareButton({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        id="share-linkedin"
        style={shareBtnStyle}
        onMouseEnter={(e) => Object.assign((e.currentTarget as HTMLElement).style, shareBtnHover)}
        onMouseLeave={(e) => Object.assign((e.currentTarget as HTMLElement).style, shareBtnStyle)}
      >
        LinkedIn ↗
      </a>
      {/* Twitter/X */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        id="share-twitter"
        style={shareBtnStyle}
        onMouseEnter={(e) => Object.assign((e.currentTarget as HTMLElement).style, shareBtnHover)}
        onMouseLeave={(e) => Object.assign((e.currentTarget as HTMLElement).style, shareBtnStyle)}
      >
        X / Twitter ↗
      </a>
      {/* WhatsApp */}
      <a
        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + url)}`}
        target="_blank"
        rel="noopener noreferrer"
        id="share-whatsapp"
        style={shareBtnStyle}
        onMouseEnter={(e) => Object.assign((e.currentTarget as HTMLElement).style, shareBtnHover)}
        onMouseLeave={(e) => Object.assign((e.currentTarget as HTMLElement).style, shareBtnStyle)}
      >
        WhatsApp ↗
      </a>
      {/* Copy link */}
      <button
        onClick={handleCopy}
        id="share-copy-link"
        style={{
          ...shareBtnStyle,
          background: copied ? "rgba(201,168,76,0.15)" : "transparent",
          color: copied ? "var(--gold)" : "var(--muted)",
          cursor: "pointer",
          border: "none",
        }}
        onMouseEnter={(e) => !copied && Object.assign((e.currentTarget as HTMLElement).style, shareBtnHover)}
        onMouseLeave={(e) => !copied && Object.assign((e.currentTarget as HTMLElement).style, shareBtnStyle)}
      >
        {copied ? "Copied ✓" : "Copy Link"}
      </button>
    </div>
  );
}

const shareBtnStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "8px 16px",
  border: "1px solid rgba(44,40,32,0.15)",
  borderRadius: 2,
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 10,
  letterSpacing: "1.5px",
  textTransform: "uppercase" as const,
  color: "var(--muted)",
  textDecoration: "none",
  transition: "all 0.2s",
  background: "transparent",
};

const shareBtnHover: React.CSSProperties = {
  borderColor: "var(--gold-muted)",
  color: "var(--indigo)",
  background: "rgba(201,168,76,0.06)",
};

// ─── Main Component ────────────────────────────────────────────────────────
export default function BlogPostClient({ post }: { post: BlogPost }) {
  const PostContent = contentMap[post.slug];
  const siteUrl =
    (typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL) ||
    "https://www.mindvestglobalresources.com.ng";
  const postUrl = `${siteUrl.replace(/\/+$/, "")}/blog/${post.slug}`;

  return (
    <main style={{ background: "var(--white)" }}>
      {/* ── Hero ──────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          height: "70vh",
          minHeight: 480,
          maxHeight: 640,
          overflow: "hidden",
          background: "var(--indigo-deep)",
        }}
      >
        <Image
          src={post.heroImage}
          alt={post.heroImageAlt}
          fill
          style={{ objectFit: "cover", opacity: 0.55 }}
          priority
        />
        {/* Dark gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(18,16,58,0.3) 0%, rgba(18,16,58,0.65) 60%, rgba(18,16,58,0.95) 100%)",
          }}
        />
        {/* Vertical lines */}
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
                background: "rgba(201,168,76,0.05)",
              }}
            />
          ))}
        </div>

        {/* Hero content */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "0 60px 64px",
            maxWidth: 1300,
            margin: "0 auto",
          }}
        >
          {/* Breadcrumb */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 24,
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "rgba(247,243,236,0.4)",
            }}
          >
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
              Mindvest
            </Link>
            <span>›</span>
            <Link href="/blog" style={{ color: "inherit", textDecoration: "none" }}>
              Insights
            </Link>
            <span>›</span>
            <span style={{ color: "var(--gold)" }}>{post.categoryLabel}</span>
          </div>

          {/* Category tag */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 14px",
              border: "1px solid rgba(201,168,76,0.3)",
              marginBottom: 20,
              background: "rgba(201,168,76,0.08)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "var(--gold)",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 9,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--gold)",
              }}
            >
              {post.categoryLabel}
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(32px, 4.5vw, 64px)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "var(--cream)",
              margin: "0 0 16px",
              maxWidth: 820,
              letterSpacing: "-0.3px",
            }}
          >
            {post.title}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(16px, 1.6vw, 22px)",
              fontStyle: "italic",
              color: "rgba(247,243,236,0.55)",
              margin: "0 0 28px",
              maxWidth: 640,
            }}
          >
            {post.subtitle}
          </p>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontSize: 13,
                color: "rgba(247,243,236,0.65)",
                fontWeight: 500,
              }}
            >
              {post.author}
            </span>
            <span style={{ width: 1, height: 14, background: "rgba(247,243,236,0.2)" }} />
            <span
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10,
                color: "rgba(247,243,236,0.4)",
                letterSpacing: "1px",
              }}
            >
              {post.date}
            </span>
            <span style={{ width: 1, height: 14, background: "rgba(247,243,236,0.2)" }} />
            <span
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10,
                color: "rgba(247,243,236,0.4)",
                letterSpacing: "1px",
              }}
            >
              {post.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* ── Article Body ──────────────────────────────── */}
      <div
        style={{
          maxWidth: 780,
          margin: "0 auto",
          padding: "72px 40px 80px",
        }}
      >
        {PostContent ? <PostContent /> : <p>Content coming soon.</p>}

        {/* Tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginTop: 60,
            paddingTop: 40,
            borderTop: "1px solid var(--cream-dark)",
          }}
        >
          {post.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "5px 14px",
                border: "1px solid var(--cream-dark)",
                borderRadius: 2,
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 9,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Share */}
        <div style={{ marginTop: 40 }}>
          <div
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--gold-muted)",
              marginBottom: 16,
            }}
          >
            Share This Insight
          </div>
          <ShareButton url={postUrl} title={post.title} />
        </div>
      </div>

      {/* ── CTA Strip ─────────────────────────────────── */}
      <section
        style={{
          background: "var(--indigo-deep)",
          padding: "80px 60px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 620, margin: "0 auto" }}>
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
            Begin Your Architecture
          </div>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(32px, 3.5vw, 52px)",
              fontWeight: 300,
              color: "var(--cream)",
              lineHeight: 1.15,
              marginBottom: 20,
            }}
          >
            The work described here{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>is available to you</em>
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "rgba(247,243,236,0.5)",
              lineHeight: 1.75,
              marginBottom: 40,
            }}
          >
            The Becoming Institute's personal evolution framework is structured for individuals
            ready to design themselves from the inside out. When the inner architecture is clear,
            everything else — including the spaces you inhabit — follows.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/divisions/personal-evolution"
              id="blog-cta-becoming"
              style={{
                padding: "14px 36px",
                background: "var(--gold)",
                color: "var(--indigo-deep)",
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 11,
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
                fontWeight: 600,
                transition: "all 0.25s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--gold-light)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--gold)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Explore The Becoming Institute →
            </a>
            <a
              href="https://www.elevationstudiong.com.ng"
              target="_blank"
              rel="noopener noreferrer"
              id="blog-cta-elevation"
              style={{
                padding: "14px 36px",
                border: "1px solid rgba(201,168,76,0.3)",
                color: "rgba(247,243,236,0.7)",
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 11,
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.25s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
                (e.currentTarget as HTMLElement).style.color = "var(--cream)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.3)";
                (e.currentTarget as HTMLElement).style.color = "rgba(247,243,236,0.7)";
              }}
            >
              Visit Elevation Studio ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── Back to insights ──────────────────────────── */}
      <div
        style={{
          padding: "40px 60px",
          background: "var(--cream)",
          borderTop: "1px solid var(--cream-dark)",
        }}
      >
        <Link
          href="/blog"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 10,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "var(--muted)",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          id="blog-back-link"
        >
          ← Back to Insights
        </Link>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="padding: '0 60px 64px'"] {
            padding: 0 24px 48px !important;
          }
          div[style*="maxWidth: 780"] {
            padding: 48px 24px 60px !important;
          }
          section[style*="padding: '80px 60px'"] {
            padding: 60px 24px !important;
          }
        }
      `}</style>
    </main>
  );
}
