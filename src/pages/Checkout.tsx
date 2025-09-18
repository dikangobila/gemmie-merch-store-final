import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Checkout = () => {
  const { cartItems, setCartItems } = useCart();
  const navigate = useNavigate();
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  const handleConfirmOrder = async () => {
  try {
    // Simulate saving the order (e.g., API call)
    const response = await fetch("http://localhost:8080/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cartItems,
        subtotal,
        shipping,
        total,
      }),
    });

    console.log("Response status:", response.status);
    console.log("Response body:", await response.text());

    if (!response.ok) {
      throw new Error("Failed to save the order");
    }

    console.log("Order confirmed:", cartItems);

    // Clear the cart
    setCartItems([]);

    // Redirect to an order confirmation page
    navigate("/order-confirmation");
  } catch (error) {
    console.error("Error confirming order:", error);
    alert("There was an issue confirming your order. Please try again.");
  }
};

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        {cartItems.length === 0 ? (
          <div className="text-center space-y-6">
            <p className="text-muted-foreground">Your cart is empty. Add some items to proceed.</p>
            <Link to="/">
              <Button>Return to Shop</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.quantity} x R{item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <p className="font-bold">R{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>R{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `R${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>R{total.toFixed(2)}</span>
              </div>
            </div>

            <Button className="w-full" size="lg" onClick={handleConfirmOrder}>
              Confirm Order
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;