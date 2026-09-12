import Products from "../../components/Products";
import ProductTables from "../../components/ProductTables";

export const metadata = {
  title: "SS Pipes, Tubes, Coils & Sheets",
  description:
    "Browse ASB Tubes stainless steel product range — SS ERW round and sectional pipes & tubes, square and rectangular tubes, coils, strips and sheets. Request grades, sizes and pricing.",
};

export default function ProductRangePage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--light-bg)' }}>
      {/* Hero Section */}
      <div className="products-hero">
        <div className="container hero-content text-center">
          <h1 className="hero-title animate-pop visible">Stainless Steel Pipes, Tubes & Sheets</h1>
          <p className="hero-subtitle animate-pop visible" style={{ transitionDelay: '0.2s' }}>
            High-grade SS ERW round, square and sectional pipes & tubes, plus coils and sheets — engineered for industrial performance. Enquire for grades, sizes and stainless steel sheet pricing.
          </p>
        </div>
      </div>

      <div style={{ padding: '60px 0' }}>
        <Products />
        <ProductTables />
      </div>
    </div>
  );
}
