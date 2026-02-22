import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext"; // <--- 1. Import Cart Hook

export default function FeaturedCollection() {
  const { addToCart } = useCart(); // <--- 2. Get the function
  const [featuredProducts, setFeaturedProducts] = useState([]);

  // 3. Fetch Data on Load
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        // Filter: Keep only the ones marked 'isFeatured: true'
        const featured = data.filter((product) => product.isFeatured === true);
        setFeaturedProducts(featured);
      })
      .catch((err) => console.error("Error fetching featured:", err));
  }, []);

  if (featuredProducts.length === 0) {
    return null; // Don't show section if no featured items (or loading)
  }

  return (
    <section style={{ padding: "80px 5%", backgroundColor: "#fff" }}>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2 className="serif-font" style={{ fontSize: "2.5rem", color: "#3e2723" }}>Featured Collection</h2>
        <p style={{ color: "#666" }}>Curated selection of our finest masterpieces.</p>
      </div>

      <div style={gridStyle}>
        {featuredProducts.map((product) => (
          <div key={product._id} className="product-card" style={cardStyle}>
            {/* Image Link */}
            <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div style={imageContainerStyle}>
                <img src={product.image} alt={product.name} style={imageStyle} />
              </div>
              <div style={{ padding: "20px" }}>
                <h3 style={{ margin: "0 0 10px", fontSize: "1.2rem" }}>{product.name}</h3>
                <p style={{ color: "#888", fontSize: "0.9rem", marginBottom: "15px" }}>{product.tagline}</p>
                <p style={{ fontWeight: "bold", color: "#3e2723", fontSize: "1.1rem" }}>{product.price}</p>
              </div>
            </Link>

            {/* Add to Cart Button (Fixed!) */}
            <button 
              onClick={() => addToCart(product)} // <--- 4. Connects to Real Cart
              style={btnStyle}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- Styles (Same as before) ---
const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "30px",
  maxWidth: "1200px",
  margin: "0 auto"
};

const cardStyle = {
  border: "1px solid #eee",
  borderRadius: "10px",
  overflow: "hidden",
  transition: "transform 0.3s",
  backgroundColor: "#fafafa"
};

const imageContainerStyle = { height: "250px", overflow: "hidden" };
const imageStyle = { width: "100%", height: "100%", objectFit: "cover" };

const btnStyle = {
  width: "100%",
  padding: "15px",
  backgroundColor: "#3e2723",
  color: "#fff",
  border: "none",
  fontSize: "1rem",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "background 0.3s"
};
