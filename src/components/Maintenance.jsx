"use client";
import React, { useState, useEffect } from "react";
import "./Maintenance.css";

export default function Maintenance() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Dynamic Countdown Timer (default target set to 4 hours from now)
  const [timeLeft, setTimeLeft] = useState({
    hours: "03",
    minutes: "45",
    seconds: "00",
  });

  useEffect(() => {
    // Set target 4 hours from initial render for live counting effect
    const targetTime = new Date().getTime() + (3 * 3600 + 45 * 60) * 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ hours: "00", minutes: "00", seconds: "00" });
      } else {
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="maintenance-wrapper">
      <div className="maintenance-bg-glow"></div>

      <div className="maintenance-card">
        {/* Brand Logo */}
        <div style={{ marginBottom: "20px" }}>
          <img
            src="/images/logo.png"
            alt="ASB TUBES Private Limited"
            style={{ maxHeight: "65px", width: "auto", objectFit: "contain" }}
          />
        </div>

        {/* Status Badge */}
        <div className="maintenance-brand-badge">
          <span className="status-dot"></span>
          Scheduled System Upgrade
        </div>

        {/* Animated Maintenance Gear Icon */}
        <div className="maintenance-icon-box">
          <svg
            className="gear-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="maintenance-title">
          WE SITE IS UNDER <span>MAINTENANCE</span>
        </h1>

        <p className="maintenance-subtitle">
          We are currently upgrading the <strong>ASB TUBES</strong> digital platform to enhance performance and launch our latest high-grade stainless steel product catalog. We appreciate your patience and will be back online very soon.
        </p>

        {/* Countdown Timer */}
        <div className="countdown-container">
          <div className="countdown-box">
            <div className="countdown-number">{timeLeft.hours}</div>
            <div className="countdown-label">Hours</div>
          </div>
          <div className="countdown-box">
            <div className="countdown-number">{timeLeft.minutes}</div>
            <div className="countdown-label">Minutes</div>
          </div>
          <div className="countdown-box">
            <div className="countdown-number">{timeLeft.seconds}</div>
            <div className="countdown-label">Seconds</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-section">
          <div className="progress-header">
            <span>Upgrade Status</span>
            <span>78% Completed</span>
          </div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill"></div>
          </div>
        </div>

        {/* Email Notification Form */}
        <form onSubmit={handleSubscribe} className="notify-box">
          <input
            type="email"
            placeholder="Enter your email to get notified when live..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="notify-input"
            required
          />
          <button type="submit" className="notify-btn">
            Notify Me
          </button>
        </form>
        {subscribed && (
          <p className="notify-success">
            ✓ Thank you! You will be notified as soon as our site goes live.
          </p>
        )}

        {/* Direct Contact Cards */}
        <div style={{ marginTop: "40px" }}>
          <h3 style={{ fontSize: "1.1rem", marginBottom: "20px", color: "#e2e8f0", textTransform: "uppercase", letterSpacing: "1px" }}>
            Need Immediate Assistance or Sales Support?
          </h3>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">
                <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="contact-info">
                <h4>Phone / Sales</h4>
                <a href="tel:+919898000000">+91 98980 00000</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="contact-info">
                <h4>Email Us</h4>
                <a href="mailto:info@asbtubes.com">info@asbtubes.com</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon" style={{ background: "rgba(34, 197, 94, 0.2)", color: "#4ade80" }}>
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.143 4.174 4.286-1.124z" />
                </svg>
              </div>
              <div className="contact-info">
                <h4>WhatsApp</h4>
                <a href="https://wa.me/919898000000" target="_blank" rel="noopener noreferrer">
                  Chat Instantly
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Company Product Highlights */}
        <div className="highlights-section">
          <div className="highlights-title">ASB TUBES PRIVATE LIMITED — LEADING MANUFACTURER</div>
          <div className="highlights-chips">
            <span className="chip">Stainless Steel Seamless Pipes</span>
            <span className="chip">Welded Tubes & Pipes</span>
            <span className="chip">Heat Exchanger Tubes</span>
            <span className="chip">High Nickel Alloys</span>
            <span className="chip">ISO & TPI Approved Quality</span>
          </div>
        </div>
      </div>
    </div>
  );
}
