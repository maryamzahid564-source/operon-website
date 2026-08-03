import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyOperon from "@/components/home/WhyOperon";
import Values from "@/components/home/Values";
import CaseStudyTeaser from "@/components/home/CaseStudyTeaser";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyOperon />
      <Values />
      <CaseStudyTeaser />
      <CtaBanner />
    </>
  );
}
