import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_PATH = path.join(DATA_DIR, "blog-posts.json");

function ensureDataFile() {
  if (!fs.existsSync(DATA_PATH)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.writeFileSync(DATA_PATH, "[]", "utf8");
  }
}

export function readPosts() {
  try {
    ensureDataFile();
    const raw = fs.readFileSync(DATA_PATH, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function writePosts(posts) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(DATA_PATH, JSON.stringify(posts, null, 2), "utf8");
}

export function getAllPosts() {
  return readPosts();
}

export function getPostBySlug(slug) {
  return readPosts().find((post) => post.slug === slug) || null;
}

export function getPostSlugs() {
  return readPosts().map((post) => post.slug);
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

export function normalizePost(input, { existingSlug } = {}) {
  const title = String(input.title || "").trim();
  if (!title) {
    throw new Error("Title is required");
  }

  let slug = slugify(input.slug || title);
  if (!slug) {
    throw new Error("Slug is required");
  }

  const posts = readPosts();
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

export function createPost(input) {
  const post = normalizePost(input);
  const posts = readPosts();
  posts.unshift(post);
  writePosts(posts);
  return post;
}

export function updatePost(currentSlug, input) {
  const posts = readPosts();
  const index = posts.findIndex((p) => p.slug === currentSlug);
  if (index === -1) {
    throw new Error("Post not found");
  }
  const post = normalizePost(input, { existingSlug: currentSlug });
  posts[index] = post;
  writePosts(posts);
  return post;
}

export function deletePost(slug) {
  const posts = readPosts();
  const next = posts.filter((p) => p.slug !== slug);
  if (next.length === posts.length) {
    throw new Error("Post not found");
  }
  writePosts(next);
  return true;
}
