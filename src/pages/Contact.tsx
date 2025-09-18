import { Mail, Linkedin, Instagram, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:contact@meghanarao.com',
      color: 'hover:text-primary'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: '#',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: '#',
      color: 'hover:text-pink-600'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient">
              Let's Connect
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl font-body text-muted-foreground max-w-2xl mx-auto">
              I'd love to hear from you — whether it's about collaboration, speaking 
              opportunities, or new projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 animate-slide-up">
            {/* Contact Form */}
            <div className="floating-card p-8">
              <h2 className="text-3xl font-heading font-bold mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Your full name"
                      className="rounded-xl border-2 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com"
                      className="rounded-xl border-2 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="What's this about?"
                    className="rounded-xl border-2 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project or how I can help..."
                    className="rounded-xl border-2 focus:border-primary min-h-[150px]"
                  />
                </div>
                
                <Button className="btn-hero w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="floating-card p-8">
                <h3 className="text-2xl font-heading font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold">Location</p>
                      <p className="text-muted-foreground">United Kingdom</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold">Email</p>
                      <p className="text-muted-foreground">contact@meghanarao.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="floating-card p-8">
                <h3 className="text-2xl font-heading font-bold mb-6">Follow My Journey</h3>
                <div className="grid gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="flex items-center space-x-4 p-4 rounded-xl border border-border hover:bg-muted/50 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                        <link.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-heading font-semibold">{link.name}</p>
                        <p className="text-sm text-muted-foreground">Connect with me</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="floating-card p-8">
                <h3 className="text-2xl font-heading font-bold mb-6">Response Time</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 rounded-xl bg-primary/5">
                    <div className="text-2xl font-heading font-bold text-primary">24h</div>
                    <p className="text-sm text-muted-foreground">Email Response</p>
                  </div>
                  <div className="p-4 rounded-xl bg-accent/5">
                    <div className="text-2xl font-heading font-bold text-accent">48h</div>
                    <p className="text-sm text-muted-foreground">Project Consultation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Message */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="floating-card p-12 gradient-hero text-white">
              <h3 className="text-3xl font-heading font-bold mb-4">
                Together, we can shape healthcare, innovation, and hope for the future.
              </h3>
              <p className="text-xl opacity-90">
                Let's build something meaningful together.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;