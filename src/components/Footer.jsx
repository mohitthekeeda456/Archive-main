import React from "react";
import { Link } from "react-router-dom"; // Use Link for internal pages

export default function Footer() {
  return (
    <footer className="footer" style={{ padding: "40px 20px", textAlign: "center", backgroundColor: "#faf7f2", marginTop: "50px" }}>
      
      {/* Brand Section */}
      <div className="footer-brand" style={{ marginBottom: "20px" }}>
        <h2 className="serif-font" style={{ color: "#3e2723", marginBottom: "10px" }}>NoirSane</h2>
        <p style={{ color: "#795548", fontSize: "0.9rem" }}>Where artistry meets indulgence.</p>
      </div>



<div className="footer-links" style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px" }}>
  
  {/* Legal Links */}
  <Link to="/disclaimer" style={{ color: "#5d4037", textDecoration: "none" }}>
    Disclaimer
  </Link>
  
  <Link to="/dmca" style={{ color: "#5d4037", textDecoration: "none" }}>
    DMCA
  </Link>

  <Link to="/privacy" style={{ color: "#5d4037", textDecoration: "none" }}>
    Privacy Policy
  </Link>
  
  <Link to="/terms" style={{ color: "#5d4037", textDecoration: "none" }}>
    Terms
  </Link>

</div>

      {/* Copyright */}
      <div className="footer-copyright" style={{ fontSize: "0.8rem", color: "#a1887f" }}>
        © {new Date().getFullYear()} NoirSane. All rights reserved.
      </div>
    </footer>
  );
}