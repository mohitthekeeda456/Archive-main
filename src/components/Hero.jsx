import { BadgeIcon } from "./Icons";
import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section style={styles.heroSection}>
      
      {/* LEFT SIDE: Text Content */}
      <div style={styles.content}>
        
        <span style={styles.badge}>✨ Handcrafted Luxury</span>
        
        <h1 className="serif-font" style={styles.heading}>
          Indulge in <span style={{ color: "#d2691e" }}>Pure Elegance</span>
        </h1>
        
        <p style={styles.paragraph}>
          Discover our exquisite collection of artisanal chocolates, 
          crafted with the finest ingredients and adorned with edible gold.
        </p>
        
        <div style={styles.buttonGroup}>
          <Link to="/shop" style={styles.primaryBtn}>
            Explore Collection →
          </Link>
          <Link to="/about" style={styles.secondaryBtn}>
            Our Story
          </Link>
        </div>

      </div>

      {/* RIGHT SIDE: Image with Decorative Ring */}
      <div style={styles.imageWrapper}>
        {/* The Gold Ring behind the image */}
        <div style={styles.ring}></div>
        
        {/* The Main Image */}
        <img 
          src="https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=1000&auto=format&fit=crop" 
          alt="Dark Chocolate Truffles" 
          style={styles.heroImage} 
        />
      </div>

    </section>
  );
}

// --- STYLES OBJECT ---
const styles = {
  heroSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "150px 8% 100px", // Top padding clears the fixed navbar
    minHeight: "85vh",
    backgroundColor: "#fcfcfc",
    flexWrap: "wrap", // responsive wrapping
    gap: "50px",
    overflow: "hidden" // Prevents scrollbars if ring gets too big
  },

  content: {
    flex: "1",
    minWidth: "350px", // Ensures text doesn't get too squished
    zIndex: 2
  },

  badge: {
    display: "inline-block",
    padding: "8px 16px",
    backgroundColor: "#fff8e1", // Light gold background
    color: "#8d6e63", // Brown text
    borderRadius: "30px",
    fontSize: "0.9rem",
    fontWeight: "bold",
    marginBottom: "25px",
    border: "1px solid #ffe0b2"
  },

  heading: {
    fontSize: "clamp(3rem, 5vw, 4.5rem)", // Responsive font size
    lineHeight: "1.1",
    color: "#3e2723",
    marginBottom: "25px"
  },

  paragraph: {
    fontSize: "1.1rem",
    color: "#666",
    lineHeight: "1.7",
    marginBottom: "40px",
    maxWidth: "480px"
  },

  buttonGroup: {
    display: "flex",
    gap: "20px"
  },

  primaryBtn: {
    padding: "15px 30px",
    backgroundColor: "#eeb44c", // Gold
    color: "#3e2723",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: "1rem",
    transition: "transform 0.2s",
    border: "none"
  },

  secondaryBtn: {
    padding: "14px 29px",
    backgroundColor: "transparent",
    color: "#3e2723",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: "1rem",
    border: "1px solid #ddd"
  },

  // --- IMAGE STYLES ---
  imageWrapper: {
    flex: "1",
    position: "relative", // Needed for absolute positioning of the ring
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "350px"
  },

  ring: {
    position: "absolute",
    width: "520px",
    height: "520px",
    borderRadius: "50%",
    border: "2px solid #eeb44c",
    opacity: "0.3",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) scale(1.08)", // Ring is slightly larger than image
    zIndex: 0
  },

  heroImage: {
    width: "500px",
    height: "500px",
    objectFit: "cover",
    borderRadius: "50%",
    zIndex: 1,
    boxShadow: "0 20px 50px rgba(62, 39, 35, 0.2)" // Soft luxury shadow
  }
};