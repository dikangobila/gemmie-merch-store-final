import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const Admin = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    category: ""
  });
// categories for products
  const categories = [
    { value: "leisure", label: "Leisure Wear" },
    { value: "corporate", label: "Corporate Wear" },
    { value: "sportswear", label: "Sportswear" },
    { value: "stationery", label: "Stationery" },
    { value: "corporate-gifts", label: "Corporate Gifts" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...product,
          price: parseFloat(product.price)
        })
      });
      
      if (response.ok) {
        alert("Product added successfully!");
        setProduct({ title: "", description: "", price: "", image: "", category: "" });
      } else {
        const error = await response.json();
        alert(`Error adding product: ${error.error}`);
      }
    } catch (error) {
      alert("Error adding product");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Add Products</h1>
        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
              <div>
                <Label htmlFor="title">Product Title</Label>
                <Input
                  id="title"
                  placeholder="e.g., SPU Polo Shirt"
                  value={product.title}
                  onChange={(e) => setProduct({...product, title: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Product description..."
                  value={product.description}
                  onChange={(e) => setProduct({...product, description: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  placeholder="199.99"
                  value={product.price}
                  onChange={(e) => setProduct({...product, price: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="image">Image URL</Label>
                <Input
                  id="image"
                  placeholder="e.g., /assets/products/tshirt.png"
                  value={product.image}
                  onChange={(e) => setProduct({...product, image: e.target.value})}
                />
              </div>
              
                <div>
    <Label>Category</Label>
    <div className="flex flex-wrap gap-2 mt-2">
      {categories.map((cat) => (
        <Button
          key={cat.value}
          type="button"
          variant={product.category === cat.value ? "default" : "outline"}
          size="sm"
          onClick={() => setProduct({...product, category: cat.value})}
        >
          {cat.label}
        </Button>
      ))}
    </div>
  </div>
                
                <Button type="submit" className="w-full">Add Product</Button>
            </form>
          </CardContent>
        </Card>

        {/* Quick Add Buttons for Sample Products */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Quick Add Sample Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "SPU Polo Shirt",
                description: "Comfortable cotton polo shirt with SPU logo",
                price: "249.99",
                image: "/assets/products/poloshirt.png",
                category: "leisure"
              },
              {
                title: "University Hoodie", 
                description: "Warm hoodie perfect for campus life",
                price: "399.99",
                image: "/assets/products/hoodie.png",
                category: "leisure"
              }
            ].map((sample, index) => (
              <Button
                key={index}
                variant="outline"
                onClick={() => setProduct(sample)}
                className="h-auto p-4 text-left"
              >
                <div>
                  <div className="font-semibold">{sample.title}</div>
                  <div className="text-sm text-muted-foreground">R{sample.price}</div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;