'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const events = [
  { id: 1, image: '/images/e1.jpeg', alt: 'ASB Tubes Exhibition 1' },
  { id: 2, image: '/images/e2.jpeg', alt: 'ASB Tubes Exhibition 2' },
  { id: 3, image: '/images/e3.jpeg', alt: 'ASB Tubes Exhibition 3' },
  { id: 4, image: '/images/e4.jpeg', alt: 'ASB Tubes Exhibition 4' },
  { id: 5, image: '/images/e5.jpeg', alt: 'ASB Tubes Exhibition 5' },
  { id: 6, image: '/images/e6.jpeg', alt: 'ASB Tubes Exhibition 6' },
  { id: 7, image: '/images/e7.jpeg', alt: 'ASB Tubes Exhibition 7' },
];

export default function EventsInsight() {
  return (
    <section className="events-section">
      <div className="container">
        <div className="events-header">
          <div className="section-label-container justify-content-center" style={{ justifyContent: 'center' }}>
            <span className="label-line"></span>
            <h4 className="events-subtitle" style={{ marginBottom: 0 }}>Update @ASB Tubes</h4>
            <span className="label-line"></span>
          </div>
          <h2 className="events-title">EVENTS & INSIGHTS</h2>
        </div>
      </div>

      <div className="events-marquee-wrapper">
        <div className="events-marquee-track">
          <div className="events-marquee-group">
            {events.map((event) => (
              <div className="event-carousel-card" key={`g1-${event.id}`}>
                <div className="event-image-container">
                  <Image 
                    src={event.image} 
                    alt={event.alt} 
                    fill 
                    sizes="(max-width: 768px) 240px, 300px"
                    style={{ objectFit: 'cover' }}
                    className="event-img"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="events-marquee-group" aria-hidden="true">
            {events.map((event) => (
              <div className="event-carousel-card" key={`g2-${event.id}`}>
                <div className="event-image-container">
                  <Image 
                    src={event.image} 
                    alt={event.alt} 
                    fill 
                    sizes="(max-width: 768px) 240px, 300px"
                    style={{ objectFit: 'cover' }}
                    className="event-img"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="events-footer">
          <Link href="/events" className="btn-solid-blue">VIEW ALL</Link>
        </div>
      </div>

      <style jsx>{`
        .events-marquee-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 10px 0 25px;
          margin-bottom: 20px;
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }

        .events-marquee-track {
          display: flex;
          width: max-content;
          animation: eventsInfiniteScroll 30s linear infinite;
        }

        .events-marquee-wrapper:hover .events-marquee-track {
          animation-play-state: paused;
        }

        .events-marquee-group {
          display: flex;
          gap: 24px;
          padding-right: 24px;
          flex-shrink: 0;
        }

        .event-carousel-card {
          flex: 0 0 280px;
          width: 280px;
        }

        .event-image-container {
          position: relative;
          width: 100%;
          height: 360px;
          border-radius: 12px;
          overflow: hidden;
          background-color: #f0f0f0;
          border: 4px solid white;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .event-carousel-card:hover .event-image-container {
          transform: translateY(-6px);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
        }

        .event-img {
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .event-carousel-card:hover .event-img {
          transform: scale(1.05);
        }

        @keyframes eventsInfiniteScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .event-carousel-card {
            flex: 0 0 220px;
            width: 220px;
          }
          .event-image-container {
            height: 290px;
          }
          .events-marquee-group {
            gap: 16px;
            padding-right: 16px;
          }
          .events-marquee-track {
            animation-duration: 22s;
          }
        }
      `}</style>
    </section>
  );
}
