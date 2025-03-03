
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="home" className="min-h-screen flex items-center py-20 pt-32 lg:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:max-w-2xl space-y-8 mb-12 lg:mb-0">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-left opacity-0 animate-fade-in animate-delay-200">
                Hello, I'm <span className="text-gradient">Raksha P</span>
              </h1>
              <p className="text-xl text-muted-foreground mt-4 text-left opacity-0 animate-fade-in animate-delay-300">
                B.E Student passionate about AI, Machine Learning & Blockchain
              </p>
            </div>
            
            <p className="text-muted-foreground leading-relaxed text-left opacity-0 animate-fade-in animate-delay-400">
              As an ambitious B.E student in CSE(AIML), I've developed a strong foundation in core programming languages and cutting-edge technologies. My expertise includes proficiency in C, Python, coupled with a deep understanding of DSA. I'm enthusiastic about exploring the innovative potential of Blockchain technology, showcasing my enthusiasm for innovation and problem-solving. Throughout my studies, I've consistently demonstrated excellent analytical skills and a drive to apply theoretical concepts to real-world challenges.
            </p>
            
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in animate-delay-500">
              <Button variant="default" className="bg-orange-500 hover:bg-orange-400 text-white transition-all">
                <a href="#projects" className="flex items-center">
                  View Projects
                </a>
              </Button>
              
              <Button variant="outline" className="border-orange-500/20 hover:border-orange-500 hover:bg-orange-500/5 transition-all">
                <a href="#contact" className="flex items-center">
                  Contact Me
                </a>
              </Button>
            </div>
            
            {isMobile && (
              <div className="flex items-center space-x-4 pt-4 opacity-0 animate-fade-in animate-delay-600">
                <a href="mailto:rakshap.1si22ci043@gmail.com" className="text-muted-foreground hover:text-orange-500 transition-colors">
                  <Mail size={20} />
                </a>
                <a href="https://www.linkedin.com/in/raksha-p-518b2231a/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-orange-500 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/Raksha-PP" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-orange-500 transition-colors">
                  <Github size={20} />
                </a>
              </div>
            )}
          </div>
          
          <div className="lg:w-1/2 flex justify-center lg:justify-end opacity-0 animate-scale-in animate-delay-600">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full blur-lg opacity-30 animate-pulse"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-orange-500/30 glass-card p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-dark-100 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/28f5c535-308a-4c30-8b5c-a7d70fcc07bd.png" 
                    alt="Raksha P" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
