
import React, { useEffect, useRef } from 'react';
import { Users, ChevronRight, Megaphone, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Role {
  title: string;
  organization: string;
  period: string;
  description: string;
  icon: React.ElementType;
  skills: string[];
}

const Responsibilities = () => {
  const responsibilitiesRef = useRef<HTMLDivElement>(null);
  
  const roles: Role[] = [
  {
    title: "Membership Development Committee Chair, IEEE Computer Society Vice Chair",
    organization: "IEEE SIT SB",
    period: "Present",
    description: "Leading membership growth initiatives, organizing technical activities, and supporting strategic planning to strengthen student engagement within IEEE and the Computer Society.",
    icon: Users,
    skills: ["Leadership", "Strategic Planning", "Member Engagement", "Coordination"]
  },
  {
    title: "Joint Secretary",
    organization: "IEEE SIT SB",
    period: "2024 - 2025",
    description: "Coordinating events, designing posters, and managing team activities for the IEEE Student Branch.",
    icon: Users,
    skills: ["Communication", "Teamwork", "Leadership", "Event Management"]
  },
  {
    title: "Campus Executive",
    organization: "SkillVertex",
    period: "2023",
    description: "Conducting webinars, promoting the platform, and facilitating skill development opportunities for students.",
    icon: Megaphone,
    skills: ["Marketing", "Event Planning", "Public Speaking", "Networking"]
  },
  {
    title: "CQMS",
    organization: "NCC (ARMY WING)",
    period: "2024 - 2025",
    description: "Leading cadets, managing resources, and participating in community service activities. NCC 'A' and 'B' certificate holder.",
    icon: Award,
    skills: ["Leadership", "Time Management", "Community Service", "Discipline"]
  }
];

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in-right');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const childElements = responsibilitiesRef.current?.querySelectorAll('.role-card');
    childElements?.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      childElements?.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <section id="responsibilities" className="py-20 bg-dark-300">
      <div className="section-container" ref={responsibilitiesRef}>
        <h2 className="section-title">Positions of Responsibility</h2>
        <p className="section-subtitle">Leadership roles and organizational experiences</p>
        
        <div className="max-w-4xl mx-auto">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <div 
                key={role.title} 
                className="role-card opacity-0 glass-card p-6 mb-6 flex flex-col md:flex-row card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="flex items-center mb-2">
                    <div className="h-10 w-10 bg-orange-500/10 rounded-lg flex items-center justify-center mr-3">
                      <Icon className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-bold">{role.title}</h3>
                      <p className="text-orange-400 text-sm">{role.organization}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{role.period}</p>
                </div>
                
                <div className="md:w-3/4 md:pl-6 md:border-l border-orange-500/10">
                  <p className="text-muted-foreground mb-4">{role.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-medium text-orange-400 mb-2">Skills Gained:</h4>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map(skill => (
                        <span 
                          key={skill} 
                          className="bg-dark-200 text-xs px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Responsibilities;

