"use client";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function BrochureDownloadButton({ pdfUrl, className, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: ''
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
    
    // Trigger download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = "_blank";
    link.download = "ASB_Tubes_Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Close modal
    setIsOpen(false);
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      company: ''
    });
  };

  const modal = (
    <div className="modal-overlay">
      <div className="modal-content">
        <button 
          className="modal-close" 
          onClick={() => setIsOpen(false)}
          aria-label="Close"
        >
          &times;
        </button>
        <h3 className="modal-title">Download Brochure</h3>
        <p className="modal-subtitle">Please fill in your details to download our brochure.</p>
        
        <form onSubmit={handleSubmit} className="brochure-form">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input 
              type="text" 
              id="name"
              name="name" 
              required 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="John Doe"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input 
              type="email" 
              id="email"
              name="email" 
              required 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="john@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input 
              type="tel" 
              id="phone"
              name="phone" 
              required 
              value={formData.phone} 
              onChange={handleChange} 
              placeholder="+1 234 567 8900"
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company Name *</label>
            <input 
              type="text" 
              id="company"
              name="company" 
              required 
              value={formData.company} 
              onChange={handleChange} 
              placeholder="Acme Corp"
            />
          </div>
          <button type="submit" className="btn-submit">
            Submit & Download
          </button>
        </form>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2147483647;
          backdrop-filter: blur(5px);
        }
        .modal-content {
          background-color: white;
          padding: 40px;
          border-radius: 12px;
          width: 90%;
          max-width: 500px;
          position: relative;
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
          animation: slideUp 0.3s ease-out;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .modal-close {
          position: absolute;
          top: 15px;
          right: 20px;
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #666;
          line-height: 1;
        }
        .modal-close:hover {
          color: #000;
        }
        .modal-title {
          font-family: var(--font-heading);
          font-size: 24px;
          margin-bottom: 10px;
          color: #111;
          text-transform: uppercase;
        }
        .modal-subtitle {
          color: #666;
          margin-bottom: 25px;
          font-size: 15px;
        }
        .form-group {
          margin-bottom: 20px;
          text-align: left;
        }
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          font-size: 14px;
          color: #333;
        }
        .form-group input {
          width: 100%;
          padding: 12px 15px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 15px;
          transition: border-color 0.3s;
          font-family: inherit;
        }
        .form-group input:focus {
          outline: none;
          border-color: var(--primary-blue, #004985);
          box-shadow: 0 0 0 3px rgba(0, 73, 133, 0.1);
        }
        .btn-submit {
          width: 100%;
          padding: 14px;
          background-color: var(--primary-blue, #004985);
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s;
          margin-top: 10px;
        }
        .btn-submit:hover {
          background-color: var(--primary-blue-hover, #00335e);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)} 
        className={className}
        type="button"
      >
        {children}
      </button>

      {mounted && isOpen && createPortal(modal, document.body)}
    </>
  );
}
