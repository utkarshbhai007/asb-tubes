"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogPostView({ post, related }) {
  const hasBody =
    Boolean(post.bodyHtml && post.bodyHtml.replace(/<p><\/p>/g, "").trim()) ||
    (Array.isArray(post.content) && post.content.length > 0);

  return (
    <main className="blog-post-page">
      <section className="post-hero">
        <div className="container">
          <div className="post-hero-meta">
            <span className="post-date">{post.date}</span>
          </div>
          <h1 className="post-title">{post.title}</h1>
        </div>
      </section>

      <article className="post-body-section">
        <div className="container post-layout">
          <div className="post-main">
            {post.image ? (
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
            ) : null}

            {hasBody ? (
              post.bodyHtml ? (
                <div
                  className="article-prose"
                  dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
                />
              ) : (
                <div className="article-prose">
                  {(post.content || []).map((section, index) => (
                    <section key={`${section.heading}-${index}`}>
                      {section.heading ? <h2>{section.heading}</h2> : null}
                      {section.body ? <p>{section.body}</p> : null}
                    </section>
                  ))}
                </div>
              )
            ) : (
              <p className="post-empty">No article content yet.</p>
            )}

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
            {related?.length ? (
              <ul className="related-list">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="related-empty">More articles coming soon.</p>
            )}
            <div className="aside-links">
              <Link href="/product-range">View product range →</Link>
              <Link href="/quality">Quality & certifications →</Link>
              <Link href="/contact-us">Contact us →</Link>
            </div>
          </aside>
        </div>
      </article>

      <style jsx>{`
        .blog-post-page {
          background: #f8fafc;
          min-height: 100vh;
        }

        .post-hero {
          background: linear-gradient(135deg, #0f172a 0%, #004985 100%);
          padding: 120px 0 40px;
          color: #fff;
        }

        .post-hero-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .post-date {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .post-title {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          line-height: 1.15;
          margin: 0;
          max-width: 820px;
          text-transform: none;
          color: #fff;
        }

        .post-body-section {
          padding: 40px 0 90px;
        }

        .post-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 300px;
          gap: 36px;
          align-items: start;
        }

        .post-main {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 28px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
        }

        .post-featured-img {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 24px;
          background: #e2e8f0;
        }

        .post-empty {
          color: #94a3b8;
          font-style: italic;
          margin: 0 0 24px;
        }

        .post-cta {
          margin-top: 36px;
          padding: 24px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
        }

        .post-cta h3 {
          margin: 0 0 8px;
          font-family: var(--font-heading);
          color: #0f172a;
        }

        .post-cta p {
          margin: 0 0 16px;
          color: #64748b;
        }

        .post-aside {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 22px;
          position: sticky;
          top: 100px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
        }

        .post-aside h3 {
          margin: 0 0 14px;
          font-size: 1rem;
          color: var(--primary-blue);
          font-family: var(--font-heading);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .related-list {
          list-style: none;
          padding: 0;
          margin: 0 0 18px;
        }

        .related-list li {
          margin-bottom: 10px;
          padding-bottom: 10px;
          border-bottom: 1px solid #f1f5f9;
        }

        .related-list a {
          color: #0f172a;
          text-decoration: none;
          font-size: 0.95rem;
          line-height: 1.4;
          font-weight: 600;
        }

        .related-list a:hover {
          color: var(--primary-blue);
        }

        .related-empty {
          margin: 0 0 16px;
          color: #94a3b8;
          font-size: 0.9rem;
        }

        .aside-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-top: 4px;
        }

        .aside-links a {
          color: var(--primary-blue);
          font-weight: 600;
          font-size: 0.9rem;
          text-decoration: none;
        }

        .aside-links a:hover {
          text-decoration: underline;
        }

        @media (max-width: 900px) {
          .post-hero {
            padding: 100px 0 32px;
          }

          .post-layout {
            grid-template-columns: 1fr;
          }

          .post-aside {
            position: static;
          }

          .post-main {
            padding: 20px;
          }
        }
      `}</style>
    </main>
  );
}
