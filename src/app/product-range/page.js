import Products from "../../components/Products";
import ProductTables from "../../components/ProductTables";

export const metadata = {
  title: "Product Range | Stainless Steel Pipes, Tubes, Coils & Sheets | ASB Tubes",
  description:
    "Explore our complete range of high-grade stainless steel products including seamless & welded pipes, U-tubes, heat exchanger tubes, coils, and sheets engineered to global standards.",
  keywords: [
    "ASB Tubes product range",
    "stainless steel seamless pipes",
    "stainless steel welded tubes",
    "SS U-tubes",
    "heat exchanger tubing",
    "stainless steel coils",
    "stainless steel sheets",
    "ASTM A249",
    "ASTM A213",
    "ASTM A269",
    "ASTM A312",
  ],
  alternates: {
    canonical: "/product-range",
  },
  openGraph: {
    title: "Stainless Steel Product Range | ASB Tubes",
    description:
      "Explore seamless and welded stainless steel pipes, tubes, coils, and sheets engineered for industrial excellence.",
    url: "https://www.asbtubes.com/product-range",
    images: [
      {
        url: "/images/tubes.png",
        width: 1200,
        height: 630,
        alt: "ASB Stainless Steel Tubes Product Range",
      },
    ],
  },
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
