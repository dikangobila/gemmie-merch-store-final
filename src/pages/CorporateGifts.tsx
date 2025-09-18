import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const CorporateGifts = () => {
  const giftProducts = products.filter(product => 
    product.category.toLowerCase().includes('gift') || 
    product.category.toLowerCase().includes('mug') ||
    product.category.toLowerCase().includes('accessories')
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="bg-gradient-subtle py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Corporate Gifts</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium branded gifts perfect for university events, alumni relations, and corporate partnerships
            </p>
          </div>
        </div>
        <ProductGrid 
          products={giftProducts} 
          title="Corporate Gifts Collection"
          showFilters={true}
        />
      </main>
      <Footer />
    </div>
  );
};

export default CorporateGifts;