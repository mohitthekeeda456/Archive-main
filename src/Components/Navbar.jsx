import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // <--- 1. Import the Hook
import { CartIcon } from "./Icons";

export default function Navbar() {
  const { cartCount } = useCart(); // <--- 2. Get the count from the Brain

  return (
    <nav className="navbar" style={{ position: "relative", zIndex: 999 }}>
      <div className="nav-left">
        <Link to="/" className="logo">NoirSane</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>

      <div className="nav-right">
        <Link to="/account" className="nav-link">My Account</Link>
        
        {/* 3. Update the Cart Icon Section */}
        <Link to="/cart" className="cart-icon" style={{ position: "relative", display: "flex", alignItems: "center" }}>
          <CartIcon />
          
          {/* Only show badge if count is > 0 */}
          {cartCount > 0 && (
            <span style={{
              position: "absolute",
              top: "-8px",
              right: "-8px",
              backgroundColor: "#d2691e", // Chocolate/Orange color
              color: "white",
              borderRadius: "50%",
              width: "18px",
              height: "18px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "11px",
              fontWeight: "bold"
            }}>
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}