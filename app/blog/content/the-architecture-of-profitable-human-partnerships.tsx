// Blog post article content
// "The Grace of Human Partnership: Designing the Rooms That Shape Us"
// The Becoming Institute · Human Architecture Framework · Layer IV: Relationships & Environment
// By Zeki Ubor · Mindvest Global · Lagos & Global Strategic Hubs

import Link from "next/link";

export function HumanPartnershipContent() {
  return (
    <article style={articleStyle}>
      {/* ── Scoped responsive styles ─────────────── */}
      <style>{`
        .hp-header-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 28px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(201,168,76,0.18);
        }
        .hp-briefing-box {
          background: linear-gradient(135deg, #0B0B1A 0%, #16133B 100%);
          padding: 26px 22px !important;
          border-radius: 4px;
          margin: 32px 0;
          color: #F7F3EC;
          border: 1px solid rgba(201,168,76,0.25);
          box-shadow: 0 10px 30px rgba(0,0,0,0.12);
        }
        .hp-quote-block {
          margin: 28px 0;
          padding: 22px 24px !important;
          border-left: 3px solid var(--gold, #D4AF37);
          background: rgba(201,168,76,0.06);
          border-radius: 0 4px 4px 0;
        }
        .hp-quote-text {
          font-family: var(--font-cormorant), serif;
          font-size: 22px;
          font-style: italic;
          color: var(--indigo, #16133B);
          line-height: 1.45;
          margin: 0 0 12px;
        }
        .hp-framework-banner {
          background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.3);
          padding: 22px 20px !important;
          border-radius: 4px;
          margin: 28px 0 32px;
        }
        .hp-layer-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 10px;
          margin: 20px 0;
        }
        .hp-layer-col {
          background: #FAF8F5;
          border: 1px solid rgba(0,0,0,0.08);
          padding: 14px 10px !important;
          border-radius: 3px;
          text-align: center;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .hp-layer-col.active {
          background: #16133B;
          color: #F7F3EC;
          border-color: #D4AF37;
          box-shadow: 0 4px 14px rgba(22,19,59,0.15);
        }
        .hp-triad-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin: 28px 0 32px;
        }
        .hp-triad-card {
          background: #FAF8F5;
          border: 1px solid rgba(201,168,76,0.22);
          padding: 20px 16px !important;
          border-radius: 4px;
        }
        .hp-build-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin: 28px 0 32px;
        }
        .hp-build-row {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          background: #FAF8F5;
          border: 1px solid rgba(0,0,0,0.06);
          padding: 16px 18px !important;
          border-radius: 4px;
        }
        .hp-reflection-section {
          background: linear-gradient(135deg, #0B0B1A 0%, #16133B 100%);
          padding: 32px 24px !important;
          border-radius: 4px;
          margin: 36px 0;
          color: #F7F3EC;
        }
        .hp-reflection-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(201,168,76,0.18);
          padding: 16px 16px !important;
          border-radius: 3px;
          margin-bottom: 14px;
        }
        .hp-cta-primary {
          background: #FAF8F5;
          border: 1px solid rgba(201,168,76,0.3);
          padding: 30px 24px !important;
          border-radius: 4px;
          margin-top: 48px;
        }

        /* ── Responsive breakpoints ─────────────── */
        @media (max-width: 860px) {
          .hp-layer-grid {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
          .hp-triad-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
        }
        @media (max-width: 640px) {
          .hp-header-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
          .hp-briefing-box,
          .hp-reflection-section,
          .hp-cta-primary {
            padding: 20px 14px !important;
          }
          .hp-quote-block {
            padding: 16px 14px !important;
          }
          .hp-build-row {
            flex-direction: column;
            gap: 8px;
            padding: 14px 12px !important;
          }
        }
      `}</style>

      {/* ── Metadata Dispatch ─────────────────────────────── */}
      <div className="hp-header-meta">
        <div style={transitBadgeStyle}>
          <span style={transitDotStyle} />
          <span>Layer IV: Relationships &amp; Environment · The Becoming Institute</span>
        </div>
        <div style={geoTagStyle}>
          <span>Lagos, Nigeria · Global Strategic Hubs</span>
        </div>
      </div>

      {/* ── Opening Lead ───────────────────────────────────── */}
      <p style={leadStyle}>
        Take a quiet breath for a moment.
      </p>

      <p style={bodyStyle}>
        If you have been working hard—building a dream, nurturing a career, leading a company, or 
        caring for a family—there is something gentle and true you deserve to hear:
      </p>

      <p style={highlightParagraphStyle}>
        <strong>You were never meant to carry the whole world on your own shoulders.</strong>
      </p>

      <p style={bodyStyle}>
        Many of us grew up believing that strength meant standing completely on our own. We learned 
        to be resilient, to solve every problem ourselves, and to push through long days with quiet 
        determination. There is real dignity in that kind of dedication; it reveals how deeply you 
        care about your work and the people who rely on you.
      </p>

      <p style={bodyStyle}>
        Yet, even in our moments of great achievement, many of us quietly long for something softer: 
        a trusted hand beside ours, a colleague who genuinely understands the vision, a friend with 
        whom we can share both the celebration and the quiet moments in between.
      </p>

      <p style={bodyStyle}>
        True success was never meant to be a lonely summit. The most beautiful, rewarding, and enduring 
        things in life are the things we build together. When we learn to open our hearts and build true 
        human partnerships, something remarkable happens: the weight feels lighter, our minds find rest, 
        and our shared journey becomes a source of deep, lasting joy.
      </p>

      {/* ── Anchor Quote ───────────────────────────────────── */}
      <div className="hp-quote-block">
        <p className="hp-quote-text">
          &ldquo;No matter how skilled our hands may be, our greatest potential begins the moment we learn to trust another human being. When we walk alone, we can move quickly; but when we walk together with shared purpose, we travel farther, build deeper, and create a warmth that outlasts us all.&rdquo;
        </p>
        <cite style={quoteAuthorStyle}>
          — Zeki Ubor, Principal &amp; Founder, Mindvest Global
        </cite>
      </div>

      {/* ── Executive Briefing Box ──────────────────────────── */}
      <aside id="key-takeaways" className="hp-briefing-box">
        <div style={briefingLabelStyle}>
          <span>⚡ Executive Briefing · Layer IV: Relationships &amp; Environment</span>
        </div>
        <div style={briefingDividerStyle} />
        <ul style={briefingListStyle}>
          <li style={briefingItemStyle}>
            <strong>The Life of the Structure:</strong> A building is not just its concrete foundation; life is lived in the rooms. Layer IV of the Human Architecture Framework governs who and what surrounds you.
          </li>
          <li style={briefingItemStyle}>
            <strong>The Personal Gift:</strong> Partnering is not a surrender of self-reliance; it is the blossoming of peace, cognitive relief, and complementary strength.
          </li>
          <li style={briefingItemStyle}>
            <strong>The Corporate Ecosystem:</strong> Resilient organizations replace cutthroat isolation with mutual generosity, transparent care, and strategic alliances.
          </li>
          <li style={briefingItemStyle}>
            <strong>The Community Garden:</strong> When trust circulates within a community, wealth, mentorship, and opportunity stay rooted, uplifting generations.
          </li>
        </ul>
      </aside>

      {/* ── Section I: The Framework Lens ──────────────────── */}
      <section id="the-rooms-that-shape-us" style={{ marginTop: 44 }}>
        <h2 style={h2Style}>
          The Framework Lens: Layer IV — Relationships &amp; Environment (The Rooms)
        </h2>

        <p style={bodyStyle}>
          Inside the <strong>Human Architecture Framework</strong> at The Becoming Institute, we view every 
          human life, leadership journey, and enterprise as an intentional structure composed of five essential layers:
        </p>

        {/* 5 Layer Visual Map */}
        <div className="hp-layer-grid">
          <div className="hp-layer-col">
            <div style={layerNumStyle}>V</div>
            <div style={layerNameStyle}>Expression</div>
            <div style={layerSubStyle}>The Facade</div>
          </div>
          <div className="hp-layer-col active">
            <div style={{ ...layerNumStyle, color: "#D4AF37" }}>IV</div>
            <div style={{ ...layerNameStyle, color: "#F7F3EC" }}>Relationships</div>
            <div style={{ ...layerSubStyle, color: "rgba(247,243,236,0.7)" }}>The Rooms ★</div>
          </div>
          <div className="hp-layer-col">
            <div style={layerNumStyle}>III</div>
            <div style={layerNameStyle}>Systems</div>
            <div style={layerSubStyle}>Infrastructure</div>
          </div>
          <div className="hp-layer-col">
            <div style={layerNumStyle}>II</div>
            <div style={layerNameStyle}>Mindset</div>
            <div style={layerSubStyle}>Structure</div>
          </div>
          <div className="hp-layer-col">
            <div style={layerNumStyle}>I</div>
            <div style={layerNameStyle}>Identity</div>
            <div style={layerSubStyle}>Foundation</div>
          </div>
        </div>

        <p style={bodyStyle}>
          You can lay a solid foundation of identity (<em>Layer I</em>). You can cultivate a disciplined mindset (<em>Layer II</em>). 
          You can install efficient operational systems (<em>Layer III</em>). 
        </p>

        <p style={highlightParagraphStyle}>
          <strong>But life is lived in the rooms (Layer IV).</strong>
        </p>

        <p style={bodyStyle}>
          The rooms represent who and what surrounds you: the voices you listen to over breakfast, the colleagues who sit 
          across your table, the partners you invite into your ventures, and the community you come home to. 
        </p>

        <p style={bodyStyle}>
          If your rooms are cold, suspicious, or empty, no amount of external achievement will make your structure feel 
          like a home. But when your rooms are filled with high-trust, complementary, and generous human beings, your life 
          transforms from an exhausting fortress of self-defense into a sanctuary of shared flourish.
        </p>
      </section>

      {/* ── Section II: For the Individual ─────────────────── */}
      <section id="for-the-individual" style={{ marginTop: 44 }}>
        <h2 style={h2Style}>
          I. For the Individual: Finding Companionship on the Journey
        </h2>

        <p style={bodyStyle}>
          If you have found it difficult to trust or partner in the past, please be gentle with yourself.
        </p>

        <p style={bodyStyle}>
          Most people who hold tightly to their work do so because they poured their whole heart into it. Perhaps in earlier 
          seasons, someone didn&rsquo;t value your effort, or a promise wasn&rsquo;t kept. Wanting to protect your peace and your work 
          is a very natural human response.
        </p>

        <p style={bodyStyle}>
          However, protecting yourself doesn’t have to mean isolating yourself. Think of what opens up when you allow the right 
          person into your rooms:
        </p>

        <div style={triadSectionStyle}>
          <div style={benefitCardStyle}>
            <h3 style={benefitTitleStyle}>01 · The Gift of Being Truly Seen</h3>
            <p style={benefitDescStyle}>
              There is an extraordinary sense of relief when you sit across from someone who respects your gifts, 
              listens without judgment, and shares your passion for doing good work. You no longer have to perform.
            </p>
          </div>
          <div style={benefitCardStyle}>
            <h3 style={benefitTitleStyle}>02 · Complementary Strengths</h3>
            <p style={benefitDescStyle}>
              We are each blessed with unique talents. You do not have to be brilliant at every single detail. When you 
              partner with someone whose natural strengths balance your own, the things that once felt draining suddenly flow with ease.
            </p>
          </div>
          <div style={benefitCardStyle}>
            <h3 style={benefitTitleStyle}>03 · Rest for Your Spirit</h3>
            <p style={benefitDescStyle}>
              The most meaningful &ldquo;profit&rdquo; of a human partnership is not simply financial gain—it is the quiet 
              peace of knowing you are no longer alone in the journey. You have an ally who rejoices in your victories and stands steady with you.
            </p>
          </div>
        </div>

        <p style={bodyStyle}>
          Opening up to partnership is not a surrender of your independence; it is the blossoming of your capacity.
        </p>
      </section>

      {/* ── Section III: For the Company ──────────────────── */}
      <section id="for-the-company" style={{ marginTop: 44 }}>
        <h2 style={h2Style}>
          II. For the Company: Turning Collaboration into Shared Flourishing
        </h2>

        <p style={bodyStyle}>
          In the world of business, we often hear that the marketplace is a battleground where everyone must compete fiercely.
        </p>

        <p style={bodyStyle}>
          Yet, when you look at the organizations that bring the most enduring value to the world, you discover a much kinder truth: 
          <strong>the greatest enterprises are ecosystems of profound collaboration.</strong>
        </p>

        <p style={bodyStyle}>
          A business is, at its heart, simply a group of human beings coming together in service of other human beings. When companies 
          design their rooms for genuine partnership—both within their teams and across their industry—they unlock possibilities 
          that isolation could never touch:
        </p>

        <div className="hp-triad-grid">
          <div className="hp-triad-card">
            <span style={triadNumStyle}>01</span>
            <h3 style={triadTitleStyle}>Mutual Generosity</h3>
            <p style={triadDescStyle}>
              Sharing resources, wisdom, and opportunities so both parties grow together rather than fighting over a fixed pie.
            </p>
          </div>
          <div className="hp-triad-card">
            <span style={triadNumStyle}>02</span>
            <h3 style={triadTitleStyle}>Transparent Care</h3>
            <p style={triadDescStyle}>
              Communicating with kindness and clarity, honoring covenants, and ensuring every voice and contributor is valued.
            </p>
          </div>
          <div className="hp-triad-card">
            <span style={triadNumStyle}>03</span>
            <h3 style={triadTitleStyle}>Shared Flourishing</h3>
            <p style={triadDescStyle}>
              Celebrating common wins and lifting each other through seasons of market transition, creating enduring resilience.
            </p>
          </div>
        </div>

        <p style={bodyStyle}>
          When organizations choose partnership over cold rivalry, creativity expands, trust accelerates progress, and work 
          stops feeling like a battlefield. It begins to feel like an inspiring community where people are proud to contribute.
        </p>
      </section>

      {/* ── Section IV: For the Community ─────────────────── */}
      <section id="for-the-community" style={{ marginTop: 44 }}>
        <h2 style={h2Style}>
          III. For the Community: Weaving a Tapestry of Belonging
        </h2>

        <p style={bodyStyle}>
          Beyond our individual lives and our businesses lies the sacred ground of community—the neighborhoods, towns, 
          and shared cultures where our families live and grow.
        </p>

        <p style={bodyStyle}>
          A community thrives most beautifully when its people understand that their well-being is connected to the well-being 
          of their neighbors. 
        </p>

        <p style={bodyStyle}>
          Imagine a community where:
        </p>

        <ul style={gardenListStyle}>
          <li style={gardenItemStyle}>
            <strong>When an artisan or entrepreneur begins a new venture,</strong> the neighborhood rallies around them with encouragement, advice, and patronage.
          </li>
          <li style={gardenItemStyle}>
            <strong>Knowledge is shared freely,</strong> with elders and seasoned professionals mentoring the youth, illuminating pathways that were once hidden.
          </li>
          <li style={gardenItemStyle}>
            <strong>Resources and opportunities circulate like water through a fertile garden—</strong>nourishing every household, uplifting schools, and creating dignified livelihoods for future generations.
          </li>
        </ul>

        <p style={bodyStyle}>
          This is the timeless power of social harmony. When we choose to believe the best in each other and invest in our shared 
          prosperity, we build an environment where everyone feels safe, supported, and proud of where they come from. 
        </p>
      </section>

      {/* ── Section V: The B-U-I-L-D Method ───────────────── */}
      <section id="the-build-method" style={{ marginTop: 44 }}>
        <h2 style={h2Style}>
          IV. The B-U-I-L-D Method: How to Redesign Your Rooms
        </h2>

        <p style={bodyStyle}>
          How do we begin to bring this kind of high-trust partnership into our everyday reality? Through our five-step 
          architectural method:
        </p>

        <div className="hp-build-grid">
          <div className="hp-build-row">
            <span style={buildLetterBadgeStyle}>B</span>
            <div>
              <strong style={buildWordStyle}>Baseline</strong>
              <p style={buildDescStyle}>Honestly audit who currently sits in your inner circle and where feelings of loneliness or exhaustion linger.</p>
            </div>
          </div>
          <div className="hp-build-row">
            <span style={buildLetterBadgeStyle}>U</span>
            <div>
              <strong style={buildWordStyle}>Uncover</strong>
              <p style={buildDescStyle}>Gently surface old disappointments or fears that keep you from reaching out and trusting others.</p>
            </div>
          </div>
          <div className="hp-build-row">
            <span style={buildLetterBadgeStyle}>I</span>
            <div>
              <strong style={buildWordStyle}>Intentional Design</strong>
              <p style={buildDescStyle}>Deliberately choose the kind of partners, collaborators, and allies you want beside your table.</p>
            </div>
          </div>
          <div className="hp-build-row">
            <span style={buildLetterBadgeStyle}>L</span>
            <div>
              <strong style={buildWordStyle}>Layer &amp; Live</strong>
              <p style={buildDescStyle}>Practice daily generosity, clear agreements, and proactive gratitude with those who inhabit your rooms.</p>
            </div>
          </div>
          <div className="hp-build-row">
            <span style={buildLetterBadgeStyle}>D</span>
            <div>
              <strong style={buildWordStyle}>Declare &amp; Deploy</strong>
              <p style={buildDescStyle}>Step into the world together, knowing you are flanked by human beings who share your values and heart.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section VI: Gentle Reflections ────────────────── */}
      <section id="gentle-reflections" className="hp-reflection-section">
        <div style={briefingLabelStyle}>
          <span style={{ color: "#D4AF37" }}>🌿 Gentle Inquiries for Your Heart and Work</span>
        </div>
        <div style={{ height: 1, background: "rgba(201,168,76,0.2)", margin: "14px 0 20px" }} />

        <div className="hp-reflection-card">
          <h4 style={reflectionCardTitleStyle}>In Your Personal Walk</h4>
          <p style={reflectionCardTextStyle}>
            Is there an area of your life where you have been feeling tired simply because you haven’t given someone the chance to help you carry it? Who is someone in your world today whom you could reach out to with a simple note of appreciation or encouragement?
          </p>
        </div>

        <div className="hp-reflection-card">
          <h4 style={reflectionCardTitleStyle}>In Your Professional Life</h4>
          <p style={reflectionCardTextStyle}>
            What would happen if you viewed a respected peer in your industry not as a competitor, but as a potential friend and collaborator? How can you make the people you work with feel even more appreciated, valued, and safe in your presence?
          </p>
        </div>

        <div className="hp-reflection-card" style={{ marginBottom: 0 }}>
          <h4 style={reflectionCardTitleStyle}>In Your Community</h4>
          <p style={reflectionCardTextStyle}>
            What small act of generosity or partnership could you bring to your neighborhood or circle of peers this week? How can we help create a culture where everyone feels they have a seat at the table?
          </p>
        </div>
      </section>

      {/* ── Section VII: A Blessing for Builders ──────────── */}
      <section id="a-blessing" style={{ marginTop: 44 }}>
        <h2 style={h2Style}>
          A Blessing for the Builders
        </h2>

        <p style={bodyStyle}>
          You do not have to conquer the world by sunset. 
        </p>

        <p style={bodyStyle}>
          The greatest things in life are grown quietly, through patience, kindness, and honest connection. One conversation 
          at a time. One shared cup of coffee. One act of mutual trust.
        </p>

        <p style={bodyStyle}>
          Allow yourself the grace to connect. Reach out across the table. Be willing to listen, to share, and to build 
          alongside others who care about making the world a little brighter.
        </p>

        <p style={{ ...bodyStyle, fontSize: 18, color: "var(--indigo, #16133B)", fontWeight: 500 }}>
          When we learn to walk hand in hand, we discover what the heart has always known:  
          <em> We were made to flourish together.</em>
        </p>
      </section>

      {/* ── CTA / Next Step ───────────────────────────────── */}
      <section className="hp-cta-primary">
        <div style={ctaBadgeStyle}>Human Architecture · The Becoming Institute</div>
        <h3 style={ctaTitleStyle}>Ready to Redesign Your Rooms?</h3>
        <p style={ctaBodyStyle}>
          Whether you are an executive seeking high-trust advisory, a founder looking to align your leadership team, 
          or an organization building strategic partnerships, explore how our Human Architecture Framework helps you 
          design environments where people and enterprises thrive.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 20 }}>
          <Link href="/#framework" style={ctaPrimaryBtnStyle}>
            Explore The Framework →
          </Link>
          <Link href="/divisions/the-becoming-institute" style={ctaSecondaryBtnStyle}>
            The Becoming Institute
          </Link>
        </div>
      </section>
    </article>
  );
}

// ─── Inline Styles ─────────────────────────────────────────────────────────

const articleStyle: React.CSSProperties = {
  fontFamily: "var(--font-inter), sans-serif",
  color: "#2C2825",
  fontSize: 16,
  lineHeight: 1.85,
  maxWidth: 860,
  margin: "0 auto",
  padding: "40px 0 80px",
};

const transitBadgeStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 11,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: "var(--gold-muted, #C9A84C)",
  display: "flex",
  alignItems: "center",
  gap: 8,
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
  fontSize: 11,
  color: "#8C7B65",
  letterSpacing: "1px",
};

const leadStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), serif",
  fontSize: "clamp(26px, 3.2vw, 36px)",
  fontWeight: 400,
  color: "var(--indigo, #16133B)",
  lineHeight: 1.3,
  marginBottom: 20,
};

const bodyStyle: React.CSSProperties = {
  fontSize: 16.5,
  color: "#2C2825",
  lineHeight: 1.85,
  marginBottom: 20,
};

const highlightParagraphStyle: React.CSSProperties = {
  fontSize: 18,
  color: "var(--indigo, #16133B)",
  lineHeight: 1.7,
  padding: "16px 20px",
  background: "rgba(201,168,76,0.08)",
  borderLeft: "3px solid #D4AF37",
  borderRadius: "0 4px 4px 0",
  marginBottom: 24,
};

const quoteAuthorStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 11,
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: "#8C7B65",
};

const briefingLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 11,
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: "var(--gold, #D4AF37)",
  display: "flex",
  alignItems: "center",
  gap: 8,
};

const briefingDividerStyle: React.CSSProperties = {
  height: 1,
  background: "rgba(201,168,76,0.2)",
  margin: "14px 0 18px",
};

const briefingListStyle: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: 12,
};

const briefingItemStyle: React.CSSProperties = {
  fontSize: 14.5,
  lineHeight: 1.65,
  color: "rgba(247,243,236,0.88)",
};

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), serif",
  fontSize: "clamp(24px, 2.5vw, 32px)",
  fontWeight: 500,
  color: "var(--indigo, #16133B)",
  margin: "36px 0 18px",
  lineHeight: 1.25,
};

const layerNumStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 12,
  letterSpacing: "1px",
  color: "var(--gold-muted, #C9A84C)",
  fontWeight: 600,
  marginBottom: 4,
};

const layerNameStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), serif",
  fontSize: 16,
  fontWeight: 600,
  color: "#16133B",
  marginBottom: 2,
};

const layerSubStyle: React.CSSProperties = {
  fontSize: 11,
  color: "#70695E",
};

const triadSectionStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 14,
  margin: "24px 0 28px",
};

const benefitCardStyle: React.CSSProperties = {
  background: "#FAF8F5",
  border: "1px solid rgba(201,168,76,0.22)",
  padding: "18px 18px",
  borderRadius: 4,
};

const benefitTitleStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), serif",
  fontSize: 20,
  fontWeight: 600,
  color: "var(--indigo, #16133B)",
  margin: "0 0 8px",
};

const benefitDescStyle: React.CSSProperties = {
  fontSize: 15,
  color: "#4A433D",
  lineHeight: 1.7,
  margin: 0,
};

const triadNumStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 11,
  color: "var(--gold-muted, #C9A84C)",
  letterSpacing: "1px",
  display: "block",
  marginBottom: 8,
};

const triadTitleStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), serif",
  fontSize: 20,
  fontWeight: 600,
  color: "var(--indigo, #16133B)",
  margin: "0 0 8px",
};

const triadDescStyle: React.CSSProperties = {
  fontSize: 14,
  color: "#4A433D",
  lineHeight: 1.65,
  margin: 0,
};

const gardenListStyle: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: "20px 0 28px",
  display: "flex",
  flexDirection: "column",
  gap: 14,
};

const gardenItemStyle: React.CSSProperties = {
  background: "#FAF8F5",
  borderLeft: "3px solid #D4AF37",
  padding: "14px 18px",
  fontSize: 15.5,
  lineHeight: 1.7,
  borderRadius: "0 4px 4px 0",
};

const buildLetterBadgeStyle: React.CSSProperties = {
  width: 36,
  height: 36,
  borderRadius: 3,
  background: "var(--indigo, #16133B)",
  color: "var(--gold, #D4AF37)",
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 15,
  fontWeight: 700,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

const buildWordStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), serif",
  fontSize: 18,
  fontWeight: 600,
  color: "var(--indigo, #16133B)",
  display: "block",
  marginBottom: 4,
};

const buildDescStyle: React.CSSProperties = {
  fontSize: 14.5,
  color: "#4A433D",
  lineHeight: 1.6,
  margin: 0,
};

const reflectionCardTitleStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), serif",
  fontSize: 18,
  fontWeight: 600,
  color: "#F7F3EC",
  margin: "0 0 8px",
};

const reflectionCardTextStyle: React.CSSProperties = {
  fontSize: 14,
  color: "rgba(247,243,236,0.85)",
  lineHeight: 1.7,
  margin: 0,
};

const ctaBadgeStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 10,
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: "var(--gold-muted, #C9A84C)",
  marginBottom: 10,
};

const ctaTitleStyle: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), serif",
  fontSize: 26,
  fontWeight: 500,
  color: "var(--indigo, #16133B)",
  margin: "0 0 12px",
};

const ctaBodyStyle: React.CSSProperties = {
  fontSize: 15,
  color: "#4A433D",
  lineHeight: 1.75,
  margin: 0,
  maxWidth: 620,
};

const ctaPrimaryBtnStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "12px 24px",
  background: "var(--indigo, #16133B)",
  color: "#F7F3EC",
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 11,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  textDecoration: "none",
  borderRadius: 2,
};

const ctaSecondaryBtnStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "12px 24px",
  border: "1px solid rgba(22,19,59,0.25)",
  color: "var(--indigo, #16133B)",
  fontFamily: "var(--font-dm-mono), monospace",
  fontSize: 11,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  textDecoration: "none",
  borderRadius: 2,
};
