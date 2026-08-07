import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Maintenance from "../components/Maintenance";

// Set to true to show Website Under Maintenance across the entire site.
// Set to false when maintenance is finished to restore the live website.
const IS_MAINTENANCE_MODE = true;

export const metadata = {
  title: IS_MAINTENANCE_MODE
    ? "Under Maintenance | ASB TUBES Private Limited"
    : "ASB TUBES Private Limited",
  description: IS_MAINTENANCE_MODE
    ? "ASB TUBES Private Limited website is currently undergoing scheduled maintenance."
    : "Leading Stainless Steel Pipes & Tubes Manufacturer.",
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
        {IS_MAINTENANCE_MODE ? (
          <Maintenance />
        ) : (
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
