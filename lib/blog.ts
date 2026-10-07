export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  categoryLabel: string;
  author: string;
  authorRole: string;
  date: string;
  isoDate?: string;
  readTime: string;
  heroImage: string;
  heroImageAlt: string;
  tags: string[];
  featured: boolean;
  faq?: BlogFAQ[];
  geoRegion?: string;
  geoPlacename?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "you-have-3-questions-to-ask-before-the-end-of-today",
    title: "You Have 3 Questions to Ask Before the End of Today",
    subtitle:
      "Why Identity, Capacity, and Position Must Agree — and How Using the Wrong Identification Approach Keeps High Performers Stuck",
    excerpt:
      "There are three questions people are constantly trying to answer: Who am I? What am I? Where am I? Knowing who you are is important—but it doesn't automatically tell you what you can do or where you belong. When identity, capacity, and position finally agree, everything changes.",
    category: "personal-evolution",
    categoryLabel: "The Becoming Institute · Personal Evolution · Framework IV",
    author: "Zeki Ubor",
    authorRole: "Principal & Founder · Human & Systems Architect",
    date: "October 7, 2026",
    isoDate: "2026-10-07T08:00:00+01:00",
    readTime: "7 min read",
    heroImage: "/images/blog-hero-three-questions.jpg",
    heroImageAlt:
      "Zeki Ubor standing in quiet executive gravitas inside a modern brutalist pavilion with three geometric stone pillars and warm golden dusk light.",
    tags: [
      "The Becoming Institute",
      "Identity",
      "Capacity",
      "Position",
      "Personal Evolution",
      "Leadership Architecture",
      "High Performance Psychology",
      "Zeki Ubor",
    ],
    featured: true,
    geoRegion: "NG-LA",
    geoPlacename: "Lagos, Nigeria",
    faq: [
      {
        question: "Why isn't knowing my identity enough for career and life growth?",
        answer:
          "Identity gives you self-recognition, values, and orientation. However, execution in the real world demands proven capacity—the developed ability to solve specific, high-value problems under pressure. Without capacity, identity remains an unrealized intention.",
      },
      {
        question: "What is the difference between potential and developed capacity?",
        answer:
          "Potential is raw, uncultivated ability. Developed capacity is potential refined through deliberate practice, discipline, real-world feedback, and consistent evidence.",
      },
      {
        question: "How does environment (Position) affect my ability to grow?",
        answer:
          "Just as a seed requires nutrient-rich soil and sunlight to become a tree, human capacity requires the right relational, cultural, and organizational environment to flourish. Being in the wrong soil can stifle even the most extraordinary natural gifts.",
      },
      {
        question: "Where can I get guided mentorship on navigating these three dimensions?",
        answer:
          "You can connect directly with Zeki Ubor and The Becoming Institute through www.zekiubor.com.ng for personal advisory, framework immersion, and executive counsel.",
      },
    ],
  },
  {
    slug: "the-common-thing-you-dont-put-much-value-on-part-2",
    title: "The Common Thing You Don't Put Much Value On — Part 2",
    subtitle:
      "Why What You Call 'Common' May Be the Very Thing That Opens Your Next Door — and How Deliberate Development Turns Natural Ability Into Trajectory-Altering Impact",
    excerpt:
      "Some of the things that will change your trajectory don't initially look like gifts. They look too common. For me, it was my voice. People heard me before they experienced what I could build. But natural ability is only the beginning: a common thing becomes a pivotal gift when you develop it deliberately.",
    category: "human-capital",
    categoryLabel: "The Becoming Institute · The Common Thing Series · Part II",
    author: "Zeki Ubor",
    authorRole: "Principal & Founder · Human & Systems Architect",
    date: "October 2, 2026",
    isoDate: "2026-10-02T08:00:00+01:00",
    readTime: "8 min read",
    heroImage: "/images/blog-hero-common-thing-part-2.jpg",
    heroImageAlt:
      "Zeki Ubor captured in transit in a modern brutalist architectural airport lounge at golden dusk — reflecting on natural ability, voice, and the architecture of deliberate development.",
    tags: [
      "The Common Thing",
      "Human Capital Development",
      "The Becoming Institute",
      "Executive Voice & Communication",
      "Personal Evolution",
      "Deliberate Development",
      "Leadership Architecture",
      "High Performance Psychology",
      "Zeki Ubor",
    ],
    featured: false,
    geoRegion: "NG-LA",
    geoPlacename: "Lagos, Nigeria",
    faq: [
      {
        question: "Why do people dismiss their natural abilities as 'common'?",
        answer:
          "When an ability comes effortlessly to you—such as speaking, active listening, or relational bridging—it feels ordinary and familiar. You assume everyone shares that capacity, mistaking personal ease for universal commonality, and subsequently fail to treat it as a high-value asset.",
      },
      {
        question: "Why is communication or voice the first point of access before competence?",
        answer:
          "In leadership, high-stakes dealmaking, and relationship building, people hear your articulation, cadence, and presence before they ever inspect your technical competence or what you build. Communication is the initial threshold that grants or denies access to influential rooms.",
      },
      {
        question: "What is the difference between discovering a gift and developing it?",
        answer:
          "Discovering a gift merely uncovers an unrefined natural baseline. Developing it requires intentional discipline, critical feedback, emotional regulation, and consistent practice under pressure to transform an effortless inclination into a reliable, high-yield asset.",
      },
      {
        question: "What are the six natural capacities highlighted in The Common Thing Part 2?",
        answer:
          "The six natural capacities frequently dismissed as common are: (1) Your ability to speak with conviction, (2) Your ability to write and codify thought, (3) Your ability to listen perceptively, (4) Your ability to connect people, (5) Your ability to explain complicated things simply, and (6) Your ability to notice what others overlook.",
      },
      {
        question: "What question should leaders ask instead of 'What special gift do I have?'",
        answer:
          "Stop asking 'What special gift do I have?' and instead ask: 'What do I do naturally that I have not taken seriously enough to develop?' This anchors development in your authentic foundation rather than chasing borrowed, exotic identities.",
      },
    ],
  },
  {
    slug: "architecture-of-executive-gravitas",
    title: "The Architecture of Executive Gravitas",
    subtitle: "Why True Authority Cannot Be Rehearsed — and How Visionary Leaders Build Presence from the Inside Out",
    excerpt:
      "Executives spend fortunes learning to perform presence: rehearsing voice pitch, hand gestures, and power poses. But in high-stakes rooms, counterfeit charisma collapses under pressure. True authority is not projected; it is an architectural condition built from radical internal congruence.",
    category: "leadership-architecture",
    categoryLabel: "Leadership Architecture · Division II",
    author: "Zeki Ubor",
    authorRole: "Principal & Founder · Human & Systems Architect",
    date: "September 26, 2026",
    readTime: "9 min read",
    heroImage: "/images/blog-hero-executive-gravitas.jpg",
    heroImageAlt:
      "A distinguished African executive in a sharp bespoke tailored suit standing in quiet unshakeable authority next to a monumental raw concrete column in a modern brutalist pavilion overlooking a twilight metropolis skyline.",
    tags: [
      "Leadership Architecture",
      "Executive Gravitas",
      "Authority",
      "Executive Presence",
      "Division II",
      "Zeki Ubor",
    ],
    featured: false,
  },
  {
    slug: "why-high-performers-collapse-in-silence",
    title: "Why High Performers Collapse in Silence",
    subtitle: "The Structural Failure Nobody Sees Coming — and the Internal Architecture That Prevents It",
    excerpt:
      "Nobody sees it coming. The boardroom still applauds. The titles keep ascending. And then — quietly, without warning — something fundamental gives way. High performers do not collapse because they are weak. They collapse because they were never taught to build the structures that high performance actually demands.",
    category: "internal-capacity",
    categoryLabel: "The Becoming Institute · Framework III",
    author: "Zeki Ubor",
    authorRole: "Principal & Founder · Human & Systems Architect",
    date: "September 21, 2026",
    readTime: "9 min read",
    heroImage: "/images/blog-hero-high-performers-collapse.jpg",
    heroImageAlt:
      "A solitary African professional woman seated alone in a vast empty minimalist concrete boardroom at twilight — the weight of unspoken exhaustion visible beneath polished composure.",
    tags: ["High Performance", "Internal Architecture", "Burnout", "The Becoming Institute", "Executive Wellbeing", "Zeki Ubor"],
    featured: false,
  },
  {
    slug: "myth-of-the-borrowed-archetype",
    title: "The Myth of the Borrowed Archetype",
    subtitle: "Why Copying Western Frameworks and Charismatic Mentors is Suffocating African Leadership",
    excerpt:
      "Most leaders do not fail because of incompetence. They collapse under the structural exhaustion of wearing a borrowed psychological suit that was never tailored to their soul.",
    category: "leadership-architecture",
    categoryLabel: "The Becoming Institute · Framework II",
    author: "Zeki Ubor",
    authorRole: "Principal & Founder · Human & Systems Architect",
    date: "September 21, 2026",
    readTime: "7 min read",
    heroImage: "/images/blog-hero-borrowed-archetype.jpg",
    heroImageAlt:
      "A contemplative African corporate leader in a sharp dark navy tailored silhouette standing in a brutalist glass-and-concrete pavilion at twilight.",
    tags: ["Leadership Architecture", "Identity Deconstruction", "The Becoming Institute", "Executive Presence", "Zeki Ubor"],
    featured: false,
  },
  {
    slug: "architecture-of-institutional-alignment",
    title: "The Architecture of Institutional Alignment",
    subtitle: "Why Corporate Culture Fractures Under Scale — and How to Re-engineer the Load-Bearing Systems of Enterprise",
    excerpt:
      "Most corporate transformation initiatives fail not because leaders lack vision, but because they treat culture as cosmetics instead of structural engineering. When high aspirations collide with unaligned human systems, institutions don't just stall — they fracture under their own weight.",
    category: "institutional-design",
    categoryLabel: "Organizational Architecture · Division III",
    author: "Zeki Ubor",
    authorRole: "Principal & Founder · Human & Systems Architect",
    date: "September 24, 2026",
    readTime: "10 min read",
    heroImage: "/images/organizational-session.jpg",
    heroImageAlt:
      "Zeki Ubor facilitating an executive boardroom session on organizational architecture and enterprise human systems re-engineering.",
    tags: [
      "Organizational Architecture",
      "Institutional Design",
      "Enterprise Culture",
      "Systems Governance",
      "Leadership Alignment",
      "Zeki Ubor",
    ],
    featured: false,
  },
  {
    slug: "designing-self-before-designing-space",
    title: "Designing the Self Before Designing the Space",
    subtitle: "A Message to Diasporians on Identity, Architecture, and the Spaces We Return To",
    excerpt:
      "You left. You built a life. You achieved things that once felt impossible. But something still feels incomplete — and it shows up in the spaces you inhabit. This is not a design problem. It is a self problem.",
    category: "personal-evolution",
    categoryLabel: "The Becoming Institute · Framework I",
    author: "Zeki Ubor",
    authorRole: "Principal & Founder · Human & Systems Architect",
    date: "September 19, 2026",
    readTime: "8 min read",
    heroImage: "/images/blog-hero-diaspora-becoming.jpg",
    heroImageAlt:
      "A figure stands at floor-to-ceiling windows overlooking a city skyline at dusk — contemplating the space between who they were and who they are becoming.",
    tags: ["Diaspora", "Personal Evolution", "Identity", "Elevation Studio", "The Becoming Institute"],
    featured: false,
  },
  {
    slug: "stop-collecting-start-developing",
    title: "Stop Collecting. Start Developing.",
    subtitle: "Why Accumulating Skills Without Depth Is Quietly Holding You Back — and the Four Symmetries That Change Everything",
    excerpt:
      "If you find yourself constantly learning multiple things but developing no real depth in any of them, you may not need another skill. You may need to understand what is happening with the skills you already have. The four symmetries of development reveal why.",
    category: "human-capital",
    categoryLabel: "The Becoming Institute · The Common Thing Series · Part I",
    author: "Zeki Ubor",
    authorRole: "Principal & Founder · Human & Systems Architect",
    date: "September 29, 2026",
    readTime: "7 min read",
    heroImage: "/images/blog-hero-skill-symmetry.jpg",
    heroImageAlt:
      "A contemplative African professional sitting at a minimalist desk surrounded by stacked books and an open laptop — the tension between endless learning and the absence of depth.",
    tags: [
      "Human Capital",
      "Skill Development",
      "The Becoming Institute",
      "Personal Development",
      "Productivity",
      "Zeki Ubor",
    ],
    featured: false,
  },
  {
    slug: "reputation-architecture-design-your-name",
    title: "Reputation Architecture: Build What Your Name Comes to Mean",
    subtitle: "How to Intentionally Design, Construct, and Sustain the Reputation That Drives Real Growth",
    excerpt:
      "Most people allow their reputation to happen by accident — through random interactions, inconsistent decisions, and whatever people happen to say. But reputation can be intentionally designed. Before you build, you need a blueprint.",
    category: "leadership-architecture",
    categoryLabel: "The Becoming Institute · Reputation & Personal Architecture",
    author: "Zeki Ubor",
    authorRole: "Principal & Founder · Human & Systems Architect",
    date: "September 30, 2026",
    readTime: "8 min read",
    heroImage: "/images/blog-hero-reputation-architecture.jpg",
    heroImageAlt:
      "An architect reviewing blueprints at a minimalist desk in a quiet, light-filled studio — a metaphor for the deliberate, intentional design of personal and professional reputation.",
    tags: [
      "Reputation",
      "Personal Branding",
      "Leadership Architecture",
      "The Becoming Institute",
      "Personal Development",
      "Professional Growth",
      "Zeki Ubor",
    ],
    featured: false,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedPost(): BlogPost | undefined {
  return blogPosts.find((p) => p.featured);
}
