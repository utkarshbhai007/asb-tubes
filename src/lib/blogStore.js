import fs from "fs";
import path from "path";
import clientPromise from "./mongodb.js";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_PATH = path.join(DATA_DIR, "blog-posts.json");

async function getCollection() {
  if (!process.env.MONGODB_URI) {
    return null;
  }
  const client = await clientPromise;
  const db = client.db("asbtubes");
  return db.collection("posts");
}

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
  // 1. Try reading from MongoDB Atlas if configured
  try {
    const col = await getCollection();
    if (col) {
      const posts = await col
        .find({}, { projection: { _id: 0 } })
        .sort({ _id: -1 })
        .toArray();
      return posts;
    }
  } catch (err) {
    console.error("MongoDB readPosts error:", err);
  }

  // 2. Fallback to bundled seed file
  return readLocalSeedPosts();
}

export async function writePosts(posts) {
  // If MongoDB is configured, bulk replace or sync
  try {
    const col = await getCollection();
    if (col) {
      await col.deleteMany({});
      if (posts.length > 0) {
        await col.insertMany(posts.map((p) => ({ ...p })));
      }
      return;
    }
  } catch (err) {
    console.error("MongoDB writePosts error:", err);
    throw err;
  }

  // Local filesystem write fallback
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
  try {
    const col = await getCollection();
    if (col) {
      const post = await col.findOne({ slug }, { projection: { _id: 0 } });
      return post || null;
    }
  } catch (err) {
    console.error("MongoDB getPostBySlug error:", err);
  }

  const posts = await readPosts();
  return posts.find((post) => post.slug === slug) || null;
}

export async function getPostSlugs() {
  try {
    const col = await getCollection();
    if (col) {
      const posts = await col
        .find({}, { projection: { slug: 1, _id: 0 } })
        .toArray();
      return posts.map((p) => p.slug);
    }
  } catch (err) {
    console.error("MongoDB getPostSlugs error:", err);
  }

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
  try {
    const col = await getCollection();
    if (col) {
      await col.insertOne({ ...post, createdAt: new Date() });
      return post;
    }
  } catch (err) {
    console.error("MongoDB createPost error:", err);
    throw err;
  }

  // Local fallback
  const posts = await readPosts();
  posts.unshift(post);
  await writePosts(posts);
  return post;
}

export async function updatePost(currentSlug, input) {
  const post = await normalizePost(input, { existingSlug: currentSlug });
  try {
    const col = await getCollection();
    if (col) {
      const result = await col.updateOne(
        { slug: currentSlug },
        { $set: { ...post, updatedAt: new Date() } }
      );
      if (result.matchedCount === 0) {
        throw new Error("Post not found");
      }
      return post;
    }
  } catch (err) {
    console.error("MongoDB updatePost error:", err);
    throw err;
  }

  // Local fallback
  const posts = await readPosts();
  const index = posts.findIndex((p) => p.slug === currentSlug);
  if (index === -1) {
    throw new Error("Post not found");
  }
  posts[index] = post;
  await writePosts(posts);
  return post;
}

export async function deletePost(slug) {
  try {
    const col = await getCollection();
    if (col) {
      const result = await col.deleteOne({ slug });
      if (result.deletedCount === 0) {
        throw new Error("Post not found");
      }
      return true;
    }
  } catch (err) {
    console.error("MongoDB deletePost error:", err);
    throw err;
  }

  // Local fallback
  const posts = await readPosts();
  const next = posts.filter((p) => p.slug !== slug);
  if (next.length === posts.length) {
    throw new Error("Post not found");
  }
  await writePosts(next);
  return true;
}
