import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { CartIcon } from "./Icons";

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <>
      {/* 1. The Navbar itself */}
      <nav style={navbarStyle}>
        
        {/* Left Side: Logo & Links */}
        <div className="nav-left">
          <Link to="/" className="logo" style={logoStyle}>NoirSane</Link>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Right Side: Account & Cart */}
        <div className="nav-right" style={{ display: "flex", alignItems: "center", gap: "25px" }}>
          <Link to="/account" className="nav-link" style={{ textDecoration: "none", color: "#3e2723", fontWeight: "500" }}>
            My Account
          </Link>
          
          {/* 2. The Improved Cart Icon */}
          <Link to="/cart" className="cart-container" style={cartContainerStyle}>
            <CartIcon />
            
            {/* The Badge (Only shows if count > 0) */}
            {cartCount > 0 && (
              <span style={badgeStyle}>
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </nav>

      {/* 3. The Spacer */}
      {/* Since the navbar is 'fixed', it floats over the content. 
          We need this invisible empty box to push the page content down 
          so the first headline isn't hidden behind the navbar. */}
      <div style={{ height: "80px" }}></div>
    </>
  );
}

// --- STYLES ---

const navbarStyle = {
  position: "fixed",      // Keeps it stuck to the top
  top: 0,
  left: 0,
  width: "100%",
  height: "80px",         // Fixed height
  backgroundColor: "rgba(255, 255, 255, 0.95)", // Slightly transparent white
  backdropFilter: "blur(10px)", // The "Frosted Glass" effect
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 5%",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)", // Subtle shadow for depth
  zIndex: 1000,           // Ensures it stays on top of images
  boxSizing: "border-box" // Ensures padding doesn't break width
};

const logoStyle = {
  fontSize: "1.8rem",
  fontWeight: "bold",
  fontFamily: "'Playfair Display', serif", // Ensure you use your serif font
  color: "#3e2723",
  textDecoration: "none",
  marginRight: "40px"
};

const cartContainerStyle = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: "#3e2723",
  transition: "transform 0.2s ease" // Adds a little bounce when clicked
};

const badgeStyle = {
  position: "absolute",
  top: "-8px",
  right: "-10px",
  backgroundColor: "#d32f2f", // A richer red/orange color
  color: "white",
  borderRadius: "50%",
  width: "20px",        // Fixed width
  height: "20px",       // Fixed height (makes it a perfect circle)
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "11px",
  fontWeight: "bold",
  boxShadow: "0 2px 4px rgba(0,0,0,0.2)", // Tiny shadow to make it pop
  border: "2px solid #fff" // White border separates it from the icon
};