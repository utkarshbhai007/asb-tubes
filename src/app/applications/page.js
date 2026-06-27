import ApplicationsList from "../../components/ApplicationsList";

export const metadata = {
  title: "Applications | ASB Tubes",
  description: "ASB Tubes serves various industries including Automotive, Dairy, Pharmaceuticals, and Heat Exchanger Machinery.",
};

export default function ApplicationsPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--light-bg)' }}>
      {/* Hero Section */}
      <div className="applications-hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content text-center">
          <h1 className="hero-title animate-pop visible">OUR APPLICATIONS</h1>
          <p className="hero-subtitle animate-pop visible" style={{ transitionDelay: '0.2s' }}>
            Delivering high-quality, precision-engineered stainless steel solutions across diverse global industries.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <ApplicationsList hideHeader={true} />
      </div>

    </div>
  );
}
