
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-earth-ivory/95 shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="text-2xl font-display font-bold text-denim-dark">
          DeniGen
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-denim-dark hover:text-denim-medium font-medium">
              Home
            </Link>
            <a href="#about" className="text-denim-dark hover:text-denim-medium font-medium">
              About
            </a>
            <a href="#products" className="text-denim-dark hover:text-denim-medium font-medium">
              Products
            </a>
            <a href="#process" className="text-denim-dark hover:text-denim-medium font-medium">
              Process
            </a>
            <a href="#impact" className="text-denim-dark hover:text-denim-medium font-medium">
              Impact
            </a>
          </div>
          <Button className="btn-primary">Shop Now</Button>
        </div>
        
        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-denim-dark p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-earth-ivory absolute top-full left-0 w-full shadow-md animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-denim-dark hover:text-denim-medium font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#about" 
              className="text-denim-dark hover:text-denim-medium font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#products" 
              className="text-denim-dark hover:text-denim-medium font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a 
              href="#process" 
              className="text-denim-dark hover:text-denim-medium font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Process
            </a>
            <a 
              href="#impact" 
              className="text-denim-dark hover:text-denim-medium font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Impact
            </a>
            <Button className="btn-primary w-full">Shop Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
