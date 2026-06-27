"use client";
import React, { useEffect, useRef } from "react";

export default function People() {
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
    <section id="people" className="people-section" ref={sectionRef}>
      <div className="container">
        <div className="people-grid">
          
          {/* Left Visuals */}
          <div className="people-visuals animate-on-scroll slide-right">
            <div className="image-wrapper main-img">
              <img
                src="/images/heat-exchanger.jpg"
                alt="Facilities / Personnel"
              />
              <div className="glass-overlay"></div>
            </div>

            <div className="stats-card glass-card">
              <div className="stats-icon">👥</div>
              <h3 className="stats-number">400+</h3>
              <p className="stats-label">EMPLOYEES</p>
              <div className="stats-divider"></div>
              <p className="stats-desc">
                ASB TUBES’s people make who we are today. We assure promising quality, timely delivery & competitive pricing.
              </p>
            </div>
            
            <div className="image-wrapper secondary-img">
              <img
                src="/images/manufacturing_process.jpg"
                alt="Laboratory"
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="people-text animate-on-scroll slide-left">
            <div className="label-badge">OUR EMPLOYEES</div>
            <h2 className="section-title">
              ASB TUBES's People Make <br/>
              <span className="text-gradient">Who We Are Today</span>
            </h2>
            <div className="title-underline"></div>
            <p className="description">
              All this is only possible by our professional team of technicians and skillful workers. We are
              dedicated to providing the best working environment and empowering our team to deliver excellence in every single
              tube and pipe we manufacture.
            </p>
            
            <a href="#" className="btn-glow">
              <span>WORK CULTURE</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

        </div>
      </div>

      <style jsx>{`
        .people-section {
          padding: 120px 0;
          background: #050505;
          position: relative;
          overflow: hidden;
        }

        /* Ambient Glow Background */
        .people-section::before {
          content: '';
          position: absolute;
          top: 30%;
          left: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(30, 144, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
          filter: blur(60px);
          z-index: 0;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5%;
          position: relative;
          z-index: 1;
        }

        .people-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        /* --- VISUALS --- */
        .people-visuals {
          position: relative;
          display: grid;
          grid-template-columns: 0.6fr 0.4fr;
          grid-template-rows: auto auto;
          gap: 20px;
        }

        .image-wrapper {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
          transition: transform 0.5s ease;
        }
        
        .image-wrapper:hover {
          transform: translateY(-10px);
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.7s ease;
        }
        
        .image-wrapper:hover img {
          transform: scale(1.05);
        }

        .main-img {
          grid-column: 1 / 2;
          grid-row: 1 / 3;
          height: 600px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .glass-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%);
        }

        .secondary-img {
          grid-column: 2 / 3;
          grid-row: 2 / 3;
          height: 250px;
          align-self: end;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Glassmorphic Stats Card */
        .stats-card {
          grid-column: 2 / 3;
          grid-row: 1 / 2;
          background: rgba(30, 144, 255, 0.05);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border: 1px solid rgba(30, 144, 255, 0.2);
          border-radius: 20px;
          padding: 40px 30px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.02);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          transform: translateY(20px);
          margin-bottom: -40px;
          z-index: 2;
          transition: all 0.4s ease;
        }
        
        .stats-card:hover {
          background: rgba(30, 144, 255, 0.1);
          border-color: rgba(30, 144, 255, 0.4);
          transform: translateY(10px);
        }

        .stats-icon {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }

        .stats-number {
          font-size: 3.5rem;
          font-weight: 800;
          font-family: var(--font-oswald);
          color: #fff;
          line-height: 1;
          margin-bottom: 5px;
          background: linear-gradient(45deg, #fff, #1e90ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stats-label {
          font-size: 1rem;
          font-weight: 600;
          color: var(--primary-blue);
          letter-spacing: 2px;
          margin-bottom: 20px;
        }

        .stats-divider {
          width: 50px;
          height: 3px;
          background: var(--primary-blue);
          border-radius: 2px;
          margin-bottom: 20px;
        }

        .stats-desc {
          font-size: 0.95rem;
          color: #bbb;
          line-height: 1.6;
        }

        /* --- TEXT CONTENT --- */
        .people-text {
          padding-left: 40px;
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
          margin-bottom: 25px;
        }

        .section-title {
          font-size: 3.5rem;
          font-family: var(--font-oswald);
          font-weight: 700;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 25px;
        }

        .text-gradient {
          background: linear-gradient(90deg, #fff, #888);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .title-underline {
          width: 80px;
          height: 4px;
          background: var(--primary-blue);
          border-radius: 2px;
          margin-bottom: 30px;
        }

        .description {
          font-size: 1.1rem;
          color: #aaa;
          line-height: 1.8;
          margin-bottom: 40px;
        }

        /* Glowing Button */
        .btn-glow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          background: linear-gradient(90deg, var(--primary-blue), #0056b3);
          color: white;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          letter-spacing: 1px;
          border-radius: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px rgba(30, 144, 255, 0.3);
          position: relative;
          overflow: hidden;
        }
        
        .btn-glow::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }

        .btn-glow:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(30, 144, 255, 0.5);
        }
        
        .btn-glow:hover::before {
          left: 100%;
        }

        .btn-glow svg {
          transition: transform 0.3s ease;
        }
        
        .btn-glow:hover svg {
          transform: translateX(5px);
        }

        /* --- ANIMATIONS --- */
        .animate-on-scroll {
          opacity: 0;
          transition: opacity 1s ease, transform 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .slide-right {
          transform: translateX(-50px);
        }

        .slide-left {
          transform: translateX(50px);
        }

        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateX(0);
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .people-grid {
            grid-template-columns: 1fr;
            gap: 80px;
          }
          
          .people-text {
            padding-left: 0;
            text-align: center;
          }
          
          .title-underline {
            margin: 0 auto 30px auto;
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2.5rem;
          }
          
          .people-visuals {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto;
          }
          
          .main-img {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            height: 400px;
          }
          
          .stats-card {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            margin: -60px 20px 0 20px;
            transform: none;
          }
          
          .secondary-img {
            display: none; /* Hide secondary on small screens to save space */
          }
        }
      `}</style>
    </section>
  );
}
