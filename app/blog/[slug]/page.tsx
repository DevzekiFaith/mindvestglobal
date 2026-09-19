import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blog";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import BlogPostClient from "./BlogPostClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found | Mindvest Global" };

  return {
    title: `${post.title} | Mindvest Global`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://www.mindvestglobalresources.com.ng/blog/${post.slug}`,
      images: [
        {
          url: post.heroImage,
          width: 1200,
          height: 630,
          alt: post.heroImageAlt,
        },
      ],
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.heroImage],
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

  // JSON-LD Article schema for rich search results
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `https://www.mindvestglobalresources.com.ng${post.heroImage}`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
      url: "https://www.mindvestglobalresources.com.ng",
    },
    publisher: {
      "@type": "Organization",
      name: "Mindvest Global",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mindvestglobalresources.com.ng/icon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.mindvestglobalresources.com.ng/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Nav />
      <BlogPostClient post={post} />
      <Footer />
    </>
  );
}
