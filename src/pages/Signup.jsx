import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../Components/Footer";

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    alert("Account Created! Please log in.");
    navigate("/login"); // Redirect to Login after signup
  };

  return (
    <>
      <Navbar />
      <div className="page-container" style={pageStyle}>
        <div className="auth-card" style={cardStyle}>
          <h1 className="serif-font" style={{ marginBottom: "10px" }}>Create Account</h1>
          <p style={{ color: "#666", marginBottom: "30px" }}>
            Join NoirSane for exclusive access to limited editions.
          </p>

          <form onSubmit={handleSignup} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <input type="text" placeholder="Full Name" required style={inputStyle} />
            <input type="email" placeholder="Email Address" required style={inputStyle} />
            <input type="password" placeholder="Password" required style={inputStyle} />
            
            <button type="submit" style={btnStyle}>Create Account</button>
          </form>

          <div style={{ marginTop: "30px", borderTop: "1px solid #eee", paddingTop: "20px" }}>
            <p style={{ color: "#666" }}>Already have an account?</p>
            <Link to="/login" style={linkStyle}>Sign In</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

// Reuse Styles for consistency
const pageStyle = {
  padding: "120px 20px",
  minHeight: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fcfcfc"
};

const cardStyle = {
  backgroundColor: "#fff",
  padding: "40px",
  borderRadius: "10px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  width: "100%",
  maxWidth: "400px",
  textAlign: "center"
};

const inputStyle = {
  padding: "15px",
  border: "1px solid #ddd",
  borderRadius: "5px",
  fontSize: "1rem",
  backgroundColor: "#fafafa"
};

const btnStyle = {
  padding: "15px",
  backgroundColor: "#3e2723",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  fontSize: "1rem",
  fontWeight: "bold",
  cursor: "pointer"
};

const linkStyle = {
  color: "#d2691e",
  fontWeight: "bold",
  textDecoration: "none"
};