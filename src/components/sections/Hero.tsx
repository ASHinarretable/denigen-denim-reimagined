
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 denim-texture"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1605518286209-48fca4cf6306?q=80&w=2000&auto=format')",
          backgroundPosition: "center right",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-earth-ivory/95 via-earth-ivory/80 to-transparent"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight animate-slide-in">
            Reimagine Denim.<br />Redefine Fashion.
          </h1>
          <p className="text-lg md:text-xl mb-8 text-denim-dark/80 animate-fade-in" style={{animationDelay: "0.3s"}}>
            Transforming discarded denim into unique, stylish, and sustainable fashion for a new generation of conscious consumers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: "0.6s"}}>
            <Button className="btn-primary">Shop Collection</Button>
            <Button variant="outline" className="btn-secondary">Our Process</Button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-6 animate-fade-in" style={{animationDelay: "0.9s"}}>
            <div className="stat-card p-3 rounded-lg">
              <p className="text-3xl font-bold text-denim-dark animate-scale-in">2,500+</p>
              <p className="text-sm text-denim-dark/70">Denim Items Upcycled</p>
            </div>
            <div className="stat-card p-3 rounded-lg">
              <p className="text-3xl font-bold text-denim-dark animate-scale-in" style={{animationDelay: "0.1s"}}>15,000L</p>
              <p className="text-sm text-denim-dark/70">Water Saved</p>
            </div>
            <div className="stat-card p-3 rounded-lg">
              <p className="text-3xl font-bold text-denim-dark animate-scale-in" style={{animationDelay: "0.2s"}}>100%</p>
              <p className="text-sm text-denim-dark/70">Sustainable Materials</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
