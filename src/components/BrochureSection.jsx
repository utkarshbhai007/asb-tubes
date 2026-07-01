'use client';
import React from 'react';
import BrochureDownloadButton from './BrochureDownloadButton';
import GradientBlinds from './GradientBlinds';

export default function BrochureSection() {
  return (
    <section className="brochure-cta-section">
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <GradientBlinds
          gradientColors={['#004985', '#e2e8f0', '#94a3b8']}
          angle={20}
          noise={0.5}
          blindCount={16}
          blindMinWidth={60}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="normal"
        />
      </div>

      <div className="container text-center" style={{ position: 'relative', zIndex: 10 }}>
        <h2 className="brochure-title">Ready to Learn More?</h2>
        <p className="brochure-subtitle">Download our comprehensive brochure to explore our full range of stainless steel pipes, tubes, and manufacturing capabilities.</p>
        
        <BrochureDownloadButton pdfUrl="/asb_brochure.pdf" className="btn-download-wrapper">
          <div className="btn-download-premium">
            <span className="btn-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </span>
            <span className="btn-text">Download Brochure</span>
          </div>
        </BrochureDownloadButton>
      </div>

      <style jsx>{`
        .brochure-cta-section {
          padding: 100px 0;
          background-color: #0f172a; /* Fallback */
          color: white;
          position: relative;
          overflow: hidden;
        }

        .brochure-title {
          font-family: var(--font-heading);
          font-size: 3rem;
          margin-bottom: 20px;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
          position: relative;
          z-index: 2;
        }

        .brochure-subtitle {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto 40px auto;
          color: rgba(255,255,255,0.9);
          line-height: 1.6;
          position: relative;
          z-index: 2;
          text-shadow: 0 1px 5px rgba(0,0,0,0.5);
        }

        /* Target the button rendered by BrochureDownloadButton */
        :global(.btn-download-wrapper) {
          background: transparent !important;
          border: none !important;
          padding: 0 !important;
          cursor: pointer !important;
          outline: none !important;
          position: relative;
          z-index: 2;
        }

        .btn-download-premium {
          display: inline-flex;
          align-items: center;
          gap: 15px;
          background: linear-gradient(45deg, #ff4b4b, #d41e1e);
          padding: 18px 40px;
          border-radius: 50px;
          color: white;
          font-size: 1.2rem;
          font-weight: 700;
          font-family: var(--font-heading);
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 10px 30px rgba(212, 30, 30, 0.4);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }

        .btn-download-premium::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
          transform: skewX(-25deg);
          animation: shine 4s infinite;
        }

        @keyframes shine {
          0% { left: -100%; }
          15% { left: 200%; }
          100% { left: 200%; }
        }

        .btn-download-premium:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 15px 40px rgba(212, 30, 30, 0.6);
          background: linear-gradient(45deg, #ff5c5c, #e62020);
        }

        .btn-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.25);
          border-radius: 50%;
          padding: 10px;
          transition: transform 0.3s ease;
        }

        .btn-download-premium:hover .btn-icon {
          transform: translateY(3px);
        }

        @media (max-width: 768px) {
          .brochure-title {
            font-size: 2.2rem;
          }
          .btn-download-premium {
            padding: 15px 30px;
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
}
