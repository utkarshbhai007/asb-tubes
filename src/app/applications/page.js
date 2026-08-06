import ApplicationsList from "../../components/ApplicationsList";

export const metadata = {
  title: "Industrial Applications | Stainless Steel Solutions | ASB Tubes",
  description:
    "ASB Tubes supplies precision stainless steel tubing and piping solutions for Automotive, Dairy, Pharmaceuticals, Heat Exchangers, Sugar Mills, and Chemical Processing industries.",
  keywords: [
    "ASB Tubes applications",
    "dairy tubing stainless steel",
    "pharmaceutical grade SS tubes",
    "heat exchanger tubes manufacturer",
    "automotive exhaust ss tubing",
    "sugar mill stainless steel pipes",
  ],
  alternates: {
    canonical: "/applications",
  },
  openGraph: {
    title: "Industrial Applications | ASB Tubes",
    description:
      "Delivering precision-engineered stainless steel piping solutions across global industries.",
    url: "https://www.asbtubes.com/applications",
    images: [
      {
        url: "/images/heat-exchanger.jpg",
        width: 1200,
        height: 630,
        alt: "ASB Tubes Heat Exchanger Applications",
      },
    ],
  },
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
