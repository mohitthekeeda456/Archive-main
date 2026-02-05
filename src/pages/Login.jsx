import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const fakeUser = {
      id: 1,
      name: "Mohit Kumar Gola", // You can even make this dynamic if you want
      email: email,
    };
    login(fakeUser);
    // Simulate Login Logic
    alert("Login Successful!");
    navigate("/account");
  };

  return (
    <>
      <Navbar />
      <div className="page-container" style={pageStyle}>
        <div className="auth-card" style={cardStyle}>
          <h1 className="serif-font" style={{ marginBottom: "10px" }}>
            Welcome Back
          </h1>
          <p style={{ color: "#666", marginBottom: "30px" }}>
            Sign in to access your order history and wish list.
          </p>

          <form
            onSubmit={handleLogin}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <input
              type="email"
              placeholder="Email Address"
              required
              style={inputStyle}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              style={inputStyle}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" style={btnStyle}>
              Sign In
            </button>
          </form>

          <div style={{ marginTop: "20px", fontSize: "0.9rem" }}>
            <Link
              to="/forgot-password"
              style={{ color: "#888", textDecoration: "none" }}
            >
              Forgot Password?
            </Link>
          </div>

          <div
            style={{
              marginTop: "30px",
              borderTop: "1px solid #eee",
              paddingTop: "20px",
            }}
          >
            <p style={{ color: "#666" }}>Don't have an account?</p>
            <Link to="/signup" style={linkStyle}>
              Create an Account
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

// --- STYLES ---
const pageStyle = {
  padding: "120px 20px", // High padding because navbar is fixed
  minHeight: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fcfcfc",
};

const cardStyle = {
  backgroundColor: "#fff",
  padding: "40px",
  borderRadius: "10px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  width: "100%",
  maxWidth: "400px",
  textAlign: "center",
};

const inputStyle = {
  padding: "15px",
  border: "1px solid #ddd",
  borderRadius: "5px",
  fontSize: "1rem",
  backgroundColor: "#fafafa",
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
  transition: "0.3s",
};

const linkStyle = {
  color: "#d2691e",
  fontWeight: "bold",
  textDecoration: "none",
};
