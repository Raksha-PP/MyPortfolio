
import React from 'react';
import { Mail, Linkedin, Github, ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer id="contact" className="py-12 bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <button 
            onClick={scrollToTop}
            className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </button>
        </div>
        
        <div className="flex flex-col items-center space-y-6">
          <h2 className="text-2xl font-bold">Get In Touch</h2>
          
          <div className="flex space-x-8">
            <a href="mailto:raksha@example.com" className="flex flex-col items-center group">
              <div className="h-12 w-12 bg-dark-200 rounded-full flex items-center justify-center mb-2 group-hover:bg-orange-500/10 transition-colors">
                <Mail size={20} className="text-orange-500" />
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-white transition-colors">Email</span>
            </a>
            
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
              <div className="h-12 w-12 bg-dark-200 rounded-full flex items-center justify-center mb-2 group-hover:bg-orange-500/10 transition-colors">
                <Linkedin size={20} className="text-orange-500" />
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-white transition-colors">LinkedIn</span>
            </a>
            
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
              <div className="h-12 w-12 bg-dark-200 rounded-full flex items-center justify-center mb-2 group-hover:bg-orange-500/10 transition-colors">
                <Github size={20} className="text-orange-500" />
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-white transition-colors">GitHub</span>
            </a>
          </div>
          
          <div className="w-16 h-1 bg-orange-500/30 rounded-full my-6"></div>
          
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Raksha P. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
