import { Users, Lightbulb, Mic, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FloatingShapes, GradientBackground, CardDecoration } from '@/components/SVGDecorations';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Coaching & Mentorship",
      description: "Career guidance for pharmacy, psychology, and healthcare professionals",
      features: [
        "Mental health coaching for resilience and confidence",
        "Cultural adjustment support for professionals",
        "Career transition guidance",
        "Personal development planning"
      ],
      bgColor: "bg-secondary",
      iconColor: "text-secondary-foreground"
    },
    {
      icon: Lightbulb,
      title: "Consulting",
      description: "Digital health innovation and strategic expertise",
      features: [
        "Digital health innovation and strategy",
        "Pharmacovigilance and clinical trials expertise",
        "NGO and start-up advisory for inclusive health",
        "Healthcare system design consultation"
      ],
      bgColor: "bg-primary",
      iconColor: "text-white"
    },
    {
      icon: Mic,
      title: "Speaking & Workshops",
      description: "Inspiring talks on health innovation and inclusion",
      features: [
        "Public mental health and well-being presentations",
        "LGBTQIA+ inclusive healthcare workshops",
        "Social entrepreneurship in health innovation",
        "Professional development seminars"
      ],
      bgColor: "bg-accent",
      iconColor: "text-white"
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding relative">
        <GradientBackground />
        <FloatingShapes className="opacity-50" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-gradient">
              Work With Me
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg lg:text-xl font-body text-muted-foreground max-w-2xl mx-auto">
              Empowering healthcare professionals and organizations through coaching, 
              consulting, and thought leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 animate-slide-up">
            {services.map((service, index) => (
              <div key={index} className="floating-card p-6 lg:p-8 h-full hover-glow group relative overflow-hidden">
                <CardDecoration variant={index === 0 ? 'secondary' : index === 1 ? 'primary' : 'accent'} />
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground font-body">{service.description}</p>
                </div>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-body text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Section */}
          <div className="floating-card p-8 mb-16 text-center animate-fade-in">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-heading font-bold mb-6">Why Choose My Services?</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-primary mb-2">5+</div>
                  <p className="font-body text-muted-foreground">Years of Healthcare Innovation</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-accent mb-2">3</div>
                  <p className="font-body text-muted-foreground">Successful Ventures Founded</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-secondary mb-2">100+</div>
                  <p className="font-body text-muted-foreground">Professionals Mentored</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center animate-fade-in">
            <div className="floating-card p-12 gradient-hero text-white">
              <h3 className="text-4xl font-heading font-bold mb-4">Ready to Collaborate?</h3>
              <p className="text-xl font-body mb-8 opacity-90">
                Let's work together to create meaningful impact in healthcare and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-2xl font-semibold transform hover:scale-105 transition-all duration-300"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book a Session
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold transform hover:scale-105 transition-all duration-300"
                >
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;