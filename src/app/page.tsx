import Hero from "@/components/home/Hero";
import CaseStudyTeaser from "@/components/home/CaseStudyTeaser";
import Statement from "@/components/home/Statement";
import ServicesOverview from "@/components/home/ServicesOverview";
import Sustainability from "@/components/home/Sustainability";
import WhyOperon from "@/components/home/WhyOperon";
import TeamTeaser from "@/components/home/TeamTeaser";
import CareersTeaser from "@/components/home/CareersTeaser";
import ClientMarquee from "@/components/home/ClientMarquee";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <CaseStudyTeaser />
      <Statement />
      <ServicesOverview />
      <Sustainability />
      <WhyOperon />
      <TeamTeaser />
      <CareersTeaser />
      <ClientMarquee />
      <CtaBanner />
    </>
  );
}
