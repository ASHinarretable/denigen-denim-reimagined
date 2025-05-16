
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const impactStats = [
  {
    label: "Denim Saved",
    value: 5840,
    unit: "kg",
    goal: 10000,
    description: "Diverted from landfills"
  },
  {
    label: "Water Saved",
    value: 24350000,
    unit: "L",
    goal: 50000000,
    description: "Compared to virgin denim production"
  },
  {
    label: "CO₂ Reduced",
    value: 29500,
    unit: "kg",
    goal: 50000,
    description: "Less carbon emissions"
  }
];

const formatLargeNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

const Impact = () => {
  return (
    <section id="impact" className="section">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">Our Environmental Impact</h2>
            <p className="mb-8 text-lg">
              Every upcycled piece makes a difference. We track our environmental impact and set ambitious goals to continue reducing waste, water usage, and carbon emissions.
            </p>
            
            <div className="space-y-8">
              {impactStats.map((stat, index) => {
                const progress = Math.round((stat.value / stat.goal) * 100);
                
                return (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{stat.label}</span>
                      <span className="text-denim-medium">
                        {formatLargeNumber(stat.value)}{stat.unit} of {formatLargeNumber(stat.goal)}{stat.unit}
                      </span>
                    </div>
                    <Progress value={progress} className="h-3 mb-2" />
                    <p className="text-sm text-denim-dark/70">{stat.description}</p>
                  </div>
                );
              })}
            </div>
            
            <Button className="mt-8 btn-primary">Learn More About Our Impact</Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1606914879478-28fc9bccd101?q=80&w=987&auto=format" 
                alt="Eco-friendly workshop" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden mt-12">
              <img 
                src="https://images.unsplash.com/photo-1530406472580-81dc39c4babe?q=80&w=987&auto=format" 
                alt="Sustainable materials" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1628168090801-f5f78de3ba1f?q=80&w=1000&auto=format" 
                alt="Community impact" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
