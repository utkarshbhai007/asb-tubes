import WeightCalculator from "../../components/WeightCalculator";

export const metadata = {
  title: "Stainless Steel Pipe & Tube Weight Calculator",
  description:
    "Calculate stainless steel round, square and rectangular pipe/tube weight online. ASB Tubes weight formula for OD, thickness and length in feet.",
};

export default function WeightCalculatorPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--light-bg)" }}>
      <div className="products-hero">
        <div className="container hero-content text-center">
          <h1 className="hero-title animate-pop visible">
            Stainless Steel Weight Calculator
          </h1>
          <p
            className="hero-subtitle animate-pop visible"
            style={{ transitionDelay: "0.2s" }}
          >
            Estimate weight for round, square and rectangular stainless steel
            pipes & tubes — OD, wall thickness and length in feet.
          </p>
        </div>
      </div>

      <section style={{ padding: "56px 0 72px" }}>
        <WeightCalculator />
      </section>
    </div>
  );
}
