import { getAllPosts } from "../lib/blogStore";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://asbtubes.com";

export default async function sitemap() {
  const staticRoutes = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/product-range", changeFrequency: "weekly", priority: 0.9 },
    { path: "/applications", changeFrequency: "monthly", priority: 0.8 },
    { path: "/quality", changeFrequency: "monthly", priority: 0.8 },
    { path: "/contact-us", changeFrequency: "monthly", priority: 0.8 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
    { path: "/events", changeFrequency: "monthly", priority: 0.5 },
    { path: "/gallery", changeFrequency: "monthly", priority: 0.5 },
  ];

  const staticPages = staticRoutes.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const posts = await getAllPosts();
  const blogPages = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
