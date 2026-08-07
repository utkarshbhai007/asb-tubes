"use client";
import React, { useEffect, useRef } from "react";
import BrochureDownloadButton from "./BrochureDownloadButton";

export default function History() {
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
      { threshold: 0.2 }
    );

    const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="history-section" ref={sectionRef}>
      <div className="container">
        
        <div className="history-header animate-on-scroll slide-up">
          <div className="label-badge">WORLDWIDE</div>
          <h2 className="section-title">
            Global Presence in <span className="text-blue">7+ Countries</span>
          </h2>
          <div className="title-underline"></div>
        </div>

        <div className="history-content">
          <div className="history-text animate-on-scroll slide-right">
            <p className="description">
              Serving pan India since the beginning, we today deliver all across the Globe in 7+ Countries. Our Products
              comply with different International standards and also customization to cater each and every customer’s
              requirements.
            </p>
            
            <BrochureDownloadButton 
              pdfUrl="https://asbtubes.com/pdf/Asbtubes-Brochure.pdf" 
              className="btn-outline-glow mt-4"
            >
              <span>DOWNLOAD BROCHURE</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15V3M12 15L8 11M12 15L16 11M2 17L2.621 19.485C2.729 19.917 3.118 20.219 3.563 20.219H20.437C20.882 20.219 21.271 19.917 21.379 19.485L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </BrochureDownloadButton>
          </div>

          <div className="history-banner animate-on-scroll slide-left">
            <div className="map-wrapper">
              <img
                src="/images/Screenshot_9-4-2024_215059_mail.google.com_.jpeg"
                alt="Global Map"
                className="w-100 map-img"
              />
              <div className="glow-overlay"></div>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        .history-section {
          padding: 120px 0;
          background: #000;
          position: relative;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5%;
        }

        /* --- HEADER --- */
        .history-header {
          text-align: center;
          margin-bottom: 60px;
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
        }

        .text-blue {
          color: var(--primary-blue);
        }

        .title-underline {
          width: 80px;
          height: 4px;
          background: var(--primary-blue);
          border-radius: 2px;
          margin: 0 auto;
        }

        /* --- CONTENT --- */
        .history-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .history-text {
          padding-right: 40px;
        }

        .description {
          font-size: 1.15rem;
          color: #bbb;
          line-height: 1.8;
          margin-bottom: 40px;
        }

        /* Outline Glowing Button */
        .btn-outline-glow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 14px 28px;
          background: transparent;
          color: var(--primary-blue);
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          letter-spacing: 1px;
          border: 2px solid var(--primary-blue);
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        
        .btn-outline-glow::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: var(--primary-blue);
          transition: left 0.4s ease;
          z-index: -1;
        }

        .btn-outline-glow:hover {
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(30, 144, 255, 0.4);
        }
        
        .btn-outline-glow:hover::before {
          left: 0;
        }

        /* --- BANNER / MAP --- */
        .history-banner {
          position: relative;
        }

        .map-wrapper {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.8);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .map-img {
          width: 100%;
          display: block;
          filter: grayscale(80%) contrast(1.2);
          transition: filter 0.5s ease, transform 0.5s ease;
        }
        
        .map-wrapper:hover .map-img {
          filter: grayscale(0%) contrast(1);
          transform: scale(1.03);
        }

        .glow-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.8) 100%);
          pointer-events: none;
        }

        /* --- ANIMATIONS --- */
        .animate-on-scroll {
          opacity: 0;
          transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .slide-up {
          transform: translateY(40px);
        }

        .slide-right {
          transform: translateX(-50px);
        }

        .slide-left {
          transform: translateX(50px);
        }

        .animate-on-scroll.visible {
          opacity: 1;
          transform: translate(0, 0);
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .history-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .history-text {
            padding-right: 0;
            order: 2; /* Text goes under the map */
          }
          
          .history-banner {
            order: 1;
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}
