
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Products from '@/components/sections/Products';
import Process from '@/components/sections/Process';
import Impact from '@/components/sections/Impact';
import Newsletter from '@/components/sections/Newsletter';
import { useEffect } from 'react';

const Index = () => {
  // Add smooth scroll behavior for anchor links
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return (
    <div className="min-h-screen denim-texture">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Process />
      <Impact />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
