import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../Components/Footer";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, addToCart, cartTotal } = useCart();

  // Helper to handle quantity decrease
  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      // If qty > 1, just decrease logic (we need a custom decrease function in context ideally, 
      // but for now, we can simple add a "decrease" function to Context later.
      // For this moment, let's just tell user to remove it if they want 0, 
      // OR we can implement a specific 'updateQuantity' function.
      // Let's keep it simple: We will handle this in the next update.
      // For now, this button is a placeholder for the update logic.
      alert("To decrease quantity, remove the item and add it again (We will fix this logic next!)");
    } else {
      removeFromCart(item.id);
    }
  };

  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <div style={emptyCartStyle}>
          <h2 className="serif-font" style={{ fontSize: "2rem", marginBottom: "20px" }}>Your Cart is Empty</h2>
          <p style={{ color: "#666", marginBottom: "30px" }}>
            Looks like you haven't indulged in any chocolate yet.
          </p>
          <Link to="/shop" className="btn-primary">
            Start Shopping
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="page-container" style={pageStyle}>
        
        <h1 className="serif-font" style={{ textAlign: "center", marginBottom: "50px" }}>Your Shopping Cart</h1>

        <div className="cart-layout" style={layoutStyle}>
          
          {/* LEFT: Cart Items List */}
          <div className="cart-items" style={{ flex: 2 }}>
            <div style={headerRowStyle}>
              <span style={{ flex: 3 }}>Product</span>
              <span style={{ flex: 1, textAlign: "center" }}>Quantity</span>
              <span style={{ flex: 1, textAlign: "right" }}>Total</span>
            </div>

            {cart.map((item) => (
              <div key={item.id} style={itemRowStyle}>
                
                {/* Product Image & Name */}
                <div style={{ flex: 3, display: "flex", alignItems: "center", gap: "20px" }}>
                  <img src={item.image} alt={item.name} style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px" }} />
                  <div>
                    <h4 style={{ margin: "0 0 5px 0", fontSize: "1.1rem" }}>{item.name}</h4>
                    <p style={{ margin: 0, color: "#888", fontSize: "0.9rem" }}>{item.price}</p>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      style={removeLinkStyle}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                  <button style={qtyBtnStyle} onClick={() => decreaseQuantity(item)}>-</button>
                  <span style={{ fontWeight: "bold" }}>{item.quantity}</span>
                  <button style={qtyBtnStyle} onClick={() => addToCart(item)}>+</button>
                </div>

                {/* Total Price for this Item */}
                <div style={{ flex: 1, textAlign: "right", fontWeight: "bold", color: "#3e2723" }}>
                  {/* Simple calc for display: Price * Qty */}
                  ${(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}
                </div>

              </div>
            ))}
          </div>

          {/* RIGHT: Order Summary */}
          <div className="cart-summary" style={summaryBoxStyle}>
            <h3 className="serif-font" style={{ marginTop: 0, marginBottom: "20px", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>Order Summary</h3>
            
            <div style={summaryRowStyle}>
              <span>Subtotal</span>
              <span>${cartTotal}</span>
            </div>
            <div style={summaryRowStyle}>
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>

            <div style={{ ...summaryRowStyle, fontSize: "1.2rem", fontWeight: "bold", marginTop: "20px", color: "#3e2723" }}>
              <span>Total</span>
              <span>${cartTotal}</span>
            </div>

            <Link to="/checkout" className="btn-checkout" style={checkoutBtnStyle}>
              Proceed to Checkout
            </Link>

            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <Link to="/shop" style={{ color: "#666", textDecoration: "none", fontSize: "0.9rem" }}>
                 or Continue Shopping
              </Link>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

// --- STYLES ---
const pageStyle = {
  padding: "40px 5%", // Clean padding
  maxWidth: "1200px",
  margin: "0 auto",
  minHeight: "60vh" // Ensures footer doesn't jump up on empty cart
};

const emptyCartStyle = {
  textAlign: "center",
  padding: "100px 20px",
  minHeight: "50vh"
};

const layoutStyle = {
  display: "flex",
  gap: "50px",
  flexWrap: "wrap" // Responsive: Stack on mobile
};

const headerRowStyle = {
  display: "flex",
  paddingBottom: "15px",
  borderBottom: "1px solid #eee",
  color: "#888",
  fontSize: "0.9rem",
  textTransform: "uppercase",
  letterSpacing: "1px"
};

const itemRowStyle = {
  display: "flex",
  alignItems: "center",
  padding: "25px 0",
  borderBottom: "1px solid #eee"
};

const removeLinkStyle = {
  background: "none",
  border: "none",
  color: "#d32f2f", // Red text
  cursor: "pointer",
  fontSize: "0.8rem",
  textDecoration: "underline",
  padding: 0,
  marginTop: "5px"
};

const qtyBtnStyle = {
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  border: "1px solid #ddd",
  background: "#fff",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.2rem",
  color: "#555"
};

const summaryBoxStyle = {
  flex: 1,
  backgroundColor: "#f9f9f9",
  padding: "30px",
  borderRadius: "10px",
  height: "fit-content" // Don't stretch full height
};

const summaryRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "15px",
  color: "#555"
};

const checkoutBtnStyle = {
  display: "block",
  width: "100%",
  padding: "15px",
  backgroundColor: "#3e2723",
  color: "#fff",
  textAlign: "center",
  textDecoration: "none",
  borderRadius: "5px",
  fontWeight: "bold",
  marginTop: "20px",
  transition: "background 0.3s"
};