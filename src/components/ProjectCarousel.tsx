import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import pradallyHero from '@/assets/pridally-hero.jpg';
import scensoraHero from '@/assets/scensora-hero.jpg';
import speak2makeHero from '@/assets/speak2make-hero.jpg';

const projects = [
  {
    title: "PRIDalLY",
    subtitle: "LGBTQIA+ Health App",
    description: "A new model of inclusive healthcare based on the FiHolistic model covering physical, mental, social, reproductive, and sexual health.",
    color: "from-primary to-accent",
    image: pradallyHero
  },
  {
    title: "Scensora",
    subtitle: "Candles & Cosmetics", 
    description: "Where neuroscience meets fragrance. Products that connect scent, touch, and memory to emotional well-being.",
    status: "UK-based Wellness Brand",
    color: "from-secondary to-accent",
    image: scensoraHero
  },
  {
    title: "Speak2Make",
    subtitle: "Thought Leadership",
    description: "Creative platform exploring migration, identity, and philosophy through innovative content series.",
    status: "Digital Content Platform",
    color: "from-accent to-primary",
    image: speak2makeHero
  }
];

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="relative overflow-hidden">
      {/* Main Carousel */}
      <div className="floating-card overflow-hidden group">
        <div className="grid lg:grid-cols-2 gap-0 min-h-[500px]">
          {/* Project Content */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="mb-6">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4 inline-block">
                {currentProject.status}
              </span>
              <h3 className="text-3xl lg:text-4xl font-heading font-bold mb-3">
                {currentProject.title}
              </h3>
              <p className="text-lg text-accent font-medium mb-4">
                {currentProject.subtitle}
              </p>
            </div>
            
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              {currentProject.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero">
                Learn More
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button variant="outline" className="btn-hero-outline">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Live
              </Button>
            </div>
          </div>
          
          {/* Project Visual */}
          <div className="relative overflow-hidden">
            <img 
              src={currentProject.image} 
              alt={`${currentProject.title} project showcase`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${currentProject.color} opacity-70`}></div>
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="text-center transform transition-transform duration-300 group-hover:scale-105">
                <div className="text-4xl lg:text-5xl font-heading font-bold mb-2 opacity-90">
                  {currentProject.title}
                </div>
                <div className="text-lg opacity-80">
                  {currentProject.subtitle}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-border hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevProject}
            className="h-10 w-10 rounded-full border-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextProject}
            className="h-10 w-10 rounded-full border-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Project Counter */}
      <div className="text-center mt-4">
        <span className="text-sm text-muted-foreground font-body">
          {currentIndex + 1} of {projects.length} Projects
        </span>
      </div>
    </div>
  );
};

export default ProjectCarousel;