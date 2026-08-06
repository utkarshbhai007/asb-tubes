import Certifications from "../../components/Certifications";
import Process from "../../components/Process";
import QualityTesting from "../../components/QualityTesting";

export const metadata = {
  title: "Quality Assurance & ISO Certifications | ASB Tubes",
  description:
    "Discover ASB Tubes' quality assurance standards, ISO certifications, state-of-the-art testing facilities, and TIG welding manufacturing processes.",
  keywords: [
    "ASB Tubes quality assurance",
    "ISO 9001 certified steel manufacturer",
    "ISO 45001 certified tubes manufacturer",
    "bright annealing process",
    "hydrostatic testing tubes",
    "eddy current testing",
    "TPI approvals steel pipes",
  ],
  alternates: {
    canonical: "/quality",
  },
  openGraph: {
    title: "Quality Assurance & ISO Certifications | ASB Tubes",
    description:
      "Learn about our rigorous quality standards, ISO 9001:2015 certifications, and advanced non-destructive testing processes.",
    url: "https://www.asbtubes.com/quality",
    images: [
      {
        url: "/images/BRIGHT-ANNEALING-Image-(Quailty).png",
        width: 1200,
        height: 630,
        alt: "ASB Tubes Bright Annealing Quality Control",
      },
    ],
  },
};

export default function QualityPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--light-bg)' }}>
      {/* Hero Section */}
      <div className="quality-hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content text-center">
          <h1 className="hero-title animate-pop visible">Quality Assurance</h1>
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
