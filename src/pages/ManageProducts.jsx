import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);

  // 1. Fetch All Products
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  // 2. Handle Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this chocolate permanently?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        // Remove from UI immediately
        setProducts(products.filter((p) => p.id !== id));
      } else {
        alert("Failed to delete");
      }
    } catch (err) {
      alert("Server Error");
    }
  };

  // 3. Handle Toggle Featured
  const toggleFeatured = async (product) => {
    try {
      const updatedStatus = !product.isFeatured; // Flip the status
      
      const res = await fetch(`http://localhost:5000/api/products/${product.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isFeatured: updatedStatus }),
      });

      if (res.ok) {
        // Update UI to show the new star status
        setProducts(products.map((p) => 
          p.id === product.id ? { ...p, isFeatured: updatedStatus } : p
        ));
      }
    } catch (err) {
      console.error("Error toggling featured:", err);
    }
  };

  return (
    <>
      <Navbar />
      <div style={pageStyle}>
        <div style={headerStyle}>
          <h1 className="serif-font">Product Manager</h1>
          <Link to="/host" style={addBtnStyle}>+ Add New Product</Link>
        </div>

        <div style={tableContainer}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #ddd", textAlign: "left" }}>
                <th style={thStyle}>Image</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Price</th>
                <th style={thStyle}>Featured?</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={tdStyle}>
                    <img src={product.image} alt="" style={{ width: "50px", height: "50px", borderRadius: "5px", objectFit: "cover" }} />
                  </td>
                  <td style={tdStyle}>
                    <span style={{ fontWeight: "bold" }}>{product.name}</span>
                    <br />
                    <span style={{ fontSize: "0.8rem", color: "#888" }}>ID: {product.id}</span>
                  </td>
                  <td style={tdStyle}>{product.price}</td>
                  <td style={tdStyle}>
                    <button 
                      onClick={() => toggleFeatured(product)}
                      style={{ 
                        ...featureBtnStyle, 
                        background: product.isFeatured ? "#FFD700" : "#eee",
                        color: product.isFeatured ? "#fff" : "#aaa"
                      }}
                      title="Click to Toggle Featured"
                    >
                      ★
                    </button>
                  </td>
                  <td style={tdStyle}>
                    <button 
                      onClick={() => handleDelete(product.id)}
                      style={deleteBtnStyle}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

// --- STYLES ---
const pageStyle = { padding: "120px 5%", maxWidth: "1000px", margin: "0 auto", minHeight: "80vh" };
const headerStyle = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" };
const addBtnStyle = { padding: "10px 20px", backgroundColor: "#2e7d32", color: "#fff", textDecoration: "none", borderRadius: "5px", fontWeight: "bold" };
const tableContainer = { overflowX: "auto", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", borderRadius: "10px", backgroundColor: "#fff", padding: "20px" };
const thStyle = { padding: "15px", color: "#555" };
const tdStyle = { padding: "15px" };
const featureBtnStyle = { fontSize: "1.5rem", border: "none", borderRadius: "50%", width: "40px", height: "40px", cursor: "pointer", transition: "0.2s" };
const deleteBtnStyle = { padding: "8px 15px", backgroundColor: "#d32f2f", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "0.9rem" };