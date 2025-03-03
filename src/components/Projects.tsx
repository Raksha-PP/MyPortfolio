
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Leaf, Globe, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  icon: React.ElementType;
  technologies: string[];
  details: string[];
}

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const projects: Project[] = [
    {
      title: "Virtual Herbal Garden",
      description: "An interactive learning platform with 3D models of medicinal plants.",
      icon: Leaf,
      technologies: ["HTML", "CSS", "JavaScript", "MongoDB", "Node.js"],
      details: [
        "Interactive search & filtering",
        "Virtual tours functionality",
        "Integrated educational content",
        "3D models of medicinal plants"
      ]
    },
    {
      title: "Static Webpages",
      description: "Design and development of multiple static websites for various purposes.",
      icon: Globe,
      technologies: ["HTML", "CSS", "JavaScript"],
      details: [
        "Responsive design implementation",
        "Cross-browser compatibility",
        "Modern UI/UX principles",
        "Performance optimization"
      ]
    },
    {
      title: "PII Detection",
      description: "A project for detecting Personally Identifiable Information in documents.",
      icon: Shield,
      technologies: ["Python", "Machine Learning"],
      details: [
        "Pattern recognition algorithms",
        "Data privacy compliance",
        "Sensitive information detection",
        "Document scanning capabilities"
      ]
    }
  ];
  
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
    
    const childElements = projectsRef.current?.querySelectorAll('.project-card');
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
    <section id="projects" className="py-20 bg-dark-300">
      <div className="section-container" ref={projectsRef}>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">A selection of my academic and personal projects</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div 
                key={project.title} 
                className="project-card opacity-0 glass-card overflow-hidden card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 bg-dark-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="h-20 w-20 text-orange-500/20" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark-200 to-transparent">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-orange-400">Features:</h4>
                    <ul className="space-y-1">
                      {project.details.map((detail, i) => (
                        <li key={i} className="text-sm flex items-center">
                          <span className="h-1.5 w-1.5 rounded-full bg-orange-500 mr-2"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-2">
                    <h4 className="text-sm font-medium text-orange-400 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <span 
                          key={tech} 
                          className="bg-dark-200 text-xs px-2 py-1 rounded-full"
                        >
                          {tech}
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

export default Projects;
