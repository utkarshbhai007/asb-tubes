import fs from "fs";
import path from "path";
import { put, list } from "@vercel/blob";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_PATH = path.join(DATA_DIR, "blog-posts.json");
const BLOB_POSTS_PATH = "data/blog-posts.json";

// In-memory cache for fast access across function invocations
let inMemoryPosts = null;

function readLocalSeedPosts() {
  try {
    if (fs.existsSync(DATA_PATH)) {
      const raw = fs.readFileSync(DATA_PATH, "utf8");
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    }
  } catch {
    // Ignore read errors
  }
  return [];
}

export async function readPosts() {
  // 1. Try reading from Vercel Blob if connected
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      const { blobs } = await list({ prefix: BLOB_POSTS_PATH });
      const blob = blobs.find((b) => b.pathname === BLOB_POSTS_PATH);
      if (blob) {
        const res = await fetch(`${blob.url}?t=${Date.now()}`, {
          cache: "no-store",
        });
        if (res.ok) {
          const parsed = await res.json();
          if (Array.isArray(parsed)) {
            inMemoryPosts = parsed;
            return parsed;
          }
        }
      }
    } catch (err) {
      console.warn("Could not fetch posts from Vercel Blob:", err?.message);
    }
  }

  // 2. Return in-memory cached posts if available
  if (inMemoryPosts !== null) {
    return inMemoryPosts;
  }

  // 3. Fallback to bundled seed file
  const local = readLocalSeedPosts();
  inMemoryPosts = local;
  return local;
}

export async function writePosts(posts) {
  inMemoryPosts = posts;

  // 1. Write to Vercel Blob if connected
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    await put(BLOB_POSTS_PATH, JSON.stringify(posts, null, 2), {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "application/json",
    });
    return;
  }

  // 2. If running on Vercel without token
  if (process.env.VERCEL) {
    throw new Error(
      "Vercel Blob is not connected. Please enable Blob in your Vercel Dashboard (Storage -> Create Blob)."
    );
  }

  // 3. Local filesystem write fallback
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DATA_PATH, JSON.stringify(posts, null, 2), "utf8");
  } catch (err) {
    console.error("Local filesystem write failed:", err);
    throw err;
  }
}

export async function getAllPosts() {
  return await readPosts();
}

export async function getPostBySlug(slug) {
  const posts = await readPosts();
  return posts.find((post) => post.slug === slug) || null;
}

export async function getPostSlugs() {
  const posts = await readPosts();
  return posts.map((post) => post.slug);
}

export function slugify(text) {
  return String(text || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function normalizePost(input, { existingSlug } = {}) {
  const title = String(input.title || "").trim();
  if (!title) {
    throw new Error("Title is required");
  }

  let slug = slugify(input.slug || title);
  if (!slug) {
    throw new Error("Slug is required");
  }

  const posts = await readPosts();
  const slugTaken = posts.some(
    (p) => p.slug === slug && p.slug !== existingSlug
  );
  if (slugTaken) {
    throw new Error("Slug already exists");
  }

  const keywords = Array.isArray(input.keywords)
    ? input.keywords.map((k) => String(k).trim()).filter(Boolean)
    : String(input.keywords || "")
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean);

  const bodyHtml = String(input.bodyHtml || "").trim();
  const plainText = bodyHtml
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const hasImage = /<img\b/i.test(bodyHtml);

  if (!plainText && !hasImage && !Array.isArray(input.content)) {
    throw new Error("Content is required");
  }

  // Legacy section support (read-only migration path)
  const content = Array.isArray(input.content)
    ? input.content
        .map((section) => ({
          heading: String(section.heading || "").trim(),
          body: String(section.body || "").trim(),
        }))
        .filter((section) => section.heading || section.body)
    : [];

  const excerpt =
    String(input.excerpt || "").trim() ||
    plainText.slice(0, 180) ||
    content.map((s) => s.body).join(" ").slice(0, 180);

  const rawDate = String(input.date || "").trim();
  let date = rawDate;
  if (/^\d{4}-\d{2}-\d{2}$/.test(rawDate)) {
    const parsed = new Date(`${rawDate}T12:00:00`);
    if (!Number.isNaN(parsed.getTime())) {
      date = parsed.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
  }
  if (!date) {
    date = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  if (!String(input.image || "").trim()) {
    throw new Error("Featured image is required");
  }

  return {
    slug,
    title,
    excerpt,
    date,
    category: String(input.category || "").trim() || "General",
    image: String(input.image || "").trim(),
    metaTitle: String(input.metaTitle || title).trim(),
    metaDescription: String(input.metaDescription || excerpt || "").trim(),
    keywords,
    bodyHtml,
    content,
  };
}

export async function createPost(input) {
  const post = await normalizePost(input);
  const posts = await readPosts();
  posts.unshift(post);
  await writePosts(posts);
  return post;
}

export async function updatePost(currentSlug, input) {
  const posts = await readPosts();
  const index = posts.findIndex((p) => p.slug === currentSlug);
  if (index === -1) {
    throw new Error("Post not found");
  }
  const post = await normalizePost(input, { existingSlug: currentSlug });
  posts[index] = post;
  await writePosts(posts);
  return post;
}

export async function deletePost(slug) {
  const posts = await readPosts();
  const next = posts.filter((p) => p.slug !== slug);
  if (next.length === posts.length) {
    throw new Error("Post not found");
  }
  await writePosts(next);
  return true;
}
