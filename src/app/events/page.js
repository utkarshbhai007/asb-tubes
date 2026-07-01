"use client";
import React from 'react';
import Image from 'next/image';

export default function EventsPage() {
  return (
    <div className="events-page">
      {/* Hero Section */}
      <section className="events-hero">
        <div className="container text-center">
          <span className="section-label">RESOURCES</span>
          <h1 className="hero-title">Events & Exhibitions</h1>
          <p className="hero-desc">
            Stay connected with ASB Tubes. Discover where we will be exhibiting next and review our past milestones and industry events.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="upcoming-events pattern-bg">
        <div className="container">
          <h2 className="section-title">Upcoming Events</h2>
          <div className="event-card featured">
            <div className="event-img-wrapper">
              <img src="/images/event_demo.png" alt="Stainless Steel World Expo" className="event-img" />
              <div className="event-date-badge">
                <span className="day">15</span>
                <span className="month">NOV</span>
                <span className="year">2026</span>
              </div>
            </div>
            <div className="event-content">
              <h3>Stainless Steel World Expo 2026</h3>
              <p className="location"><span className="icon">📍</span> Maastricht, Netherlands</p>
              <p className="desc">
                Join ASB Tubes at the premier international expo for stainless steel professionals. We will be showcasing our latest innovations in seamless and welded pipes, offering exclusive insights into our manufacturing capabilities and discussing future industry trends.
              </p>
              <ul className="event-highlights">
                <li>Live product demonstrations</li>
                <li>One-on-one meetings with our technical team</li>
                <li>Exclusive networking sessions</li>
              </ul>
              <button className="btn-solid-blue mt-4">Register Interest</button>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="past-events">
        <div className="container">
          <h2 className="section-title">Past Highlights</h2>
          <div className="events-grid">
            
            <div className="past-event-card">
              <div className="img-container">
                <img src="/images/event_past_1.png" alt="Industry Keynote" />
                <div className="overlay">
                  <span>View Details</span>
                </div>
              </div>
              <div className="card-body">
                <span className="date-tag">June 2025</span>
                <h4>Global Manufacturing Summit</h4>
                <p>Our CEO delivered a keynote on sustainable practices in steel manufacturing, highlighting our new energy-efficient production line.</p>
              </div>
            </div>

            <div className="past-event-card">
              <div className="img-container">
                <img src="/images/event_past_2.png" alt="Networking at Expo" />
                <div className="overlay">
                  <span>View Details</span>
                </div>
              </div>
              <div className="card-body">
                <span className="date-tag">March 2025</span>
                <h4>Tube & Pipe Fair India</h4>
                <p>A highly successful networking event where ASB Tubes connected with over 500 potential clients and showcased our premium coil range.</p>
              </div>
            </div>

            <div className="past-event-card">
              <div className="img-container">
                <img src="/images/gallery_team.png" alt="Annual Meet" />
                <div className="overlay">
                  <span>View Details</span>
                </div>
              </div>
              <div className="card-body">
                <span className="date-tag">December 2024</span>
                <h4>Annual Distributors Meet</h4>
                <p>We celebrated our incredible network of distributors, honoring top performers and outlining our vision for global expansion.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style jsx>{`
        .events-page {
          background-color: #f8fafc;
          color: #334155;
          min-height: 100vh;
        }

        .events-hero {
          padding: 160px 0 80px;
          background: linear-gradient(180deg, #f1f5f9 0%, #ffffff 100%);
          border-bottom: 1px solid #e2e8f0;
        }

        .section-label {
          color: var(--primary-blue);
          font-weight: 700;
          letter-spacing: 2px;
          font-size: 0.9rem;
          display: block;
          margin-bottom: 15px;
        }

        .hero-title {
          font-size: 3.5rem;
          color: #0f172a;
          margin-bottom: 25px;
          font-family: var(--font-oswald);
        }

        .hero-desc {
          font-size: 1.2rem;
          color: #64748b;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .upcoming-events {
          padding: 80px 0;
          background-color: #ffffff;
        }

        .section-title {
          font-size: 2.5rem;
          color: #0f172a;
          margin-bottom: 40px;
          text-align: center;
        }

        .event-card.featured {
          display: flex;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
          transition: transform 0.3s ease;
        }

        .event-card.featured:hover {
          transform: translateY(-5px);
          border-color: var(--primary-blue);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }

        .event-img-wrapper {
          flex: 1;
          position: relative;
          min-height: 350px;
        }

        .event-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .event-date-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          background: var(--primary-blue);
          color: var(--white);
          padding: 10px 15px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .event-date-badge .day { font-size: 1.8rem; font-weight: 800; display: block; line-height: 1; }
        .event-date-badge .month { font-size: 1rem; font-weight: 600; display: block; margin: 3px 0; }
        .event-date-badge .year { font-size: 0.8rem; opacity: 0.9; }

        .event-content {
          flex: 1.2;
          padding: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .event-content h3 {
          font-size: 2rem;
          color: #0f172a;
          margin-bottom: 15px;
        }

        .location {
          color: var(--primary-blue);
          font-weight: 600;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .event-content .desc {
          color: #475569;
          line-height: 1.7;
          margin-bottom: 25px;
        }

        .event-highlights {
          list-style: none;
          padding: 0;
          margin: 0 0 30px 0;
        }

        .event-highlights li {
          position: relative;
          padding-left: 25px;
          margin-bottom: 10px;
          color: #334155;
        }

        .event-highlights li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary-blue);
          font-weight: bold;
        }

        .past-events {
          padding: 80px 0 120px;
          background-color: #f8fafc;
        }

        .events-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .past-event-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0,0,0,0.02);
        }

        .past-event-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }

        .img-container {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .img-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .past-event-card:hover .img-container img {
          transform: scale(1.08);
        }

        .overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(255,255,255,0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .past-event-card:hover .overlay {
          opacity: 1;
        }

        .overlay span {
          background: var(--primary-blue);
          color: white;
          padding: 8px 20px;
          border-radius: 30px;
          font-weight: 600;
          font-size: 0.9rem;
          transform: translateY(20px);
          transition: transform 0.3s ease;
        }

        .past-event-card:hover .overlay span {
          transform: translateY(0);
        }

        .card-body {
          padding: 25px;
        }

        .date-tag {
          color: var(--primary-blue);
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 10px;
          display: block;
        }

        .card-body h4 {
          font-size: 1.3rem;
          color: #0f172a;
          margin-bottom: 15px;
          line-height: 1.4;
        }

        .card-body p {
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 992px) {
          .event-card.featured {
            flex-direction: column;
          }
          .event-img-wrapper {
            min-height: 250px;
          }
          .events-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 2.5rem; }
          .events-grid { grid-template-columns: 1fr; }
          .event-content { padding: 30px; }
        }
      `}</style>
    </div>
  );
}
