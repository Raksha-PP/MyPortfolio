
import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Responsibilities', href: '#responsibilities' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        scrolled ? 'bg-dark-200/85 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="text-xl font-bold text-gradient">Raksha P</a>
          </div>

          {isMobile ? (
            <>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-orange-500 focus:outline-none"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-dark-200/95 backdrop-blur-lg border-b border-white/5 py-4 animate-fade-in">
                  <nav className="flex flex-col space-y-2 px-4">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        onClick={() => handleNavClick(item.href)}
                        className="nav-item block py-2"
                      >
                        {item.name}
                      </a>
                    ))}
                  </nav>
                  <div className="flex justify-center space-x-4 mt-4 pt-4 border-t border-white/5">
                    <a href="mailto:raksha@example.com" className="text-muted-foreground hover:text-orange-500 transition-colors">
                      <Mail size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-orange-500 transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-orange-500 transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              <nav className="hidden md:flex space-x-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="nav-item cursor-pointer"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              <div className="hidden md:flex items-center space-x-4">
                <a href="mailto:raksha@example.com" className="text-muted-foreground hover:text-orange-500 transition-colors">
                  <Mail size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-orange-500 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-orange-500 transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
