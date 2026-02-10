import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../Components/Footer";
import { useAuth } from "../context/AuthContext";

export default function AdminDashboard() {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <div style={pageStyle}>
        
        {/* Header Section */}
        <div style={headerStyle}>
          <h1 className="serif-font" style={{ fontSize: "2.5rem", marginBottom: "10px" }}>Admin Dashboard</h1>
          <p style={{ color: "#666" }}>Welcome back, {user?.name}. Here is your command center.</p>
        </div>

        {/* The Grid of Tools */}
        <div style={gridStyle}>

          {/* Card 1: Manage Products */}
          <Link to="/admin" style={cardStyle}>
            <div style={iconStyle}>📦</div>
            <h3 style={cardTitleStyle}>Manage Inventory</h3>
            <p style={cardDescStyle}>View, edit, delete, or feature your chocolates.</p>
          </Link>

          {/* Card 2: Add Product */}
          <Link to="/host" style={cardStyle}>
            <div style={iconStyle}>✨</div>
            <h3 style={cardTitleStyle}>Add New Product</h3>
            <p style={cardDescStyle}>Launch a new chocolate creation to the shop.</p>
          </Link>

          {/* Card 3: Write Blog */}
          <Link to="/write" style={cardStyle}>
            <div style={iconStyle}>✍️</div>
            <h3 style={cardTitleStyle}>Write Article</h3>
            <p style={cardDescStyle}>Publish a new story to the Cocoa Chronicles.</p>
          </Link>

          {/* Card 4: View Shop (Quick Link) */}
          <Link to="/shop" style={cardStyle}>
            <div style={iconStyle}>👁️</div>
            <h3 style={cardTitleStyle}>View Shop</h3>
            <p style={cardDescStyle}>See how the store looks to your customers.</p>
          </Link>

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
  minHeight: "80vh",
  backgroundColor: "#fcfcfc"
};

const headerStyle = { 
  textAlign: "center", 
  marginBottom: "60px" 
};

const gridStyle = { 
  display: "grid", 
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
  gap: "30px" 
};

const cardStyle = {
  backgroundColor: "#fff",
  padding: "40px",
  borderRadius: "15px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  textDecoration: "none",
  color: "inherit",
  transition: "transform 0.2s, boxShadow 0.2s",
  border: "1px solid #eee",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center"
};

const iconStyle = {
  fontSize: "3rem",
  marginBottom: "20px"
};

const cardTitleStyle = {
  fontSize: "1.2rem",
  marginBottom: "10px",
  color: "#3e2723"
};

const cardDescStyle = {
  fontSize: "0.9rem",
  color: "#888",
  lineHeight: "1.5"
};