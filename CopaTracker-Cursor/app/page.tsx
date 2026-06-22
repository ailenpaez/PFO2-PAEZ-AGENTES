import { AboutProjectSection } from "@/components/sections/AboutProjectSection";
import { BracketSimulatorSection } from "@/components/sections/BracketSimulatorSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { FixtureSection } from "@/components/sections/FixtureSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutProjectSection />
      <FixtureSection />
      <BracketSimulatorSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
