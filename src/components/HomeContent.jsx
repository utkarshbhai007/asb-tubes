"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Vmv from "./Vmv";
import BrochureDownloadButton from "./BrochureDownloadButton";

const AnimatedNumber = ({ value, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    let startTime;
    let animationFrame;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            // easeOutQuad curve for smooth deceleration
            const easeOut = (t) => t * (2 - t);
            const percentage = Math.min(progress / duration, 1);

            setCount(Math.floor(value * easeOut(percentage)));

            if (percentage < 1) {
              animationFrame = requestAnimationFrame(animate);
            }
          };
          animationFrame = requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [value, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}{suffix}</span>;
};

export default function HomeContent() {
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

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-content pattern-bg" ref={sectionRef}>
      {/* Welcome Section */}
      <section className="welcome-section animate-on-scroll slide-up">
        <div className="container">
          <div className="welcome-wrapper">
            <div className="welcome-bento-wrapper">
              <div className="bento-bg-pattern"></div>
              <div className="bento-left">
                <img src="/images/worker.png" alt="Worker" className="bento-img-tall" />
              </div>
              <div className="bento-right">
                <div className="bento-stats-box">
                  <div className="bento-stat-item">
                    <span className="bento-stat-num">30+</span>
                    <span className="bento-stat-text">Years Of Experience</span>
                  </div>
                  <div className="bento-stat-item">
                    <span className="bento-stat-num">200+</span>
                    <span className="bento-stat-text">Global Clients</span>
                  </div>
                </div>
                <div className="bento-bottom-img">
                  <img src="/images/tubes.png" alt="Steel Tubes" className="bento-img-wide" />
                </div>
              </div>
            </div>
            <div className="welcome-content-modern">
              <div className="section-badge">ABOUT US</div>
              <h2 className="welcome-title">
                WELCOME TO <span className="text-blue">ASB TUBES</span>
              </h2>
              <div className="welcome-divider"></div>
              <p className="welcome-desc-modern">
                <b>Welcome to ASB TUBES Private Limited</b>, where quality meets innovation in the world of Manufacturing of Stainless Steel Pipes & Tubes. With years of experience and a commitment to excellence, we pride ourselves on being a leading provider of premium Stainless Steel Pipe & Tubes for a diverse range of industries worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section-modern">
        <div className="container">
          <div className="stats-grid-modern">
            {/* Stat Card 1 */}
            <div className="stat-card-modern animate-on-scroll slide-up">
              <div className="stat-card-header">
                <h3 className="stat-number-modern text-blue"><AnimatedNumber value={30} suffix="+" /></h3>
                <span className="stat-label-modern">Years</span>
              </div>
              <div className="stat-card-body">
                <h4 className="stat-title-modern">Our Experience</h4>
                <p>Before ASB TUBES’s establishment in 2013, we initially focused on Manufacturing of Stainless Steel traditional Sheets. Since 1984, we have been established in Stainless Steel segment pan India for our esteemed quality products and A-tier services for everyone. From ASB TUBES we are prominently futuristic and technologically advanced for the coming years.</p>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="stat-card-modern animate-on-scroll slide-up" style={{ transitionDelay: "0.1s" }}>
              <div className="stat-card-header">
                <h3 className="stat-number-modern text-blue"><AnimatedNumber value={48000} suffix="+" duration={2500} /></h3>
                <span className="stat-label-modern">MT</span>
              </div>
              <div className="stat-card-body">
                <h4 className="stat-title-modern">Our Production</h4>
                <p>A state-of art 48,000MT+ Annually Installed Production Capacity helps us produce put together more than 200+ variants of product categories of – Stainless Steel Pipes / Tubes / Sheets & Coils. The manufacturing facility is well equipped with the latest on-line tube finishing equipment as per international standards and industrial requirements.</p>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="stat-card-modern animate-on-scroll slide-up" style={{ transitionDelay: "0.2s" }}>
              <div className="stat-card-header">
                <h3 className="stat-number-modern text-blue"><AnimatedNumber value={400} suffix="+" /></h3>
                <span className="stat-label-modern">People</span>
              </div>
              <div className="stat-card-body">
                <h4 className="stat-title-modern">Our Employees</h4>
                <p>ASB TUBES’s people make who we are today. We assure promising quality, timely delivery & competitive pricing; all this is only possible by our professional team of technicians and skillful workers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values Section */}
      <Vmv />

      {/* Global Presence Section */}
      <section className="global-presence-section animate-on-scroll slide-up">
        <div className="container">
          <div className="global-presence-content">
            <h2 className="global-presence-title text-blue">Global Presence</h2>
            <p className="global-presence-desc">
              Serving pan India since the beginning, we today deliver all across the Globe in 7+ Countries. Our Products comply with different<br />
              International standards and also customization to cater each and every customer’s requirements.
            </p>
            <div className="global-presence-map-container">
              <img src="/images/global_presence_map.png" alt="Global Presence Map" className="world-map-img" />

              <svg 
                className="map-connections" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none" 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 5, pointerEvents: 'none' }}
              >
                <defs>
                  <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--primary-blue)" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="var(--primary-blue)" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                {/* China */}
                <path d="M 70 53 Q 75 35 80 39" className="connection-line" />
                {/* Tokyo */}
                <path d="M 70 53 Q 79 30 88 42" className="connection-line" />
                {/* Singapore */}
                <path d="M 70 53 Q 77 50 78 63" className="connection-line" />
                {/* Dubai */}
                <path d="M 70 53 Q 67 45 64 50" className="connection-line" />
                {/* Frankfurt */}
                <path d="M 70 53 Q 61 25 52 35" className="connection-line" />
                {/* London */}
                <path d="M 70 53 Q 59 20 48 31" className="connection-line" />
                {/* New York */}
                <path d="M 70 53 Q 49 15 29 43" className="connection-line" />
                {/* Washington D.C. */}
                <path d="M 70 53 Q 47 20 25 47" className="connection-line" />
                {/* South Africa */}
                <path d="M 70 53 Q 55 60 55 75" className="connection-line" />
              </svg>

              {/* Center / India */}
              <div className="map-pin" style={{ top: '53%', left: '70%' }}>
                <div className="pin-dot"></div>
                <div className="pin-label">INDIA (HQ)</div>
              </div>
              
              {/* East Asia */}
              <div className="map-pin" style={{ top: '39%', left: '80%' }}>
                <div className="pin-dot"></div>
                <div className="pin-label">CHINA</div>
              </div>
              <div className="map-pin" style={{ top: '42%', left: '88%' }}>
                <div className="pin-dot"></div>
                <div className="pin-label">TOKYO</div>
              </div>
              
              {/* SE Asia */}
              <div className="map-pin" style={{ top: '63%', left: '78%' }}>
                <div className="pin-dot"></div>
                <div className="pin-label">SINGAPORE</div>
              </div>
              
              {/* Middle East */}
              <div className="map-pin" style={{ top: '50%', left: '64%' }}>
                <div className="pin-dot"></div>
                <div className="pin-label">DUBAI</div>
              </div>
              
              {/* Europe */}
              <div className="map-pin" style={{ top: '35%', left: '52%' }}>
                <div className="pin-dot"></div>
                <div className="pin-label">FRANKFURT</div>
              </div>
              <div className="map-pin" style={{ top: '31%', left: '48%' }}>
                <div className="pin-dot"></div>
                <div className="pin-label">LONDON</div>
              </div>
              
              {/* North America */}
              <div className="map-pin" style={{ top: '43%', left: '29%' }}>
                <div className="pin-dot"></div>
                <div className="pin-label">NEW YORK</div>
              </div>
              <div className="map-pin" style={{ top: '47%', left: '25%' }}>
                <div className="pin-dot"></div>
                <div className="pin-label">WASHINGTON D.C.</div>
              </div>
              
              {/* Africa */}
              <div className="map-pin" style={{ top: '75%', left: '55%' }}>
                <div className="pin-dot"></div>
                <div className="pin-label">SOUTH AFRICA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Our Company Section */}
      <section className="why-trust-section animate-on-scroll slide-up">
        <div className="container why-trust-grid">
          <div className="why-trust-left">
            <h2 className="why-trust-title">
              WHY SHOULD<br /><span>YOU BE A PART OF<br />ASB TUBES?</span>
            </h2>
            <div className="abstract-shape"></div>
          </div>

          <div className="why-trust-right">
            {/* Card 1 */}
            <div className="trust-card">
              <div className="trust-card-content">
                <h4>High Quality</h4>
                <p>We take extreme care to maintain high quality unchanged.</p>
              </div>
              <div className="trust-card-icon-area">
                <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
            </div>

            {/* Card 2 */}
            <div className="trust-card">
              <div className="trust-card-content">
                <h4>Prompt Delivery</h4>
                <p>We assure regular supply and prompt delivery.</p>
              </div>
              <div className="trust-card-icon-area">
                <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              </div>
            </div>

            {/* Card 3 */}
            <div className="trust-card">
              <div className="trust-card-content">
                <h4>Long-term Association</h4>
                <p>We are always committed to our clients and believe in the long-term association.</p>
              </div>
              <div className="trust-card-icon-area">
                <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>


      <style jsx>{`
        .home-content {
          padding: 40px 0 0;
        }
        .text-blue {
          color: var(--primary-blue);
        }
        .text-uppercase {
          text-transform: uppercase;
        }

        /* Animations */
        .animate-on-scroll {
          opacity: 0;
          transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .slide-up { transform: translateY(40px); }
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translate(0, 0);
        }

        /* --- Premium Welcome Section --- */
        .welcome-section {
          padding: 20px 0;
          background: linear-gradient(to bottom, #ffffff, #f8fafd);
          position: relative;
          overflow: hidden;
        }
        .welcome-wrapper {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: center;
        }
        .welcome-bento-wrapper {
          position: relative;
          display: flex;
          align-items: stretch;
          padding: 30px;
          min-height: 550px;
        }
        .bento-bg-pattern {
          position: absolute;
          top: 0; bottom: 0; left: 0; right: 0;
          background-image: radial-gradient(#d1d5db 2px, transparent 2px);
          background-size: 20px 20px;
          z-index: 0;
          opacity: 0.5;
        }
        .bento-left {
          flex: 0 0 55%;
          position: relative;
          z-index: 1;
          margin-right: -10%;
        }
        .bento-left::before {
          content: '';
          position: absolute;
          top: -2px; left: -2px;
          width: 50px; height: 50px;
          background: #101c38;
          clip-path: polygon(0 0, 100% 0, 0 100%);
          z-index: 2;
        }
        .bento-img-tall {
          width: 100%;
          height: 100%;
          min-height: 400px;
          object-fit: cover;
          border: 6px solid #fff;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .bento-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          z-index: 2;
          padding-top: 50px;
        }
        .bento-stats-box {
          background: var(--primary-blue);
          color: #fff;
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          gap: 30px;
          border: 6px solid #fff;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          z-index: 3;
          position: relative;
        }
        .bento-stats-box::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none;
        }
        .bento-stat-item {
          text-align: center;
          position: relative;
          z-index: 2;
        }
        .bento-stat-num {
          display: block;
          font-size: 4.5rem;
          font-weight: 800;
          font-family: var(--font-heading, sans-serif);
          line-height: 1;
          margin-bottom: 5px;
        }
        .bento-stat-text {
          font-size: 1.1rem;
          font-weight: 500;
          line-height: 1.2;
        }
        .bento-bottom-img {
          position: relative;
          z-index: 1;
          margin-left: -50px;
          margin-top: -20px;
        }
        .bento-img-wide {
          width: calc(100% + 50px);
          height: 250px;
          object-fit: cover;
          border: 6px solid #fff;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        .section-badge {
          display: inline-block;
          padding: 6px 16px;
          background: rgba(23, 107, 223, 0.1);
          color: var(--primary-blue);
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 2px;
          border-radius: 30px;
          margin-bottom: 20px;
        }
        .welcome-title {
          font-size: 3.5rem;
          font-family: var(--font-oswald, sans-serif);
          font-weight: 700;
          line-height: 1.2;
          color: #1a1a1a;
          margin-bottom: 25px;
        }
        .welcome-divider {
          width: 60px;
          height: 4px;
          background: var(--primary-blue);
          border-radius: 2px;
          margin-bottom: 30px;
        }
        .welcome-desc-modern {
          font-size: 1.15rem;
          line-height: 1.8;
          color: #555;
          font-weight: 300;
        }
        .welcome-desc-modern b {
          font-weight: 600;
          color: #222;
        }

        /* --- Premium Stats Section --- */
        .stats-section-modern {
          padding: 0 0 100px;
          background: #f8fafd;
        }
        .stats-grid-modern {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }
        .stat-card-modern {
          background: #ffffff;
          border-radius: 16px;
          padding: 35px 30px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.03);
          border: 1px solid rgba(23, 107, 223, 0.05);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          position: relative;
          overflow: hidden;
          height: 100%;
        }
        .stat-card-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: var(--primary-blue);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .stat-card-modern:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(23, 107, 223, 0.08);
        }
        .stat-card-modern:hover::before {
          transform: scaleX(1);
        }
        .stat-card-header {
          display: flex;
          align-items: baseline;
          margin-bottom: 15px;
          border-bottom: 1px solid #f0f4f8;
          padding-bottom: 15px;
        }
        .stat-number-modern {
          font-size: 2.75rem;
          font-weight: 800;
          font-family: var(--font-heading, sans-serif);
          line-height: 1;
          margin: 0;
          background: linear-gradient(135deg, var(--primary-blue), #0a35ca);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .stat-label-modern {
          font-size: 1rem;
          color: #888;
          font-weight: 600;
          margin-left: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .stat-title-modern {
          font-size: 1.25rem;
          font-weight: 700;
          color: #222;
          margin-bottom: 10px;
        }
        .stat-card-body p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #666;
          margin: 0;
        }

        /* --- Global Presence Section --- */
        .global-presence-section {
          padding: 50px 0 60px;
          background-color: #ffffff; /* White background matching image */
          text-align: center;
        }

        .global-presence-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .global-presence-title {
          font-size: 2.5rem;
          margin-bottom: 20px;
          font-family: var(--font-heading, sans-serif);
        }

        .global-presence-desc {
          font-size: 1.05rem;
          line-height: 1.6;
          color: #444;
          margin-bottom: 60px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .global-presence-map-container {
          position: relative;
          width: 100%;
          max-width: 1100px;
          margin: 40px auto 0;
        }

        .world-map-img {
          width: 100%;
          height: auto;
          display: block;
          opacity: 0.9;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.05));
          border-radius: 20px;
        }

        .map-connections {
          pointer-events: none;
        }

        .connection-line {
          fill: none;
          stroke: url(#line-gradient);
          stroke-width: 0.3;
          stroke-linecap: round;
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: drawLine 3s ease forwards;
        }

        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }

        .map-pin {
          position: absolute;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          z-index: 10;
        }

        .pin-dot {
          width: 14px;
          height: 14px;
          background-color: var(--primary-blue);
          border-radius: 50%;
          box-shadow: 0 0 0 4px rgba(0, 73, 133, 0.3), 0 0 15px rgba(0, 73, 133, 0.8);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .map-pin:hover .pin-dot {
          transform: scale(1.3);
          box-shadow: 0 0 0 6px rgba(0, 73, 133, 0.4), 0 0 20px rgba(0, 73, 133, 1);
        }

        .pin-label {
          position: absolute;
          top: 18px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(4px);
          color: var(--dark-bg);
          font-family: var(--font-heading);
          font-size: 0.7rem;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
          white-space: nowrap;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          pointer-events: none;
          transition: all 0.3s ease;
        }

        .map-pin:hover .pin-label {
          background: white;
          color: var(--primary-blue);
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
          transform: scale(1.1);
          z-index: 20;
        }

        .map-img {
          max-width: 100%;
          height: auto;
          opacity: 0.9;
        }

        /* --- Why Trust Section (New Design) --- */
        .why-trust-section {
          padding: 60px 0;
          background-color: #f4f7fa; /* Light UI background */
          position: relative;
          overflow: hidden;
        }

        .why-trust-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 40px;
          align-items: center;
        }

        .why-trust-left {
          position: relative;
          z-index: 2;
        }

        .why-trust-title {
          font-size: 2.75rem;
          font-family: var(--font-oswald);
          line-height: 1.2;
          color: #222;
          margin-bottom: 15px;
          text-transform: uppercase;
        }

        .why-trust-title span {
          color: var(--primary-blue);
          font-weight: 700;
        }

        .why-trust-desc {
          font-size: 1rem;
          color: #555;
          max-width: 450px;
          line-height: 1.6;
        }

        /* Abstract shape decoration */
        .abstract-shape {
          position: absolute;
          bottom: -150px;
          left: -100px;
          width: 300px;
          height: 300px;
          background: linear-gradient(45deg, var(--primary-blue), #8bb3e5);
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          z-index: -1;
          opacity: 0.15;
          animation: morph 8s ease-in-out infinite;
        }

        @keyframes morph {
          0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          50% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
        }

        .why-trust-right {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .trust-card {
          background-color: #173f61; /* Dark blue from their UI */
          border-radius: 12px;
          display: flex;
          justify-content: space-between;
          align-items: stretch;
          overflow: hidden;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          transition: transform 0.3s ease;
          position: relative;
        }

        .trust-card:hover {
          transform: translateX(-10px);
        }

        .trust-card-content {
          padding: 25px 30px;
          flex: 1;
        }

        .trust-card-content h4 {
          color: #fff;
          font-size: 1.25rem;
          margin-bottom: 8px;
          font-family: var(--font-heading);
        }

        .trust-card-content p {
          color: #d1d5db;
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0;
        }

        /* The right side cut-out with icon */
        .trust-card-icon-area {
          width: 100px;
          background: #fff;
          border-radius: 50% 0 0 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-left: 15px;
          transform: scale(1.1) translateX(15px); /* Creates the cut-out overlap effect */
          flex-shrink: 0;
        }

        .trust-icon {
          color: var(--primary-blue);
          width: 35px;
          height: 35px;
          transform: translateX(-5px); /* Adjust icon visually inside the curve */
        }

        /* --- New CTA Section Design --- */
        .new-cta-section {
          padding: 40px 0;
          background: linear-gradient(135deg, var(--primary-blue) 0%, #0a35ca 100%);
          color: #fff;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }

        .new-cta-section h2 {
          font-size: 2rem;
          font-family: var(--font-oswald);
          font-weight: 700;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .new-cta-section p {
          font-size: 1rem;
          max-width: 600px;
          opacity: 0.9;
          margin: 0 0 15px 0;
          line-height: 1.6;
        }

        .btn-cta-white {
          display: inline-block;
          background: #fff;
          color: var(--primary-blue);
          padding: 14px 35px;
          border-radius: 40px;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          box-shadow: 0 8px 15px rgba(0,0,0,0.15);
          transition: all 0.3s ease;
        }

        .btn-cta-white:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.3);
          background: #f0f0f0;
        }

        /* Floating circles in CTA */
        .cta-circle-1 {
          position: absolute;
          top: -50px; left: 10%;
          width: 200px; height: 200px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
        }
        .cta-circle-2 {
          position: absolute;
          bottom: -100px; right: 5%;
          width: 350px; height: 350px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
        }

        /* --- Responsive --- */
        @media (max-width: 1024px) {
          .stats-grid-modern {
            grid-template-columns: repeat(2, 1fr);
          }
          .why-trust-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .why-trust-left {
            text-align: center;
          }
          .why-trust-desc {
            margin: 0 auto;
          }
          .abstract-shape {
            left: 50%;
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .home-content { padding: 40px 0 0; }
          
          /* Welcome Responsive */
          .welcome-wrapper {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }
          .welcome-bento-wrapper {
            flex-direction: column;
            padding: 10px;
          }
          .bento-left {
            margin-right: 0;
            flex: 1 1 auto;
          }
          .bento-right {
            padding-top: 20px;
          }
          .bento-bottom-img {
            margin-left: 0;
            margin-top: 20px;
          }
          .bento-img-wide {
            width: 100%;
          }
          .welcome-title {
            font-size: 2.5rem;
          }
          .welcome-divider {
            margin: 0 auto 30px;
          }
          
          /* Stats Responsive */
          .stats-grid-modern {
            grid-template-columns: 1fr;
          }
          .stat-card-modern {
            padding: 40px 30px;
          }
          .trust-card {
            flex-direction: column;
          }
          .trust-card-icon-area {
            width: 100%;
            height: 100px;
            border-radius: 0 0 20px 20px;
            margin: 0;
            transform: none;
          }
          .trust-icon {
            transform: none;
          }
          .new-cta-section h2 {
            font-size: 2rem;
          }
          .new-cta-section p {
            font-size: 1.1rem;
          }
          .why-trust-title {
            font-size: 3rem;
          }
        }
      `}</style>
    </div>
  );
}
