import Certifications from "../../components/Certifications";
import Process from "../../components/Process";
import QualityTesting from "../../components/QualityTesting";

export const metadata = {
  title: "Quality | ASB Tubes",
  description: "ASB Tubes strives for total customer satisfaction by consistently supplying quality stainless steel pipes and tubes.",
};

export default function QualityPage() {
  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', background: '#000' }}>
      <Certifications />
      <Process />
      <QualityTesting />
    </div>
  );
}
