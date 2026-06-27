import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <video autoPlay loop muted playsInline className="hero-video" preload="auto">
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <span className="hero-tagline">Leading Stainless Steel Manufacturer In India</span>
        <h1 className="hero-title">WELCOME TO ASB TUBES</h1>
        <p className="hero-desc">
          Revolutionising the stainless steel industry for over 30 years, ASB Tubes is a leading manufacturer of premium pipes and tubes in India.
          <br /><br />
          Established with a vision for technological advancement, ASB Tubes is equipped with a state-of-the-art 48,000MT+ annual capacity, proudly serving clients across the globe.
        </p>
        <div className="hero-actions">
          <Link href="/contact-us" className="btn-solid-blue btn-large">CONTACT US</Link>
          <Link href="/product-range" className="btn-outline-blue btn-large">OUR PRODUCTS</Link>
        </div>
      </div>
    </section>
  );
}
