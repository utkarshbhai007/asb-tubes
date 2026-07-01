'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const events = [
  {
    id: 1,
    title: 'Stainless Steel World 2019',
    image: '/images/Mill-1_new.jpg'
  },
  {
    id: 2,
    title: 'Kintex Korea 2018',
    image: '/images/manufacturing_process.jpg'
  },
  {
    id: 3,
    title: 'MRAI, Goa 2018',
    image: '/images/Sectional.jpg'
  }
];

export default function EventsInsight() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // In a real carousel, next/prev would cycle through a larger array,
  // but for 3 items shown at once, it just stays static unless we add more.
  // We'll keep the buttons for aesthetics as requested.
  const handleNext = () => {
    // Logic for sliding next
  };

  const handlePrev = () => {
    // Logic for sliding prev
  };

  return (
    <section className="events-section">
      <div className="container">
        <div className="events-header">
          <h4 className="events-subtitle">Update @ASB Tubes</h4>
          <h2 className="events-title">EVENTS & INSIGHT</h2>
        </div>

        <div className="events-grid-wrapper">
          <button className="event-nav-btn prev" onClick={handlePrev}>
            &#8249;
          </button>
          
          <div className="events-grid">
            {events.map((event) => (
              <div className="event-card" key={event.id}>
                <div className="event-image-container">
                  <Image 
                    src={event.image} 
                    alt={event.title} 
                    fill 
                    className="event-img"
                  />
                </div>
                <h3 className="event-card-title">{event.title}</h3>
              </div>
            ))}
          </div>
          
          <button className="event-nav-btn next" onClick={handleNext}>
            &#8250;
          </button>
        </div>

        <div className="events-footer">
          <Link href="/events" className="btn-solid-blue">VIEW ALL</Link>
        </div>
      </div>
    </section>
  );
}
