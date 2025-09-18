import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import pradallyHero from '@/assets/pridally-hero.jpg';
import scensoraHero from '@/assets/scensora-hero.jpg';
import speak2makeHero from '@/assets/speak2make-hero.jpg';

const Projects = () => {
  const projects = [
    {
      title: "PRIDalLY",
      subtitle: "LGBTQIA+ Health App",
      description: "A new model of inclusive healthcare based on the FiHolistic model covering physical, mental, social, reproductive, and sexual health. Personalized care, medication support, and safe resources for the LGBTQIA+ community.",
      features: [
        "Inclusive healthcare platform",
        "Personalized medication support", 
        "Safe community resources",
        "Mental health integration"
      ],
      status: "NHS Clinical Entrepreneur Programme",
      color: "from-primary to-accent",
      image: pradallyHero
    },
    {
      title: "Scensora",
      subtitle: "Candles & Cosmetics",
      description: "Where neuroscience meets fragrance. Products that connect scent, touch, and memory to emotional well-being, creating therapeutic experiences through sensory innovation.",
      features: [
        "Neuroscience-inspired fragrances",
        "Therapeutic sensory experiences",
        "Memory and emotion connection",
        "Wellness-focused design"
      ],
      status: "UK-based Wellness Brand",
      color: "from-secondary to-accent",
      image: scensoraHero
    },
    {
      title: "Speak2Make",
      subtitle: "Thought Leadership",
      description: "Creative platform exploring migration, identity, and philosophy through the immigrant journey series ABCD and humorous East–West philosophy debates featuring Adi Shankaracharya vs Socrates.",
      features: [
        "Migration and identity exploration",
        "Philosophy debates series",
        "Cultural bridge-building",
        "Creative content platform"
      ],
      status: "Digital Content Platform",
      color: "from-accent to-primary",
      image: speak2makeHero
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient">
              Projects & Ventures
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl font-body text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions at the intersection of healthcare, technology, and social impact.
            </p>
          </div>

          <div className="space-y-12 animate-slide-up">
            {projects.map((project, index) => (
              <div key={index} className="floating-card overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Project Info */}
                  <div className="p-8 md:p-12">
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          {project.status}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
                        {project.title}
                      </h2>
                      <p className="text-xl text-muted-foreground font-medium mb-4">
                        {project.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground font-body leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="font-body text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
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
                  <div className="relative overflow-hidden min-h-[300px]">
                    <img 
                      src={project.image} 
                      alt={`${project.title} project showcase`}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`}></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <div className="text-center">
                        <div className="text-4xl md:text-6xl font-heading font-bold mb-2 opacity-90">
                          {project.title}
                        </div>
                        <div className="text-lg opacity-80">
                          {project.subtitle}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Impact Section */}
          <div className="floating-card p-12 text-center mt-16 animate-fade-in">
            <h3 className="text-3xl font-heading font-bold mb-8">Making Real Impact</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-heading font-bold text-primary mb-2">NHS</div>
                <p className="font-body text-muted-foreground">Clinical Entrepreneur Programme</p>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-accent mb-2">BBC</div>
                <p className="font-body text-muted-foreground">Featured Innovation</p>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-secondary mb-2">3</div>
                <p className="font-body text-muted-foreground">Active Ventures</p>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-primary mb-2">1000+</div>
                <p className="font-body text-muted-foreground">Lives Impacted</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;