import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { SkillsSection } from "@/components/SkillsSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <AchievementsSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
