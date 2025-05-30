
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, LinkedIn, Twitter } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ProjectVision from "@/components/ProjectVision";
import ProjectTimeline from "@/components/ProjectTimeline";
import FundingSection from "@/components/FundingSection";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <HeroSection scrollToSection={scrollToSection} />
      <ProjectVision />
      <ProjectTimeline />
      <FundingSection />
      <GetInvolved />
      <Footer />
    </div>
  );
};

export default Index;
