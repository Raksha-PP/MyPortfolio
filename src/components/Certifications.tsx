
import React, { useEffect, useRef } from 'react';
import { Award } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Certification {
  title: string;
  organization: string;
  year: string;
}

const Certifications = () => {
  const certificationsRef = useRef<HTMLDivElement>(null);
  
  const certifications: Certification[] = [
    {
      title: "IndustriAI 24-hr Hackathon",
      organization: "Shaastra, IIT Madras",
      year: "2025"
    },
    {
      title: "Shridevi National level Hackathon (24h)",
      organization: "Shridevi Institute of Engineering and Technology",
      year: "2024"
    },
    {
      title: "Technocon Poster Presentation - IdEEEas",
      organization: "IEEE SIT SB",
      year: "2024"
    },
    {
      title: "Internal Smart India Hackathon",
      organization: "Siddaganga Institute of Technology",
      year: "2024"
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const childElements = certificationsRef.current?.querySelectorAll('.certification-item');
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
    <section id="certifications" className="py-20">
      <div className="section-container" ref={certificationsRef}>
        <h2 className="section-title">Certifications & Achievements</h2>
        <p className="section-subtitle">Recognition of my skills and accomplishments</p>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <div 
                key={cert.title} 
                className="certification-item opacity-0 glass-card p-6 flex items-start space-x-4 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-12 w-12 bg-orange-500/10 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <Award className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm mb-1">{cert.organization}</p>
                  <span className="text-xs px-2 py-0.5 bg-dark-100 rounded-full border border-orange-500/10">
                    {cert.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 glass-card p-6 text-center certification-item opacity-0">
            <p className="text-muted-foreground">
              Continuously expanding my knowledge and skills through certifications, workshops, and competitions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
