'use client';
import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'asb-home-announcement-v1';
const SCROLL_THRESHOLD = 80;
const DELAY_MS = 10_000;
const RESET_MS = 24 * 60 * 60 * 1000; // 24 hours
const IMAGE_SRC = '/images/image.png';

function wasDismissedRecently() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return false;

  const dismissedAt = Number(raw);
  if (!Number.isFinite(dismissedAt)) {
    // Migrate legacy "1" flag → treat as dismissed now
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
    return true;
  }

  return Date.now() - dismissedAt < RESET_MS;
}

export default function AnnouncementPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (wasDismissedRecently()) return;

    let timeoutId = null;
    let armed = false;

    const onScroll = () => {
      if (armed || window.scrollY < SCROLL_THRESHOLD) return;

      armed = true;
      window.removeEventListener('scroll', onScroll);

      timeoutId = setTimeout(() => {
        setOpen(true);
      }, DELAY_MS);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') dismiss();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="announcement-overlay" role="presentation">
      <button
        type="button"
        aria-label="Close announcement"
        className="announcement-backdrop"
        onClick={dismiss}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Upcoming event announcement"
        className="announcement-dialog"
      >
        <div className="announcement-card">
          <img
            src={IMAGE_SRC}
            alt="Visit ASB Tubes at PMEC India 2026"
            className="announcement-image"
          />
        </div>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="announcement-close"
        >
          ×
        </button>
      </div>

      <style jsx>{`
        .announcement-overlay {
          position: fixed;
          inset: 0;
          z-index: 2147483646;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }

        .announcement-backdrop {
          position: absolute;
          inset: 0;
          border: none;
          padding: 0;
          margin: 0;
          background: rgba(0, 0, 0, 0.7);
          cursor: pointer;
        }

        .announcement-dialog {
          position: relative;
          width: 100%;
          max-width: 520px;
          z-index: 1;
          animation: announcementIn 0.3s ease-out;
        }

        .announcement-card {
          border-radius: 12px;
          border: 2px solid #fff;
          background: #fff;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
          overflow: hidden;
        }

        .announcement-image {
          display: block;
          width: 100%;
          height: auto;
          max-height: 70vh;
          object-fit: contain;
        }

        .announcement-close {
          position: absolute;
          top: -10px;
          right: -10px;
          z-index: 2;
          width: 32px;
          height: 32px;
          border: none;
          border-radius: 50%;
          background: var(--primary-blue, #173f61);
          color: #fff;
          font-size: 22px;
          line-height: 1;
          cursor: pointer;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }

        .announcement-close:hover {
          filter: brightness(1.1);
        }

        @keyframes announcementIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 576px) {
          .announcement-dialog {
            max-width: 100%;
          }

          .announcement-close {
            top: -8px;
            right: -4px;
          }
        }
      `}</style>
    </div>
  );
}
