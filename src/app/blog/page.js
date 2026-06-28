'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Stainless Steel Manufacturing',
      excerpt: 'Explore how automation and AI are revolutionizing the production of high-quality stainless steel pipes and tubes.',
      date: 'April 15, 2024',
      category: 'Industry Trends',
      image: '/images/manufacturing_process.jpg'
    },
    {
      id: 2,
      title: 'Understanding Different Grades of Stainless Steel',
      excerpt: 'A comprehensive guide to 200, 300, and 400 series stainless steel and their best industrial applications.',
      date: 'March 28, 2024',
      category: 'Technical Guide',
      image: '/images/Mill-1_new.jpg'
    },
    {
      id: 3,
      title: 'ASB Tubes at Stainless Steel World 2023',
      excerpt: 'Highlights and key takeaways from our recent exhibition showcasing our latest product range and innovations.',
      date: 'February 10, 2024',
      category: 'Events',
      image: '/images/Sectional.jpg'
    },
    {
      id: 4,
      title: 'Why Seamless Pipes are Preferred in High-Pressure Applications',
      excerpt: 'An in-depth look at the structural integrity of seamless pipes compared to welded alternatives in extreme conditions.',
      date: 'January 22, 2024',
      category: 'Applications',
      image: '/images/tubes.png'
    },
    {
      id: 5,
      title: 'Sustainability in the Steel Industry',
      excerpt: 'How modern manufacturing facilities are reducing their carbon footprint through energy-efficient processes.',
      date: 'December 05, 2023',
      category: 'Sustainability',
      image: '/images/worker.png'
    },
    {
      id: 6,
      title: 'Quality Testing Standards for ERW Pipes',
      excerpt: 'A detailed breakdown of the rigorous ISO and PED certification tests every pipe undergoes before shipment.',
      date: 'November 18, 2023',
      category: 'Quality Control',
      image: '/images/heat-exchanger.jpg'
    }
  ];

  return (
    <main className="blog-page">
      {/* Hero Section for Blog */}
      <section className="blog-hero">
        <div className="blog-hero-overlay"></div>
        <div className="container">
          <div className="blog-hero-content">
            <h1 className="blog-title">Our Blog & Insights</h1>
            <p className="blog-subtitle">Stay updated with the latest news, technical guides, and industry trends from ASB Tubes.</p>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="blog-content-section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-card-img-wrapper">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="blog-img"
                  />
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-card-content">
                  <span className="blog-date">{post.date}</span>
                  <h3 className="blog-post-title">
                    <Link href="#">{post.title}</Link>
                  </h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <Link href="#" className="read-more-link">
                    Read More <span>&rarr;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-5">
            <button className="btn-solid-blue">Load More Posts</button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .blog-page {
          background-color: var(--light-bg);
          min-height: 100vh;
        }

        /* Hero */
        .blog-hero {
          position: relative;
          height: 40vh;
          min-height: 350px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-image: url('/images/manufacturing_process.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          margin-top: 0;
        }

        .blog-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(15, 23, 42, 0.8), rgba(0, 73, 133, 0.8));
          z-index: 1;
        }

        .blog-hero-content {
          position: relative;
          z-index: 2;
          color: white;
          padding-top: 60px; /* offset for fixed navbar */
        }

        .blog-title {
          font-size: 3.5rem;
          font-family: var(--font-heading);
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-shadow: 0 4px 10px rgba(0,0,0,0.5);
        }

        .blog-subtitle {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.9);
        }

        /* Content Section */
        .blog-content-section {
          padding: 80px 0;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .blog-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0, 73, 133, 0.15);
        }

        .blog-card-img-wrapper {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
        }

        .blog-img {
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .blog-card:hover .blog-img {
          transform: scale(1.05);
        }

        .blog-category {
          position: absolute;
          top: 15px;
          left: 15px;
          background: var(--primary-blue);
          color: white;
          padding: 5px 12px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          border-radius: 4px;
          letter-spacing: 1px;
          z-index: 2;
        }

        .blog-card-content {
          padding: 25px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .blog-date {
          font-size: 0.85rem;
          color: var(--text-light);
          margin-bottom: 10px;
          font-weight: 500;
        }

        .blog-post-title {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          line-height: 1.3;
          margin-bottom: 15px;
        }

        .blog-post-title a {
          color: var(--black);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .blog-post-title a:hover {
          color: var(--primary-blue);
        }

        .blog-excerpt {
          font-size: 0.95rem;
          color: #555;
          line-height: 1.6;
          margin-bottom: 25px;
          flex-grow: 1;
        }

        .read-more-link {
          display: inline-flex;
          align-items: center;
          color: var(--primary-blue);
          font-weight: 600;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        .read-more-link span {
          margin-left: 5px;
          transition: transform 0.3s ease;
        }

        .read-more-link:hover span {
          transform: translateX(5px);
        }

        /* Responsive */
        @media (max-width: 992px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .blog-title {
            font-size: 2.8rem;
          }
        }

        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .blog-title {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </main>
  );
}
