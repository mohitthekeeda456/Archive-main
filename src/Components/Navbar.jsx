import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.png";

export default function Navbar() {
  const { cart } = useCart(); // Get the cart array
  const { user } = useAuth();

  // Calculate total items (e.g., 2 chocolates of qty 3 = 6 items)
  const totalItems = cart ? cart.reduce((total, item) => total + item.quantity, 0) : 0;

  return (
    <>
      {/* 1. The Fixed Navbar */}
      <nav style={styles.navbar}>
        
        {/* LEFT SECTION: Logo & Menu Links */}
        <div style={styles.navLeft}>
          
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="NoirSane" style={styles.logo} />
          </Link>

          {/* Menu Links (Hidden on small screens if we were doing mobile, but perfect for desktop) */}
          <div style={styles.linksContainer}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/shop" style={styles.link}>Shop</Link>
            <Link to="/blog" style={styles.link}>Journal</Link>
            <Link to="/about" style={styles.link}>About</Link>
            <Link to="/contact" style={styles.link}>Contact</Link>
            
            {/* Admin Dashboard Link */}
            {user && user.isAdmin && (
              <Link to="/dashboard" style={styles.dashboardLink}>
                Dashboard
              </Link>
            )}
          </div>
        </div>

        {/* RIGHT SECTION: User & Cart */}
        <div style={styles.navRight}>
          
          {/* User Greeting / Login */}
          {user ? (
            <Link to="/account" style={styles.link}>
              Hello, {user.name.split(" ")[0]}
            </Link>
          ) : (
            <Link to="/login" style={styles.link}>
              Login
            </Link>
          )}

          {/* Cart Icon with Badge */}
          <Link to="/cart" style={styles.cartContainer}>
            {/* Simple SVG Cart Icon */}
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>

            {/* Red Notification Badge */}
            {totalItems > 0 && (
              <span style={styles.badge}>{totalItems}</span>
            )}
          </Link>
        </div>
      </nav>

      {/* 2. The Spacer (Pushes content down so it's not hidden behind navbar) */}
      <div style={{ height: "90px" }}></div>
    </>
  );
}

// --- CLEAN STYLES OBJECT ---
const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "90px", // Slightly taller for elegance
    backgroundColor: "rgba(255, 255, 255, 0.98)", // Almost opaque
    backdropFilter: "blur(10px)", // Glass effect
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 6%", // Nice spacing from edges
    boxShadow: "0 2px 15px rgba(0,0,0,0.04)", // Very subtle shadow
    zIndex: 1000,
    boxSizing: "border-box",
  },
  
  navLeft: {
    display: "flex",
    alignItems: "center",
    gap: "50px", // Space between Logo and the Menu Links
  },

  logo: {
    height: "60px", // Fixed height ensures it fits perfectly
    width: "auto",
    objectFit: "contain",
    display: "block", // Removes weird image spacing
  },

  linksContainer: {
    display: "flex",
    gap: "30px", // Space between each link
    alignItems: "center",
  },

  link: {
    textDecoration: "none",
    color: "#3e2723", // Dark Chocolate color
    fontSize: "1rem",
    fontWeight: "500",
    fontFamily: "'Inter', sans-serif", // Clean font for navigation
    letterSpacing: "0.5px",
    transition: "color 0.2s ease",
  },

  dashboardLink: {
    textDecoration: "none",
    color: "#d2691e", // Distinct Orange color for Admin
    fontWeight: "bold",
    fontSize: "1rem",
    border: "1px solid #d2691e",
    padding: "5px 12px",
    borderRadius: "20px",
  },

  navRight: {
    display: "flex",
    alignItems: "center",
    gap: "30px", // Space between User name and Cart
  },

  cartContainer: {
    position: "relative",
    color: "#3e2723",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },

  badge: {
    position: "absolute",
    top: "-6px",
    right: "-10px",
    backgroundColor: "#d32f2f", // Bright Red
    color: "white",
    borderRadius: "50%",
    width: "18px",
    height: "18px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "10px",
    fontWeight: "bold",
    border: "2px solid #fff", // White ring around the dot
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
  }
};