import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Truck } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-spu-gold" />
                <span className="text-spu-gold font-medium">Official University Merchandise</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Gemmie
                <span className="block text-spu-gold">Merchandise</span>
              </h1>
              
              <p className="text-xl text-white/90 max-w-lg">
                Show your SPU pride with our premium collection of apparel, accessories, and corporate gifts. 
                Quality merchandise for students, staff, and alumni.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/leisure-wear">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary"
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                View Catalogue
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-spu-gold" />
                <div>
                  <h3 className="font-semibold">Official Quality</h3>
                  <p className="text-sm text-white/80">University approved</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Truck className="h-8 w-8 text-spu-gold" />
                <div>
                  <h3 className="font-semibold">Fast Delivery</h3>
                  <p className="text-sm text-white/80">Campus pickup available</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Star className="h-8 w-8 text-spu-gold" />
                <div>
                  <h3 className="font-semibold">Student Friendly</h3>
                  <p className="text-sm text-white/80">Special pricing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-up">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="Sol Plaatje University Merchandise" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-card border">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">SPU</span>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">Sol Plaatje University</p>
                  <p className="text-sm text-muted-foreground">Official Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="h-full w-full bg-gradient-to-l from-white/20 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;