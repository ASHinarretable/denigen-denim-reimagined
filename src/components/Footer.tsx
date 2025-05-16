
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  
  return (
    <footer className="bg-denim-dark text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-display font-bold mb-4 inline-block hover:text-accent-mustard transition-colors">
              DeniGen
            </Link>
            <p className="max-w-md mb-6 text-gray-300">
              Transforming discarded denim into unique, stylish, and sustainable fashion for a new generation of conscious consumers.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md bg-denim-medium/30 border border-denim-light/20 flex-grow focus:outline-none focus:ring-2 focus:ring-accent-mustard transition-all duration-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="px-6 py-3 bg-accent-mustard text-denim-dark font-semibold rounded-md hover:bg-accent-mustard/90 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md">
                Subscribe
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-accent-mustard transition-colors hover-underline">All Products</a></li>
              <li><a href="#" className="hover:text-accent-mustard transition-colors hover-underline">Jackets</a></li>
              <li><a href="#" className="hover:text-accent-mustard transition-colors hover-underline">Bags</a></li>
              <li><a href="#" className="hover:text-accent-mustard transition-colors hover-underline">Accessories</a></li>
              <li><a href="#" className="hover:text-accent-mustard transition-colors hover-underline">Gift Cards</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-accent-mustard transition-colors hover-underline">Our Story</a></li>
              <li><a href="#impact" className="hover:text-accent-mustard transition-colors hover-underline">Sustainability</a></li>
              <li><a href="#" className="hover:text-accent-mustard transition-colors hover-underline">Blog</a></li>
              <li><a href="#" className="hover:text-accent-mustard transition-colors hover-underline">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent-mustard transition-colors hover-underline">FAQs</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-denim-light/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} DeniGen. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-accent-mustard transition-colors hover-underline">
              Instagram
            </a>
            <a href="#" className="text-gray-300 hover:text-accent-mustard transition-colors hover-underline">
              Pinterest
            </a>
            <a href="#" className="text-gray-300 hover:text-accent-mustard transition-colors hover-underline">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
