import Contact from "../../components/Contact";

export const metadata = {
  title: "Contact Us | ASB Tubes - Head Office & Factory Location",
  description:
    "Get in touch with ASB Tubes Private Limited. Contact our sales and technical team for quotes, inquiries, and support for stainless steel pipes and tubes.",
  keywords: [
    "Contact ASB Tubes",
    "ASB Tubes address",
    "ASB Tubes phone number",
    "ASB Tubes email inquiry",
    "stainless steel tubes supplier contact",
    "Ahmedabad head office ASB Tubes",
    "Vadpura factory ASB Tubes",
  ],
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Us | ASB Tubes Private Limited",
    description:
      "Reach out to ASB Tubes for inquiries, product quotes, and manufacturing technical support.",
    url: "https://www.asbtubes.com/contact-us",
  },
};

export default function ContactUsPage() {
  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <Contact />
    </div>
  );
}
