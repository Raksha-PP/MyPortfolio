
import React, { useEffect, useRef } from 'react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const Education = () => {
  const educationRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const childElements = educationRef.current?.querySelectorAll('.education-item');
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
    <section id="education" className="py-20 bg-dark-300">
      <div className="section-container" ref={educationRef}>
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic journey and achievements</p>
        
        <div className="max-w-3xl mx-auto">
          <div className="education-item opacity-0 flex flex-col md:flex-row gap-6 glass-card p-6 mb-8">
            <div className="md:w-24 flex-shrink-0">
              <div className="h-20 w-20 bg-dark-100 border border-orange-500/20 rounded-lg flex items-center justify-center">
                <span className="text-orange-500 font-bold">2022<br/>2026</span>
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold">Bachelor of Engineering</h3>
              <h4 className="text-orange-400 mb-2">Computer Science and Engineering (AI & ML)</h4>
              <p className="text-muted-foreground mb-2">Siddaganga Institute of Technology, Tumakuru</p>
              <div className="bg-dark-100 rounded px-3 py-1 inline-block">
                <span className="text-sm text-orange-300">CGPA: 7.99</span>
              </div>
            </div>
          </div>
          
          <div className="education-item opacity-0 flex flex-col md:flex-row gap-6 glass-card p-6">
            <div className="md:w-24 flex-shrink-0">
              <div className="h-20 w-20 bg-dark-100 border border-orange-500/20 rounded-lg flex items-center justify-center">
                <span className="text-orange-500 font-bold">2020<br/>2022</span>
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold">Pre-University Education</h3>
              <h4 className="text-orange-400 mb-2">PCMB</h4>
              <p className="text-muted-foreground mb-2">Seshadripuram Pre University College, Tumakuru</p>
              <div className="bg-dark-100 rounded px-3 py-1 inline-block">
                <span className="text-sm text-orange-300">Percentage: 86%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

