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
    <nav id="navbar" className={`navbar ${isScrolled ? "scrolled" : ""}`}>
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
          <li><Link href="/quality" onClick={() => setIsOpen(false)}>QUALITY</Link></li>
          <li><Link href="/applications" onClick={() => setIsOpen(false)}>APPLICATIONS</Link></li>
          <li><Link href="/blog" onClick={() => setIsOpen(false)}>BLOG</Link></li>
          <li className="dropdown" style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{cursor: "pointer", color: "var(--dark-bg)", fontSize: "0.95rem", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase"}}>RESOURCES <span style={{fontSize: "0.7rem"}}>▼</span></span>
            <ul className="dropdown-menu">
              <li><Link href="/events" onClick={() => setIsOpen(false)}>EVENTS</Link></li>
              <li><Link href="/gallery" onClick={() => setIsOpen(false)}>GALLERY</Link></li>
            </ul>
          </li>
          <li><Link href="/contact-us" className="btn-solid-blue" onClick={() => setIsOpen(false)}>CONTACT</Link></li>
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
        .dropdown {
          position: relative;
        }
        .dropdown-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background-color: #ffffff;
          min-width: 200px;
          list-style: none;
          padding: 10px 0;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          z-index: 1000;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
        }
        .dropdown-menu li {
          padding: 0;
        }
        .dropdown-menu li a {
          color: var(--dark-bg) !important;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          display: block;
          padding: 10px 20px;
        }
        .dropdown-menu li a:hover {
          color: var(--primary-blue) !important;
          background-color: #f8fafc;
        }
        .dropdown:hover .dropdown-menu {
          display: block;
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
        @media (max-width: 1024px) {
          .nav-links.mobile-open {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(40, 45, 53, 0.95);
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            padding: 20px 0;
            text-align: center;
            border-radius: 20px;
            margin-top: 10px;
          }
          .nav-links.mobile-open li {
            margin: 15px 0;
          }
          .nav-links.mobile-open a {
            color: var(--white);
            font-size: 1.1rem;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
          }
          .nav-links.mobile-open .btn-solid-blue {
            margin-left: 0;
            display: inline-block;
            color: var(--white);
          }
          .dropdown-menu {
            position: static;
            display: none;
            background-color: transparent;
            box-shadow: none;
            border: none;
            padding-left: 20px;
          }
          .dropdown:hover .dropdown-menu {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
