// Blog post article content
// "You Have 3 Questions to Ask Before the End of Today"
// The Becoming Institute · Identity, Capacity & Position · Mindvest Global
// By Zeki Ubor · Lagos, Nigeria & Global Strategic Hubs

import Link from "next/link";

export function ThreeQuestionsPostContent() {
  return (
    <article style={articleStyle}>
      {/* ── Dispatch Header ─────────────── */}
      <div style={headerMetaRowStyle}>
        <div style={transitBadgeStyle}>
          <span style={transitDotStyle} />
          <span>Strategic Dispatch · Personal Evolution · Field Notes</span>
        </div>
        <div style={geoTagStyle}>
          <span>Lagos, Nigeria · Global Distribution</span>
        </div>
      </div>

      {/* ── Opening ───────────────────────────────────── */}
      <p style={leadStyle}>
        There are three questions people are constantly trying to answer, sometimes without even
        knowing it:
      </p>

      {/* ── Three Core Questions Callout Grid ─────────── */}
      <div style={questionsGridStyle}>
        <div style={questionCardStyle}>
          <div style={questionNumStyle}>01</div>
          <div style={questionTitleStyle}>Who am I?</div>
          <div style={questionDimensionStyle}>Identity · Recognition</div>
        </div>
        <div style={questionCardStyle}>
          <div style={questionNumStyle}>02</div>
          <div style={questionTitleStyle}>What am I?</div>
          <div style={questionDimensionStyle}>Capacity · Evidence</div>
        </div>
        <div style={questionCardStyle}>
          <div style={questionNumStyle}>03</div>
          <div style={questionTitleStyle}>Where am I?</div>
          <div style={questionDimensionStyle}>Position · Context</div>
        </div>
      </div>

      {/* ── GEO Executive Briefing / AI Overview Box ───── */}
      <aside id="key-takeaways" style={briefingBoxStyle}>
        <div style={briefingLabelStyle}>
          <span>⚡ Executive Briefing · The Triad of Alignment</span>
        </div>
        <div style={briefingDividerStyle} />
        <ul style={briefingListStyle}>
          <li style={briefingItemStyle}>
            <strong>The Misalignment Trap:</strong> Most leaders and high performers struggle not from a
            lack of ambition, but because they use the wrong identification approach for identity,
            capacity, and position.
          </li>
          <li style={briefingItemStyle}>
            <strong>Identity vs. Capacity:</strong> Knowing <em>who</em> you are (e.g., a builder, a leader, a
            creative) does not automatically confer the developed evidence of <em>what</em> you can reliably execute.
          </li>
          <li style={briefingItemStyle}>
            <strong>The Soil Principle:</strong> A seed is not failing because it has not yet become a tree.
            Context, soil quality, and season dictate whether inherent capacity can manifest.
          </li>
          <li style={briefingItemStyle}>
            <strong>The Triad Agreement:</strong> When identity (values), capacity (developed muscle), and
            position (environment) align, you stop forcing yourself into unfitting spaces and stop mistaking
            undeveloped capacity for a lack of purpose.
          </li>
        </ul>
      </aside>

      <section id="the-discovery-paradox">
        <p style={bodyStyle}>
          And interestingly, people often struggle because they use the <strong>wrong identification approach</strong> for each one.
        </p>

        <p style={bodyStyle}>
          I once thought growth was mostly about discovering who I was.
        </p>

        <p style={emphasisCalloutStyle}>
          Then I realised something.
        </p>

        <p style={bodyStyle}>
          Knowing who you are is important—but it doesn’t automatically tell you what you can do.
        </p>

        {/* ── Rhythm Breakdown ────────────────────────────── */}
        <div style={rhythmContainerStyle}>
          <div style={rhythmLawCardStyle}>
            <span style={rhythmIconStyle}>✦</span>
            <p style={rhythmTextStyle}>
              You can know that you are a <strong>builder</strong>, but still not know what you build.
            </p>
          </div>
          <div style={rhythmLawCardStyle}>
            <span style={rhythmIconStyle}>✦</span>
            <p style={rhythmTextStyle}>
              You can know that you are a <strong>leader</strong>, but still not know what problem you are equipped to solve.
            </p>
          </div>
          <div style={rhythmLawCardStyle}>
            <span style={rhythmIconStyle}>✦</span>
            <p style={rhythmTextStyle}>
              You can know that you are <strong>creative</strong>, but still be standing in an environment where your creativity has no room to breathe.
            </p>
          </div>
        </div>

        <p style={bodyStyle}>
          So I began to see these three pillars through a fundamentally different architecture:
        </p>
      </section>

      {/* ── Pillar I: Identity ────────────────────────── */}
      <section id="pillar-who-you-are">
        <div style={pillarHeaderBoxStyle}>
          <span style={pillarTagStyle}>Dimension 01</span>
          <h2 style={pillarHeadingStyle}>1. WHO YOU ARE — Identity</h2>
          <span style={pillarSubtagStyle}>This is about recognition.</span>
        </div>

        <p style={bodyStyle}>
          Your values. Your convictions. Your nature. The person you are becoming.
        </p>

        <p style={bodyStyle}>
          Identity is not your current job title, your social circle, or the temporary accolades you hold.
          It is the structural baseline that remains when the stage is dark and all external validation is removed.
        </p>

        <div style={coreQuestionCardStyle}>
          <div style={coreQuestionLabelStyle}>The Essential Question</div>
          <p style={coreQuestionTextStyle}>
            &ldquo;When everything else is stripped away, who am I?&rdquo;
          </p>
        </div>
      </section>

      {/* ── Pillar II: Capacity ───────────────────────── */}
      <section id="pillar-what-you-are">
        <div style={pillarHeaderBoxStyle}>
          <span style={pillarTagStyle}>Dimension 02</span>
          <h2 style={pillarHeadingStyle}>2. WHAT YOU ARE — Capacity</h2>
          <span style={pillarSubtagStyle}>This is about evidence.</span>
        </div>

        <p style={bodyStyle}>
          This is where many well-intentioned individuals get stuck. They fall in love with the <em>idea</em> of their identity
          without doing the arduous structural work required to build capacity.
        </p>

        <div style={cadenceListStyle}>
          <div style={cadenceItemStyle}>
            <span style={cadenceBulletStyle}>—</span>
            <span>What can you actually do?</span>
          </div>
          <div style={cadenceItemStyle}>
            <span style={cadenceBulletStyle}>—</span>
            <span>What problems can you solve?</span>
          </div>
          <div style={cadenceItemStyle}>
            <span style={cadenceBulletStyle}>—</span>
            <span>What have you developed the capacity to handle?</span>
          </div>
        </div>

        <blockquote style={quoteStyle}>
          <p style={quoteTextStyle}>
            &ldquo;Because potential without developed capacity is still potential.&rdquo;
          </p>
          <cite style={quoteAuthorStyle}>— Zeki Ubor, Principal &amp; Founder, Mindvest Global</cite>
        </blockquote>

        <p style={bodyStyle}>
          Potential pays no bills, solves no crises, and anchors no institutions. Capacity is potential that has been tested,
          disciplined, and codified into repeatable, dependable output.
        </p>

        <div style={coreQuestionCardStyle}>
          <div style={coreQuestionLabelStyle}>The Essential Question</div>
          <p style={coreQuestionTextStyle}>
            &ldquo;What can I reliably bring to the table?&rdquo;
          </p>
        </div>
      </section>

      {/* ── Pillar III: Position ──────────────────────── */}
      <section id="pillar-where-you-are">
        <div style={pillarHeaderBoxStyle}>
          <span style={pillarTagStyle}>Dimension 03</span>
          <h2 style={pillarHeadingStyle}>3. WHERE YOU ARE — Position</h2>
          <span style={pillarSubtagStyle}>This is about context.</span>
        </div>

        <p style={bodyStyle}>
          Your current environment. Your stage. Your relationships. Your opportunities. Your limitations.
        </p>

        <p style={bodyStyle}>
          Because the exact same person can look completely different in two different environments. An oak tree
          cannot flourish in an enclosed nursery pot; an eagle cannot manifest its altitude inside a low ceiling.
        </p>

        <div style={seedMetaphorBoxStyle}>
          <div style={seedMetaphorLabelStyle}>The Principle of the Seed</div>
          <p style={seedMetaphorTextStyle}>
            A seed isn&rsquo;t failing because it hasn&rsquo;t become a tree yet.
            <br /><br />
            Sometimes, it is simply in the wrong soil—or still in the right season for becoming.
          </p>
        </div>

        <p style={bodyStyle}>
          That is why comparison can be so destructive and dangerous.
        </p>

        <p style={emphasisCalloutStyle}>
          You are looking at what someone is, while ignoring where they are and how long they have been becoming.
        </p>
      </section>

      {/* ── The Synthesis & Agreement ─────────────────── */}
      <section id="the-triad-agreement">
        <h2 style={h2Style}>
          The Triad of Agreement: When the Three Align
        </h2>

        <p style={bodyStyle}>
          So perhaps the better question isn&rsquo;t simply: <em>&ldquo;Who am I?&rdquo;</em>
        </p>

        <p style={bodyStyle}>
          Before the end of today, ask all three:
        </p>

        <div style={triadSummaryBoxStyle}>
          <div style={triadRowItemStyle}>
            <span style={triadStepBadgeStyle}>01</span>
            <div>
              <strong style={triadStepTitleStyle}>WHO AM I?</strong>
              <div style={triadStepDescStyle}>Recognition of your core nature, values, and convictions.</div>
            </div>
          </div>
          <div style={triadRowItemStyle}>
            <span style={triadStepBadgeStyle}>02</span>
            <div>
              <strong style={triadStepTitleStyle}>WHAT HAVE I DEVELOPED?</strong>
              <div style={triadStepDescStyle}>Evidence of capacity, problem-solving muscle, and reliability.</div>
            </div>
          </div>
          <div style={triadRowItemStyle}>
            <span style={triadStepBadgeStyle}>03</span>
            <div>
              <strong style={triadStepTitleStyle}>WHERE AM I RIGHT NOW?</strong>
              <div style={triadStepDescStyle}>Honest appraisal of your stage, environment, soil, and season.</div>
            </div>
          </div>
        </div>

        <p style={bodyStyle}>
          Because when identity, capacity, and position begin to agree, something shifts fundamentally:
        </p>

        <div style={shiftListStyle}>
          <div style={shiftItemStyle}>
            <span style={shiftCheckStyle}>✓</span>
            <span>You stop forcing yourself into spaces that don’t fit.</span>
          </div>
          <div style={shiftItemStyle}>
            <span style={shiftCheckStyle}>✓</span>
            <span>You stop calling undeveloped capacity a lack of purpose.</span>
          </div>
          <div style={shiftItemStyle}>
            <span style={shiftCheckStyle}>✓</span>
            <span>You stop mistaking your current location for your final destination.</span>
          </div>
        </div>

        {/* ── Summary Law Card ─────────────────────────── */}
        <div id="core-law-definition" style={lawCardStyle}>
          <div style={lawLabelStyle}>The Law of Triadic Equilibrium</div>
          <p style={lawTextStyle}>
            Who you are gives you <strong>identity</strong>.<br />
            What you are gives you <strong>capacity</strong>.<br />
            Where you are gives you <strong>context</strong>.
          </p>
          <div style={{ marginTop: 14, fontSize: 13, color: "var(--gold-muted)", fontFamily: "var(--font-dm-mono), monospace" }}>
            And your next level begins with correctly identifying all three.
          </div>
        </div>
      </section>

      {/* ── In-Article Direct Advisory CTA ───────────── */}
      <section id="inquiry-cta" style={closingStyle}>
        <div style={ctaPrimaryStyle}>
          <div style={ctaLabelStyle}>Executive &amp; Personal Advisory</div>
          <h3 style={ctaHeadStyle}>
            Need Hand-Holding Through These Three Questions?
          </h3>
          <p style={ctaBodyStyle}>
            If you want help making sense of where you are, what you carry, and where you may be headed,
            reach out directly and begin the structured architecture of your becoming.
          </p>
          <div className="blog-cta-buttons" style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
            <a
              href="https://www.zekiubor.com.ng"
              target="_blank"
              rel="noopener noreferrer"
              id="cta-ask-zeki"
              style={ctaPrimaryBtnStyle}
            >
              Ask Zeki Ubor ↗
            </a>
            <Link
              href="/divisions/personal-evolution"
              id="cta-explore-becoming"
              style={ctaSecondaryBtnStyle}
            >
              Explore The Becoming Institute →
            </Link>
          </div>
        </div>

        {/* ── Ecosystem Card ────────────────────────────── */}
        <div style={ctaEcosystemStyle}>
          <div style={ctaEcosystemLabelStyle}>The Becoming Institute · Mindvest Global</div>
          <h4 style={ctaEcosystemHeadStyle}>
            Architecture for Humans &amp; Enterprise Systems
          </h4>
          <p style={ctaEcosystemBodyStyle}>
            We design internal psychological frameworks for high-performing individuals and load-bearing
            human systems for scaling institutions across Africa and global markets.
          </p>
          <a
            href="https://www.zekiubor.com.ng"
            target="_blank"
            rel="noopener noreferrer"
            id="cta-ecosystem-portal"
            style={ctaEcosystemBtnStyle}
          >
            Visit Zeki Ubor Official Portal ↗
          </a>
        </div>
      </section>

      {/* ── FAQ Section ──────────────────────────────── */}
      <section id="faq-section" style={{ marginTop: 64 }}>
        <div style={faqHeaderBoxStyle}>
          <span style={faqBadgeStyle}>Frequently Addressed Inquiries</span>
          <p style={faqSubheadStyle}>
            Clarifying the distinctions between Identity, Capacity, and Position.
          </p>
        </div>

        <div style={faqContainerStyle}>
          <div style={faqCardStyle}>
            <h3 style={faqQuestionStyle}>Why isn&rsquo;t knowing my identity enough for career and life growth?</h3>
            <p style={faqAnswerStyle}>
              Identity gives you self-recognition, values, and orientation. However, execution in the real world
              demands proven capacity—the developed ability to solve specific, high-value problems under pressure.
              Without capacity, identity remains an unrealized intention.
            </p>
          </div>

          <div style={faqCardStyle}>
            <h3 style={faqQuestionStyle}>What is the difference between potential and developed capacity?</h3>
            <p style={faqAnswerStyle}>
              Potential is raw, uncultivated ability. Developed capacity is potential refined through deliberate practice,
              discipline, real-world feedback, and consistent evidence. High performance requires dependable capacity.
            </p>
          </div>

          <div style={faqCardStyle}>
            <h3 style={faqQuestionStyle}>How does environment (Position) affect my ability to grow?</h3>
            <p style={faqAnswerStyle}>
              Just as a seed requires nutrient-rich soil and sunlight to become a tree, human capacity requires the right
              relational, cultural, and organizational environment to flourish. Being in the wrong soil can stifle even
              the most extraordinary natural gifts.
            </p>
          </div>

          <div style={faqCardStyle}>
            <h3 style={faqQuestionStyle}>Where can I get guided mentorship on navigating these three dimensions?</h3>
            <p style={faqAnswerStyle}>
              You can connect directly with Zeki Ubor and The Becoming Institute through{" "}
              <a href="https://www.zekiubor.com.ng" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)", textDecoration: "underline" }}>
                www.zekiubor.com.ng
              </a>{" "}
              for personal advisory, framework immersion, and executive counsel.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}

// ─── Inline Styles ─────────────────────────────────────────────────────────
const articleStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)",
  color: "var(--indigo, #0F172A)",
  lineHeight: 1.8,
  fontSize: 16.5,
};

const headerMetaRowStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 12,
  paddingBottom: 24,
  marginBottom: 32,
  borderBottom: "1px solid rgba(201,168,76,0.15)",
};

const transitBadgeStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 10,
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: "var(--gold, #D4AF37)",
};

const transitDotStyle: React.CSSProperties = {
  width: 6,
  height: 6,
  borderRadius: "50%",
  background: "var(--gold, #D4AF37)",
  display: "inline-block",
};

const geoTagStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 10,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: "rgba(44,40,37,0.45)",
};

const leadStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: "clamp(21px, 2.2vw, 26px)",
  lineHeight: 1.45,
  color: "var(--indigo, #0F172A)",
  marginBottom: 28,
  fontWeight: 400,
};

const questionsGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
  gap: 16,
  margin: "32px 0 44px",
};

const questionCardStyle: React.CSSProperties = {
  background: "linear-gradient(145deg, #FAF7F2 0%, #F3EDE3 100%)",
  border: "1px solid rgba(201,168,76,0.25)",
  borderRadius: 2,
  padding: "24px 20px",
  position: "relative",
};

const questionNumStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 11,
  color: "var(--gold, #D4AF37)",
  letterSpacing: "2px",
  marginBottom: 8,
};

const questionTitleStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: 22,
  fontWeight: 600,
  color: "var(--indigo, #0F172A)",
  marginBottom: 6,
  lineHeight: 1.2,
};

const questionDimensionStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 9.5,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: "rgba(44,40,37,0.6)",
};

const briefingBoxStyle: React.CSSProperties = {
  background: "#FAF7F2",
  border: "1px solid rgba(201,168,76,0.3)",
  borderLeft: "4px solid var(--gold, #D4AF37)",
  borderRadius: 2,
  padding: "24px 26px",
  margin: "36px 0 48px",
};

const briefingLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 10.5,
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: "var(--gold, #D4AF37)",
  fontWeight: 600,
};

const briefingDividerStyle: React.CSSProperties = {
  height: 1,
  background: "rgba(201,168,76,0.2)",
  margin: "12px 0 16px",
};

const briefingListStyle: React.CSSProperties = {
  margin: 0,
  paddingLeft: 20,
  display: "flex",
  flexDirection: "column",
  gap: 12,
};

const briefingItemStyle: React.CSSProperties = {
  fontSize: 14,
  lineHeight: 1.65,
  color: "rgba(44,40,37,0.85)",
};

const bodyStyle: React.CSSProperties = {
  fontSize: 16.5,
  lineHeight: 1.8,
  color: "rgba(44,40,37,0.88)",
  margin: "0 0 24px",
};

const emphasisCalloutStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: "clamp(22px, 2.4vw, 30px)",
  lineHeight: 1.3,
  color: "var(--indigo, #0F172A)",
  fontStyle: "italic",
  margin: "32px 0",
  paddingLeft: 20,
  borderLeft: "2px solid var(--gold, #D4AF37)",
};

const rhythmContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 12,
  margin: "28px 0 36px",
};

const rhythmLawCardStyle: React.CSSProperties = {
  background: "#FFFFFF",
  border: "1px solid rgba(201,168,76,0.18)",
  borderRadius: 2,
  padding: "16px 20px",
  display: "flex",
  alignItems: "flex-start",
  gap: 14,
};

const rhythmIconStyle: React.CSSProperties = {
  color: "var(--gold, #D4AF37)",
  fontSize: 14,
  marginTop: 2,
};

const rhythmTextStyle: React.CSSProperties = {
  fontSize: 15.5,
  lineHeight: 1.6,
  color: "rgba(44,40,37,0.9)",
  margin: 0,
};

const pillarHeaderBoxStyle: React.CSSProperties = {
  marginTop: 48,
  marginBottom: 20,
  paddingBottom: 16,
  borderBottom: "1px solid rgba(201,168,76,0.15)",
};

const pillarTagStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 10,
  letterSpacing: "2.5px",
  textTransform: "uppercase",
  color: "var(--gold, #D4AF37)",
  display: "block",
  marginBottom: 6,
};

const pillarHeadingStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: "clamp(26px, 2.6vw, 34px)",
  fontWeight: 600,
  color: "var(--indigo, #0F172A)",
  margin: "0 0 4px",
  lineHeight: 1.2,
};

const pillarSubtagStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 11,
  color: "rgba(44,40,37,0.55)",
  letterSpacing: "1px",
};

const coreQuestionCardStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
  border: "1px solid rgba(201,168,76,0.3)",
  borderRadius: 2,
  padding: "24px 28px",
  margin: "28px 0 36px",
};

const coreQuestionLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 9.5,
  letterSpacing: "2.5px",
  textTransform: "uppercase",
  color: "var(--gold, #D4AF37)",
  marginBottom: 8,
};

const coreQuestionTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: "clamp(20px, 2.2vw, 28px)",
  color: "#F7F3EC",
  margin: 0,
  fontStyle: "italic",
  lineHeight: 1.35,
};

const cadenceListStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 8,
  margin: "20px 0 28px",
  paddingLeft: 8,
};

const cadenceItemStyle: React.CSSProperties = {
  display: "flex",
  gap: 12,
  fontSize: 15.5,
  color: "rgba(44,40,37,0.85)",
};

const cadenceBulletStyle: React.CSSProperties = {
  color: "var(--gold, #D4AF37)",
  fontWeight: "bold",
};

const quoteStyle: React.CSSProperties = {
  margin: "40px 0",
  padding: "28px 32px",
  background: "#FAF7F2",
  borderLeft: "3px solid var(--gold, #D4AF37)",
  borderRadius: 2,
};

const quoteTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: "clamp(20px, 2.1vw, 25px)",
  fontStyle: "italic",
  color: "var(--indigo, #0F172A)",
  lineHeight: 1.45,
  margin: "0 0 12px",
};

const quoteAuthorStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 10,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: "rgba(44,40,37,0.55)",
  display: "block",
};

const seedMetaphorBoxStyle: React.CSSProperties = {
  background: "linear-gradient(145deg, #FAF7F2 0%, #EDE6D8 100%)",
  border: "1px solid rgba(201,168,76,0.3)",
  borderRadius: 2,
  padding: "28px 30px",
  margin: "32px 0",
};

const seedMetaphorLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 10,
  letterSpacing: "2.5px",
  textTransform: "uppercase",
  color: "var(--gold, #D4AF37)",
  marginBottom: 10,
};

const seedMetaphorTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: "clamp(19px, 2vw, 24px)",
  color: "var(--indigo, #0F172A)",
  margin: 0,
  lineHeight: 1.4,
};

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: "clamp(26px, 2.6vw, 34px)",
  fontWeight: 600,
  color: "var(--indigo, #0F172A)",
  margin: "48px 0 20px",
  lineHeight: 1.25,
};

const triadSummaryBoxStyle: React.CSSProperties = {
  background: "#FFFFFF",
  border: "1px solid rgba(201,168,76,0.25)",
  borderRadius: 2,
  padding: "24px 28px",
  margin: "28px 0 36px",
  display: "flex",
  flexDirection: "column",
  gap: 18,
};

const triadRowItemStyle: React.CSSProperties = {
  display: "flex",
  gap: 16,
  alignItems: "flex-start",
};

const triadStepBadgeStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 11,
  color: "var(--gold, #D4AF37)",
  background: "rgba(201,168,76,0.1)",
  padding: "3px 8px",
  borderRadius: 2,
  flexShrink: 0,
  marginTop: 2,
};

const triadStepTitleStyle: React.CSSProperties = {
  fontSize: 15,
  color: "var(--indigo, #0F172A)",
  letterSpacing: "1px",
};

const triadStepDescStyle: React.CSSProperties = {
  fontSize: 13.5,
  color: "rgba(44,40,37,0.7)",
  marginTop: 2,
};

const shiftListStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 12,
  margin: "24px 0 36px",
};

const shiftItemStyle: React.CSSProperties = {
  display: "flex",
  gap: 12,
  alignItems: "center",
  fontSize: 15.5,
  color: "rgba(44,40,37,0.9)",
};

const shiftCheckStyle: React.CSSProperties = {
  color: "var(--gold, #D4AF37)",
  fontWeight: "bold",
  fontSize: 16,
};

const lawCardStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
  border: "1px solid rgba(201,168,76,0.3)",
  borderRadius: 2,
  padding: "32px 30px",
  margin: "40px 0",
  textAlign: "center",
};

const lawLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 10,
  letterSpacing: "3px",
  textTransform: "uppercase",
  color: "var(--gold, #D4AF37)",
  marginBottom: 12,
};

const lawTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: "clamp(21px, 2.4vw, 28px)",
  color: "#F7F3EC",
  margin: 0,
  lineHeight: 1.4,
  fontStyle: "italic",
};

const closingStyle: React.CSSProperties = {
  marginTop: 64,
  paddingTop: 36,
  borderTop: "1px solid rgba(201,168,76,0.2)",
  display: "flex",
  flexDirection: "column",
  gap: 24,
};

const ctaPrimaryStyle: React.CSSProperties = {
  background: "var(--cream, #F7F3EC)",
  border: "1px solid rgba(201,168,76,0.25)",
  padding: "40px 36px",
  borderRadius: 2,
};

const ctaLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 10,
  letterSpacing: "3px",
  textTransform: "uppercase",
  color: "var(--gold-muted, #C9A84C)",
  marginBottom: 10,
};

const ctaHeadStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), serif",
  fontSize: 28,
  fontWeight: 400,
  color: "var(--indigo, #0F172A)",
  margin: "0 0 14px",
  lineHeight: 1.2,
};

const ctaBodyStyle: React.CSSProperties = {
  fontSize: 14.5,
  color: "rgba(44,40,37,0.78)",
  lineHeight: 1.75,
  margin: "0 0 24px",
  maxWidth: 580,
};

const ctaPrimaryBtnStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "13px 26px",
  background: "var(--indigo, #0F172A)",
  color: "var(--cream, #F7F3EC)",
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 11,
  letterSpacing: "2px",
  textTransform: "uppercase",
  textDecoration: "none",
  borderRadius: 2,
  fontWeight: 600,
};

const ctaSecondaryBtnStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "12px 22px",
  border: "1px solid rgba(15,23,42,0.2)",
  color: "var(--indigo, #0F172A)",
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 11,
  letterSpacing: "2px",
  textTransform: "uppercase",
  textDecoration: "none",
  borderRadius: 2,
};

const ctaEcosystemStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
  border: "1px solid rgba(201,168,76,0.3)",
  padding: "36px 32px",
  borderRadius: 2,
};

const ctaEcosystemLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 10,
  letterSpacing: "3px",
  textTransform: "uppercase",
  color: "var(--gold, #D4AF37)",
  marginBottom: 8,
};

const ctaEcosystemHeadStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), serif",
  fontSize: 24,
  fontWeight: 400,
  color: "#F7F3EC",
  margin: "0 0 12px",
  lineHeight: 1.25,
};

const ctaEcosystemBodyStyle: React.CSSProperties = {
  fontSize: 13.5,
  color: "rgba(247,243,236,0.72)",
  lineHeight: 1.7,
  margin: "0 0 22px",
  maxWidth: 560,
};

const ctaEcosystemBtnStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "12px 24px",
  background: "var(--gold, #D4AF37)",
  color: "var(--indigo, #0F172A)",
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 11,
  letterSpacing: "2px",
  textTransform: "uppercase",
  textDecoration: "none",
  fontWeight: 600,
  borderRadius: 2,
};

const faqHeaderBoxStyle: React.CSSProperties = {
  borderTop: "1px solid rgba(201,168,76,0.2)",
  paddingTop: 36,
  marginBottom: 24,
};

const faqBadgeStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 10,
  letterSpacing: "2.5px",
  textTransform: "uppercase",
  color: "var(--gold, #D4AF37)",
  display: "inline-block",
};

const faqSubheadStyle: React.CSSProperties = {
  fontSize: 14,
  color: "rgba(44,40,37,0.65)",
  margin: "6px 0 0",
};

const faqContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 16,
  margin: "24px 0 48px",
};

const faqCardStyle: React.CSSProperties = {
  background: "#FFFFFF",
  border: "1px solid rgba(201,168,76,0.2)",
  borderRadius: 2,
  padding: "24px 22px",
};

const faqQuestionStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontSize: 19,
  fontWeight: 500,
  color: "var(--indigo, #0F172A)",
  margin: "0 0 10px",
  lineHeight: 1.35,
};

const faqAnswerStyle: React.CSSProperties = {
  fontSize: 14,
  color: "rgba(44,40,37,0.8)",
  lineHeight: 1.7,
  margin: 0,
};
