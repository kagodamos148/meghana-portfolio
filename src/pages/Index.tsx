import { ArrowRight, Play, Heart, Brain, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FloatingShapes, GradientBackground, WaveDivider } from '@/components/SVGDecorations';
import ProjectCarousel from '@/components/ProjectCarousel';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <GradientBackground />
        <FloatingShapes />

        <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-gradient animate-slide-up">
              Healing, Innovation, and Impact
            </h1>
            <div className="text-lg md:text-xl lg:text-2xl font-body text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <span className="text-primary font-semibold">Clinical Pharmacist</span> • {' '}
              <span className="text-accent font-semibold">Pyschology trainee</span> • {' '}
              <span className="text-secondary font-semibold">Social Entrepreneur</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center mb-12 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <Link to="/projects">
                <Button className="btn-hero w-full sm:w-auto">
                  <Play className="h-5 w-5 mr-2" />
                  View My Work
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="btn-hero-outline w-full sm:w-auto">
                  Contact Me
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
            
            {/* Floating elements */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground animate-float">
              {/* <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>NHS Clinical Entrepreneur</span>
              </div> */}
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <span>BBC Featured</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                <span>Tata Scholar</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <WaveDivider />
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="section-padding bg-muted/30 relative">
        <FloatingShapes className="opacity-50" />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
              Building Bridges Between{' '}
              <span className="text-gradient inline-block px-6 py-2 mx-6">
                Science & Humanity
              </span>
            </h2>
            <p className="text-lg lg:text-xl font-body text-muted-foreground leading-relaxed mb-8">
              I'm Meghana Rao Nadendla (Nadella), bridging clinical expertise with innovation. My work 
              spans from LGBTQIA+ digital health solutions to sensory well-being products, 
              always with the goal of creating more inclusive, empowering healthcare systems.
            </p>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-12">
              <div className="floating-card p-6 text-center hover-glow group">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg lg:text-xl font-heading font-semibold mb-2">Inclusive Healthcare</h3>
                <p className="text-muted-foreground text-sm lg:text-base">Building systems that serve every identity</p>
              </div>
              <div className="floating-card p-6 text-center hover-glow group">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg lg:text-xl font-heading font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground text-sm lg:text-base">Merging neuroscience with wellness</p>
              </div>
              <div className="floating-card p-6 text-center hover-glow group">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-lg lg:text-xl font-heading font-semibold mb-2">Social Impact</h3>
                <p className="text-muted-foreground text-sm lg:text-base">Empowering communities through health</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <WaveDivider flip />
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding relative">
        <GradientBackground className="opacity-30" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg lg:text-xl font-body text-muted-foreground">
              Innovative solutions making real impact in healthcare and wellness
            </p>
          </div>

          <div className="animate-slide-up">
            <ProjectCarousel />
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <Link to="/projects">
              <Button className="btn-hero">
                View All Projects
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <WaveDivider />
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-muted/30 relative">
        <FloatingShapes className="opacity-30" />

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="floating-card p-8 lg:p-12 text-center animate-fade-in hover-glow">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-12">Impact in Numbers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-2">7+</div>
                <p className="font-body text-muted-foreground text-sm lg:text-base">Years of Innovation</p>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-accent mb-2">3</div>
                <p className="font-body text-muted-foreground text-sm lg:text-base">Ventures Founded</p>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-secondary mb-2">100+</div>
                <p className="font-body text-muted-foreground text-sm lg:text-base">Lives Impacted</p>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-2">NHS</div>
                <p className="font-body text-muted-foreground text-sm lg:text-base">Clinical Entrepreneur</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <WaveDivider flip />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative">
        <GradientBackground />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="floating-card p-8 lg:p-12 gradient-hero text-white animate-fade-in hover-glow">
            <h3 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
              Ready to Transform Healthcare Together?
            </h3>
            <p className="text-lg lg:text-xl font-body mb-8 opacity-90">
              Let's collaborate on building more inclusive, innovative healthcare solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 px-6 lg:px-8 py-3 lg:py-4 rounded-2xl font-semibold transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  Get In Touch
                </Button>
              </Link>
              <Link to="/services">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white bg-white/10 hover:bg-white/40 px-6 lg:px-8 py-3 lg:py-4 rounded-2xl font-semibold transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <WaveDivider />
        </div>
      </section>
    </div>
  );
};

export default Index;