import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import FeaturedAmberRoostSection from '../components/FeaturedAmberRoostSection';
import CreativePracticeSection from '../components/CreativePracticeSection';
import CreativeProcessSection from '../components/CreativeProcessSection';
import SkillsToolsSection from '../components/SkillsToolsSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <main className="w-full">
      {/* 1. Opening Hero */}
      <Hero />

      {/* 2. Personal Introduction & Creative Profile (FIRST immediately after Hero) */}
      <AboutSection />

      {/* 3. Major Featured Case Study: The Amber Roost */}
      <FeaturedAmberRoostSection />

      {/* 4. More From My Creative Practice */}
      <CreativePracticeSection />

      {/* 5. Creative Process: How An Idea Becomes A Visual Story */}
      <CreativeProcessSection />

      {/* 6. Skills & Creative Tools */}
      <SkillsToolsSection />

      {/* 7. Contact & Closing Section */}
      <ContactSection />
    </main>
  );
}
