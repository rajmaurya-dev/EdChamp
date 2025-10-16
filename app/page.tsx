import {
  HeroSection,
  ProblemSection,
  HowItWorksSection,
  WhyLoveSection,
  SocialProofSection,
  ValuePropositionSection,
  PricingSection,
  TestimonialsCarousel,
  FinalCTASection,
  Footer,
} from "@/components/landing";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <WhyLoveSection />
      <SocialProofSection />
      <ValuePropositionSection />
      <PricingSection />
      <TestimonialsCarousel />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
