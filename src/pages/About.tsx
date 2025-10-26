import { GraduationCap, Globe, Award, Youtube, Mic, BookOpen, Users, Instagram } from 'lucide-react';
import { FloatingShapes, GradientBackground, CardDecoration } from '@/components/SVGDecorations';
import { useState, useEffect } from 'react';

const About = () => {
  const [memoryImages, setMemoryImages] = useState<string[]>([]);

  useEffect(() => {
    // Function to dynamically import all images from memories_and_moments folder
    const importImages = async () => {
      try {
        // Get all image files from the memories_and_moments folder
        const imageModules = import.meta.glob('/src/assets/memories_and_moments/*.(jpg|jpeg|png|webp|gif)', {
          eager: true,
          as: 'url'
        });
        
        const imagePaths = Object.values(imageModules) as string[];
        setMemoryImages(imagePaths);
      } catch (error) {
        console.error('Error loading memory images:', error);
      }
    };

    importImages();
  }, []);

  return (
    <div className="min-h-screen pt-24">
      {/* Main Bio Section */}
      <section className="section-padding relative">
        <GradientBackground />
        <FloatingShapes />
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-gradient">
              🩺 About Dr. Meghana Rao Nadendla
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="font-bold text-lg">
              Indian-born. UK-bred. Science-fed. Soul-led. Supporting medicine and minds, because healing is human.
            </p>
          </div>
          
          <div className="space-y-8 animate-slide-up">
            {/* Journey Section */}
            <div className="space-y-6">
              <p className="text-base lg:text-lg font-body text-muted-foreground leading-relaxed">
                I started my journey as a Clinical Pharmacist in India, where I learned that healing is more than prescriptions — it's perception. I saw medicine save lives, but I have learned how empathy sustains them.
              </p>
              <p className="text-base lg:text-lg font-body text-muted-foreground leading-relaxed">
                That realisation eventually led me to the United Kingdom, my present home, where I pursued my MSc in Psychology (Conversion) at Anglia Ruskin University, Cambridge, a journey that turned my science into something more human.
              </p>
              <p className="text-base lg:text-lg font-body text-muted-foreground leading-relaxed">
                Today, I live and work across both worlds, blending clinical reasoning with psychological understanding. I now wear many hats: a Pharmacist, Psychology Trainee, Researcher, Author, and Social Entrepreneur. I founded a UK-based initiative that merges mental health, digital innovation, and social change, using technology to make care more inclusive, compassionate, and accessible.
              </p>
              <p className="text-base lg:text-lg font-body text-muted-foreground leading-relaxed">
                Alongside this, I work in the NHS as a Physician Assistant, which constantly reminds me that care must evolve with the people it serves. At heart, I'm still a researcher curious about human behaviour, systems of care, and the emotions that drive them.
              </p>
              <div className="bg-primary/5 p-6 rounded-2xl border-l-4 border-primary relative overflow-hidden">
                <CardDecoration variant="primary" />
                <p className="text-base lg:text-lg font-body font-medium text-primary italic relative z-10">
                  And yes, a sophophilic soul in love with learning, people, and the pursuit of wisdom.
                </p>
              </div>
            </div>

            {/* Speaking Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
              <h2 className="text-2xl lg:text-3xl font-heading font-semibold text-foreground mb-6 flex items-center gap-3">
                🎙️ See Me Speak
              </h2>
              <p className="text-base lg:text-lg font-body text-muted-foreground leading-relaxed mb-6">
                Catch me in conversation as a social entrepreneur featured on the ARU AREA Podcast, where I shared my story and the vision behind my app, a project built to connect care, compassion, and community.
              </p>
              
              {/* YouTube Video Embed */}
              <div className="mb-6">
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/VhoAX6qkK08"
                    title="ARU AREA Podcast - Dr. Meghana Rao Nadendla"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
              
              <a href="https://www.youtube.com/watch?v=VhoAX6qkK08" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
                <Youtube className="w-5 h-5" />
                → Watch on YouTube
              </a>
            </div>

            {/* Listen Section */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
              <h2 className="text-2xl lg:text-3xl font-heading font-semibold text-foreground mb-6 flex items-center gap-3">
                🔊 Listen to Me
              </h2>
              <p className="text-base lg:text-lg font-body text-muted-foreground leading-relaxed mb-4">
                Listen to my talk at BBC Essex, where I explore resilience, psychology, gender inclusivity, the evolving face of healthcare, and the need for inclusive healthcare.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
                <Mic className="w-5 h-5" />
                → BBC Essex Link
              </a>
            </div>

            {/* Social Media Section */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-2xl border border-green-100">
              <h2 className="text-2xl lg:text-3xl font-heading font-semibold text-foreground mb-6">
                📸 Scroll My Page.
              </h2>
              <p className="text-lg font-medium text-foreground mb-4">
                Because life doesn't fit in a résumé
              </p>
              <p className="text-base lg:text-lg font-body text-muted-foreground leading-relaxed mb-6">
                A glimpse into @speaktomegh — where medicine meets minds, and stories of care, courage, and curiosity unfold.
              </p>
              
              {/* Dynamic Photo Gallery */}
              {memoryImages.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                  {memoryImages.map((imageSrc, index) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <img 
                        src={imageSrc} 
                        alt={`Memory moment ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                  
                  {/* Instagram placeholder */}
                  <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Instagram className="w-8 h-8 text-primary" />
                  </div>
                </div>
              )}
              
              {/* Fallback message if no images found */}
              {memoryImages.length === 0 && (
                <div className="bg-primary/10 p-6 rounded-lg border-2 border-dashed border-primary/30 text-center mb-6">
                  <p className="text-primary font-medium">
                    Memory photos will appear here automatically when added to the memories_and_moments folder
                  </p>
                </div>
              )}
              
              <a href="https://www.instagram.com/speaktomegh/" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
                <Instagram className="w-5 h-5" />
                → Follow @speaktomegh
              </a>
            </div>

            {/* Author Section */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100">
              <h2 className="text-2xl lg:text-3xl font-heading font-semibold text-foreground mb-6 flex items-center gap-3">
                📚 The Author in Me
              </h2>
              <p className="text-base lg:text-lg font-body text-muted-foreground leading-relaxed mb-6">
                Writing helps me translate science into stories. My first book, <em>From Microbes to Management</em>, is an academic exploration of antimicrobial case studies, available on Amazon — a reminder that medicine is as much about learning as it is about healing.
              </p>
              <p className="text-base lg:text-lg font-body text-muted-foreground leading-relaxed mb-6">
                I also host a reflective LinkedIn series called <em>Adultrated Adults</em>, a creative space where I view pharmacy and psychology through a single, honest lens, exploring what it means to grow, heal, and find balance in a complex world.
              </p>
              <div className="space-y-4">
                <a href="https://www.linkedin.com/in/dr-meghana-nadendla-gmbpss-88a346128/" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
                  → View my work on LinkedIn
                </a>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Published Works:</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>● <a href="https://www.amazon.in/Microbes-Management-Clinical-Infectious-Diseases-ebook/dp/B0FF2R2M6D" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors underline">From Microbes to Management — available on Amazon</a></li>
                    <li>● [Next Book – In Progress]</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Research Section */}
            <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-8 rounded-2xl border border-slate-100">
              <h2 className="text-2xl lg:text-3xl font-heading font-semibold text-foreground mb-6 flex items-center gap-3">
                🧠 Research & Publications
              </h2>
              <p className="text-base lg:text-lg font-body text-muted-foreground leading-relaxed mb-6">
                My research connects clinical science with human behaviour, exploring empathy, prescribing, and inclusive healthcare.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-muted-foreground">
                  <li>● 2 Published Research Papers</li>
                  <li>● 2 Under Peer Review</li>
                </ul>
                <ul className="space-y-2 text-muted-foreground">
                  <li>● 1 Book Published, 1 In Progress</li>
                  <li>● International Editorial Board Member, Advances in Multidisciplinary Health Research (AMHR)</li>
                </ul>
              </div>
            </div>

            {/* Closing Section */}
            <div className="bg-primary/5 p-8 rounded-2xl border-l-4 border-primary relative overflow-hidden">
              <CardDecoration variant="primary" />
              <h2 className="text-2xl lg:text-3xl font-heading font-semibold text-foreground mb-6 relative z-10">
                ✉️ In Short
              </h2>
              <div className="space-y-4 relative z-10">
                <p className="text-base lg:text-lg font-body text-muted-foreground leading-relaxed">
                  If you've found your way here, welcome — you're not just reading about me, you're meeting me. A clinician who thinks like a psychologist, a writer who listens like a friend, and a woman who believes that physical and mental health deserve equal care, attention, and love.
                </p>
                <p className="text-base lg:text-lg font-body text-muted-foreground leading-relaxed">
                  From medicine to minds, from India to the UK, my work is a bridge: between science and soul, structure and softness.
                </p>
                <p className="text-base lg:text-lg font-body font-medium text-primary italic">
                  Because care, at its core, is poetry — written not in words, but in the way we see, listen, and heal.
                </p>
                <div className="pt-4">
                  <p className="text-base lg:text-lg font-body text-muted-foreground leading-relaxed mb-4">
                    Let's connect — whether it's for collaboration, conversation, or creating change together.
                  </p>
                  <a href="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
                    → Contact Me
                  </a>
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