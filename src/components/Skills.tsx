
import React, { useEffect, useRef } from 'react';
import { Code, Terminal, Globe, Database, Brain, Layout, LineChart, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
}

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C", "Python", "Solidity", "R Programming"]
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "AI & ML Interest",
      icon: Brain,
      skills: ["Artificial Intelligence", "Machine Learning"]
    },
    {
      title: "Design & Development",
      icon: Layout,
      skills: ["Web Design", "UI/UX Basics"]
    },
    {
      title: "Data Visualization",
      icon: LineChart,
      skills: ["MS Excel", "PowerBI", "Weka", "Tableau"]
    },
    {
      title: "Relavent Coursework",
      icon: FileText,
      skills: ["OS", "DSA", "OOPs"]
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const childElements = skillsRef.current?.querySelectorAll('.skill-card');
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
    <section id="skills" className="py-20">
      <div className="section-container" ref={skillsRef}>
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">A showcase of my technical abilities and interests</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.title} 
                className={cn(
                  "skill-card opacity-0 glass-card p-6 card-hover", 
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-orange-500/10 rounded-lg flex items-center justify-center mr-4">
                    <Icon className="h-5 w-5 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="bg-dark-300 text-sm px-3 py-1 rounded-full border border-orange-500/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
