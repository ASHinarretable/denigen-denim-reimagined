
import { Button } from '@/components/ui/button';

const Newsletter = () => {
  return (
    <section className="bg-denim-medium py-20">
      <div className="container-custom">
        <div className="bg-earth-beige rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Join the DeniGen Community</h2>
          <p className="text-denim-dark/80 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter for sustainable fashion tips, exclusive offers, and updates on our latest upcycled collections.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-md bg-white border border-denim-light/20 flex-grow focus:outline-none focus:ring-2 focus:ring-denim-dark"
              required
            />
            <Button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </Button>
          </form>
          
          <p className="mt-4 text-sm text-denim-dark/60">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from DeniGen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
