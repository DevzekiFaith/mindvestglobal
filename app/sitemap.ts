import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.mindvestglobalresources.com.ng";
  const now = new Date();

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post, index) => {
    const isNewest = index === 0;
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: isNewest ? now : post.isoDate ? new Date(post.isoDate) : now,
      changeFrequency: isNewest ? "daily" : post.featured ? "weekly" : "monthly",
      priority: isNewest ? 0.95 : post.featured ? 0.9 : 0.8,
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    ...blogEntries,
  ];
}
