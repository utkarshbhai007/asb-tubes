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

      {/* Top Section: TPI Approvals */}
      <div id="tpi-approvals" className="container section-header text-center animate-fade slide-up" style={{ marginBottom: '40px' }}>
        <h2 className="section-title" style={{ color: 'var(--primary-blue)' }}>TPI APPROVALS</h2>
        <div className="title-underline-center" style={{ margin: '0 auto 20px', width: '80px', height: '4px', background: 'var(--primary-blue)', borderRadius: '2px' }}></div>
      </div>

      <div className="container flowchart-full-container animate-fade slide-up" style={{ marginBottom: '70px' }}>
        <div className="flowchart-wrapper" style={{ width: '100%', background: '#fff', borderRadius: '20px', padding: '40px', boxShadow: '0 10px 40px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.03)', display: 'flex', justifyContent: 'center' }}>
          <img src="/images/TPI-Approvals (1).png" alt="TPI Approvals" style={{ width: '100%', height: 'auto', display: 'block', maxWidth: '1000px' }} />
        </div>
      </div>

      {/* Production Flow Chart Section */}
      <div id="flow-chart" className="container section-header text-center animate-fade slide-up" style={{ marginBottom: '40px' }}>
        <h2 className="section-title" style={{ color: 'var(--primary-blue)' }}>PRODUCTION FLOW CHART</h2>
        <div className="title-underline-center" style={{ margin: '0 auto 20px', width: '80px', height: '4px', background: 'var(--primary-blue)', borderRadius: '2px' }}></div>
      </div>

      <div className="container flowchart-full-container animate-fade slide-up" style={{ marginBottom: '60px' }}>
        <div className="flowchart-wrapper" style={{ width: '100%', background: '#fff', borderRadius: '20px', padding: '40px', boxShadow: '0 10px 40px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.03)', display: 'flex', justifyContent: 'center' }}>
          <img src="/Flow-Chart.png" alt="Production Flow Chart" style={{ width: '100%', height: 'auto', display: 'block' }} />
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
          <div className="process-card">
            <div className="process-img-col">
              <div className="img-zoom-wrapper">
                <img
                  src="/images/manufacturing_process.jpg"
                  alt="Manufacturing Process"
                  onError={(e) => { e.target.onerror = null; e.target.src = "/images/Mill-1_new.jpg"; }}
                  className="step-full-img"
                />
              </div>
            </div>
            <div className="process-text-col">
              <div className="step-number">01</div>
              <h3>MANUFACTURING PROCESS</h3>
              <div className="step-divider"></div>
              <p>ASB Tubes manufacturing of stainless steel welded tubes is carried out on custom-designed, sophisticated tube mills where stainless steel strips, slit to precise widths, are continuously formed into a tubular shape and welded by Tungsten – Inert – Gas (TIG) welding. The welding is highly precise and completely automated. The edges of the strips are heated and fused together under a protective atmosphere of argon through a non-consumable electrode without the addition of any filler metal. The integrity of the weld is continuously controlled by sophisticated electronic devices that maintain perfect, arc stability, and direction in a magnetic field.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="process-card reverse">
            <div className="process-img-col">
              <div className="img-zoom-wrapper">
                <img
                  src="/images/BRIGHT-ANNEALING-Image-(Quailty).png"
                  alt="Bright Annealing"
                  onError={(e) => { e.target.onerror = null; e.target.src = "/BRIGHT-ANNEALING-Image-(Quailty).png"; }}
                  className="step-full-img"
                />
              </div>
            </div>
            <div className="process-text-col">
              <div className="step-number">02</div>
              <h3>BRIGHT ANNEALING</h3>
              <div className="step-divider"></div>
              <p>Stainless steel pipe annealing is a heat treatment production process carried out under controlled conditions to avoid carburization, decarburization and scaling on the metal surface and removes stresses occurred during forming, moulding. Hence, annealing helps to improve the quality of stainless steel pipes.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="process-card">
            <div className="process-img-col">
              <div className="img-zoom-wrapper">
                <img
                  src="/images/Screenshot_9-4-2024_221035_.jpeg"
                  alt="Pickling"
                  onError={(e) => { e.target.onerror = null; e.target.src = "/images/op1.png"; }}
                  className="step-full-img"
                />
              </div>
            </div>
            <div className="process-text-col">
              <div className="step-number">03</div>
              <h3>PICKLING</h3>
              <div className="step-divider"></div>
              <p>Pickling is a chemical process used to remove impurities and surface contaminants, such as rust, scale, and oxides, from the surface pipes. In the pickling process, the pipe is immersed in a solution of acid for a certain amount of time, which dissolves the impurities and leaves the surface clean and smooth.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="process-card reverse">
            <div className="process-img-col">
              <div className="img-zoom-wrapper">
                <img
                  src="/images/Screenshot_9-4-2024_221212_.jpeg"
                  alt="Polishing"
                  onError={(e) => { e.target.onerror = null; e.target.src = "/images/tubes.png"; }}
                  className="step-full-img"
                />
              </div>
            </div>
            <div className="process-text-col">
              <div className="step-number">04</div>
              <h3>POLISHING (INSIDE & OUTSIDE)</h3>
              <div className="step-divider"></div>
              <p>Polishing is a critical surface-finishing process that improves both the aesthetic appeal and performance of stainless steel pipes. We offer both internal (ID) and external (OD) polishing using advanced abrasive belts and polishing heads. Polishing the inner surface ensures a smooth, crevice-free path that prevents bacterial growth and material accumulation—critical for pharmaceutical, dairy, and food processing applications. External polishing provides a high-quality, reflective mirror or satin finish, enhancing corrosion resistance and aesthetic appeal for architectural and industrial uses.</p>
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

        /* --- PROCESS CARDS --- */
        .process-alternating-rows {
          display: flex;
          flex-direction: column;
          gap: 40px;
          margin-top: 30px;
          max-width: 1150px;
          margin-left: auto;
          margin-right: auto;
        }

        .process-card {
          display: flex;
          align-items: stretch;
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
          border: 1px solid rgba(0, 73, 133, 0.05);
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
        }

        .process-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0, 73, 133, 0.08);
          border-color: rgba(0, 73, 133, 0.15);
        }

        .process-card.reverse {
          flex-direction: row-reverse;
        }

        .process-img-col {
          flex: 1;
          width: 50%;
          position: relative;
          overflow: hidden;
          min-height: 380px;
        }

        .img-zoom-wrapper {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .step-full-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .process-card:hover .step-full-img {
          transform: scale(1.05);
        }

        .flowchart-step-img {
          object-fit: contain;
          height: auto;
          background: #fff;
          padding: 16px;
        }

        .process-text-col {
          flex: 1;
          width: 50%;
          padding: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }

        .step-number {
          position: absolute;
          top: 25px;
          right: 35px;
          font-family: var(--font-oswald);
          font-size: 4rem;
          font-weight: 700;
          color: rgba(0, 73, 133, 0.07);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        .process-card.reverse .step-number {
          right: auto;
          left: 35px;
        }

        .process-text-col h3 {
          font-family: var(--font-oswald);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--primary-blue);
          margin-bottom: 12px;
          letter-spacing: 0.5px;
        }

        .step-divider {
          width: 60px;
          height: 3px;
          background: var(--primary-blue);
          border-radius: 2px;
          margin-bottom: 20px;
        }

        .process-text-col p {
          font-family: var(--font-body);
          font-size: 1.05rem;
          line-height: 1.7;
          color: #4a5568;
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
          .process-card, .process-card.reverse {
            flex-direction: column !important;
            border-radius: 16px;
          }
          .process-img-col, .process-text-col {
            width: 100%;
          }
          .process-img-col {
            min-height: 280px;
            height: 280px;
          }
          .process-text-col {
            padding: 35px 25px;
            text-align: left;
          }
          .step-number {
            top: 20px;
            right: 25px;
            font-size: 3rem;
          }
          .process-card.reverse .step-number {
            left: auto;
            right: 25px;
          }
        }
      `}</style>
    </section>
  );
}
