import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blog";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import BlogPostClient from "@/app/blog/[slug]/BlogPostClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found | Mindvest Global" };

  const canonicalUrl = `https://www.mindvestglobalresources.com.ng/blog/${post.slug}`;
  const isoPublished = post.isoDate || new Date(post.date).toISOString();

  return {
    title: `${post.title} | Mindvest Global`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author, url: "https://www.zekiubor.com.ng" }],
    creator: post.author,
    publisher: "Mindvest Global Resources LLC",
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: `${post.title} — Mindvest Global`,
      description: post.excerpt,
      type: "article",
      url: canonicalUrl,
      siteName: "Mindvest Global",
      locale: "en_US",
      alternateLocale: ["en_GB", "en_CA", "en_NG", "en_ZA", "en_AE"],
      publishedTime: isoPublished,
      modifiedTime: isoPublished,
      authors: [post.author],
      section: post.categoryLabel,
      tags: post.tags,
      images: [
        {
          url: post.heroImage,
          width: 1200,
          height: 630,
          alt: post.heroImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.heroImage],
      creator: "@zekiubor",
      site: "@mindvestglobal",
    },
    other: {
      "geo.region": post.geoRegion ? `${post.geoRegion}; GB-LND; US-NY; CA-ON; AE-DU` : "NG-LA; GB-LND; US-NY; CA-ON; AE-DU",
      "geo.placename": post.geoPlacename ? `${post.geoPlacename}; London; New York; Toronto; Dubai` : "Lagos; London; New York; Toronto; Dubai",
      "geo.position": "6.5244;3.3792",
      ICBM: "6.5244, 3.3792",
      "coverage": "Worldwide",
      "distribution": "Global",
      "target-country": "NG, GB, US, CA, AE, ZA, GH, KE",
      "article:published_time": isoPublished,
      "article:author": post.author,
      "article:section": post.categoryLabel,
      "DC.title": post.title,
      "DC.creator": post.author,
      "DC.subject": post.tags.join("; "),
      "DC.description": post.excerpt,
      "DC.coverage": "Global Strategic Hubs (Lagos, London, New York, Toronto, Dubai, Johannesburg)",
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const postUrl = `https://www.mindvestglobalresources.com.ng/blog/${post.slug}`;
  const isoPublished = post.isoDate || new Date(post.date).toISOString();

  // JSON-LD Article / BlogPosting schema with speakable, multi-region & GEO signals
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${postUrl}#article`,
    headline: post.title,
    alternativeHeadline: post.subtitle,
    description: post.excerpt,
    image: {
      "@type": "ImageObject",
      url: `https://www.mindvestglobalresources.com.ng${post.heroImage}`,
      width: 1200,
      height: 630,
    },
    datePublished: isoPublished,
    dateModified: isoPublished,
    inLanguage: "en-US",
    articleSection: post.categoryLabel,
    keywords: post.tags.join(", "),
    spatialCoverage: [
      {
        "@type": "Place",
        name: "Lagos, Nigeria",
        geo: { "@type": "GeoCoordinates", latitude: 6.5244, longitude: 3.3792 },
      },
      {
        "@type": "Place",
        name: "London, United Kingdom",
        geo: { "@type": "GeoCoordinates", latitude: 51.5074, longitude: -0.1278 },
      },
      {
        "@type": "Place",
        name: "New York, United States",
        geo: { "@type": "GeoCoordinates", latitude: 40.7128, longitude: -74.0060 },
      },
      {
        "@type": "Place",
        name: "Toronto, Canada",
        geo: { "@type": "GeoCoordinates", latitude: 43.6532, longitude: -79.3832 },
      },
      {
        "@type": "Place",
        name: "Dubai, United Arab Emirates",
        geo: { "@type": "GeoCoordinates", latitude: 25.2048, longitude: 55.2708 },
      },
      {
        "@type": "Place",
        name: "Johannesburg, South Africa",
        geo: { "@type": "GeoCoordinates", latitude: -26.2041, longitude: 28.0473 },
      },
    ],
    isPartOf: {
      "@type": "Blog",
      "@id": "https://www.mindvestglobalresources.com.ng/blog#blog",
      name: "Mindvest Global Insights",
      url: "https://www.mindvestglobalresources.com.ng/blog",
    },
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
      url: "https://www.zekiubor.com.ng",
      sameAs: [
        "https://youtube.com/@thebecomingwithzekiubor?si=QC9bC_6enotC-g0R",
        "https://www.zekiubor.com.ng",
        "https://www.linkedin.com/in/zekiubor",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "Mindvest Global",
      url: "https://www.mindvestglobalresources.com.ng",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mindvestglobalresources.com.ng/icon.svg",
      },
      areaServed: [
        "Nigeria",
        "United Kingdom",
        "United States",
        "Canada",
        "United Arab Emirates",
        "South Africa",
        "Ghana",
        "Kenya",
        "Global Diaspora",
      ],
      sameAs: [
        "https://youtube.com/@thebecomingwithzekiubor?si=QC9bC_6enotC-g0R",
        "https://www.linkedin.com/company/mindvestglobal",
      ],
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#key-takeaways", "#core-law-definition", "article h1", "article h2"],
    },
  };

  // Breadcrumbs schema for enhanced Google SERP sitelinks
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.mindvestglobalresources.com.ng",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Insights",
        item: "https://www.mindvestglobalresources.com.ng/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  // FAQ schema (GEO & Google FAQ Rich Snippet optimization)
  const faqSchema = post.faq && post.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <Nav />
      <BlogPostClient post={post} />
      <Footer />
    </>
  );
}
