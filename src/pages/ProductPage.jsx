import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"; // Grab the ID from URL
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../contexts/CartContext";

export default function ProductPage() {
  const { id } = useParams(); // Get "dark-truffle" from the URL
  const { addToCart } = useCart();

  // 1. State for the single product
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. Fetch data when the ID changes
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/api/products/${id}`);
        
        if (!response.ok) {
          throw new Error("Product not found");
        }
        
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // 3. Loading State
  if (loading) {
    return (
      <>
        <Navbar />
        <div style={{ padding: "150px", textAlign: "center" }}>
          <h2>Loading Deliciousness...</h2>
        </div>
        <Footer />
      </>
    );
  }

  // 4. Error State (Product doesn't exist)
  if (error || !product) {
    return (
      <>
        <Navbar />
        <div style={{ padding: "150px", textAlign: "center" }}>
          <h2>Product Not Found</h2>
          <p>The chocolate you are looking for has been eaten.</p>
          <Link to="/shop" className="btn-primary">Back to Shop</Link>
        </div>
        <Footer />
      </>
    );
  }

  // 5. The Real Page
  return (
    <>
      <Navbar />
      <div className="product-page-container" style={pageStyle}>
        
        <Link to="/shop" style={backLinkStyle}>← Back to Collection</Link>

        <div className="product-layout" style={layoutStyle}>
          
          {/* Left: Image */}
          <div className="product-image" style={{ flex: 1 }}>
            <img src={product.image} alt={product.name} style={imageStyle} />
          </div>

          {/* Right: Details */}
          <div className="product-info" style={{ flex: 1 }}>
            <h1 className="serif-font" style={{ fontSize: "2.5rem", marginBottom: "10px" }}>{product.name}</h1>
            <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "20px" }}>{product.tagline}</p>
            <h2 style={{ color: "#3e2723", marginBottom: "30px" }}>{product.price}</h2>

            <p style={{ lineHeight: "1.8", marginBottom: "30px" }}>
              {product.description}
            </p>

            {/* Ingredients or Features List */}
            {product.features && (
              <ul style={{ marginBottom: "30px", color: "#555" }}>
                {product.features.map((feature, index) => (
                  <li key={index} style={{ marginBottom: "5px" }}>{feature}</li>
                ))}
              </ul>
            )}

            <button 
              onClick={() => addToCart(product)}
              className="btn-primary" 
              style={addToCartBtnStyle}
            >
              Add to Cart
            </button>
            
            <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "20px" }}>
              <strong>Ingredients:</strong> {product.ingredients}
            </p>
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

const backLinkStyle = {
  display: "inline-block",
  marginBottom: "40px",
  color: "#666",
  textDecoration: "none",
  fontWeight: "bold"
};

const layoutStyle = {
  display: "flex",
  gap: "60px",
  flexWrap: "wrap",
  alignItems: "center"
};

const imageStyle = {
  width: "100%",
  borderRadius: "10px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
};

const addToCartBtnStyle = {
  padding: "15px 40px",
  fontSize: "1.1rem",
  backgroundColor: "#3e2723",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  transition: "0.3s"
};
