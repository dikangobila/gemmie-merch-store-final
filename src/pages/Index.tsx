import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProductGrid 
          products={products} 
          title="Our Complete Collection"
          showFilters={true}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;