import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../contexts/CartContext";

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
  const featuredList = products.filter(p => p.isFeatured === true);
  const normalList = products.filter(p => p.isFeatured !== true);
  return (
    <>
      <Navbar />
      <div className="page-container" style={pageStyle}>
        
        {/* Header */}
        <div style={headerStyle}>
          <h1 className="serif-font">Our Collections</h1>
        </div>

        {loading && <h2>Loading...</h2>}

        {/* SECTION 1: Featured */}
        {!loading && featuredList.length > 0 && (
          <div style={{ marginBottom: "80px" }}>
            <h2 className="serif-font" style={{ borderBottom: "1px solid #ddd", paddingBottom: "10px", marginBottom: "30px" }}>
              ✨ Signature Collection
            </h2>
            <div className="products-grid" style={gridStyle}>
              {featuredList.map(product => (
                 // ... Render Product Card (Same code as before) ...
                 // Make sure to use: onClick={() => addToCart(product)}
                 <ProductCard key={product._id} product={product} addToCart={addToCart} />
              ))}
            </div>
          </div>
        )}

        {/* SECTION 2: Normal */}
        {!loading && normalList.length > 0 && (
          <div>
            <h2 className="serif-font" style={{ borderBottom: "1px solid #ddd", paddingBottom: "10px", marginBottom: "30px" }}>
              🍫 Classic Collection
            </h2>
            <div className="products-grid" style={gridStyle}>
              {normalList.map(product => (
                 // ... Render Product Card ...
                 <ProductCard key={product._id} product={product} addToCart={addToCart} />
              ))}
            </div>
          </div>
        )}

      </div>
      <Footer />
    </>
  );
}
const ProductCard = ({ product, addToCart }) => (
  <div style={cardStyle}>
    <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div style={imageContainerStyle}>
        <img src={product.image} alt={product.name} style={imageStyle} />
      </div>
      <div style={infoStyle}>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    </Link>
    <button onClick={() => addToCart(product)} style={btnStyle}>Add to Cart</button>
  </div>
)
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
