"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogPostView({ post, related }) {
  return (
    <main className="blog-post-page">
      <section
        className="post-hero"
        style={{ backgroundImage: `url('${post.image}')` }}
      >
        <div className="post-hero-overlay" />
        <div className="container post-hero-content">
          <Link href="/blog" className="back-link">
            ← Back to Blog
          </Link>
          <span className="post-category">{post.category}</span>
          <h1 className="post-title">{post.title}</h1>
          <p className="post-meta">{post.date}</p>
        </div>
      </section>

      <article className="post-body-section">
        <div className="container post-layout">
          <div className="post-main">
            <div className="post-featured-img">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 900px) 100vw, 760px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <p className="post-lead">{post.excerpt}</p>
            {post.content.map((section) => (
              <section key={section.heading} className="post-section">
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
            <div className="post-cta">
              <h3>Need SS pipes or tubes for your project?</h3>
              <p>
                Talk to ASB Tubes for sizes, grades, finishes and supply timelines.
              </p>
              <Link href="/contact-us" className="btn-solid-blue">
                Contact Us
              </Link>
            </div>
          </div>

          <aside className="post-aside">
            <h3>Related articles</h3>
            <ul>
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <div className="aside-links">
              <Link href="/product-range">View product range →</Link>
              <Link href="/quality">Quality & certifications →</Link>
            </div>
          </aside>
        </div>
      </article>

      <style jsx>{`
        .blog-post-page {
          background: var(--light-bg);
          min-height: 100vh;
        }

        .post-hero {
          position: relative;
          min-height: 320px;
          display: flex;
          align-items: flex-end;
          background-size: cover;
          background-position: center;
          margin-top: 0;
          padding: 100px 0 50px;
        }

        .post-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(15, 23, 42, 0.75),
            rgba(0, 73, 133, 0.88)
          );
        }

        .post-hero-content {
          position: relative;
          z-index: 2;
          color: #fff;
          max-width: 860px;
        }

        .back-link {
          display: inline-block;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-size: 0.95rem;
          margin-bottom: 18px;
        }

        .back-link:hover {
          text-decoration: underline;
        }

        .post-category {
          display: inline-block;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.25);
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 0.75rem;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .post-title {
          font-family: var(--font-heading);
          font-size: clamp(1.8rem, 4vw, 3rem);
          line-height: 1.2;
          margin: 0 0 12px;
          text-transform: none;
        }

        .post-meta {
          margin: 0;
          opacity: 0.9;
          font-size: 0.95rem;
        }

        .post-body-section {
          padding: 60px 0 90px;
        }

        .post-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 280px;
          gap: 40px;
          align-items: start;
        }

        .post-featured-img {
          position: relative;
          width: 100%;
          height: 360px;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 28px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .post-lead {
          font-size: 1.15rem;
          line-height: 1.7;
          color: #334155;
          margin-bottom: 32px;
        }

        .post-section {
          margin-bottom: 28px;
        }

        .post-section h2 {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          color: var(--primary-blue);
          margin-bottom: 10px;
        }

        .post-section p {
          color: #475569;
          line-height: 1.75;
          font-size: 1.02rem;
          margin: 0;
        }

        .post-cta {
          margin-top: 40px;
          padding: 28px;
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
        }

        .post-cta h3 {
          margin: 0 0 8px;
          font-family: var(--font-heading);
          color: #0f172a;
        }

        .post-cta p {
          margin: 0 0 18px;
          color: #64748b;
        }

        .post-aside {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 24px;
          position: sticky;
          top: 100px;
        }

        .post-aside h3 {
          margin: 0 0 14px;
          font-size: 1.1rem;
          color: var(--primary-blue);
          font-family: var(--font-heading);
        }

        .post-aside ul {
          list-style: none;
          padding: 0;
          margin: 0 0 20px;
        }

        .post-aside li {
          margin-bottom: 12px;
          padding-bottom: 12px;
          border-bottom: 1px solid #f1f5f9;
        }

        .post-aside a {
          color: #0f172a;
          text-decoration: none;
          font-size: 0.95rem;
          line-height: 1.4;
        }

        .post-aside a:hover {
          color: var(--primary-blue);
        }

        .aside-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .aside-links a {
          color: var(--primary-blue);
          font-weight: 600;
          font-size: 0.9rem;
        }

        @media (max-width: 900px) {
          .post-layout {
            grid-template-columns: 1fr;
          }

          .post-aside {
            position: static;
          }

          .post-featured-img {
            height: 240px;
          }
        }
      `}</style>
    </main>
  );
}
