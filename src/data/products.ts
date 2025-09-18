import { Product } from "@/components/ProductCard";
import golferred from "@/assets/products/golferred.png";
import golferwhite from "@/assets/products/golferwhite.png";
import hoodiered from "@/assets/products/hoodiered.png";
import mugWhite from "@/assets/products/mug-white.png";
import alexVerga from "@/assets/products/alex-bottle.png";
import corporateWCat from "@/assets/products/corporateWCat.jpg";
import studentTie from "@/assets/products/student-tie.png";
import studentscarf from "@/assets/products/student-scarf.png";
import notebook from "@/assets/products/notebook-leather.png";
import stafftie from "@/assets/products/staff-tie.png";
import staffscarf from "@/assets/products/staff-scarf.png";
import windbreaker from "@/assets/products/windbreakernavy.png";
import tshirtRed from "@/assets/products/tshirtred.png";
import tshirtNavy from "@/assets/products/tshirtnavy.png";
import slingbag from "@/assets/products/slingbag.png";
import powerbank from "@/assets/products/powerbank.png";
import spubottle from "@/assets/products/spu-bottle.png";
import memorystick from "@/assets/products/memory-stick.png";
import stressball from "@/assets/products/stress-ball.png";
import pencilcase from "@/assets/products/pencilcase.png";
import lanyardcandy from "@/assets/products/candystripe.png";
import lanyardbold from "@/assets/products/bold-statement.png";
import drawstringbag from "@/assets/products/drawstringbag.png";
import giftbag from "@/assets/products/giftbag.png";
import sportsbeanie from "@/assets/products/sportbeanie.png";
import swimcap from "@/assets/products/swimcap.png";
import sweatband from "@/assets/products/sweatband.png";
import tshirtred from "@/assets/products/tshirtred.png";
import tshirtnavy from "@/assets/products/tshirtnavy.png";
import sportsCap from "@/assets/products/sportcap.png";

export const products: Product[] = [
  // Leisure Wear
  {
    id: "golf-red",
    name: "SPU Golfer Shirt - Red/Navy",
    price: 237.00,
    image: golferred,
    category: "Leisure Wear",
    colors: ["red", "white"],
    rating: 4.5,
    reviews: 23,
    isNew: true,
  },
  {
    id: "golf-white",
    name: "SPU Golfer Shirt - White",
    price: 237.00,
    image: golferwhite,
    category: "Leisure Wear",
    colors: ["white"],
    rating: 4.5,
    reviews: 23,
  },
  {
    id: "tshirt-red",
    name: "SPU T-Shirt - Red",
    price: 142.00,
    image: tshirtred,
    category: "Leisure Wear",
    colors: ["red"],
    rating: 4.3,
    reviews: 45,
  },
  {
    id: "tshirt-navy",
    name: "SPU T-Shirt - Navy",
    price: 142.00,
    image: tshirtnavy,
    category: "Leisure Wear",
    colors: ["navy"],
    rating: 4.3,
    reviews: 45,
  },
  {
    id: "hoodie-red",
    name: "SPU Hoodie - Red",
    price: 350.00,
    image: hoodiered,
    category: "Leisure Wear",
    colors: ["red"],
    rating: 4.7,
    reviews: 32,
    isNew: true,
  },
  {
    id: "windbreaker-navy",
    name: "SPU Windbreaker - Navy",
    price: 1097.65,
    originalPrice: 1200.00,
    image: windbreaker,
    category: "Leisure Wear",
    colors: ["navy"],
    rating: 4.8,
    reviews: 18,
    isSale: true,
  },

  // Corporate Wear
  {
    id: "blazer",
    name: "Official SPU Blazer",
    price: 924.60,
    image: corporateWCat,
    category: "Corporate Wear",
    colors: ["navy"],
    rating: 4.9,
    reviews: 12,
  },
  {
    id: "student-tie",
    name: "Student Tie",
    price: 179.40,
    image: studentTie,
    category: "Corporate Wear",
    colors: ["navy", "red"],
    rating: 4.4,
    reviews: 27,
  },
  {
    id: "student-scarf",
    name: "Student Neck Scarf",
    price: 303.60,
    image: studentscarf,
    category: "Corporate Wear",
    colors: ["navy", "red"],
    rating: 4.6,
    reviews: 15,
  },
  {
    id: "staff-tie",
    name: "Staff Tie",
    price: 179.40,
    image: stafftie,
    category: "Corporate Wear",
    colors: ["navy"],
    rating: 4.7,
    reviews: 8,
  },
  {
    id: "staff-scarf",
    name: "Staff Neck Scarf",
    price: 303.60,
    image: staffscarf,
    category: "Corporate Wear",
    colors: ["navy"],
    rating: 4.8,
    reviews: 5,
  },

  // Corporate Gifts
  {
    id: "mug",
    name: "SPU Branded Mug",
    price: 50.00,
    image: mugWhite,
    category: "Corporate Gifts",
    colors: ["white"],
    rating: 4.2,
    reviews: 156,
    isNew: true,
  },
  {
    id: "water-bottle",
    name: "Alex Verga Water Bottle (700ml)",
    price: 280.00,
    image: alexVerga,
    category: "Corporate Gifts",
    colors: ["silver", "black"],
    rating: 4.6,
    reviews: 89,
  },
  {
    id: "notebook",
    name: "A5 Leather Notebook",
    price: 562.36,
    image: notebook,
    category: "Corporate Gifts",
    colors: ["black", "brown"],
    rating: 4.8,
    reviews: 34,
  },
  {
    id: "powerbank",
    name: "Powerbank Gift Set",
    price: 480.00,
    originalPrice: 550.00,
    image: powerbank,
    category: "Corporate Gifts",
    colors: ["black"],
    rating: 4.5,
    reviews: 67,
    isSale: true,
  },
  {
    id: "spu-bottle",
    name: "SPU Bottle",
    price: 35.00,
    image: spubottle,
    category: "Corporate Gifts",
    colors: ["red", "white"],
    rating: 4.1,
    reviews: 234,
  },
  {
    id: "gift-bag",
    name: "Gift Bag (Maxi)",
    price: 38.50,
    image: giftbag,
    category: "Corporate Gifts",
    colors: ["red"],
    rating: 4.3,
    reviews: 78,
  },

  // Stationery & Accessories
  {
    id: "pencil-case",
    name: "SPU Pencil Case",
    price: 25.00,
    image: pencilcase,
    category: "Stationery & Accessories",
    colors: ["red", "navy"],
    rating: 4.0,
    reviews: 145,
  },
  {
    id: "notebook-pen",
    name: "Stanford A5 Notebook with pen",
    price: 66.00,
    image: notebook,
    category: "Stationery & Accessories",
    colors: ["black"],
    rating: 4.4,
    reviews: 92,
  },
  {
    id: "lanyard-candy",
    name: "Candystripe Lanyard",
    price: 16.50,
    image: lanyardcandy,
    category: "Stationery & Accessories",
    colors: ["red", "white"],
    rating: 4.2,
    reviews: 187,
  },
  {
    id: "lanyard-bold",
    name: "SPU Bold Statement Lanyard",
    price: 20.50,
    image: lanyardbold,
    category: "Stationery & Accessories",
    colors: ["red"],
    rating: 4.5,
    reviews: 134,
    isNew: true,
  },
  {
    id: "drawstring-bag",
    name: "SPU Drawstring Bag",
    price: 28.00,
    image: drawstringbag,
    category: "Stationery & Accessories",
    colors: ["red", "navy"],
    rating: 4.3,
    reviews: 167,
  },
  {
    id: "sling-bag",
    name: "SPU Sling bag",
    price: 28.00,
    image: slingbag,
    category: "Stationery & Accessories",
    colors: ["red", "navy"],
    rating: 4.4,
    reviews: 89,
  },
  {
    id: "memory-stick",
    name: "Neuron Memory Stick",
    price: 150.00,
    image: memorystick,
    category: "Stationery & Accessories",
    colors: ["black", "silver"],
    rating: 4.7,
    reviews: 76,
  },
  {
    id: "stress-ball",
    name: "Smile Stress Ball",
    price: 20.50,
    image: stressball,
    category: "Stationery & Accessories",
    colors: ["yellow"],
    rating: 4.1,
    reviews: 203,
  },
  {
    id: "sports-beanie",
    name: "SPU Sports Beanie",
    price: 140.00,
    image: sportsbeanie,
    category: "Sportswear & Activewear",
    colors: ["navy"],
    rating:4.0,
    reviews:207
  },
  {
    id: "swim-cap",
    name: "SPU Sports Swim Cap",
    price: 140.00,
    image: swimcap,
    category: "Sportswear & Activewear",
    colors: ["navy"],
    rating:4.0,
    reviews:207
  },
  {
    id: "sweat-band",
    name: "SPU Sports Sweat Band",
    price: 140.00,
    image: sweatband,
    category: "Sportswear & Activewear",
    colors: ["navy"],
    rating:4.0,
    reviews:207
  },
  {
    id: "sports-tshirt navy",
    name: "SPU Sports T-Shirt - Navy",
    price: 140.00,
    image: tshirtNavy,
    category: "Sportswear & Activewear",
    colors: ["navy"],
    rating:4.0,
    reviews:207
  },
  {
    id: "sports-tshirt red",
    name: "SPU Sports T-Shirt - Red",
    price: 140.00,
    image: tshirtRed,
    category: "Sportswear & Activewear",
    colors: ["navy"],
    rating:4.0,
    reviews:207
  },
  {
    id: "sports-cap",
    name: "SPU Sports Cap",
    price: 140.00,
    image: sportsCap,
    category: "Sportswear & Activewear",
    colors: ["navy"],
    rating:4.0,
    reviews:207
  },


];