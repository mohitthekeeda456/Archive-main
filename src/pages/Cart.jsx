import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../Components/Footer";
import { useCart } from "../context/CartContext";

export default function Cart() {
  // 1. Get 'updateQuantity' from the context
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  // 2. The Logic to handle "-" click
  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, -1); // Decrease by 1
    } else {
      removeFromCart(item.id); // If it's 1, remove it
    }
  };

  // 3. The Logic to handle "+" click
  const increaseQuantity = (item) => {
    updateQuantity(item.id, 1); // Increase by 1
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
          <Link to="/shop" style={btnPrimaryStyle}>
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
                  <button style={qtyBtnStyle} onClick={() => decreaseQuantity(item)}>−</button>
                  <span style={{ fontWeight: "bold" }}>{item.quantity}</span>
                  <button style={qtyBtnStyle} onClick={() => increaseQuantity(item)}>+</button>
                </div>

                {/* Total Price for this Item */}
                <div style={{ flex: 1, textAlign: "right", fontWeight: "bold", color: "#3e2723" }}>
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
              <span>Free</span>
            </div>

            <div style={{ ...summaryRowStyle, fontSize: "1.2rem", fontWeight: "bold", marginTop: "20px", color: "#3e2723" }}>
              <span>Total</span>
              <span>${cartTotal}</span>
            </div>

            <Link to="/checkout" style={checkoutBtnStyle}>
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
  padding: "120px 5%",
  maxWidth: "1200px",
  margin: "0 auto",
  minHeight: "60vh"
};

const emptyCartStyle = {
  textAlign: "center",
  padding: "150px 20px",
  minHeight: "50vh"
};

const btnPrimaryStyle = {
    padding: "12px 25px",
    backgroundColor: "#3e2723",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold"
};

const layoutStyle = {
  display: "flex",
  gap: "50px",
  flexWrap: "wrap"
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
  color: "#d32f2f",
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
  height: "fit-content"
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