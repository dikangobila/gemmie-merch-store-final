import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Heart
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Shop": [
      "Leisure Wear",
      "Corporate Wear", 
      "Corporate Gifts",
      "Stationery & Accessories",
      "Sportswear & Activewear",
      "New Arrivals",
      "Sale Items"
    ],
    "Customer Service": [
      "Contact Us",
      "Shipping Info",
      "Returns & Exchanges",
      "Size Guide",
      "FAQ",
      "Track Your Order"
    ],
    "About": [
      "Our Story",
      "Sol Plaatje University",
      "Quality Promise",
      "Student Discounts",
      "Campus Pickup",
      "Bulk Orders"
    ]
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">G</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Gemmie</h2>
                <p className="text-secondary-foreground/80">Merchandise</p>
              </div>
            </div>
            
            <p className="text-secondary-foreground/90 max-w-md">
              Your official destination for Sol Plaatje University merchandise. 
              Quality apparel, accessories, and gifts that celebrate SPU pride.
            </p>

            {/* Newsletter */}
            <div className="space-y-3">
              <h3 className="font-semibold text-white">Stay Updated</h3>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-secondary-foreground/10 border-secondary-foreground/20 text-white placeholder:text-secondary-foreground/60"
                />
                <Button size="icon" className="bg-primary hover:bg-primary/90">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-secondary-foreground/70">
                Get notified about new products and special offers
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-secondary-foreground/80 hover:text-white hover:bg-secondary-foreground/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground/80 hover:text-white hover:bg-secondary-foreground/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground/80 hover:text-white hover:bg-secondary-foreground/10">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="font-semibold text-white">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-secondary-foreground/80 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Separator className="bg-secondary-foreground/20" />

      {/* Contact Info */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <MapPin className="h-5 w-5 text-primary" />
            <div>
              <p className="text-white font-medium">Visit Us</p>
              <p className="text-secondary-foreground/80 text-sm">SPU Campus Store</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <Phone className="h-5 w-5 text-primary" />
            <div>
              <p className="text-white font-medium">Call Us</p>
              <p className="text-secondary-foreground/80 text-sm">+27 53 xxx xxxx</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <p className="text-white font-medium">Email Us</p>
              <p className="text-secondary-foreground/80 text-sm">merchandise@spu.ac.za</p>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-secondary-foreground/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-secondary-foreground/80">
            <span>© {currentYear} Gemmie Merchandise. All rights reserved.</span>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          
          <div className="flex items-center space-x-1 text-sm text-secondary-foreground/80">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-primary fill-current" />
            <span>for SPU students</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;