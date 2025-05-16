
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Products from '@/components/sections/Products';
import Process from '@/components/sections/Process';
import Impact from '@/components/sections/Impact';
import Newsletter from '@/components/sections/Newsletter';

const Index = () => {
  return (
    <div className="min-h-screen">
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
