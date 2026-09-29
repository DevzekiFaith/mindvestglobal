// Blog post article content
// "Stop Collecting. Start Developing."
// The Becoming Institute · Human Capital Development · Mindvest Global

import Link from "next/link";

export function StopCollectingContent() {
  return (
    <article style={articleStyle}>
      {/* ── Opening ───────────────────────────────────── */}
      <p style={leadStyle}>
        If you find yourself constantly learning multiple things but developing no real depth in any
        of them, this is your invitation to pause and look again.
      </p>

      <p style={bodyStyle}>
        You may not need another skill. You may need to understand what is happening with the skills
        you already have.
      </p>

      {/* ── The 4 Symmetries ──────────────────────────── */}
      <h2 style={h2Style}>The 4 Basic Symmetries of Development</h2>

      <p style={bodyStyle}>
        There are four dimensions that determine whether a skill will ever become an asset — or
        simply accumulate as another entry on a crowded résumé.
      </p>

      {/* Symmetry Cards */}
      <div style={symmetryGridStyle}>
        {/* Card 1 */}
        <div style={symmetryCardStyle}>
          <div style={symmetryNumberStyle}>01</div>
          <div style={symmetryLabelStyle}>Human Skills</div>
          <p style={symmetryBodyStyle}>
            Your ability to think, communicate, decide, solve problems, and execute. These are the
            foundational capacities that determine how much value any technical skill can produce.
          </p>
        </div>
        {/* Card 2 */}
        <div style={symmetryCardStyle}>
          <div style={symmetryNumberStyle}>02</div>
          <div style={symmetryLabelStyle}>Maximizing</div>
          <p style={symmetryBodyStyle}>
            Your ability to get more value from what you already know, own, and have access to. Most
            people never extract even a fraction of what a single skill is worth.
          </p>
        </div>
        {/* Card 3 */}
        <div style={symmetryCardStyle}>
          <div style={symmetryNumberStyle}>03</div>
          <div style={symmetryLabelStyle}>Efficiency</div>
          <p style={symmetryBodyStyle}>
            Your ability to produce better results with less waste, confusion, and unnecessary
            effort. Busyness and productivity are not the same thing.
          </p>
        </div>
        {/* Card 4 */}
        <div style={symmetryCardStyle}>
          <div style={symmetryNumberStyle}>04</div>
          <div style={symmetryLabelStyle}>Impact</div>
          <p style={symmetryBodyStyle}>
            Your ability to turn your skills and resources into results that matter — to yourself,
            your business, and other people. This is the only metric that actually counts.
          </p>
        </div>
      </div>

      {/* ── Pull Quote ────────────────────────────────── */}
      <blockquote style={quoteStyle}>
        <span style={quoteBar} />
        <p style={quoteTextStyle}>
          &ldquo;Sometimes, the next level isn&rsquo;t hidden in something new. It is hidden in
          what you haven&rsquo;t fully developed yet.&rdquo;
        </p>
        <cite style={quoteAuthorStyle}>— Zeki Ubor, Principal &amp; Founder, Mindvest Global</cite>
      </blockquote>

      {/* ── The Misalignment Problem ──────────────────── */}
      <h2 style={h2Style}>What Happens When the Four Are Not Aligned</h2>

      <p style={bodyStyle}>
        When these four symmetries are not aligned, something predictable and quietly destructive
        happens: you keep looking for the next thing.
      </p>

      <p style={bodyStyle}>
        Another course. Another certification. Another income skill. Another business idea. Another
        strategy. The search becomes compulsive — not because opportunity is scarce, but because
        something beneath the surface remains unresolved.
      </p>

      <p style={bodyStyle}>
        Every skill has factors that determine whether it will prosper. Knowing something is one
        thing. Knowing how to maximize it is another. And having a skill is different from building
        the capacity to turn that skill into impact.
      </p>

      <p style={bodyStyle}>
        This is why learning without depth can become another form of distraction — sophisticated,
        well-intentioned, and ultimately unproductive.
      </p>

      {/* ── Framework Callout ─────────────────────────── */}
      <div style={calloutStyle}>
        <div style={calloutLabelStyle}>The Becoming Institute · Development Framework</div>
        <div style={calloutHeadStyle}>The Symmetry Diagnostic: Four Questions to Ask Yourself</div>
        <div style={calloutDivider} />
        <div style={diagnosticGridStyle}>
          <div style={diagnosticItemStyle}>
            <div style={diagnosticIconStyle}>→</div>
            <p style={diagnosticTextStyle}>
              Have I maximized the skills I already have — or am I collecting before developing?
            </p>
          </div>
          <div style={diagnosticItemStyle}>
            <div style={diagnosticIconStyle}>→</div>
            <p style={diagnosticTextStyle}>
              Have I developed the human capacity required to actually use each skill?
            </p>
          </div>
          <div style={diagnosticItemStyle}>
            <div style={diagnosticIconStyle}>→</div>
            <p style={diagnosticTextStyle}>
              Have I made my process efficient — or am I producing busy output instead of real
              results?
            </p>
          </div>
          <div style={diagnosticItemStyle}>
            <div style={diagnosticIconStyle}>→</div>
            <p style={diagnosticTextStyle}>
              Have I actually created impact with it — for myself, my business, and the people I
              serve?
            </p>
          </div>
        </div>
      </div>

      {/* ── The Symmetry Explained ────────────────────── */}
      <h2 style={h2Style}>The Goal Is Not to Stop Learning</h2>

      <p style={bodyStyle}>
        The goal is to stop collecting without developing. There is a profound difference between
        the two — and most high-potential people have never been taught to see it clearly.
      </p>

      <p style={bodyStyle}>
        Human Skills → Maximizing → Efficiency → Impact. That is the symmetry. And once you begin
        to see development this way, you may start appreciating what you already have
        differently.
      </p>

      <p style={bodyStyle}>
        The skill you have been sitting on — the one you started but never went deep on — may be
        worth more fully developed than ten new ones collected at the surface level.
      </p>

      <p style={bodyStyle}>
        Don&rsquo;t wait until you&rsquo;ve accumulated another ten skills before realizing you
        never developed the one that could have changed everything.
      </p>

      {/* ── Final Emphasis ────────────────────────────── */}
      <blockquote
        style={{
          ...quoteStyle,
          borderLeftColor: "var(--indigo)",
          background: "rgba(15,23,42,0.04)",
        }}
      >
        <p style={{ ...quoteTextStyle, fontSize: "clamp(22px, 2.4vw, 28px)" }}>
          Go deeper before you go wider.
        </p>
      </blockquote>

      {/* ── How MindVests Helps ───────────────────────── */}
      <h2 style={h2Style}>Where the Mindvest Ecosystem Fits Into This</h2>

      <p style={bodyStyle}>
        The Mindvest Global ecosystem was designed precisely for this moment — the moment you
        realize that accumulation is not the answer, and depth is the work.
      </p>

      <p style={bodyStyle}>
        Through <strong>The Becoming Institute</strong>, we work with individuals at the
        intersection of identity, human capacity, and personal development. Not to add more content
        to your curriculum — but to help you examine what you already carry, understand where the
        real gaps are, and build the internal architecture that translates knowledge into consistent,
        meaningful output.
      </p>

      <p style={bodyStyle}>
        Whether you are a professional trying to unlock the full value of a stalled skill, an
        entrepreneur managing the friction between vision and execution, or someone who simply feels
        like they are moving without arriving — the Symmetry of Development is the lens through
        which Mindvest Global helps you reorient.
      </p>

      <p style={bodyStyle}>
        The ecosystem doesn&rsquo;t redirect you away from who you are. It helps you return to it —
        with clarity, with structure, and with a genuine understanding of the unique value you
        already hold.
      </p>

      {/* ── CTA Section ───────────────────────────────── */}
      <div style={closingStyle}>
        {/* Primary CTA — Development Companion */}
        <div style={ctaPrimaryStyle}>
          <div style={ctaLabelStyle}>Development Resource · The Becoming Institute</div>
          <h3 style={ctaHeadStyle}>The Development Companion</h3>
          <p style={ctaBodyStyle}>
            A raw, straightforward development companion designed to help you examine your skills,
            your thinking, and how you can translate what you already have into greater value for
            yourself and your business. No generic frameworks — just clear, honest self-examination
            built around the four symmetries.
          </p>
          <a
            href="https://www.origin.com.ng/store/10"
            target="_blank"
            rel="noopener noreferrer"
            id="cta-development-companion"
            style={ctaPrimaryBtnStyle}
          >
            Get the Companion →
          </a>
        </div>

        {/* Secondary CTA — 1:1 Personal Audit */}
        <div style={ctaSecondaryStyle}>
          <div
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              letterSpacing: "3px",
              textTransform: "uppercase" as const,
              color: "var(--gold)",
              marginBottom: 10,
            }}
          >
            1:1 Advisory · Mindvest Global
          </div>
          <h3
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(22px, 2.2vw, 28px)",
              fontWeight: 400,
              color: "var(--cream)",
              margin: "0 0 14px",
              lineHeight: 1.3,
            }}
          >
            Book a 1:1 Personal Audit
          </h3>
          <p
            style={{
              fontSize: 14,
              color: "rgba(247,243,236,0.7)",
              lineHeight: 1.75,
              margin: "0 0 24px",
            }}
          >
            Not another generic framework. We look at where you are, what you have, what
            you&rsquo;re doing, what&rsquo;s holding you back — and where the real opportunity for
            development actually lives. Your situation. Your skills. Your next move.
          </p>
          <div
            style={{ display: "flex", gap: 14, flexWrap: "wrap" as const, alignItems: "center" }}
          >
            <a
              href="https://www.zekiubor.com.ng"
              target="_blank"
              rel="noopener noreferrer"
              id="cta-personal-audit"
              style={{
                display: "inline-block",
                padding: "13px 26px",
                background: "var(--gold)",
                color: "var(--indigo)",
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 11,
                letterSpacing: "2px",
                textTransform: "uppercase" as const,
                textDecoration: "none",
                borderRadius: 2,
                fontWeight: 600,
              }}
            >
              Book Your Audit →
            </a>
            <Link
              href="/divisions"
              style={{
                display: "inline-block",
                padding: "12px 24px",
                border: "1px solid rgba(201,168,76,0.35)",
                color: "rgba(247,243,236,0.6)",
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 11,
                letterSpacing: "2px",
                textTransform: "uppercase" as const,
                textDecoration: "none",
                borderRadius: 2,
              }}
            >
              Explore the Ecosystem →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

// ─── Inline Style Tokens ───────────────────────────────────────────────────────
const articleStyle: React.CSSProperties = {
  fontSize: 17,
  lineHeight: 1.85,
  color: "var(--text-body, #2C2825)",
  maxWidth: 720,
  margin: "0 auto",
};

const leadStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: "clamp(20px, 2.2vw, 24px)",
  fontWeight: 400,
  lineHeight: 1.6,
  color: "var(--indigo, #0F172A)",
  marginBottom: 32,
  letterSpacing: "-0.01em",
};

const bodyStyle: React.CSSProperties = {
  marginBottom: 26,
  color: "rgba(44,40,37,0.85)",
};

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: "clamp(26px, 2.8vw, 34px)",
  fontWeight: 400,
  lineHeight: 1.25,
  color: "var(--indigo, #0F172A)",
  marginTop: 56,
  marginBottom: 20,
  letterSpacing: "-0.01em",
};

const quoteStyle: React.CSSProperties = {
  margin: "44px 0",
  padding: "24px 32px",
  background: "rgba(201,168,76,0.06)",
  borderLeft: "3px solid var(--gold-muted, #C9A84C)",
  borderRadius: "0 4px 4px 0",
  position: "relative",
};

const quoteBar: React.CSSProperties = {
  display: "none",
};

const quoteTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: "clamp(19px, 2vw, 23px)",
  fontStyle: "italic",
  lineHeight: 1.55,
  color: "var(--indigo, #0F172A)",
  margin: "0 0 12px",
};

const quoteAuthorStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 11,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: "var(--gold-muted, #C9A84C)",
  fontStyle: "normal",
};

// ─── Symmetry Grid ──────────────────────────────────────────────────────────
const symmetryGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 16,
  margin: "36px 0 48px",
};

const symmetryCardStyle: React.CSSProperties = {
  background: "var(--cream, #F7F3EC)",
  border: "1px solid rgba(201,168,76,0.2)",
  borderRadius: 2,
  padding: "28px 24px",
};

const symmetryNumberStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 10,
  letterSpacing: "3px",
  color: "var(--gold, #D4AF37)",
  marginBottom: 8,
  textTransform: "uppercase",
};

const symmetryLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: 20,
  fontWeight: 500,
  color: "var(--indigo, #0F172A)",
  marginBottom: 10,
  lineHeight: 1.2,
};

const symmetryBodyStyle: React.CSSProperties = {
  fontSize: 13,
  color: "rgba(44,40,37,0.7)",
  lineHeight: 1.65,
  margin: 0,
};

// ─── Callout / Diagnostic Box ──────────────────────────────────────────────
const calloutStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
  border: "1px solid rgba(201,168,76,0.35)",
  borderRadius: 4,
  padding: "36px 32px",
  margin: "48px 0",
  color: "#F7F3EC",
};

const calloutLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 10,
  letterSpacing: "3px",
  textTransform: "uppercase",
  color: "var(--gold, #D4AF37)",
  marginBottom: 8,
};

const calloutHeadStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: "clamp(20px, 2.2vw, 26px)",
  fontWeight: 400,
  color: "#F7F3EC",
  marginBottom: 4,
  lineHeight: 1.3,
};

const calloutDivider: React.CSSProperties = {
  height: 1,
  background: "rgba(201,168,76,0.2)",
  margin: "20px 0",
};

const diagnosticGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 16,
};

const diagnosticItemStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: 14,
};

const diagnosticIconStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 14,
  color: "var(--gold, #D4AF37)",
  flexShrink: 0,
  marginTop: 2,
};

const diagnosticTextStyle: React.CSSProperties = {
  fontSize: 14,
  color: "rgba(247,243,236,0.8)",
  lineHeight: 1.7,
  margin: 0,
};

// ─── CTA Section ──────────────────────────────────────────────────────────
const closingStyle: React.CSSProperties = {
  marginTop: 72,
  paddingTop: 36,
  borderTop: "1px solid rgba(201,168,76,0.2)",
  display: "flex",
  flexDirection: "column",
  gap: 24,
};

const ctaPrimaryStyle: React.CSSProperties = {
  background: "var(--cream, #F7F3EC)",
  border: "1px solid rgba(201,168,76,0.25)",
  padding: "44px 40px",
  borderRadius: 2,
};

const ctaLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 10,
  letterSpacing: "3px",
  textTransform: "uppercase",
  color: "var(--gold-muted, #C9A84C)",
  marginBottom: 12,
};

const ctaHeadStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), serif",
  fontSize: 32,
  fontWeight: 400,
  color: "var(--indigo, #0F172A)",
  margin: "0 0 16px",
  lineHeight: 1.2,
};

const ctaBodyStyle: React.CSSProperties = {
  fontSize: 15,
  color: "var(--text-light, #4A4540)",
  lineHeight: 1.8,
  margin: "0 0 28px",
  maxWidth: 560,
};

const ctaPrimaryBtnStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "14px 28px",
  background: "var(--indigo, #0F172A)",
  color: "var(--cream, #F7F3EC)",
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 11,
  letterSpacing: "2px",
  textTransform: "uppercase",
  textDecoration: "none",
  borderRadius: 2,
};

const ctaSecondaryStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
  border: "1px solid rgba(201,168,76,0.3)",
  padding: "44px 40px",
  borderRadius: 2,
};
