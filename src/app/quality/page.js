import Certifications from "../../components/Certifications";
import Process from "../../components/Process";
import QualityTesting from "../../components/QualityTesting";

export const metadata = {
  title: "Stainless Steel Pipe Company | Quality & Certifications",
  description:
    "Trusted stainless steel pipe company with rigorous quality assurance — certifications, TPI approvals, and in-house testing for ASB Tubes SS pipes and tubes.",
};

export default function QualityPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--light-bg)' }}>
      {/* Hero Section */}
      <div className="quality-hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content text-center">
          <h1 className="hero-title animate-pop visible">Stainless Steel Pipe Company — Quality You Can Trust</h1>
          <p className="hero-subtitle animate-pop visible" style={{ transitionDelay: '0.2s' }}>
            Committed to continuous improvement and customer satisfaction by supplying premium quality stainless steel pipes and tubes conforming to global standards.
          </p>
        </div>
      </div>

      <Certifications />
      <Process />
      <QualityTesting />
    </div>
  );
}
