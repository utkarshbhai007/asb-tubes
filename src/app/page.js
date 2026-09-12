import Hero from "../components/Hero";
import HomeContent from "../components/HomeContent";
import OfficeGallery from "../components/OfficeGallery";
import EventsInsight from "../components/EventsInsight";
import BrochureSection from "../components/BrochureSection";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export const metadata = {
  title: {
    absolute: "Stainless Steel Pipe | Durable Industrial Piping | ASB Tubes",
  },
  description:
    "Explore stainless steel pipe solutions from ASB Tubes — a trusted manufacturer of SS pipes and tubes in India with 72,000MT+ capacity, serving global industries.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <HomeContent />
      <OfficeGallery />
      <EventsInsight />
      <BrochureSection />
      <FloatingWhatsApp />
    </>
  );
}
