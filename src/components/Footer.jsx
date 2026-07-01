"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Industrial Tech Divider */}
      <div className="tech-divider-container">
        <div className="tech-divider">
          <div className="tech-tag">
             <span>ASB TUBES</span>
          </div>
          <div className="tech-line-main"></div>
          <div className="tech-dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-grid">
          
          {/* Column 1: Brand & Info */}
          <div className="footer-col brand-col">
            <div className="nav-logo mb-3">
              <span className="logo-blue">ASB</span><span className="logo-white">TUBES</span>
              <span className="logo-tagline d-block text-white" style={{ fontSize: "10px", marginTop: "5px", letterSpacing: '2px' }}>PRIVATE LIMITED</span>
            </div>
            <p className="footer-desc">
              ASB Tubes is an ISO 9001:2015 certified company, manufacturing premium high-quality Stainless Steel Pipes, Tubes, Coils, and Sheets for diverse global industries.
            </p>
            <div className="iso-badge mt-3">
              <span className="badge-text">ISO 9001:2015 CERTIFIED</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col links-col">
            <h4 className="footer-heading">QUICK LINKS</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/#about">About Us</a></li>
              <li><a href="/product-range">Product Range</a></li>
              <li><a href="/applications">Applications</a></li>
              <li><a href="/quality">Quality Testing</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Corporate Office */}
          <div className="footer-col address-col">
            <h4 className="footer-heading">CORPORATE OFFICE</h4>
            <div className="contact-detail">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </span>
              <p>504, Arizona Towers, Golden Park Society, Usmanpura, Ahmedabad – 380014, Gujarat, INDIA.</p>
            </div>
            <div className="contact-detail">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </span>
              <p>+91 079 - 40059030<br />WhatsApp: +91 913 - 7482742</p>
            </div>
            <div className="contact-detail">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </span>
              <p><a href="mailto:enquiry@asbtubes.com">enquiry@asbtubes.com</a></p>
            </div>
          </div>

          {/* Column 4: Factory Address */}
          <div className="footer-col address-col">
            <h4 className="footer-heading">MANUFACTURING UNIT</h4>
            <div className="contact-detail">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
              </span>
              <p>Survey No. 65, Opp. Honest Hotel Sedhavi Road Vadpura, Taluka: Kadi, Dist. Mehsana – 382705, Gujarat, INDIA.</p>
            </div>
            <div className="contact-detail">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </span>
              <p>Mon - Sat: 9:00 AM to 6:00 PM<br />Sunday: Closed</p>
            </div>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-flex">
          <p>© {new Date().getFullYear()} ASB Tubes Private Limited. All Rights Reserved.</p>
          <p className="credit-text">Website Made by <a href="https://www.udaanworks.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-blue)", textDecoration: "none" }}>Udaan Works</a></p>
          <div className="social-links">
            <a href="https://www.facebook.com/ASB-TUBES-105792934569129" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://www.instagram.com/asbtubes" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: #0b1120;
          color: #e2e8f0;
          padding-top: 40px;
          border-top: 4px solid var(--primary-blue);
          font-family: var(--font-body);
        }
        
        /* --- Industrial Tech Divider --- */
        .tech-divider-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 5%;
          margin-bottom: 60px;
        }

        .tech-divider {
          display: flex;
          align-items: center;
          width: 100%;
        }

        .tech-tag {
          background-color: var(--primary-blue);
          color: var(--white);
          padding: 8px 45px 8px 25px;
          font-family: var(--font-oswald);
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: 3px;
          /* The sharp arrow point on the right */
          clip-path: polygon(0 0, calc(100% - 25px) 0, 100% 50%, calc(100% - 25px) 100%, 0 100%);
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
        }

        .tech-line-main {
          flex-grow: 1;
          height: 4px;
          background: linear-gradient(90deg, var(--primary-blue) 0%, rgba(56,189,248,0.2) 100%);
          margin-left: -20px;
          z-index: 1;
        }

        .tech-dots {
          display: flex;
          gap: 6px;
          margin-left: 15px;
        }

        .dot {
          width: 8px;
          height: 8px;
          background-color: #38bdf8;
          transform: skewX(-20deg);
        }
        .dot:nth-child(2) { opacity: 0.8; }
        .dot:nth-child(3) { opacity: 0.6; }
        .dot:nth-child(4) { opacity: 0.4; }
        .dot:nth-child(5) { opacity: 0.2; }
        /* ------------------------------- */

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.2fr 1.2fr;
          gap: 40px;
          padding-bottom: 60px;
        }

        .footer-desc {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #94a3b8;
          margin-bottom: 20px;
          max-width: 90%;
        }

        .iso-badge {
          display: inline-block;
          border: 1px solid rgba(255,255,255,0.2);
          padding: 8px 15px;
          border-radius: 4px;
          background: rgba(255,255,255,0.05);
        }
        
        .badge-text {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: #38bdf8;
        }

        .footer-heading {
          color: var(--white);
          font-size: 1.1rem;
          font-family: var(--font-oswald);
          letter-spacing: 1px;
          margin-bottom: 25px;
          position: relative;
          padding-bottom: 10px;
        }

        .footer-heading::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 40px;
          height: 2px;
          background-color: var(--primary-blue);
        }

        .links-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .links-col li {
          margin-bottom: 12px;
        }

        .links-col a {
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .links-col a:hover {
          color: #38bdf8;
          transform: translateX(5px);
        }

        .contact-detail {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 20px;
        }

        .contact-detail .icon {
          font-size: 1.2rem;
          margin-top: 2px;
        }

        .contact-detail p {
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.6;
          color: #94a3b8;
        }

        .contact-detail a {
          color: #38bdf8;
          text-decoration: none;
        }

        .contact-detail a:hover {
          text-decoration: underline;
        }

        .footer-bottom {
          background-color: #060913;
          padding: 25px 0;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .bottom-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .bottom-flex p {
          margin: 0;
          color: #64748b;
          font-size: 0.9rem;
        }

        .social-links {
          display: flex;
          gap: 20px;
        }

        .social-icon {
          color: #94a3b8;
          font-size: 0.9rem;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
          transition: color 0.3s;
        }

        .social-icon:hover {
          color: #38bdf8;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .bottom-flex {
            flex-direction: column;
            text-align: center;
          }
          .tech-divider-container {
            padding: 0 20px;
          }
          .tech-tag {
            font-size: 0.9rem;
            padding: 6px 30px 6px 15px;
          }
        }
      `}</style>
    </footer>
  );
}
