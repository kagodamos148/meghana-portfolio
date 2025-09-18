import { GraduationCap, Globe, Award } from 'lucide-react';
import { FloatingShapes, GradientBackground, CardDecoration } from '@/components/SVGDecorations';

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Main Bio Section */}
      <section className="section-padding relative">
        <GradientBackground />
        <FloatingShapes />
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-gradient">
              About Me
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center animate-slide-up">
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-heading font-semibold text-foreground mb-4">
                Building Healthcare Innovation
              </h2>
              <p className="text-base lg:text-lg font-body text-muted-foreground leading-relaxed">
                I'm a UK-based Clinical Pharmacist and Psychologist with a vision for holistic, 
                inclusive, and empowering healthcare. My journey spans pharmacy practice, clinical 
                trials, psychology teaching, and digital health innovation.
              </p>
              <p className="text-base lg:text-lg font-body text-muted-foreground leading-relaxed">
                As the Founder of PRIDalLY (MedTech LGBTQIA+ healthcare app) and Scensora 
                (sensory wellness brand), I've been featured by BBC, NHS Clinical Entrepreneur 
                Programme, and international innovation platforms.
              </p>
              <div className="bg-primary/5 p-6 rounded-2xl border-l-4 border-primary relative overflow-hidden">
                <CardDecoration variant="primary" />
                <p className="text-base lg:text-lg font-body font-medium text-primary italic relative z-10">
                  "Health is not just medicine — it's identity, community, and courage to build 
                  systems that serve people."
                </p>
              </div>
            </div>

            <div className="space-y-6 lg:space-y-8">
              {/* Education Highlight */}
              <div className="floating-card p-6 hover-glow group relative overflow-hidden">
                <CardDecoration variant="secondary" />
                <div className="flex items-center mb-4 relative z-10">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-heading font-semibold">Education</h3>
                </div>
                <div className="space-y-2 text-sm font-body text-muted-foreground relative z-10">
                  <p>PharmD (India), MSc Psychology (UK)</p>
                  <p>Diploma in Pharmacovigilance</p>
                  <p>BPharm, NVQ2 (UK)</p>
                </div>
              </div>

              {/* Experience Highlight */}
              <div className="floating-card p-6 hover-glow group relative overflow-hidden">
                <CardDecoration variant="accent" />
                <div className="flex items-center mb-4 relative z-10">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-heading font-semibold">Experience</h3>
                </div>
                <div className="space-y-2 text-sm font-body text-muted-foreground relative z-10">
                  <p>Healthcare + Academia across UK, India & USA</p>
                  <p>Digital Health Innovation & Strategy</p>
                  <p>Mental Health Coaching & Consulting</p>
                </div>
              </div>

              {/* Recognitions Highlight */}
              <div className="floating-card p-6 hover-glow group relative overflow-hidden">
                <CardDecoration variant="primary" />
                <div className="flex items-center mb-4 relative z-10">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-heading font-semibold">Recognitions</h3>
                </div>
                <div className="space-y-2 text-sm font-body text-muted-foreground relative z-10">
                  <p>NHS Clinical Entrepreneur</p>
                  <p>Tata Scholar</p>
                  <p>BBC-featured speaker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;