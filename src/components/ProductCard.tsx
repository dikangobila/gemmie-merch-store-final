import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  colors?: string[];
  rating?: number;
  reviews?: number;
  isNew?: boolean;
  isSale?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "");

  const handleAddToCart = () => {
    onAddToCart?.(product);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <Card className="group bg-gradient-card hover-lift border-border/50 overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-accent text-accent-foreground">New</Badge>
          )}
          {product.isSale && (
            <Badge className="bg-destructive text-destructive-foreground">Sale</Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-3 right-3 h-8 w-8 rounded-full bg-white/80 hover:bg-white ${
            isWishlisted ? "text-destructive" : "text-muted-foreground"
          }`}
          onClick={handleWishlist}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
        </Button>

        {/* Quick Add Button */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button 
            onClick={handleAddToCart}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Quick Add
          </Button>
        </div>
      </div>

      <CardContent className="p-4 space-y-3">
        {/* Category */}
        <p className="text-xs text-muted-foreground uppercase tracking-wider">
          {product.category}
        </p>

        {/* Product Name */}
        <h3 className="font-semibold text-card-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center space-x-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(product.rating!)
                      ? "text-spu-gold fill-current"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviews})
            </span>
          </div>
        )}

        {/* Colors */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center space-x-2">
            <span className="text-xs text-muted-foreground">Colors:</span>
            <div className="flex space-x-1">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`h-4 w-4 rounded-full border-2 ${
                    selectedColor === color ? "border-primary" : "border-border"
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-primary">
              R{product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                R{product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;