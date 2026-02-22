import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "150px 20px", textAlign: "center", minHeight: "60vh" }}>
        <h1 style={{ fontSize: "5rem", color: "#3e2723", margin: 0 }}>404</h1>
        <h2 className="serif-font">Page Not Found</h2>
        <p style={{ color: "#666", marginBottom: "30px" }}>
          The chocolate you are looking for has been eaten (or doesn't exist).
        </p>
        <Link to="/" className="btn-primary">Return Home</Link>
      </div>
      <Footer />
    </>
  );
}
