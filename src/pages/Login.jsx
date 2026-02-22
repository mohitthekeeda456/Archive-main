import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../contexts/AuthContext"; // Import the Auth Context

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth(); // Get the login function from our context
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setLoading(true);

    // 1. Simple Email Check
    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      // 1. Send data to Backend
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // 2. SUCCESS: Server found the user
        // 'data' contains { _id, name, email, isAdmin }
        login(data); // Update the Global State (Navbar changes instantly)
        
        alert("Welcome back, " + data.name + "!");
        navigate("/account"); // Redirect to Dashboard
      } else {
        // 3. FAIL: Server said "Invalid password" or "User not found"
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="page-container" style={pageStyle}>
        <div className="auth-card" style={cardStyle}>
          <h1 className="serif-font" style={{ marginBottom: "10px" }}>Welcome Back</h1>
          <p style={{ color: "#666", marginBottom: "30px" }}>
            Sign in to access your order history and wish list.
          </p>

          {/* Show Error Message (Red Text) */}
          {error && <div style={{ color: "red", marginBottom: "15px", fontWeight: "bold" }}>{error}</div>}

          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <input 
              type="email" 
              placeholder="Email Address" 
              required 
              style={inputStyle}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input 
              type="password" 
              placeholder="Password" 
              required 
              style={inputStyle}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            <button type="submit" style={btnStyle} disabled={loading}>
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <div style={{ marginTop: "20px", fontSize: "0.9rem" }}>
            <Link to="/forgot-password" style={{ color: "#888", textDecoration: "none" }}>Forgot Password?</Link>
          </div>

          <div style={{ marginTop: "30px", borderTop: "1px solid #eee", paddingTop: "20px" }}>
            <p style={{ color: "#666" }}>Don't have an account?</p>
            <Link to="/signup" style={linkStyle}>Create an Account</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

// --- STYLES ---
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
  cursor: "pointer",
  transition: "0.3s"
};

const linkStyle = {
  color: "#d2691e",
  fontWeight: "bold",
  textDecoration: "none"
};
