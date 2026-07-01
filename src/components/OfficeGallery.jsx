'use client';
import React from 'react';
import Image from 'next/image';

const officePics = [
  { id: 1, src: '/images/Screenshot_9-4-2024_221035_.jpeg', alt: 'Office Area 1' },
  { id: 2, src: '/images/Screenshot_9-4-2024_221212_.jpeg', alt: 'Office Area 2' },
  { id: 3, src: '/images/Screenshot_9-4-2024_221748_.jpeg', alt: 'Office Area 3' },
  { id: 4, src: '/images/Screenshot_9-4-2024_221938_.jpeg', alt: 'Office Area 4' },
  { id: 5, src: '/images/Screenshot_9-4-2024_222024_.jpeg', alt: 'Office Area 5' },
  { id: 6, src: '/images/Screenshot_9-4-2024_222114_.jpeg', alt: 'Office Area 6' }
];

export default function OfficeGallery() {
  return (
    <section className="office-gallery-section">
      <div className="container">
        <div className="section-header text-center mb-5">
          <div className="section-label-container justify-content-center" style={{ justifyContent: 'center' }}>
            <span className="label-line"></span>
            <h4 className="section-label text-blue">OUR WORKSPACE</h4>
            <span className="label-line"></span>
          </div>
          <h2 className="section-title">Office & Facilities</h2>
          <p className="section-subtext mx-auto mt-3">
            Take a glimpse into our modern workspace where innovation and quality meet.
          </p>
        </div>

        <div className="office-grid">
          {officePics.map((pic) => (
            <div key={pic.id} className="office-card">
              <div className="office-img-wrapper">
                <Image 
                  src={pic.src}
                  alt={pic.alt}
                  fill
                  className="office-img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .office-gallery-section {
          padding: 80px 0;
          background-color: var(--light-bg);
        }
        .text-blue {
          color: var(--primary-blue);
        }
        .office-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }
        .office-card {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          border: 5px solid white;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .office-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }
        .office-img-wrapper {
          position: relative;
          width: 100%;
          height: 250px;
        }
        .office-img {
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .office-card:hover .office-img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
