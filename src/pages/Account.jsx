import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useAuth } from "../context/AuthContext";
export default function Account() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout(); // 1. Clear state
    navigate("/login"); // 2. Go to login
  };

  return (
    <>
      <Navbar />
      <div className="page-container" style={pageStyle}>
        
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
          <h1 className="serif-font">My Account</h1>
          <button onClick={handleLogout} style={logoutBtnStyle}>Log Out</button>
        </div>

        <div className="account-layout" style={layoutStyle}>
          
          {/* Sidebar Info */}
          <div className="account-details" style={sidebarStyle}>
            <div style={cardStyle}>
              <h3 style={{ marginTop: 0 }}>Mohit Kumar Gola</h3>
              <p style={{ color: "#666" }}>mohit@example.com</p>
              <p style={{ color: "#666" }}>India</p>
              <button style={editBtnStyle}>Edit Address</button>
            </div>
          </div>

          {/* Order History */}
          <div className="order-history" style={{ flex: 2 }}>
            <h3 className="serif-font" style={{ marginTop: 0, marginBottom: "20px" }}>Order History</h3>
            
            {/* Fake Order 1 */}
            <div style={orderCardStyle}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                <div>
                  <span style={{ fontWeight: "bold" }}>Order #NS-2026</span>
                  <p style={{ margin: "5px 0 0", fontSize: "0.9rem", color: "#888" }}>Placed on April 28, 2025</p>
                </div>
                <span style={statusBadgeStyle}>Processing</span>
              </div>
              
              <div style={{ display: "flex", gap: "15px", borderTop: "1px solid #eee", paddingTop: "15px" }}>
                {/* Fake Product Images */}
                <div style={placeholderImgStyle}></div>
                <div style={placeholderImgStyle}></div>
              </div>
              
              <div style={{ marginTop: "15px", textAlign: "right" }}>
                <span style={{ fontWeight: "bold" }}>Total: $120.00</span>
              </div>
            </div>

            {/* Empty State Message (Optional) */}
            {/* <p>You haven't placed any orders yet.</p> */}

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
  minHeight: "80vh"
};

const layoutStyle = {
  display: "flex",
  gap: "40px",
  flexWrap: "wrap"
};

const sidebarStyle = {
  flex: 1,
  minWidth: "250px"
};

const cardStyle = {
  backgroundColor: "#f9f9f9",
  padding: "25px",
  borderRadius: "8px",
  border: "1px solid #eee"
};

const logoutBtnStyle = {
  backgroundColor: "transparent",
  border: "1px solid #3e2723",
  color: "#3e2723",
  padding: "8px 20px",
  borderRadius: "20px",
  cursor: "pointer"
};

const editBtnStyle = {
  marginTop: "15px",
  backgroundColor: "#3e2723",
  color: "#fff",
  border: "none",
  padding: "8px 15px",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "0.8rem"
};

const orderCardStyle = {
  border: "1px solid #eee",
  padding: "20px",
  borderRadius: "8px",
  marginBottom: "20px"
};

const statusBadgeStyle = {
  backgroundColor: "#e3f2fd",
  color: "#1565c0",
  padding: "5px 12px",
  borderRadius: "15px",
  fontSize: "0.8rem",
  fontWeight: "bold",
  height: "fit-content"
};

const placeholderImgStyle = {
  width: "60px", 
  height: "60px", 
  backgroundColor: "#ddd", 
  borderRadius: "5px"
};