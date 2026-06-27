"use client";
import React, { useEffect, useRef } from "react";

export default function Facilities() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current.querySelectorAll('.animate-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      img: "/images/manufacturing_process.jpg",
      title: "High Quality",
      desc: "We take extreme care to maintain high quality unchanged.",
      delay: "0s"
    },
    {
      img: "/images/Mill-1_new.jpg",
      title: "Prompt Delivery",
      desc: "We assure regular supply and prompt delivery to our partners.",
      delay: "0.2s"
    },
    {
      img: "/images/ASB-TUBES-MOU-23-24.jpg",
      title: "Committed",
      desc: "We are always committed to our clients and believe in the long-term association.",
      delay: "0.4s"
    },
    {
      img: "/images/ASB-Tubes-Pvt-Ltd-Iso9001.jpg",
      title: "Certifications",
      desc: "ISO & PED Certified facilities for advanced manufacturing.",
      delay: "0.6s"
    }
  ];

  return (
    <section id="facilities" className="facilities-section" ref={sectionRef}>
      <div className="container">
        
        <div className="section-header">
          <div className="label-badge">OUR STRENGTHS</div>
          <h2 className="section-title">
            Why Should You Be A Part Of <span className="text-blue">ASB Tubes?</span>
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtext">
            The manufacturing facility is well equipped with the latest on-line tube
            finishing equipment as per international standards and industrial requirements.
          </p>
        </div>

        <div className="facilities-grid">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="facility-card animate-card" 
              style={{ transitionDelay: card.delay }}
            >
              <div className="card-image-wrapper">
                <img src={card.img} alt={card.title} className="card-image" />
                <div className="card-overlay-gradient"></div>
              </div>
              
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-desc">{card.desc}</p>
                <div className="card-line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .facilities-section {
          padding: 120px 0;
          background: #0a0a0a;
          position: relative;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5%;
        }

        /* --- HEADER --- */
        .section-header {
          text-align: center;
          margin-bottom: 70px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .label-badge {
          display: inline-block;
          padding: 8px 16px;
          background: rgba(30, 144, 255, 0.1);
          color: var(--primary-blue);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 2px;
          border-radius: 30px;
          border: 1px solid rgba(30, 144, 255, 0.3);
          margin-bottom: 20px;
        }

        .section-title {
          font-size: 3.5rem;
          font-family: var(--font-oswald);
          font-weight: 700;
          color: #fff;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .text-blue {
          color: var(--primary-blue);
        }

        .title-underline {
          width: 80px;
          height: 4px;
          background: var(--primary-blue);
          border-radius: 2px;
          margin: 0 auto 25px auto;
        }

        .section-subtext {
          font-size: 1.15rem;
          color: #aaa;
          line-height: 1.8;
        }

        /* --- GRID --- */
        .facilities-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .facility-card {
          position: relative;
          height: 450px;
          border-radius: 16px;
          overflow: hidden;
          background: #111;
          box-shadow: 0 15px 35px rgba(0,0,0,0.5);
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.05);
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .facility-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .facility-card:hover {
          transform: translateY(-10px) !important;
          border-color: rgba(30, 144, 255, 0.4);
          box-shadow: 0 20px 40px rgba(30, 144, 255, 0.15);
        }

        .card-image-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease, filter 0.8s ease;
          filter: grayscale(40%) brightness(0.8);
        }

        .facility-card:hover .card-image {
          transform: scale(1.1);
          filter: grayscale(0%) brightness(1);
        }

        .card-overlay-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 40%, transparent 100%);
          transition: opacity 0.5s ease;
        }

        .facility-card:hover .card-overlay-gradient {
          background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(30,144,255,0.4) 60%, transparent 100%);
        }

        .card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 30px 25px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          transition: transform 0.4s ease;
          transform: translateY(20px);
        }

        .facility-card:hover .card-content {
          transform: translateY(0);
        }

        .card-title {
          font-family: var(--font-oswald);
          font-size: 2rem;
          color: #fff;
          margin-bottom: 15px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .card-desc {
          font-size: 1rem;
          color: #ddd;
          line-height: 1.6;
          opacity: 0;
          height: 0;
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .facility-card:hover .card-desc {
          opacity: 1;
          height: auto;
          margin-bottom: 15px;
        }

        .card-line {
          width: 0;
          height: 3px;
          background: var(--primary-blue);
          transition: width 0.4s ease;
        }

        .facility-card:hover .card-line {
          width: 40px;
        }

        /* RESPONSIVE */
        @media (max-width: 1200px) {
          .facilities-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .facility-card {
            height: 400px;
          }
        }

        @media (max-width: 768px) {
          .facilities-grid {
            grid-template-columns: 1fr;
          }
          .section-title {
            font-size: 2.5rem;
          }
          .facility-card {
            height: 350px;
          }
        }
      `}</style>
    </section>
  );
}
