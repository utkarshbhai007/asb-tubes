"use client";
import React, { useState } from "react";

export default function QualityNavigation() {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { label: "Navigate to section...", id: "" },
    { label: "Certificates", id: "certificates" },
    { label: "TPI Approvals", id: "tpi-approvals" },
    { label: "Flow Chart", id: "flow-chart" },
    { label: "Testing & Inspection", id: "testing-inspection" }
  ];

  const handleSelectChange = (e) => {
    const id = e.target.value;
    setActiveSection(id);
    if (!id) return;

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90; // offset for the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="quality-nav-container">
      <div className="container quality-nav-wrapper">
        <label htmlFor="quality-section-select" className="quality-nav-label">
          Quick Navigation:
        </label>
        <div className="custom-select-wrapper">
          <select
            id="quality-section-select"
            value={activeSection}
            onChange={handleSelectChange}
            className="quality-select"
          >
            {sections.map((sec) => (
              <option key={sec.id} value={sec.id}>
                {sec.label}
              </option>
            ))}
          </select>
          <span className="custom-select-icon">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>

      <style jsx>{`
        .quality-nav-container {
          background: #ffffff;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          padding: 15px 0;
          position: sticky;
          top: 80px; /* Just below the main navigation */
          z-index: 10;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
        }

        .quality-nav-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
        }

        .quality-nav-label {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-dark, #2d3748);
        }

        .custom-select-wrapper {
          position: relative;
          min-width: 240px;
        }

        .quality-select {
          width: 100%;
          padding: 10px 40px 10px 16px;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--primary-blue);
          background-color: #f7fafc;
          border: 1.5px solid rgba(0, 73, 133, 0.25);
          border-radius: 8px;
          appearance: none;
          outline: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .quality-select:hover {
          border-color: var(--primary-blue);
          background-color: #ffffff;
          box-shadow: 0 4px 12px rgba(0, 73, 133, 0.08);
        }

        .quality-select:focus {
          border-color: var(--primary-blue);
          background-color: #ffffff;
          box-shadow: 0 0 0 3px rgba(0, 73, 133, 0.15);
        }

        .custom-select-icon {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--primary-blue);
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .custom-select-wrapper:hover .custom-select-icon {
          transform: translateY(-50%) translateY(1px);
        }

        @media (max-width: 576px) {
          .quality-nav-wrapper {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }
          .custom-select-wrapper {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
