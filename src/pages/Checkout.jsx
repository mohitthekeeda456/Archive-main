import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, cartTotal } = useCart();
  const navigate = useNavigate();
  
  // Simple form state
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zip: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 1. In a real app, this sends data to Backend
    // 2. For now, we simulate success
    alert(`Order Placed Successfully! Thank you, ${formData.firstName}.`);
    
    // 3. Redirect to Home (or a Success Page)
    navigate("/"); 
    // Note: We should also clear the cart here, but we'll add that helper later.
  };

  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <div style={{ padding: "100px", textAlign: "center" }}>
          <h2>Your cart is empty.</h2>
          <Link to="/shop" className="btn-primary">Return to Shop</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="page-container" style={pageStyle}>
        
        <div className="checkout-layout" style={layoutStyle}>
          
          {/* LEFT COLUMN: Shipping Form */}
          <div className="checkout-form" style={{ flex: 1.5 }}>
            <h2 className="serif-font" style={{ marginBottom: "30px" }}>Shipping Details</h2>
            
            <form onSubmit={handleSubmit} style={formStyle}>
              {/* Email */}
              <div style={inputGroupStyle}>
                <label style={labelStyle}>Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required 
                  placeholder="you@example.com"
                  style={inputStyle}
                  onChange={handleChange}
                />
              </div>

              {/* Name Row */}
              <div style={rowStyle}>
                <div style={inputGroupStyle}>
                  <label style={labelStyle}>First Name</label>
                  <input type="text" name="firstName" required style={inputStyle} onChange={handleChange} />
                </div>
                <div style={inputGroupStyle}>
                  <label style={labelStyle}>Last Name</label>
                  <input type="text" name="lastName" required style={inputStyle} onChange={handleChange} />
                </div>
              </div>

              {/* Address */}
              <div style={inputGroupStyle}>
                <label style={labelStyle}>Address</label>
                <input type="text" name="address" required placeholder="123 Chocolate Lane" style={inputStyle} onChange={handleChange} />
              </div>

              {/* City & Zip Row */}
              <div style={rowStyle}>
                <div style={inputGroupStyle}>
                  <label style={labelStyle}>City</label>
                  <input type="text" name="city" required style={inputStyle} onChange={handleChange} />
                </div>
                <div style={inputGroupStyle}>
                  <label style={labelStyle}>Zip / Postal Code</label>
                  <input type="text" name="zip" required style={inputStyle} onChange={handleChange} />
                </div>
              </div>

              <h2 className="serif-font" style={{ margin: "40px 0 20px" }}>Payment</h2>
              <div style={paymentBoxStyle}>
                <p style={{ margin: 0, color: "#666" }}>
                  ⚠️ This is a demo store. No real payments are processed.
                </p>
                <p style={{ margin: "10px 0 0", fontWeight: "bold", color: "#3e2723" }}>
                  Total to Pay: ${cartTotal}
                </p>
              </div>

              <button type="submit" className="btn-checkout" style={submitBtnStyle}>
                Pay Now
              </button>

            </form>
          </div>

          {/* RIGHT COLUMN: Order Summary (Sidebar) */}
          <div className="checkout-summary" style={summarySidebarStyle}>
            <h3 style={{ borderBottom: "1px solid #ddd", paddingBottom: "15px", marginTop: 0 }}>Order Summary</h3>
            
            <div style={{ maxHeight: "300px", overflowY: "auto", marginBottom: "20px" }}>
              {cart.map((item) => (
                <div key={item.id} style={summaryItemStyle}>
                  <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                    <div style={{ position: "relative" }}>
                      <img src={item.image} alt={item.name} style={{ width: "60px", height: "60px", borderRadius: "5px", objectFit: "cover" }} />
                      <span style={qtyBadgeStyle}>{item.quantity}</span>
                    </div>
                    <div>
                      <p style={{ margin: "0 0 5px", fontWeight: "500", fontSize: "0.9rem" }}>{item.name}</p>
                    </div>
                  </div>
                  <span style={{ fontSize: "0.95rem" }}>
                    {/* Simplified Price Display */}
                    ${(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div style={summaryRowStyle}>
              <span>Subtotal</span>
              <span>${cartTotal}</span>
            </div>
            <div style={summaryRowStyle}>
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div style={{ ...summaryRowStyle, fontSize: "1.2rem", fontWeight: "bold", marginTop: "15px", borderTop: "1px solid #ddd", paddingTop: "15px" }}>
              <span>Total</span>
              <span>${cartTotal}</span>
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
  padding: "40px 5%",
  maxWidth: "1200px",
  margin: "0 auto",
  minHeight: "80vh"
};

const layoutStyle = {
  display: "flex",
  gap: "60px",
  flexWrap: "wrap-reverse" // On mobile, summary goes on top (or bottom depending on preference)
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "20px"
};

const rowStyle = {
  display: "flex",
  gap: "20px"
};

const inputGroupStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "8px"
};

const labelStyle = {
  fontSize: "0.9rem",
  fontWeight: "bold",
  color: "#555"
};

const inputStyle = {
  padding: "12px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  fontSize: "1rem"
};

const paymentBoxStyle = {
  padding: "20px",
  backgroundColor: "#f9f9f9",
  border: "1px solid #eee",
  borderRadius: "8px",
  textAlign: "center"
};

const submitBtnStyle = {
  backgroundColor: "#3e2723",
  color: "#fff",
  padding: "15px",
  fontSize: "1.1rem",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "20px",
  fontWeight: "bold"
};

const summarySidebarStyle = {
  flex: 1,
  backgroundColor: "#fafafa",
  padding: "30px",
  borderRadius: "10px",
  height: "fit-content",
  border: "1px solid #eee"
};

const summaryItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "15px"
};

const qtyBadgeStyle = {
  position: "absolute",
  top: "-8px",
  right: "-8px",
  backgroundColor: "#888",
  color: "#fff",
  borderRadius: "50%",
  width: "20px",
  height: "20px",
  fontSize: "0.75rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const summaryRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "10px",
  color: "#555"
};