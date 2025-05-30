
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ArrowDown, Download } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-teal-50 to-slate-100"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <Badge className="mb-6 px-4 py-2 bg-blue-100 text-blue-800 border-blue-200">
            Open Source • AI-Powered • Human Health
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Building an <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Open-Source</span><br />
            Foundation Model for<br />
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Human Health</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Creating a digital twin powered by continuous data and AI to transform preventive healthcare.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('get-involved')}
            >
              Join the Project
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://github.com/dannycastonguay/humanlabs-tech', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              Explore on GitHub
            </Button>
          </div>

          <div className="flex justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-teal-100 hover:bg-teal-200 text-teal-800 border-teal-300 px-6 py-3 text-base font-medium transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://github.com/dannycastonguay/humanlabs-tech/blob/main/docs/humanlabs.tech.pdf', '_blank')}
            >
              <Download className="mr-2 h-4 w-4" />
              Download White Paper
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-slate-400" />
      </div>
    </section>
  );
};

export default HeroSection;
