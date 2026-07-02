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
    { title: "PED Certificate", src: "https://asbtubes.com/wp-content/uploads/2024/06/PED-Certificate.jpg", backup: "https://asbtubes.com/wp-content/uploads/2020/09/manufacturing_process.jpg" },
    {
      title: "NFCSF – Approved Manufacturer",
      subtitle: "Stainless Steel Tubes for Sugar & Distillery Plant",
      isPdf: true,
      issuer: "National Federation of Cooperative Sugar Factories Ltd.",
      date: "20.05.2024",
      validUpto: "19th May, 2027",
    },
    {
      title: "BIS Certificate",
      subtitle: "IS 17876 – Stainless Steel Welded Pipes & Tubes",
      isPdf: true,
      issuer: "Bureau of Indian Standards",
      licenceNo: "CM/L-7200271004",
      date: "6th January, 2025",
      validUpto: "5th January, 2026",
    },
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
              {cert.isPdf ? (
                <div className="cert-doc-card">
                  <div className="cert-doc-icon-wrapper">
                    <svg className="cert-doc-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <rect x="8" y="2" width="38" height="50" rx="4" fill="#e8f0fe" stroke="#1a73e8" strokeWidth="2"/>
                      <rect x="16" y="54" width="38" height="8" rx="2" fill="#1a73e8" opacity="0.15"/>
                      <path d="M34 2v14h14" stroke="#1a73e8" strokeWidth="2" fill="none"/>
                      <rect x="14" y="22" width="22" height="2.5" rx="1.25" fill="#1a73e8" opacity="0.5"/>
                      <rect x="14" y="29" width="28" height="2.5" rx="1.25" fill="#1a73e8" opacity="0.4"/>
                      <rect x="14" y="36" width="18" height="2.5" rx="1.25" fill="#1a73e8" opacity="0.3"/>
                      <circle cx="49" cy="49" r="13" fill="#1a73e8"/>
                      <path d="M44 49l3.5 3.5L54 44" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="cert-doc-body">
                    <p className="cert-doc-issuer">{cert.issuer}</p>
                    <p className="cert-doc-subtitle">{cert.subtitle}</p>
                    <div className="cert-doc-meta">
                      {cert.licenceNo && <span className="cert-meta-tag">Licence: {cert.licenceNo}</span>}
                      <span className="cert-meta-tag">Issued: {cert.date}</span>
                      <span className="cert-meta-tag">Valid upto: {cert.validUpto}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="cert-image-wrapper">
                  <img
                    src={cert.src}
                    alt={cert.title}
                    onError={(e) => { e.target.onerror = null; e.target.src = cert.backup || cert.src; }}
                    className="c-img"
                  />
                </div>
              )}
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
          box-shadow: 0 15px 30px rgba(0, 73, 133, 0.2);
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

        /* --- DOCUMENT CERT CARD --- */
        .cert-doc-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          width: 100%;
          height: 350px;
          justify-content: center;
          padding: 10px 0;
        }

        .cert-doc-icon-wrapper {
          flex-shrink: 0;
        }

        .cert-doc-icon {
          width: 90px;
          height: 90px;
          filter: drop-shadow(0 4px 12px rgba(26, 115, 232, 0.25));
          transition: transform 0.4s ease;
        }

        .cert-card:hover .cert-doc-icon {
          transform: scale(1.08);
        }

        .cert-doc-body {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          text-align: center;
        }

        .cert-doc-issuer {
          font-size: 0.85rem;
          color: #888;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin: 0;
        }

        .cert-doc-subtitle {
          font-size: 1rem;
          color: #333;
          font-weight: 600;
          line-height: 1.5;
          margin: 0;
        }

        .cert-doc-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
          margin-top: 6px;
        }

        .cert-meta-tag {
          background: rgba(26, 115, 232, 0.08);
          color: var(--primary-blue, #1a73e8);
          font-size: 0.78rem;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 20px;
          border: 1px solid rgba(26, 115, 232, 0.2);
          white-space: nowrap;
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
