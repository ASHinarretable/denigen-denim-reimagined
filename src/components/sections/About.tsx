
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="section bg-earth-beige">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">Our Sustainable Vision</h2>
            <p className="mb-4 text-lg">
              At DeniGen, we believe in a fashion industry that respects both people and the planet. Our journey began with a simple question: How can we transform denim waste into beautiful, functional pieces that tell a story?
            </p>
            <p className="mb-6 text-lg">
              Each year, millions of denim garments end up in landfills, with the average pair of jeans consuming over 7,000 liters of water to produce. We're changing that narrative by giving discarded denim a second life through innovative upcycling techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">Learn More</Button>
              <Button variant="outline" className="btn-secondary">Meet Our Team</Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1584094278232-a4c35a30091f?q=80&w=1000&auto=format"
                alt="Sustainable denim workspace" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-denim-dark text-white p-6 rounded-lg max-w-xs">
              <p className="font-semibold mb-2">Our Promise</p>
              <p className="text-sm">Every DeniGen piece is handcrafted with care, using 100% upcycled materials and ethical production practices.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
