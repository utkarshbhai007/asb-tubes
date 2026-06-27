"use client";
import React, { useEffect, useRef } from "react";

export default function Products() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.animate-product');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const productData = [
    {
      id: 1,
      title: "SS ERW ROUND PIPES & TUBES",
      specs: [
        "Grade: 200 – J1 / J2 / J3 / J4, 300 & 400 Series",
        "Thickness: 0.2mm to 10 mm",
        "Size: 8mm to 323.85 mm",
        "Surface Finish: 2B / Hairline / Mirror",
        "Standards: ASTM A554, A249, A269, A270, A312 and other company specifications.",
        "Process: Annealing / Pickling / I&O Polishing"
      ],
      image: "/images/round1.jpeg",
      reverse: false
    },
    {
      id: 2,
      title: "SS ERW SECTIONAL PIPES & TUBES",
      specs: [
        "Grade: 200 – J1 / J2 / J3 / J4, 300 & 400 Series",
        "Thickness: 0.2mm to 8.0 mm",
        "Size: 10x10 to 150x150 mm",
        "Surface Finish: 2B / Hairline / Mirror",
        "Standards: ASTM A554, A249, A269, A270, A312 and other company specifications.",
        "Process: Annealing / Pickling / I&O Polishing"
      ],
      image: "/images/Sectional.jpg",
      reverse: true
    },
    {
      id: 3,
      title: "SS ERW SLOTTED PIPES & TUBES",
      specs: [
        "Grade: 200 & 300 series",
        "Thickness: 0.6 to 2mm",
        "Size: As per requirement, 60x40mm (Rectangle), 40x40 & 50x50mm (Square)",
        "Slot Size: 15x15mm",
        "Finish: 2B / Hairline / Mirror",
        "Length: As per requirement"
      ],
      image: "/images/slot11-scaled.jpeg", // Using proxy image
      reverse: false
    },
    {
      id: 4,
      title: "SS COILS & STRIPS",
      specs: [
        "Grade: 200 & 300 Series.",
        "Thickness: 0.24 to 4.0 mm",
        "Finish: 2B / Hairline / Mirror",
        "Slitting: As per Requirement"
      ],
      image: "/images/unnamed-21.jpg",
      reverse: true
    },
    {
      id: 5,
      title: "SS SHEETS",
      specs: [
        "Grade: 200 & 300 Series",
        "Thickness: 0.3 to 5 mm",
        "Size: 1200mm X 2500mm, 1500mm x 3000mm, As Per Requirements",
        "Surface Finish: 2B / BA / No.4 / No.8"
      ],
      image: "/images/SS-SHEETS_Image1-1.jpg",
      reverse: false
    }
  ];

  return (
    <section id="products" className="products-layout-section" ref={sectionRef}>
      <div className="container">


        <div className="products-grid">
          {productData.map((item) => (
            <div key={item.id} className={`product-row animate-product ${item.reverse ? 'slide-in-right' : 'slide-in-left'} ${item.reverse ? 'reverse' : ''}`}>
              <div className="product-image-col">
                <img src={item.image} alt={item.title} className="product-main-img" />
              </div>
              <div className="product-info-col">
                <h3 className="product-title">{item.title}</h3>
                <div className="product-specs">
                  {item.specs.map((spec, index) => (
                    <p key={index}>• {spec}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .products-layout-section {
          padding: 40px 0 80px 0;
          background-color: transparent;
          overflow: hidden;
        }

        .products-grid {
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        .product-row {
          display: flex;
          align-items: center;
          gap: 50px;
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          border: 1px solid #f0f0f0;
        }

        .product-row:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }

        .product-row.reverse {
          flex-direction: row-reverse;
        }

        .product-image-col {
          flex: 1;
          height: 400px;
          overflow: hidden;
          position: relative;
        }

        .product-main-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .product-row:hover .product-main-img {
          transform: scale(1.08);
        }

        .product-info-col {
          flex: 1;
          padding: 40px 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .product-title {
          font-size: 2.2rem;
          color: var(--primary-blue);
          margin-bottom: 25px;
          font-family: var(--font-oswald);
          letter-spacing: 1px;
        }

        .product-specs {
          color: #555;
          font-size: 1.05rem;
          line-height: 1.8;
          font-weight: 400;
        }

        .product-specs p {
          margin-bottom: 12px;
          position: relative;
          padding-left: 25px;
        }

        .product-specs p::before {
          content: '✔';
          position: absolute;
          left: 0;
          color: var(--primary-blue);
          font-size: 0.9rem;
        }

        /* Animations */
        .animate-product {
          opacity: 0;
          transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .fade-in-up { transform: translateY(40px); }
        .slide-in-left { transform: translateX(-60px); }
        .slide-in-right { transform: translateX(60px); }

        .animate-product.visible {
          opacity: 1;
          transform: translate(0, 0);
        }

        /* Responsive */
        @media (max-width: 992px) {
          .product-row, .product-row.reverse {
            flex-direction: column;
            gap: 0;
          }
          .product-image-col {
            height: 300px;
            width: 100%;
          }
          .product-info-col {
            padding: 40px 30px;
          }
        }
      `}</style>
    </section>
  );
}
