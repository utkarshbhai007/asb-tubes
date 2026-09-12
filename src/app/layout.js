import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
