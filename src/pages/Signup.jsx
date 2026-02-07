import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../Components/Footer";

export default function Signup() {
  const navigate = useNavigate();

  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.type]: e.target.value });
  };

  // The function that talks to the Backend
  // ... existing imports and state ...

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // --- 1. NEW VALIDATION CHECKS ---

    // A. Validate Email Format (Must contain @ and .)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address (e.g., user@example.com).");
      setLoading(false);
      return; // Stop here! Don't send to server.
    }

    // B. Validate Password Length (Min 8 chars)
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      setLoading(false);
      return;
    }

    // C. Validate Special Character (Must have at least one)
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharRegex.test(formData.password)) {
      setError("Password must contain at least one special character (!@#$%).");
      setLoading(false);
      return;
    }

    // --- END VALIDATION CHECKS ---

    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Account Created Successfully! Please Log In.");
        navigate("/login");
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (err) {
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ... rest of the component (return statement) stays the same ...

  return (
    <>
      <Navbar />
      <div className="page-container" style={pageStyle}>
        <div className="auth-card" style={cardStyle}>
          <h1 className="serif-font">Create Account</h1>
          <p style={{ color: "#666", marginBottom: "30px" }}>
            Join the NoirSane community.
          </p>

          {/* Show Error Message if exists */}
          {error && (
            <div style={{ color: "red", marginBottom: "15px" }}>{error}</div>
          )}

          <form
            onSubmit={handleSignup}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <input
              type="text"
              placeholder="Full Name"
              required
              style={inputStyle}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              style={inputStyle}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password"
              required
              style={inputStyle}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />

            <button type="submit" style={btnStyle} disabled={loading}>
              {loading ? "Creating..." : "Create Account"}
            </button>
          </form>

          <div
            style={{
              marginTop: "30px",
              borderTop: "1px solid #eee",
              paddingTop: "20px",
            }}
          >
            <p style={{ color: "#666" }}>Already have an account?</p>
            <Link to="/login" style={linkStyle}>
              Sign In
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

// Reuse Styles
const pageStyle = {
  padding: "120px 20px",
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
};
const linkStyle = {
  color: "#d2691e",
  fontWeight: "bold",
  textDecoration: "none",
};
