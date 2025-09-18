import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const CorporateWear = () => {
  const corporateProducts = products.filter(product => 
    product.category.toLowerCase().includes('corporate') || 
    product.category.toLowerCase().includes('blazer') ||
    product.category.toLowerCase().includes('formal')
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="bg-gradient-subtle py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Corporate Wear</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional attire for staff, events, and formal university occasions
            </p>
          </div>
        </div>
        <ProductGrid 
          products={corporateProducts} 
          title="Corporate Wear Collection"
          showFilters={true}
        />
      </main>
      <Footer />
    </div>
  );
};

export default CorporateWear;