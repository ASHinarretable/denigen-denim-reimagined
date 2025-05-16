
import { Check, RotateCw, Scissors, Truck } from "lucide-react";

const processSteps = [
  {
    icon: <Check className="h-8 w-8" />,
    title: "Collect",
    description: "We source discarded denim from donations, thrift stores, and our take-back program."
  },
  {
    icon: <Scissors className="h-8 w-8" />,
    title: "Create",
    description: "Our skilled artisans clean, deconstruct, and transform the denim into new designs."
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Deliver",
    description: "We ship your unique pieces in minimal, plastic-free packaging."
  },
  {
    icon: <RotateCw className="h-8 w-8" />,
    title: "Repeat",
    description: "When you're done, send it back to us for repair or to be transformed again."
  }
];

const Process = () => {
  return (
    <section id="process" className="section bg-denim-dark text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl mb-4">How We Upcycle</h2>
          <p className="text-lg text-white/80">
            Our circular process ensures that each piece of denim lives its fullest life, reducing waste and creating beautiful, one-of-a-kind products.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div 
              key={index} 
              className="bg-denim-medium/30 p-8 rounded-lg border border-denim-light/20 text-center animate-scale-in hover-scale" 
              style={{animationDelay: `${0.15 * (index + 1)}s`}}
            >
              <div className="bg-accent-mustard text-denim-dark rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center animate-float">
                {step.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{step.title}</h3>
              <p className="text-white/80">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fade-in" style={{animationDelay: "1s"}}>
          <iframe 
            width="100%" 
            height="500" 
            src="https://www.youtube.com/embed/VIDEO_ID" 
            title="Upcycling Process" 
            className="rounded-lg shadow-2xl max-w-4xl mx-auto hover:shadow-accent-mustard/20 transition-shadow duration-300"
            style={{ background: '#1E3A54' }}
          ></iframe>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Take a behind-the-scenes look at our studio where all the magic happens. Replace with your actual video when available.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
