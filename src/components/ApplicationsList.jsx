"use client";
import React, { useEffect, useRef } from "react";

export default function ApplicationsList({ hideHeader = false }) {
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

    const elements = sectionRef.current.querySelectorAll('.animate-pop');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const applications = [
    { 
      title: "SUGAR MILL MACHINERY", 
      desc: "High-grade stainless steel components designed to withstand rigorous milling processes and corrosive environments.",
      img: "/images/Screenshot_9-4-2024_221035_.jpeg", 
      size: "large" 
    },
    { 
      title: "WATER TREATMENT PLANT", 
      desc: "Reliable piping and filtration systems ensuring clean, safe water processing.",
      img: "/images/Screenshot_9-4-2024_221212_.jpeg", 
      size: "tall" 
    },
    { 
      title: "BEVERAGE MACHINERY", 
      desc: "Sanitary grade equipment for hygienic beverage production.",
      img: "/images/Screenshot_9-4-2024_221748_.jpeg", 
      size: "square" 
    },
    { 
      title: "PHARMACEUTICAL COMPANIES", 
      desc: "Precision-engineered machinery meeting strict medical and hygiene standards for pharmaceutical manufacturing.",
      img: "/images/Screenshot_9-4-2024_221938_.jpeg", 
      size: "wide" 
    },
    { 
      title: "FOOD MACHINERY", 
      desc: "Durable and easy-to-clean equipment for safe food handling.",
      img: "/images/Screenshot_9-4-2024_222024_.jpeg", 
      size: "square" 
    },
    { 
      title: "DAIRY/MILK MACHINERY", 
      desc: "Specialized systems built for pasteurization, storage, and processing of dairy products.",
      img: "/images/Screenshot_9-4-2024_222114_.jpeg", 
      size: "tall" 
    },
    { 
      title: "KITCHEN / BATHROOM ACCESSORIES", 
      desc: "Elegant and rust-resistant stainless steel accessories for modern residential and commercial spaces.",
      img: "/images/Screenshot_9-4-2024_222217_.jpeg", 
      size: "large" 
    },
    { 
      title: "HEAT EXCHANGER MACHINERY", 
      desc: "Optimal thermal conductivity systems designed for maximum energy efficiency.",
      img: "/images/heat-exchanger.jpg", 
      size: "wide" 
    },
    { 
      title: "AUTOMOTIVE INDUSTRY", 
      desc: "Robust automotive parts supporting heavy-duty performance.",
      img: "/images/Screenshot_9-4-2024_22243_.jpeg", 
      size: "square" 
    },
    { 
      title: "HOUSEWARE PRODUCTS", 
      desc: "Premium quality stainless steel for everyday household durability.",
      img: "/images/Screenshot_9-4-2024_222510_.jpeg", 
      size: "square" 
    },
    { 
      title: "DECORATIVE FURNITURE", 
      desc: "Sleek and aesthetic structural elements for contemporary furniture design.",
      img: "/images/Screenshot_9-4-2024_222559_.jpeg", 
      size: "wide" 
    },
    { 
      title: "STAIRCASE RAILING", 
      desc: "Sturdy and stylish railing solutions for safety and architectural elegance.",
      img: "/images/Screenshot_9-4-2024_222642_.jpeg", 
      size: "tall" 
    }
  ];

  return (
    <section className="applications-list-section" ref={sectionRef}>
      <div className="container">
        
        {!hideHeader && (
          <div className="section-header animate-pop">
            <h2 className="section-title">
              APPLICATIONS
            </h2>
          </div>
        )}

        <div className="apps-grid">
          {applications.map((app, index) => (
            <div key={index} className="app-card animate-pop" style={{ transitionDelay: `${(index % 3) * 0.1}s` }}>
              <div className="img-container">
                <img 
                  src={app.img} 
                  alt={app.title} 
                  onError={(e) => { e.target.onerror = null; e.target.src = "/images/manufacturing_process.jpg"; }} 
                  className="app-img" 
                />
              </div>
              <div className="app-content">
                <h3 className="app-title">{app.title}</h3>
                <p className="app-desc">{app.desc}</p>

              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .applications-list-section {
          padding: 80px 0;
          background: var(--light-bg);
          position: relative;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5%;
        }

        /* --- HEADER --- */
        .section-header {
          text-align: left;
          margin-bottom: 50px;
        }

        .section-title {
          font-size: 3rem;
          font-family: var(--font-oswald);
          font-weight: 700;
          color: var(--primary-blue);
          margin-bottom: 25px;
          text-transform: uppercase;
        }

        /* --- UNIFORM CARD GRID --- */
        .apps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .app-card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          display: flex;
          flex-direction: column;
          border: 1px solid #f0f0f0;
          cursor: pointer;
        }

        .app-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .img-container {
          width: 100%;
          height: 250px;
          overflow: hidden;
          position: relative;
        }

        .app-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .app-card:hover .app-img {
          transform: scale(1.1);
        }

        .app-content {
          padding: 30px 25px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .app-title {
          font-family: var(--font-oswald);
          color: #173f61;
          font-size: 1.4rem;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .app-desc {
          color: #555;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 20px;
          flex-grow: 1;
        }


        /* --- ANIMATIONS --- */
        .animate-pop {
          opacity: 0;
          transform: translateY(30px) scale(0.95);
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-pop.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .apps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2.5rem;
            text-align: center;
          }
        }
        
        @media (max-width: 600px) {
          .apps-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
