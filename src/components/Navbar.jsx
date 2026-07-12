"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    // Check initial state
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="navbar" className={`navbar ${isScrolled ? "scrolled" : ""} ${isOpen ? "mobile-menu-active" : ""}`}>
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          <img
            src="/images/logo.png"
            alt="ASB Tubes Logo"
            className="brand-logo"
          />
        </Link>
        <ul className={`nav-links ${isOpen ? "mobile-open" : ""}`}>
          <li><Link href="/" onClick={() => setIsOpen(false)}>HOME</Link></li>
          <li><Link href="/product-range" onClick={() => setIsOpen(false)}>PRODUCT RANGE</Link></li>
          <li className="dropdown">
            <span className="dropdown-label">QUALITY <span className="arrow-icon">▼</span></span>
            <ul className="dropdown-menu">
              <li><Link href="/quality" onClick={() => setIsOpen(false)}>OVERVIEW</Link></li>
              <li><Link href="/quality#certificates" onClick={() => setIsOpen(false)}>CERTIFICATES</Link></li>
              <li><Link href="/quality#tpi-approvals" onClick={() => setIsOpen(false)}>TPI APPROVALS</Link></li>
              <li><Link href="/quality#flow-chart" onClick={() => setIsOpen(false)}>FLOW CHART</Link></li>
              <li><Link href="/quality#testing-inspection" onClick={() => setIsOpen(false)}>TESTING & INSPECTION</Link></li>
            </ul>
          </li>
          <li><Link href="/applications" onClick={() => setIsOpen(false)}>APPLICATIONS</Link></li>
          <li><Link href="/blog" onClick={() => setIsOpen(false)}>BLOG</Link></li>
          <li><Link href="/social-updates" onClick={() => setIsOpen(false)}>SOCIAL UPDATES</Link></li>
          <li className="dropdown">
            <span className="dropdown-label">RESOURCES <span className="arrow-icon">▼</span></span>
            <ul className="dropdown-menu">
              <li><Link href="/events" onClick={() => setIsOpen(false)}>EVENTS</Link></li>
              <li><Link href="/gallery" onClick={() => setIsOpen(false)}>GALLERY</Link></li>
            </ul>
          </li>
          <li><Link href="/contact-us" className="btn-solid-blue" onClick={() => setIsOpen(false)}>CONTACT US</Link></li>
        </ul>
        <button
          className="hamburger"
          id="hamburger"
          aria-label="Menu"
          onClick={toggleMenu}
          style={{ display: "flex" }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <style jsx>{`
        .navbar.mobile-menu-active {
          border-radius: 20px 20px 0 0 !important;
          border-bottom: none !important;
          background: #ffffff !important;
        }
        .dropdown-label {
          cursor: pointer;
          color: var(--dark-bg);
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: color 0.3s;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .arrow-icon {
          font-size: 0.7rem;
          transition: transform 0.3s ease;
          display: inline-block;
        }
        .dropdown:hover .arrow-icon {
          transform: rotate(180deg);
        }
        .dropdown {
          position: relative;
          display: flex;
          align-items: center;
        }
        .dropdown-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 10px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          min-width: 180px;
          list-style: none;
          padding: 8px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          z-index: 1000;
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 12px;
        }
        /* Invisible bridge so the mouse doesn't leave the hover area */
        .dropdown-menu::before {
          content: '';
          position: absolute;
          top: -10px;
          left: 0;
          width: 100%;
          height: 10px;
        }
        .dropdown-menu li {
          padding: 0;
          margin-bottom: 2px;
        }
        .dropdown-menu li:last-child {
          margin-bottom: 0;
        }
        .dropdown-menu li a {
          color: var(--dark-bg) !important;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          display: block;
          padding: 10px 15px;
          border-radius: 8px;
          transition: all 0.2s ease;
        }
        .dropdown-menu li a:hover {
          color: var(--primary-blue) !important;
          background-color: rgba(0, 73, 133, 0.08); /* light blue hover */
          transform: translateX(4px);
        }
        .dropdown:hover .dropdown-menu {
          display: block;
          animation: dropdownFade 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes dropdownFade {
          from {
            opacity: 0;
            transform: translate(-50%, 10px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        @media (min-width: 1025px) {
          .hamburger {
            display: none !important;
          }
          .nav-links {
            display: flex !important;
            flex-direction: row !important;
            position: static !important;
            background-color: transparent !important;
            padding: 0 !important;
          }
        }
        @media (min-width: 1025px) and (max-width: 1280px) {
          .nav-links {
            gap: 16px !important;
          }
          .nav-links :global(a), .dropdown-label {
            font-size: 0.82rem !important;
          }
        }
        @media (max-width: 1024px) {
          .nav-links.mobile-open {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: #ffffff; /* Solid white background to hide content below */
            border-bottom: 1px solid rgba(0, 0, 0, 0.08);
            border-left: 1px solid rgba(0, 0, 0, 0.08);
            border-right: 1px solid rgba(0, 0, 0, 0.08);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
            padding: 25px 0;
            text-align: center;
            border-radius: 0 0 20px 20px; /* Align flush with navbar */
            margin-top: 0px;
            z-index: 99999;
          }
          .nav-links.mobile-open li {
            margin: 12px 0;
          }
          .nav-links.mobile-open :global(a) {
            color: var(--dark-bg) !important;
            font-size: 1.05rem !important;
            font-weight: 700 !important;
            letter-spacing: 1px;
            text-shadow: none;
          }
          .nav-links.mobile-open :global(a):hover {
            color: var(--primary-blue) !important;
          }
          .nav-links.mobile-open .dropdown-label {
            color: var(--dark-bg) !important;
            font-size: 1.05rem !important;
            font-weight: 700 !important;
            justify-content: center;
          }
          .nav-links.mobile-open .btn-solid-blue {
            margin-left: 0;
            display: inline-block;
            color: var(--white) !important;
          }
          .dropdown {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            width: 100%;
          }
          .dropdown-menu {
            position: static;
            display: none;
            background-color: transparent;
            box-shadow: none;
            border: none;
            padding-left: 0;
          }
          .nav-links.mobile-open .dropdown-menu li a {
            color: var(--text-light) !important;
            font-size: 0.95rem !important;
            padding: 8px 15px;
          }
          .nav-links.mobile-open .dropdown-menu li a:hover {
            color: var(--primary-blue) !important;
            background-color: rgba(0, 73, 133, 0.05);
          }
          .dropdown:hover .dropdown-menu {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
