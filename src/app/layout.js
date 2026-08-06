import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL("https://www.asbtubes.com"),
  title: {
    default: "ASB Tubes | Stainless Steel Pipes & Tubes Manufacturer in India",
    template: "%s | ASB Tubes",
  },
  description:
    "ASB Tubes Private Limited is a premier manufacturer and global exporter of high-quality Stainless Steel Seamless & Welded Pipes, Tubes, Coils, and U-Tubes conforming to ASTM, DIN, and ASME international standards.",
  keywords: [
    "ASB Tubes",
    "stainless steel pipes manufacturer",
    "stainless steel tubes India",
    "seamless ss pipes",
    "welded stainless steel tubes",
    "heat exchanger tubes",
    "ASTM A249 tubes",
    "ASTM A213 seamless tubes",
    "ASTM A269 tubes",
    "stainless steel coils manufacturer",
    "industrial ss tubing",
    "Ahmedabad stainless steel tubes manufacturer",
  ],
  authors: [{ name: "ASB Tubes Private Limited", url: "https://www.asbtubes.com" }],
  creator: "ASB Tubes Private Limited",
  publisher: "ASB Tubes Private Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.asbtubes.com",
    siteName: "ASB Tubes Private Limited",
    title: "ASB Tubes | Stainless Steel Pipes & Tubes Manufacturer in India",
    description:
      "Premier manufacturer and global exporter of high-grade Stainless Steel Seamless & Welded Pipes, Tubes, Coils, and U-Tubes.",
    images: [
      {
        url: "/images/gallery_facility.png",
        width: 1200,
        height: 630,
        alt: "ASB Tubes Stainless Steel Manufacturing Plant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASB Tubes | Stainless Steel Pipes & Tubes Manufacturer",
    description:
      "Premier manufacturer & exporter of Stainless Steel Seamless & Welded Pipes, Tubes, and Coils.",
    images: ["/images/gallery_facility.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.asbtubes.com/#organization",
      "name": "ASB Tubes Private Limited",
      "url": "https://www.asbtubes.com",
      "logo": "https://www.asbtubes.com/images/logo.png",
      "image": "https://www.asbtubes.com/images/gallery_facility.png",
      "description":
        "Leading manufacturer and global exporter of high-quality Stainless Steel Seamless & Welded Pipes, Tubes, Coils, and U-Tubes.",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-76003-84545",
          "contactType": "sales",
          "email": "enquiry@asbtubes.com",
          "areaServed": "Worldwide",
          "availableLanguage": ["English", "Hindi", "Gujarati"]
        }
      ],
      "sameAs": [
        "https://www.facebook.com/ASB-TUBES-105792934569129",
        "https://www.instagram.com/asbtubes"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.asbtubes.com/#localbusiness",
      "name": "ASB Tubes Private Limited",
      "url": "https://www.asbtubes.com",
      "telephone": "+91-76003-84545",
      "email": "enquiry@asbtubes.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "504, Arizona Towers, Golden Park Society, Usmanpura",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "postalCode": "380014",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 23.4209546,
        "longitude": 72.4002346
      },
      "image": "https://www.asbtubes.com/images/gallery_facility.png",
      "priceRange": "$$"
    },
    {
      "@type": "WebSite",
      "@id": "https://www.asbtubes.com/#website",
      "url": "https://www.asbtubes.com",
      "name": "ASB Tubes",
      "publisher": {
        "@id": "https://www.asbtubes.com/#organization"
      }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
