import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, cartTotal, clearCart } = useCart(); // Assuming clearCart exists?
  const { user } = useAuth();

  const [address, setAddress] = useState({ address: "", city: "", postalCode: "", country: "" });
  const [loading, setLoading] = useState(false);

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    
    if (!user) {
      alert("You must be logged in to place an order!");
      navigate("/login");
      return;
    }

    setLoading(true);

    // 1. Prepare Data for Backend
    const orderData = {
      user: user._id, // Send the User ID
      orderItems: cart.map(item => ({
        name: item.name,
        qty: item.quantity,
        image: item.image,
        price: item.price,
        product: item._id // Assuming your product has an ID
      })),
      shippingAddress: address,
      // Remove commas and convert to a Number (e.g. "1,200" -> 1200)
      totalPrice: parseFloat(cartTotal.toString().replace(/,/g, "")),
    };

    try {
      // 2. Send to Backend
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert("Order Placed Successfully! 🎉");
        // clearCart(); // Optional: If you have a clearCart function
        navigate("/account"); // Go to dashboard to see the order
      } else {
        alert("Failed to place order. Check console.");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: "120px 20px", maxWidth: "800px", margin: "0 auto" }}>
        <h1 className="serif-font">Checkout</h1>
        
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <form onSubmit={handlePlaceOrder} style={{ display: "grid", gap: "20px" }}>
            
            <div style={{ background: "#f9f9f9", padding: "20px", borderRadius: "8px" }}>
              <h3>Shipping Address</h3>
              <input type="text" placeholder="Address" required style={inputStyle} onChange={e => setAddress({...address, address: e.target.value})} />
              <input type="text" placeholder="City" required style={inputStyle} onChange={e => setAddress({...address, city: e.target.value})} />
              <input type="text" placeholder="Postal Code" required style={inputStyle} onChange={e => setAddress({...address, postalCode: e.target.value})} />
              <input type="text" placeholder="Country" required style={inputStyle} onChange={e => setAddress({...address, country: e.target.value})} />
            </div>

            <div style={{ background: "#f9f9f9", padding: "20px", borderRadius: "8px" }}>
              <h3>Order Summary</h3>
              <p>Total Items: {cart.length}</p>
              <h2 style={{ color: "#3e2723" }}>Total: ₹{cartTotal}</h2>
            </div>

            <button type="submit" style={btnStyle} disabled={loading}>
              {loading ? "Processing..." : "Place Order"}
            </button>
          </form>
        )}
      </div>
      <Footer />
    </>
  );
}

const inputStyle = { width: "100%", padding: "10px", margin: "5px 0", border: "1px solid #ddd" };
const btnStyle = { padding: "15px", background: "#3e2723", color: "white", border: "none", cursor: "pointer", fontSize: "1.1rem" };
