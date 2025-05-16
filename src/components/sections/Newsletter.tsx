
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section className="bg-denim-medium py-20">
      <div className="container-custom">
        <div 
          className={`bg-earth-beige rounded-2xl p-8 md:p-12 text-center transition-transform duration-500 ${isHovered ? 'shadow-xl' : 'shadow-lg'}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 animate-fade-in">Join the DeniGen Community</h2>
          <p className="text-denim-dark/80 max-w-2xl mx-auto mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
            Subscribe to our newsletter for sustainable fashion tips, exclusive offers, and updates on our latest upcycled collections.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto animate-fade-in" style={{animationDelay: "0.4s"}}>
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-md bg-white border border-denim-light/20 flex-grow focus:outline-none focus:ring-2 focus:ring-denim-dark transition-all duration-300"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button 
              type="submit" 
              className="btn-primary"
            >
              Subscribe
            </Button>
          </form>
          
          <p className="mt-4 text-sm text-denim-dark/60 animate-fade-in" style={{animationDelay: "0.6s"}}>
            By subscribing, you agree to our Privacy Policy and consent to receive updates from DeniGen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
