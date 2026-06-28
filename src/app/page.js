import Hero from "../components/Hero";
import HomeContent from "../components/HomeContent";
import OfficeGallery from "../components/OfficeGallery";
import EventsInsight from "../components/EventsInsight";
import BrochureSection from "../components/BrochureSection";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

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
