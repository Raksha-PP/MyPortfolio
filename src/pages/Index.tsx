
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Responsibilities from '@/components/Responsibilities';
import Footer from '@/components/Footer';

const Index = () => {
  // Smooth scroll implementation for anchor links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Initial check for hash in URL
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-200 text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Responsibilities />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
