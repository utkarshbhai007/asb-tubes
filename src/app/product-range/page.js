import Products from "../../components/Products";
import ProductTables from "../../components/ProductTables";

export const metadata = {
  title: "Product Range | ASB Tubes",
  description: "Explore our premium stainless steel product range including pipes, tubes, coils, and sheets.",
};

export default function ProductRangePage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--light-bg)' }}>
      {/* Hero Section */}
      <div className="products-hero">
        <div className="container hero-content text-center">
          <h1 className="hero-title animate-pop visible">OUR PRODUCT RANGE</h1>
          <p className="hero-subtitle animate-pop visible" style={{ transitionDelay: '0.2s' }}>
            Discover our extensive range of high-grade stainless steel pipes, tubes, coils, and sheets engineered for global excellence.
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
