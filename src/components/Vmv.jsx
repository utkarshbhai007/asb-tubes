"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

export default function Vmv() {
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const coreValues = [
    "QUALITY",
    "INTEGRITY",
    "INNOVATION",
    "TEAMWORK",
    "EXCELLENCE"
  ];

  return (
    <section id="vmv" className="vmv-section" ref={sectionRef}>
      <div className="container vmv-content">
        
        <div className="vmv-grid">
          {/* Left Column: Image */}
          <div className="vmv-image-col animate-on-scroll slide-right">
            <div className="image-wrapper">
              <img 
                src="/images/manufacturing_process.jpg" 
                alt="Manufacturing Process" 
                className="vmv-img"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="vmv-text-col">
            
            <div className="vmv-text-block animate-on-scroll slide-left" style={{ transitionDelay: '0.1s' }}>
              <h2 className="vmv-heading-text">VISION</h2>
              <div className="vmv-divider"></div>
              <p className="vmv-desc">
                “To produce high-quality, cost & work efficient, easy to use products that incorporate high technology”
              </p>
            </div>

            <div className="vmv-text-block animate-on-scroll slide-left" style={{ transitionDelay: '0.2s' }}>
              <h2 className="vmv-heading-text">VALUES</h2>
              <div className="vmv-divider"></div>
              <p className="vmv-desc">
                “Do What We Speak Quality Consciousness”
              </p>
            </div>

            <div className="vmv-text-block animate-on-scroll slide-left" style={{ transitionDelay: '0.3s' }}>
              <h2 className="vmv-heading-text">MISSION</h2>
              <div className="vmv-divider"></div>
              <p className="vmv-desc">
                “To attract and attain customers with high-valued products and services and the most satisfying ownership experience”
              </p>
            </div>

          </div>
        </div>

      </div>

      <style jsx>{`
        .vmv-section {
          padding: 80px 0;
          background-color: #1a1a1a;
          background-image: radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px);
          background-size: 20px 20px;
          position: relative;
          color: #fff;
          overflow: hidden;
        }

        .vmv-content {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 5%;
          position: relative;
          z-index: 2;
        }

        .vmv-grid {
          display: grid;
          grid-template-columns: 55% 45%;
          gap: 50px;
          align-items: center;
        }

        /* --- Left Image --- */
        .vmv-image-col {
          display: flex;
          justify-content: flex-start;
          width: 100%;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          /* Larger angled cut on top-left and bottom-right to match image precisely */
          clip-path: polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%);
        }

        .vmv-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          aspect-ratio: 16 / 10;
        }

        /* --- Right Text Content --- */
        .vmv-text-col {
          display: flex;
          flex-direction: column;
          gap: 30px; 
        }

        .vmv-text-block {
          display: flex;
          flex-direction: column;
        }

        .vmv-heading-text {
          font-family: var(--font-oswald, var(--font-heading), sans-serif);
          font-size: 2.2rem;
          font-weight: 700;
          color: #fff;
          margin: 0;
          letter-spacing: 0px;
          text-transform: none; /* Ensure it's not all-caps */
        }

        .vmv-divider {
          width: 100%;
          height: 1px;
          background-color: rgba(255, 255, 255, 0.4);
          margin-top: 5px;
          margin-bottom: 12px;
        }

        .vmv-desc {
          font-size: 1.05rem;
          line-height: 1.4;
          color: #fff;
          margin: 0 0 10px 0;
          font-family: var(--font-inter, sans-serif);
        }

        .vmv-desc:last-child {
          margin-bottom: 0;
        }

        .vmv-desc strong {
          color: #fff;
          font-weight: 700;
        }

        /* --- ANIMATIONS --- */
        .animate-on-scroll {
          opacity: 0;
          transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .slide-right {
          transform: translateX(-30px);
        }

        .slide-left {
          transform: translateX(30px);
        }

        .animate-on-scroll.visible {
          opacity: 1;
          transform: translate(0);
        }

        /* --- RESPONSIVE --- */
        @media (max-width: 1024px) {
          .vmv-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .vmv-image-col {
            order: -1;
            justify-content: center;
          }

          .image-wrapper {
            max-width: 700px;
          }
        }
        
        @media (max-width: 600px) {
          .vmv-heading-text {
            font-size: 1.8rem;
          }
          .image-wrapper {
            clip-path: polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%);
          }
        }
      `}</style>
    </section>
  );
}
