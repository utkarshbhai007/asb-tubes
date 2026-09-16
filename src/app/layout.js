import Script from "next/script";
import "./globals.css";

import SiteChrome from "../components/SiteChrome";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-X988XS5RGV";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://asbtubes.com"),
  title: {
    default: "Stainless Steel Pipe Manufacturer in India | ASB Tubes",
    template: "%s | ASB Tubes",
  },
  description:
    "ASB Tubes is a leading stainless steel pipe and tube manufacturer in India, producing ERW pipes, round, square and sectional tubes with 72,000MT+ annual capacity.",
  keywords: [
    "stainless steel pipe",
    "ss pipes and tubes",
    "stainless steel tube manufacturers",
    "ss erw pipes",
    "stainless steel pipe company in india",
  ],
  verification: {
    google: "VU6Vu-AZK1uWX-tP30y6beIOMWClmvY3qubLM4vNbgA",
  },
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
      </head>
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
