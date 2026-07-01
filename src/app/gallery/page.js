"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    { id: 1, category: 'facility', src: '/images/gallery_facility.png', title: 'State-of-the-Art Plant', desc: 'Our massive 48,000 MT capacity manufacturing unit.' },
    { id: 2, category: 'production', src: '/images/gallery_production.png', title: 'Automated Tube Mills', desc: 'Precision TIG welding and continuous forming processes.' },
    { id: 3, category: 'team', src: '/images/gallery_team.png', title: 'Expert Engineering', desc: 'Our dedicated team ensuring the highest quality standards.' },
    { id: 4, category: 'products', src: '/images/gallery_product_1.png', title: 'Premium Coils', desc: 'High-grade stainless steel coils ready for processing.' },
    { id: 5, category: 'products', src: '/images/gallery_product_2.png', title: 'Seamless Pipes', desc: 'Perfectly finished seamless pipes stacked for dispatch.' },
    { id: 6, category: 'facility', src: '/images/gallery_factory_2.png', title: 'Modern Machinery', desc: 'Heavy-duty machinery operated by skilled technicians.' },
  ];

  const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter(item => item.category === filter);

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="container text-center">
          <span className="section-label">RESOURCES</span>
          <h1 className="hero-title">Inside ASB Tubes</h1>
          <p className="hero-desc">
            Take a visual tour through our world-class manufacturing facilities, explore our premium product range, and meet the people driving our innovation.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          
          {/* Filters */}
          <div className="gallery-filters">
            <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
            <button className={`filter-btn ${filter === 'facility' ? 'active' : ''}`} onClick={() => setFilter('facility')}>Facility</button>
            <button className={`filter-btn ${filter === 'production' ? 'active' : ''}`} onClick={() => setFilter('production')}>Production</button>
            <button className={`filter-btn ${filter === 'products' ? 'active' : ''}`} onClick={() => setFilter('products')}>Products</button>
            <button className={`filter-btn ${filter === 'team' ? 'active' : ''}`} onClick={() => setFilter('team')}>Team</button>
          </div>

          {/* Grid */}
          <div className="gallery-grid">
            {filteredItems.map(item => (
              <div key={item.id} className="gallery-item">
                <div className="img-wrapper">
                  <img src={item.src} alt={item.title} />
                  <div className="overlay">
                    <div className="overlay-content">
                      <span className="category-tag">{item.category}</span>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <style jsx>{`
        .gallery-page {
          background-color: #f8fafc;
          color: #334155;
          min-height: 100vh;
        }

        .gallery-hero {
          padding: 160px 0 60px;
          background: linear-gradient(180deg, #f1f5f9 0%, #ffffff 100%);
          border-bottom: 1px solid #e2e8f0;
        }

        .section-label {
          color: var(--primary-blue);
          font-weight: 700;
          letter-spacing: 2px;
          font-size: 0.9rem;
          display: block;
          margin-bottom: 15px;
        }

        .hero-title {
          font-size: 3.5rem;
          color: #0f172a;
          margin-bottom: 25px;
          font-family: var(--font-oswald);
        }

        .hero-desc {
          font-size: 1.2rem;
          color: #64748b;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .gallery-section {
          padding: 60px 0 120px;
          background-color: #ffffff;
        }

        .gallery-filters {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 50px;
        }

        .filter-btn {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          color: #64748b;
          padding: 10px 25px;
          border-radius: 30px;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: capitalize;
        }

        .filter-btn:hover {
          background: #f8fafc;
          color: #0f172a;
        }

        .filter-btn.active {
          background: var(--primary-blue);
          border-color: var(--primary-blue);
          color: white;
          box-shadow: 0 4px 15px rgba(56, 189, 248, 0.4);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .gallery-item {
          border-radius: 16px;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
        }

        .img-wrapper {
          position: relative;
          width: 100%;
          height: 320px;
          overflow: hidden;
          cursor: pointer;
        }

        .img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .img-wrapper:hover img {
          transform: scale(1.1);
        }

        .overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%);
          display: flex;
          align-items: flex-end;
          padding: 30px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .img-wrapper:hover .overlay {
          opacity: 1;
        }

        .overlay-content {
          transform: translateY(20px);
          transition: transform 0.4s ease;
        }

        .img-wrapper:hover .overlay-content {
          transform: translateY(0);
        }

        .category-tag {
          display: inline-block;
          background: var(--primary-blue);
          color: white;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 4px 10px;
          border-radius: 4px;
          margin-bottom: 12px;
          font-weight: 700;
        }

        .overlay-content h3 {
          color: white;
          font-size: 1.5rem;
          margin-bottom: 8px;
        }

        .overlay-content p {
          color: #e2e8f0;
          font-size: 0.95rem;
          margin: 0;
          line-height: 1.5;
        }

        @media (max-width: 992px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 2.5rem; }
          .gallery-grid { grid-template-columns: 1fr; }
          .img-wrapper { height: 280px; }
          .gallery-filters {
            gap: 10px;
          }
          .filter-btn {
            padding: 8px 18px;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
}
