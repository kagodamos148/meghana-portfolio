import { Download, BookOpen, Briefcase, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FloatingShapes, GradientBackground } from '@/components/SVGDecorations';
import TimelineResume from '@/components/TimelineResume';

const Resume = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding relative">
        <GradientBackground />
        <FloatingShapes className="opacity-50" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-gradient">
              My Career Journey
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <Button className="btn-hero">
              <Download className="h-5 w-5 mr-2" />
              Download Full CV
            </Button>
          </div>

          <div className="animate-slide-up">
            <TimelineResume />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;