import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const LeisureWear = () => {
  const leisureProducts = products.filter(product => 
    product.category.toLowerCase().includes('leisure') || 
    product.category.toLowerCase().includes('shirt') ||
    product.category.toLowerCase().includes('hoodie') ||
    product.category.toLowerCase().includes('polo')
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="bg-gradient-subtle py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Leisure Wear</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comfortable and stylish casual wear perfect for campus life and everyday activities
            </p>
          </div>
        </div>
        <ProductGrid 
           
          title="Leisure Wear Collection"
          showFilters={true}
        />
      </main>
      <Footer />
    </div>
  );
};

export default LeisureWear;