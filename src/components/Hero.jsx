"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true); // Browsers require mute for autoplay

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="hero" id="home">
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted={isMuted} 
        playsInline 
        className="hero-video" 
        preload="auto"
      >
        <source src="/ASB Tubes 1.mp4" type="video/mp4" />
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
      
      {/* Video Controls */}
      <div className="video-controls">
        <button onClick={togglePlay} className="control-btn" aria-label={isPlaying ? "Pause Video" : "Play Video"}>
          {isPlaying ? (
            // Pause Icon
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          ) : (
            // Play Icon
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          )}
        </button>
        <button onClick={toggleMute} className="control-btn" aria-label={isMuted ? "Unmute Video" : "Mute Video"}>
          {isMuted ? (
            // Mute Icon
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <line x1="23" y1="9" x2="17" y2="15"></line>
              <line x1="17" y1="9" x2="23" y2="15"></line>
            </svg>
          ) : (
            // Volume On Icon
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
          )}
        </button>
      </div>

      <style jsx>{`
        .video-controls {
          position: absolute;
          bottom: 40px;
          right: 40px;
          display: flex;
          gap: 15px;
          z-index: 10;
        }
        .control-btn {
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          backdrop-filter: blur(5px);
          transition: all 0.3s ease;
        }
        .control-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }
        
        @media (max-width: 768px) {
          .video-controls {
            bottom: 20px;
            right: 20px;
          }
          .control-btn {
            width: 40px;
            height: 40px;
          }
          .control-btn svg {
            width: 18px;
            height: 18px;
          }
        }
      `}</style>
    </section>
  );
}
