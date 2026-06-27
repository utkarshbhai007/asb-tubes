import React from "react";

export default function About() {
  return (
    <section id="about" className="about-section pattern-bg">
      <div className="container about-grid">
        <div className="about-text">
          <div className="section-label-container">
            <span className="section-label">ABOUT US</span>
            <span className="label-line"></span>
          </div>
          <h2 className="section-title">
            ABOUT US
          </h2>
          <div className="about-desc">
            <p>
              We at ASB Tubes have a state-of-art production facility with experience in Stainless Steel Industry for 30 years.<br /><br />
              We are constantly improving in the Stainless Steel Pipe industry with mills from leading machine manufacturers from the world. We also assure promising quality, timely delivery & competitive pricing; all this is possible by our professional team of technicians and skillful workers.
            </p>
            <p>
              At ASB Tubes, we are always looking forward to catering the ever-expanding markets and their needs
            </p>
          </div>
          <a href="#about" className="btn-solid-blue mt-4">LEARN ABOUT US</a>
        </div>
        <div className="about-visuals">
          <div className="visuals-left" style={{ width: "100%" }}>
            <img
              src="https://asbtubes.com/wp-content/uploads/2021/06/ABS-Tubes-W-ISO-1.png"
              alt="ASB Tubes Manufacturing Mill"
              className="img-main"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
