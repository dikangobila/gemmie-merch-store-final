import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const Sportswear = () => {
  const sportswearProducts = products.filter(product => 
    product.category.toLowerCase().includes('sportswear') || 
    product.category.toLowerCase().includes('activewear') ||
    product.category.toLowerCase().includes('athletic') ||
    product.category.toLowerCase().includes('gym')
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="bg-gradient-subtle py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Sportswear & Activewear</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our range of sportswear and activewear designed for performance and comfort.
            </p>
          </div>
        </div>
        <ProductGrid 
          products={sportswearProducts} 
          title="Sportswear & Activewear Collection"
          showFilters={true}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Sportswear;