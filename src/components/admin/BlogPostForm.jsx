"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import RichTextEditor from "./RichTextEditor";

function sectionsToHtml(content) {
  if (!Array.isArray(content) || content.length === 0) return "";
  return content
    .map((section) => {
      const heading = section.heading ? `<h2>${section.heading}</h2>` : "";
      const body = section.body ? `<p>${section.body}</p>` : "";
      return `${heading}${body}`;
    })
    .join("");
}

function initialBodyHtml(post) {
  if (!post) return "";
  if (post.bodyHtml) return post.bodyHtml;
  return sectionsToHtml(post.content);
}

export default function BlogPostForm({ initialPost = null, mode = "create" }) {
  const router = useRouter();
  const fileInputRef = useRef(null);
  const editorRef = useRef(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState(() => ({
    title: initialPost?.title || "",
    slug: initialPost?.slug || "",
    image: initialPost?.image || "",
    metaTitle: initialPost?.metaTitle || "",
    metaDescription: initialPost?.metaDescription || "",
    keywords: Array.isArray(initialPost?.keywords)
      ? initialPost.keywords.join(", ")
      : "",
  }));

  const startingHtml = useMemo(
    () => initialBodyHtml(initialPost),
    [initialPost]
  );

  const previewSlug = useMemo(() => {
    if (form.slug.trim()) return form.slug.trim();
    return form.title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
  }, [form.slug, form.title]);

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleImageUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError("");

    try {
      const body = new FormData();
      body.append("file", file);
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body,
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Image upload failed");
        setUploading(false);
        return;
      }
      updateField("image", data.url);
    } catch {
      setError("Image upload failed");
    }

    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function onDrop(e) {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    const dt = new DataTransfer();
    dt.items.add(file);
    if (fileInputRef.current) {
      fileInputRef.current.files = dt.files;
      handleImageUpload({ target: { files: dt.files } });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const bodyHtml = editorRef.current?.getHTML?.() || "";
    const plain = editorRef.current?.getText?.() || "";

    if (!plain && !bodyHtml.includes("<img")) {
      setError("Content is required");
      setSaving(false);
      return;
    }
    if (!form.image) {
      setError("Please upload a featured image");
      setSaving(false);
      return;
    }

    const payload = {
      ...form,
      bodyHtml,
      slug: form.slug || previewSlug,
    };

    try {
      const url =
        mode === "edit"
          ? `/api/admin/posts/${initialPost.slug}`
          : "/api/admin/posts";
      const res = await fetch(url, {
        method: mode === "edit" ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Save failed");
        setSaving(false);
        return;
      }
      router.push("/admin");
      router.refresh();
    } catch {
      setError("Save failed");
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="admin-form cms-form">
      <section className="admin-card cms-card">
        <h2>Basic Information</h2>
        <div className="admin-grid">
          <label>
            Blog Title *
            <input
              value={form.title}
              onChange={(e) => updateField("title", e.target.value)}
              placeholder="Enter blog title"
              required
            />
          </label>
          <label>
            Slug
            <input
              value={form.slug}
              onChange={(e) => updateField("slug", e.target.value)}
              placeholder="URL-friendly identifier"
            />
          </label>
        </div>

        <div className="full cms-block">
          <span className="admin-upload-label">Content *</span>
          <RichTextEditor
            key={initialPost?.slug || "new-post"}
            ref={editorRef}
            initialContent={startingHtml}
            placeholder="Write your blog content..."
          />
        </div>

        <div className="full cms-block">
          <span className="admin-upload-label">Featured Image</span>
          <div
            className="admin-upload-box"
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDrop}
          >
            {form.image ? (
              <div className="admin-upload-preview">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={form.image} alt="Featured preview" />
                <div className="admin-upload-preview-actions">
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                  >
                    {uploading ? "Uploading..." : "Replace image"}
                  </button>
                  <button
                    type="button"
                    className="btn-danger-link"
                    onClick={() => updateField("image", "")}
                    disabled={uploading}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ) : (
              <button
                type="button"
                className="admin-upload-dropzone featured-dropzone"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
              >
                <span className="upload-icon" aria-hidden>
                  ↑
                </span>
                <strong>
                  {uploading ? "Uploading..." : "Click or drag image to upload"}
                </strong>
                <span>PNG, JPG, WebP allowed</span>
              </button>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              onChange={handleImageUpload}
              hidden
            />
          </div>
        </div>
      </section>

      <section className="admin-card cms-card">
        <h2>SEO Metadata</h2>
        <div className="admin-grid">
          <label>
            Meta Title
            <input
              value={form.metaTitle}
              onChange={(e) => updateField("metaTitle", e.target.value)}
              placeholder="SEO title"
            />
          </label>
          <label>
            Meta Keywords
            <input
              value={form.keywords}
              onChange={(e) => updateField("keywords", e.target.value)}
              placeholder="keyword1, keyword2"
            />
          </label>
          <label className="full">
            Meta Description
            <textarea
              rows={4}
              value={form.metaDescription}
              onChange={(e) => updateField("metaDescription", e.target.value)}
              placeholder="Short description for search engines"
            />
          </label>
        </div>
      </section>

      {error ? <p className="admin-error">{error}</p> : null}

      <div className="admin-actions">
        <button
          type="button"
          className="btn-secondary"
          onClick={() => router.push("/admin")}
        >
          Cancel
        </button>
        <button type="submit" disabled={saving || uploading}>
          {saving ? "Saving..." : mode === "edit" ? "Update post" : "Publish post"}
        </button>
      </div>
    </form>
  );
}
