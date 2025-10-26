import React from 'react';
import { BookOpen, Briefcase, Award, Users, MapPin, Clock } from 'lucide-react';

const educationTimelineData = [
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
    title: 'MSc Psychology - Merit',
    category: 'Education',
    description: 'Anglia Ruskin University, UK',
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
  },
  {
    year: '2014-2019',
    title: 'Doctor of Pharmacy',
    category: 'Education',
    description: 'JSS College of Pharmacy, JSS Academy of Higher Education & Research, Mysuru',
    icon: BookOpen,
    color: 'bg-secondary'
  }
];

const ExperiencetimelineData = [
  {
    year: '2025',
    title: 'Trainee Mental Health Coach - Overcome',
    category: 'Clinical Experience',
    description: 'As a Clinical Intern, I support a global initiative providing free digital mental health care to individuals in Low-Middle Income Countries (LMICs). My role involves offering therapy in the capacity of a coach, assisting with client recruitment, HR interview role plays, mentoring new cohorts, and participating in triaging activities.',
    icon: Users,
    color: 'bg-primary',
    current: true
  },
  {
    year: '2025',
    title: 'Counselling Psychologist in Training - Go to Therapy',
    category: 'Clinical Experience',
    description: 'Under Supervision - Providing counselling psychology services',
    icon: Users,
    color: 'bg-primary',
    current: true
  },
  {
    year: '2025',
    title: 'Crisis Helpline Volunteer - Shout UK',
    category: 'Clinical Experience',
    description: 'Providing immediate support and resources to individuals in crisis situations',
    icon: Users,
    color: 'bg-primary',
    current: true
  },
  {
    year: '2025',
    title: 'Member Board of Trustees - Rotherham Abuse Counselling Service',
    category: 'Leadership',
    description: 'Board member contributing to strategic governance of abuse counselling services',
    icon: Award,
    color: 'bg-accent',
    current: true
  },
  {
    year: '2024',
    title: 'No Panic Helpline Service Applicant Interviewer',
    category: 'Clinical Experience',
    description: 'Conducting interviews for helpline service applicants at mental health charity',
    icon: Users,
    color: 'bg-primary',
    current: true
  },
  {
    year: '2024',
    title: 'Social Media Coordinator - Charity No Panic',
    category: 'Digital Marketing',
    description: 'Managing social media presence for mental health charity organization',
    icon: Users,
    color: 'bg-secondary',
    current: true
  },
  {
    year: '2024',
    title: 'Physician\'s Assistant - Cambridge University Hospitals NHS',
    category: 'Healthcare',
    description: 'Assisting in patient care: venipuncture, cannulation, arterial blood gases, and venesection. Collaborating with healthcare teams to support comprehensive patient care.',
    icon: Users,
    color: 'bg-primary',
    current: true
  },
  {
    year: '2023-2024',
    title: 'Pharmacy Advisor - Boots UK',
    category: 'Healthcare',
    description: 'Providing pharmaceutical advice and services in retail pharmacy setting',
    icon: Users,
    color: 'bg-accent'
  },
  {
    year: '2021-2023',
    title: 'Associate Clinical Data Manager - Novartis',
    category: 'Healthcare',
    description: 'Managing clinical data for pharmaceutical research and development',
    icon: Users,
    color: 'bg-accent'
  },
  {
    year: '2020-2021',
    title: 'Doctor of Pharmacy Intern - JSS University',
    category: 'Education',
    description: 'Pharmacy internship at Jagadguru Sri Shivarathreeshwara University, Mysore',
    icon: BookOpen,
    color: 'bg-secondary'
  },
  {
    year: '2017',
    title: 'Student Observership - Christian Medical College Vellore',
    category: 'Healthcare',
    description: 'Pharmacist intern observership program',
    icon: Users,
    color: 'bg-secondary'
  },
  {
    year: '2016-2019',
    title: 'Intern - Andhra Pradesh Human Resource Development',
    category: 'Government',
    description: 'Government internship in human resource development sector',
    icon: Briefcase,
    color: 'bg-accent'
  },
  {
    year: '2012-2016',
    title: 'Intern - Centre for Innovations in Public Systems (CIPS)',
    category: 'Public Service',
    description: 'Part of various programmes and workshops conducted by the organization',
    icon: Users,
    color: 'bg-secondary'
  }
];

const TimelineResume = () => {
  // Combine and sort all timeline data chronologically
  const combinedTimelineData = [...ExperiencetimelineData, ...educationTimelineData]
    .sort((a, b) => {
      // Extract year for sorting (handle ranges like "2023-2024")
      const getYear = (yearStr) => {
        const years = yearStr.split('-');
        return parseInt(years[years.length - 1]) || 0;
      };
      return getYear(b.year) - getYear(a.year);
    });

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary"></div>
      
      {/* Professional Experience Section */}
      <div className="mb-16">
        <div className="relative mb-8">
          <div className="floating-card p-6 text-center">
            <h2 className="text-3xl font-heading font-bold text-primary mb-2">Professional Journey</h2>
            <p className="text-muted-foreground">Experience, Education & Recognition</p>
          </div>
        </div>
        
        <div className="space-y-8">
          {combinedTimelineData.map((item, index) => (
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
      </div>

      {/* Achievement Summary */}
      <div className="mt-12 floating-card p-8 text-center">
        <h3 className="text-2xl font-heading font-bold mb-6">Career Highlights</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-primary mb-2">13+</div>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-accent mb-2">15+</div>
            <p className="text-sm text-muted-foreground">Professional Roles</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-secondary mb-2">7</div>
            <p className="text-sm text-muted-foreground">Current Active Roles</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-primary mb-2">3</div>
            <p className="text-sm text-muted-foreground">Countries Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineResume;