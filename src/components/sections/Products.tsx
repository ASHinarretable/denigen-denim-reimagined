
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Upcycled Denim Tote",
    category: "Bags",
    price: 75,
    image: "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?q=80&w=987&auto=format"
  },
  {
    id: 2,
    name: "Patchwork Denim Jacket",
    category: "Jackets",
    price: 189,
    image: "https://images.unsplash.com/photo-1634551544595-6394b0d15297?q=80&w=987&auto=format"
  },
  {
    id: 3,
    name: "Denim Wall Art",
    category: "Home Decor",
    price: 129,
    image: "https://images.unsplash.com/photo-1502221642704-2efeb48dbd0f?q=80&w=987&auto=format"
  }
];

const Products = () => {
  return (
    <section id="products" className="section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl mb-4">Featured Collections</h2>
          <p className="text-lg text-denim-dark/80">
            Each piece in our collection is unique, sustainable, and tells its own story. From fashion to home decor, discover the versatility of upcycled denim.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <Card key={product.id} className="border-none overflow-hidden shadow-lg product-card animate-fade-in" style={{animationDelay: `${0.2 * (index + 1)}s`}}>
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardContent className="pt-6">
                <div className="text-sm text-denim-medium font-medium mb-1">{product.category}</div>
                <h3 className="font-display text-xl mb-2">{product.name}</h3>
                <p className="font-semibold">${product.price}</p>
              </CardContent>
              <CardFooter className="pt-2 pb-6">
                <Button className="w-full bg-denim-medium hover:bg-denim-dark hover:translate-y-[-2px] transition-all duration-300">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-fade-in" style={{animationDelay: "0.8s"}}>
          <Button className="btn-secondary pulse-animation">View All Products</Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
