import Hero from "@/components/home/Hero";
import CaseStudyTeaser from "@/components/home/CaseStudyTeaser";
import Statement from "@/components/home/Statement";
import ServicesOverview from "@/components/home/ServicesOverview";
import ImageBand from "@/components/home/ImageBand";
import WhyOperon from "@/components/home/WhyOperon";
import ClientMarquee from "@/components/home/ClientMarquee";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <CaseStudyTeaser />
      <Statement />
      <ServicesOverview />
      <ImageBand />
      <WhyOperon />
      <ClientMarquee />
      <CtaBanner />
    </>
  );
}
