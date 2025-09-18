import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
        <p className="text-muted-foreground mb-8">
          Your order has been successfully placed. We will notify you once it is ready for delivery or pickup.
        </p>
        <Button size="lg" onClick={() => navigate("/")}>
          Return to Shop
        </Button>
      </main>
      <Footer />
    </div>
  );
};

export default OrderConfirmation;