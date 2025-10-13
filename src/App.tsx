import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LeisureWear from "./pages/LeisureWear";
import CorporateWear from "./pages/CorporateWear";
import CorporateGifts from "./pages/CorporateGifts";
import Stationery from "./pages/Stationery";
import Sportswear from "./pages/Sportswear";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";
import Admin from "./pages/admin";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            <Route path="/leisure-wear" element={<LeisureWear />} />
            <Route path="/corporate-wear" element={<CorporateWear />} />
            <Route path="/corporate-gifts" element={<CorporateGifts />} />
            <Route path="/stationery" element={<Stationery />} />
            <Route path="/sportswear" element={<Sportswear />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
