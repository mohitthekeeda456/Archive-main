import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../Components/Footer";
import { useCart } from "../context/CartContext";

export default function Shop() {
  const { addToCart } = useCart();
  
  // 1. State to hold the data from the Server
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. Fetch data when the page loads
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data); // Put the data in the bucket
        setLoading(false); // Stop loading
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="page-container" style={pageStyle}>
        
        <div style={headerStyle}>
          <h1 className="serif-font" style={{ fontSize: "3rem", marginBottom: "10px" }}>Shop Collection</h1>
          <p style={{ color: "#666", maxWidth: "600px", margin: "0 auto" }}>
            Discover our range of handcrafted chocolates, made from the finest cocoa beans.
          </p>
        </div>

        {/* 3. Show Loading or Error if needed */}
        {loading && <h2 style={{ textAlign: "center" }}>Loading Chocolates...</h2>}
        {error && <h2 style={{ textAlign: "center", color: "red" }}>Error: {error}</h2>}

        {/* 4. Show the Products */}
        {!loading && !error && (
          <div className="products-grid" style={gridStyle}>
            {products.map((product) => (
              <div key={product.id} className="product-card" style={cardStyle}>
                <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <div style={imageContainerStyle}>
                    <img src={product.image} alt={product.name} style={imageStyle} />
                  </div>
                  <div style={infoStyle}>
                    <h3 style={{ margin: "10px 0 5px", fontSize: "1.2rem" }}>{product.name}</h3>
                    <p style={{ color: "#888", fontSize: "0.9rem" }}>{product.tagline}</p>
                    <p style={{ fontWeight: "bold", marginTop: "10px", color: "#3e2723" }}>{product.price}</p>
                  </div>
                </Link>
                <button 
                  onClick={() => addToCart(product)}
                  style={btnStyle}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
      <Footer />
    </>
  );
}

// --- STYLES ---
const pageStyle = {
  padding: "120px 5%", // Space for fixed navbar
  maxWidth: "1200px",
  margin: "0 auto",
  minHeight: "80vh"
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "60px"
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", // Responsive grid
  gap: "40px"
};

const cardStyle = {
  backgroundColor: "#fff",
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
  transition: "transform 0.3s ease",
  display: "flex",
  flexDirection: "column"
};

const imageContainerStyle = {
  height: "250px",
  overflow: "hidden",
  backgroundColor: "#f4f4f4"
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.5s ease"
};

const infoStyle = {
  padding: "20px",
  flex: 1
};

const btnStyle = {
  width: "100%",
  padding: "15px",
  backgroundColor: "#3e2723",
  color: "#fff",
  border: "none",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "1rem",
  transition: "background 0.3s"
};