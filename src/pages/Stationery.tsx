import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const Stationery = () => {
  const stationeryProducts = products.filter(product => 
    product.category.toLowerCase().includes('stationery') || 
    product.category.toLowerCase().includes('accessories') ||
    product.category.toLowerCase().includes('pen') ||
    product.category.toLowerCase().includes('notebook')
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="bg-gradient-subtle py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Stationery & Accessories</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Essential university stationery and accessories to support your academic journey
            </p>
          </div>
        </div>
        <ProductGrid 
          products={stationeryProducts} 
          title="Stationery & Accessories Collection"
          showFilters={true}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Stationery;