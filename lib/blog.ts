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
  readTime: string;
  heroImage: string;
  heroImageAlt: string;
  tags: string[];
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
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
    featured: true,
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
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedPost(): BlogPost | undefined {
  return blogPosts.find((p) => p.featured);
}
