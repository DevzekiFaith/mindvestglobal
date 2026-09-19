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
    featured: true,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedPost(): BlogPost | undefined {
  return blogPosts.find((p) => p.featured);
}
