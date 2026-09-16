"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminPostsTable({ posts }) {
  const router = useRouter();
  const [busySlug, setBusySlug] = useState("");
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!deleteTarget) return;
    function onKey(e) {
      if (e.key === "Escape") setDeleteTarget(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [deleteTarget]);

  async function confirmDelete() {
    if (!deleteTarget) return;
    const { slug } = deleteTarget;
    setBusySlug(slug);
    setErrorMessage("");

    try {
      const res = await fetch(`/api/admin/posts/${slug}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok) {
        setErrorMessage(data.error || "Delete failed");
        setBusySlug("");
        return;
      }
      setDeleteTarget(null);
      router.refresh();
    } catch {
      setErrorMessage("Delete failed");
    }
    setBusySlug("");
  }

  return (
    <div className="admin-list-wrap">
      <div className="admin-toolbar">
        <div>
          <h1>Blog</h1>
          <p>Add and edit posts with SEO meta titles and descriptions.</p>
        </div>
        <div className="admin-toolbar-actions">
          <Link href="/admin/posts/new" className="btn-primary">
            Add post
          </Link>
        </div>
      </div>

      <div className="admin-table-card">
        {posts.length === 0 ? (
          <div className="admin-empty-state">
            <p>No posts yet. Create your first article.</p>
            <Link href="/admin/posts/new" className="btn-primary">
              Add post
            </Link>
          </div>
        ) : (
          <div className="admin-table-scroll">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Slug</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.slug}>
                    <td className="title-cell">
                      <span className="post-title-text">{post.title}</span>
                    </td>
                    <td>
                      <code className="slug-chip">{post.slug}</code>
                    </td>
                    <td className="date-cell">{post.date}</td>
                    <td className="actions">
                      <Link href={`/blog/${post.slug}`} target="_blank">
                        View
                      </Link>
                      <Link href={`/admin/posts/${post.slug}/edit`}>Edit</Link>
                      <button
                        type="button"
                        onClick={() => {
                          setErrorMessage("");
                          setDeleteTarget({ slug: post.slug, title: post.title });
                        }}
                        disabled={busySlug === post.slug}
                      >
                        {busySlug === post.slug ? "..." : "Delete"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {deleteTarget ? (
        <div
          className="admin-modal-backdrop"
          onClick={() => {
            if (!busySlug) setDeleteTarget(null);
          }}
        >
          <div
            className="admin-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="delete-modal-title">Delete post?</h2>
            <p>
              Are you sure you want to delete{" "}
              <strong>{deleteTarget.title}</strong>? This cannot be undone.
            </p>
            {errorMessage ? <p className="admin-error">{errorMessage}</p> : null}
            <div className="admin-modal-actions">
              <button
                type="button"
                className="btn-secondary"
                disabled={Boolean(busySlug)}
                onClick={() => setDeleteTarget(null)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn-danger"
                disabled={Boolean(busySlug)}
                onClick={confirmDelete}
              >
                {busySlug ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
