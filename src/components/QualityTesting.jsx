"use client";
import React, { useEffect, useRef } from "react";

export default function QualityTesting() {
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

    const elements = sectionRef.current.querySelectorAll('.animate-scale');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const testingImages = [
    { title: "VISUAL INSPECTION", src: "/Testing%20Images/Visual-inspection.png" },
    { title: "FLATTENING TEST", src: "/Testing%20Images/Flattening-Test.png" },
    { title: "HARDNESS TEST", src: "/Testing%20Images/Hardness-Test.png" },
    { title: "TENSILE TEST (UTM)", src: "/Testing%20Images/Tensile-Test-(UTM).png" },
    { title: "HYDRO TEST", src: "/Testing%20Images/Hydro-Text.png" },
    { title: "EDDY CURRENT TEST", src: "/Testing%20Images/Eddy-Current-Test.png" },
    { title: "PMI TEST", src: "/Testing%20Images/PMI-Text.png" },
    { title: "ROUGHNESS TEST", src: "/Testing%20Images/roughness-Text.png" },
    { title: "REFERENCE IMAGE", src: "/Testing%20Images/Refence Image.png" },
  ];

  return (
    <section className="testing-section" ref={sectionRef}>
      <div className="container">
        
        <div className="section-header">
          <h2 className="section-title">
            Testing & Inspection Facilities
          </h2>
          <div className="title-underline"></div>
        </div>

        <div className="testing-grid">
          {testingImages.map((img, idx) => (
            <div key={idx} className="testing-card animate-scale" style={{ transitionDelay: `${idx * 0.1}s` }}>
              <div className="testing-img-wrapper">
                <img src={img.src} alt={img.title} className="t-img" />
              </div>
              <div className="testing-info">
                <h4>{img.title}</h4>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .testing-section {
          padding: 60px 0;
          background: #ffffff;
          position: relative;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5%;
        }

        .section-header {
          text-align: center;
          margin-bottom: 40px;
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
          font-family: var(--font-oswald);
          font-size: 2.25rem;
          color: #000;
          margin-bottom: 15px;
        }

        .text-blue { color: var(--primary-blue); }

        .title-underline {
          width: 80px;
          height: 4px;
          background: var(--primary-blue);
          border-radius: 2px;
          margin: 0 auto;
        }

        /* --- GRID --- */
        .testing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 25px;
        }

        .testing-card {
          background: #fff;
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .testing-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(30, 144, 255, 0.1);
          border-color: rgba(30, 144, 255, 0.3);
        }

        .testing-img-wrapper {
          width: 100%;
          height: 200px;
          overflow: hidden;
          background: #f8f9fa;
        }

        .t-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .testing-card:hover .t-img {
          transform: scale(1.05);
        }

        .testing-info {
          padding: 15px;
          text-align: center;
          border-top: 1px solid rgba(0,0,0,0.05);
        }

        .testing-info h4 {
          color: #222;
          font-family: var(--font-oswald);
          font-size: 1.15rem;
          margin: 0;
          letter-spacing: 1px;
        }

        /* --- ANIMATIONS --- */
        .animate-scale {
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-scale.visible {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
    </section>
  );
}
