import Hero from "@/components/home/Hero";
import CaseStudyTeaser from "@/components/home/CaseStudyTeaser";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyOperon from "@/components/home/WhyOperon";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <CaseStudyTeaser />
      <ServicesOverview />
      <WhyOperon />
      <CtaBanner />
    </>
  );
}
