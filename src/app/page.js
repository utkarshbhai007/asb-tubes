import Maintenance from "../components/Maintenance";

/*
// Original Home Page imports (Uncomment when maintenance is complete):
import Hero from "../components/Hero";
import HomeContent from "../components/HomeContent";
import OfficeGallery from "../components/OfficeGallery";
import EventsInsight from "../components/EventsInsight";
import BrochureSection from "../components/BrochureSection";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
*/

export const metadata = {
  title: "Under Maintenance | ASB TUBES Private Limited",
  description: "ASB TUBES Private Limited website is currently undergoing scheduled maintenance.",
};

export default function Home() {
  // Website currently in Maintenance Mode
  return <Maintenance />;

  /*
  // Original Home Page layout:
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
  */
}
