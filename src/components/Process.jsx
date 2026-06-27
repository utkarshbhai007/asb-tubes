"use client";
import React, { useEffect, useRef } from "react";

export default function Process() {
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

    const elements = sectionRef.current.querySelectorAll('.animate-fade');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="process-section" ref={sectionRef}>
      
      {/* Top Section: Image + Manufacturing Process text */}
      <div className="container manufacturing-intro animate-fade slide-up">
        <div className="manufacturing-img-col">
          <img src="https://asbtubes.com/wp-content/uploads/2020/09/manufacturing_process.jpg" alt="Manufacturing Process" className="mfg-img" />
        </div>
        <div className="manufacturing-text-col glass-card">
          <h2 className="section-title">MANUFACTURING PROCESS</h2>
          <p className="process-text">
            <strong>ASB Tubes</strong> manufacturing of stainless steel welded tubes is carried out on custom-designed, sophisticated tube mills where stainless steel strips, slit to precise widths, are continuously formed into a tubular shape and welded by Tungsten – Inert – Gas (TIG) welding. The welding is highly precise and completely automated. The edges of the strips are heated and fused together under a protective atmosphere of argon through a non-consumable electrode without the addition of any filler metal. The integrity of the weld is continuously controlled by sophisticated electronic devices that maintain perfect, arc stability, and direction in a magnetic field.
          </p>
        </div>
      </div>

      {/* Videos Section */}
      <div className="container videos-container">
        <div className="video-card glass-card animate-fade slide-up">
          <div className="video-wrapper">
            <iframe 
              src="https://www.youtube.com/embed/Nm47XqwEKe4" 
              title="COIL SLITTING MANUFACTURING PROCESS" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        <div className="video-card glass-card animate-fade slide-up" style={{ transitionDelay: '0.2s' }}>
          <div className="video-wrapper">
            <iframe 
              src="https://www.youtube.com/embed/yIjjrThZEPw" 
              title="PIPES & TUBES MANUFACTURING PROCESS" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Our Process - Alternating Layout */}
      <div className="container our-process-section animate-fade slide-up">
        
        <div className="process-alternating-rows">
          
          {/* Step 1 */}
          <div className="process-row">
            <div className="process-img-col">
              <img src="https://asbtubes.com/wp-content/uploads/2024/04/Screenshot_11-4-2024_205519_mail.google.com_.jpeg" alt="Our Process" className="step-full-img" />
            </div>
            <div className="process-text-col glass-card-blue">
              <h3>OUR PROCESS</h3>
              <p>ASB Tubes manufacturing of stainless steel welded tubes is carried out on custom designed sophisticated tube mills where stainless steel strips, slit to precise widths, are continuously formed into a tubular shape and welded by Tungsten-Inert Gas (TIG) welding.</p>
              <br/>
              <p>The welding is highly precise and completely automated. The edges of the strips are heated and fused together under protective atmosphere of argon through a non-consumable electrode without the addition of any filler metal.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="process-row reverse">
            <div className="process-text-col glass-card-light-blue">
              <h3>BRIGHT ANNEALING</h3>
              <p>Stainless steel pipe annealing is a heat treatment production process carried out under controlled conditions to avoid carburization, decarburization and scaling on the metal surface and removes stresses occurred during forming, moulding. Hence, annealing helps to improve the quality of stainless steel pipes.</p>
            </div>
            <div className="process-img-col">
              <img src="https://asbtubes.com/wp-content/uploads/2024/04/Screenshot_11-4-2024_21354_.jpeg" alt="Bright Annealing" className="step-full-img" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="process-row">
            <div className="process-img-col">
              <img src="https://asbtubes.com/wp-content/uploads/2024/04/Screenshot_11-4-2024_21411_.jpeg" alt="Pickling" className="step-full-img" />
            </div>
            <div className="process-text-col glass-card-blue">
              <h3>PICKLING</h3>
              <p>Pickling is a chemical process used to remove impurities and surface contaminants, such as rust, scale, and oxides, from the surface pipes. In the pickling process, the pipe is immersed in a solution of acid for a certain amount of time, which dissolves the impurities and leaves the surface clean and smooth.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="process-row reverse">
            <div className="process-text-col glass-card-light-blue">
              <h3>POLISHING (INSIDE & OUTSIDE)</h3>
            </div>
            <div className="process-img-col">
              <img src="https://asbtubes.com/wp-content/uploads/2024/04/Screenshot_11-4-2024_21430_.jpeg" alt="Polishing" className="step-full-img" />
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .process-section {
          padding: 80px 0;
          background: #f8f9fa;
          position: relative;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5%;
        }

        .section-title {
          font-family: var(--font-oswald);
          font-size: 2.5rem;
          color: #000;
          margin-bottom: 20px;
        }

        .text-center { text-align: center; }
        .mb-4 { margin-bottom: 1.5rem; }
        .mb-5 { margin-bottom: 3rem; }

        .process-text {
          color: #444;
          font-size: 1.15rem;
          line-height: 1.8;
          margin-bottom: 15px;
        }

        /* --- GLASS CARDS --- */
        .glass-card {
          background: #fff;
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        /* --- MANUFACTURING INTRO --- */
        .manufacturing-intro {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          margin-bottom: 50px;
        }

        .mfg-img {
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        /* --- VIDEOS --- */
        .videos-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          margin-bottom: 60px;
        }

        .video-wrapper {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
          height: 0;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        /* --- ALTERNATING PROCESS ROWS --- */
        .process-alternating-rows {
          display: flex;
          flex-direction: column;
          gap: 30px;
          margin-top: 20px;
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
        }

        .process-row {
          display: flex;
          align-items: center;
          gap: 25px;
        }

        .process-img-col, .process-text-col {
          flex: 1;
          width: 50%;
        }

        .step-full-img {
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          object-fit: cover;
          height: 250px;
        }

        .process-text-col {
          padding: 35px;
          border-radius: 12px;
          color: white;
        }

        .glass-card-blue {
          background-color: #173f61;
          box-shadow: 0 10px 20px rgba(23, 63, 97, 0.15);
        }
        
        .glass-card-light-blue {
          background-color: var(--primary-blue, #0a58ca);
          box-shadow: 0 10px 20px rgba(10, 88, 202, 0.15);
        }

        .process-text-col h3 {
          font-family: var(--font-oswald);
          font-size: 1.75rem;
          margin-bottom: 15px;
          color: #fff;
        }

        .process-text-col p {
          font-size: 1rem;
          line-height: 1.6;
          color: #e2e8f0;
          margin: 0;
        }

        /* --- ANIMATIONS --- */
        .animate-fade {
          opacity: 0;
          transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .slide-up { transform: translateY(40px); }

        .animate-fade.visible {
          opacity: 1;
          transform: translate(0, 0);
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .manufacturing-intro, .videos-container {
            grid-template-columns: 1fr;
          }
          .process-row {
            flex-direction: column !important; /* Stack vertically */
            gap: 20px;
            text-align: center;
          }
          .process-row.reverse {
            flex-direction: column-reverse !important; /* Forces Image to stay on top of text on mobile for reverse rows */
          }
          .process-img-col, .process-text-col {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
