"use client";
import React, { useEffect, useRef } from "react";

export default function Certifications() {
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

    const elements = sectionRef.current.querySelectorAll('.animate-fade');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const certs = [
    { title: "ISO 9001:2015", src: "https://asbtubes.com/wp-content/uploads/2024/01/ASB-Tubes-Pvt-Ltd-Iso9001.jpg" },
    { title: "ISO 45001:2018", src: "https://asbtubes.com/wp-content/uploads/2024/01/ASB-Tubes-Pvt-Ltd-Iso45001.jpg" },
    { title: "ISO 14001:2015", src: "https://asbtubes.com/wp-content/uploads/2024/01/ASB-Tubes-Pvt-Ltd-Iso14001.jpg" },
    { title: "AD-2000-W0", src: "https://asbtubes.com/wp-content/uploads/2024/06/AD-2000-W0.jpg", backup: "https://asbtubes.com/wp-content/uploads/2020/09/manufacturing_process.jpg" },
    { title: "PED Certificate", src: "https://asbtubes.com/wp-content/uploads/2024/06/PED-Certificate.jpg", backup: "https://asbtubes.com/wp-content/uploads/2020/09/manufacturing_process.jpg" }
  ];

  return (
    <section className="certifications-section" ref={sectionRef}>
      <div className="container">
        
        <div className="quality-intro-wrapper animate-fade slide-up">
          <div className="quality-intro-text-col">
            <h2 className="section-title text-left">
              QUALITY
            </h2>
            <div className="title-underline-left"></div>
            <p className="quality-desc">ASB Tubes strives for total customer satisfaction by consistently supplying quality stainless steel pipes and tubes conforming to mutually agreed product specifications & delivery schedule.</p>
            <p className="quality-desc">We are committed to involve all employees for the continuous improvement of our product in quality & customer satisfaction & achieve leadership in the global market.</p>
          </div>
          
          <div className="quality-intro-list-col quality-card-blue">
            <h3 className="quality-list-title">We provide services with:</h3>
            <ul className="quality-services-list">
              <li><span className="text-white">»</span> Stated Quality</li>
              <li><span className="text-white">»</span> Timely Delivery</li>
              <li><span className="text-white">»</span> Quality Services at all Times</li>
            </ul>
          </div>
        </div>

        <div className="certs-grid">
          {certs.map((cert, idx) => (
            <div key={idx} className="cert-card animate-fade slide-up" style={{ transitionDelay: `${idx * 0.1}s` }}>
              <div className="cert-image-wrapper">
                <img 
                  src={cert.src} 
                  alt={cert.title} 
                  onError={(e) => { e.target.onerror = null; e.target.src = cert.backup || cert.src; }}
                  className="c-img" 
                />
              </div>
              <div className="cert-title">
                <h3>{cert.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Laboratory Section */}
        <div className="lab-section animate-fade slide-up">
          <div className="lab-image-col">
            <img src="https://asbtubes.com/wp-content/uploads/2024/01/ASB-TUBES-MOU-23-24.jpg" alt="In-house testing laboratory" className="lab-img" />
          </div>
          <div className="lab-text-col glass-card">
            <p className="lab-text">
              We have well equipped in-house testing laboratory. We ensure output quality by adopting the following procedure batch-wise.
            </p>
            <ul className="lab-list">
              <li>» Testing for Raw Material…</li>
              <li>» Process control method…</li>
              <li>» Finished products test…</li>
            </ul>
            <p className="lab-highlight">
              Our technically advanced Rectangular Pipes are intended to serve various industries such as Automobile & Ancillaries, Furniture, Railways, Engineering, etc.
            </p>
          </div>
        </div>

      </div>

      <style jsx>{`
        .certifications-section {
          padding: 100px 0;
          background: #ffffff;
          position: relative;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5%;
        }

        /* --- INTRO BLOCK --- */
        .quality-intro-wrapper {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 50px;
          align-items: center;
          margin-bottom: 70px;
          background: #fff;
          border-radius: 20px;
          padding: 50px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.03);
        }

        .section-title {
          font-size: 3.5rem;
          font-family: var(--font-oswald);
          font-weight: 700;
          color: #000;
          margin-bottom: 25px;
        }
        
        .section-title.text-left {
          text-align: left;
          margin-bottom: 15px;
        }

        .title-underline-left {
          width: 80px;
          height: 4px;
          background: var(--primary-blue);
          border-radius: 2px;
          margin-bottom: 30px;
        }

        .quality-desc {
          font-size: 1.15rem;
          color: #555;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .quality-card-blue {
          background-color: var(--primary-blue);
          box-shadow: 0 15px 30px rgba(10, 88, 202, 0.2);
          padding: 40px;
          border-radius: 16px;
        }

        .quality-list-title {
          font-family: var(--font-oswald);
          font-size: 1.6rem;
          color: #fff;
          margin-bottom: 25px;
          letter-spacing: 0.5px;
        }

        .quality-services-list {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }

        .quality-services-list li {
          margin-bottom: 15px;
          font-weight: 400;
          color: #fff;
          font-size: 1.15rem;
          display: flex;
          align-items: center;
          gap: 15px;
          border-bottom: 1px solid rgba(255,255,255,0.15);
          padding-bottom: 15px;
        }

        .quality-services-list li:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        .text-white {
          color: #fff;
          font-size: 1.4rem;
        }
        
        @media (max-width: 992px) {
          .quality-intro-wrapper {
            grid-template-columns: 1fr;
            padding: 30px;
          }
        }

        /* --- GRID --- */
        .certs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .cert-card {
          background: #fff;
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 20px;
          padding: 30px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: all 0.4s ease;
        }

        .cert-card:hover {
          transform: translateY(-10px);
          border-color: rgba(30, 144, 255, 0.3);
          background: rgba(30, 144, 255, 0.03);
          box-shadow: 0 20px 40px rgba(30, 144, 255, 0.1);
        }

        .cert-image-wrapper {
          width: 100%;
          height: 350px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
          border-radius: 10px;
          overflow: hidden;
          background: #f8f9fa;
        }

        .c-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          transition: transform 0.4s ease;
        }

        .cert-card:hover .c-img {
          transform: scale(1.05);
        }

        .cert-title h3 {
          font-family: var(--font-oswald);
          font-size: 1.5rem;
          color: #222;
          margin: 0;
          letter-spacing: 1px;
        }

        /* --- LAB SECTION --- */
        .lab-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          margin-top: 80px;
          align-items: center;
        }

        .lab-img {
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
        }

        .glass-card {
          background: #fff;
          border: 1px solid rgba(0, 0, 0, 0.05);
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .lab-text {
          font-size: 1.15rem;
          color: #444;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .lab-list {
          list-style: none;
          padding: 0;
          margin: 0 0 25px 0;
        }

        .lab-list li {
          color: var(--primary-blue);
          font-size: 1.15rem;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .lab-highlight {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.7;
          border-left: 3px solid var(--primary-blue);
          padding-left: 20px;
          font-style: italic;
        }

        @media (max-width: 992px) {
          .lab-section {
            grid-template-columns: 1fr;
          }
        }

        /* --- ANIMATIONS --- */
        .animate-fade {
          opacity: 0;
          transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .slide-up { transform: translateY(40px); }

        .animate-fade.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
