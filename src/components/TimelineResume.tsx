import React from 'react';
import { BookOpen, Briefcase, Award, Users, MapPin, Clock } from 'lucide-react';

const timelineData = [
  {
    year: '2024',
    title: 'NHS Clinical Entrepreneur Programme',
    category: 'Recognition',
    description: 'Selected for prestigious healthcare innovation programme',
    icon: Award,
    color: 'bg-primary',
    current: true
  },
  {
    year: '2023',
    title: 'Founder & CEO - PRIDalLY',
    category: 'Leadership',
    description: 'Launched LGBTQIA+ inclusive healthcare platform',
    icon: Briefcase,
    color: 'bg-accent',
    current: true
  },
  {
    year: '2023',
    title: 'MSc Psychology - Merit',
    category: 'Education',
    description: 'Anglia Ruskin University, UK',
    icon: BookOpen,
    color: 'bg-secondary'
  },
  {
    year: '2022',
    title: 'Founder - Scensora',
    category: 'Innovation',
    description: 'Neuroscience-inspired wellness brand',
    icon: Briefcase,
    color: 'bg-primary',
    current: true
  },
  {
    year: '2021',
    title: 'Clinical Trial Coordinator',
    category: 'Healthcare',
    description: 'Oxford-AstraZeneca COVID-19 Trial',
    icon: Users,
    color: 'bg-accent'
  },
  {
    year: '2020',
    title: 'Digital Learning Specialist',
    category: 'Academia',
    description: 'Module Leader at Anglia Ruskin University',
    icon: BookOpen,
    color: 'bg-secondary'
  },
  {
    year: '2019',
    title: 'Doctor of Pharmacy',
    category: 'Education', 
    description: 'Post Baccalaureate, India - 83.29%',
    icon: BookOpen,
    color: 'bg-primary'
  }
];

const TimelineResume = () => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary"></div>
      
      <div className="space-y-8">
        {timelineData.map((item, index) => (
          <div key={index} className="relative flex items-start space-x-8 group">
            {/* Timeline Node */}
            <div className="relative z-10">
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow`}>
                <item.icon className="h-7 w-7 text-white" />
              </div>
              {item.current && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse">
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping"></div>
                </div>
              )}
            </div>
            
            {/* Content Card */}
            <div className="flex-1 floating-card p-6 transform transition-all duration-300 group-hover:-translate-y-1">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl font-heading font-bold text-primary">{item.year}</span>
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full font-medium">
                      {item.category}
                    </span>
                    {item.current && (
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">{item.title}</h3>
                </div>
              </div>
              
              <p className="text-muted-foreground font-body">{item.description}</p>
              
              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Achievement Summary */}
      <div className="mt-12 floating-card p-8 text-center">
        <h3 className="text-2xl font-heading font-bold mb-6">Career Highlights</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-primary mb-2">7+</div>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-accent mb-2">3</div>
            <p className="text-sm text-muted-foreground">Ventures Founded</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-secondary mb-2">5+</div>
            <p className="text-sm text-muted-foreground">Awards & Recognition</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-primary mb-2">2</div>
            <p className="text-sm text-muted-foreground">Countries Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineResume;