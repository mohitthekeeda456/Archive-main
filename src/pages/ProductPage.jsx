import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../Components/Footer";
import { products } from "../data/products"; // Import your mock database
import { CartIcon } from "../components/Icons"; // Reusing your existing icon
import { useCart } from "../context/CartContext";
const ProductPage = () => {
  const { addToCart } = useCart();
  // 1. Get the "id" from the URL (e.g., "artisan-truffle")
  const { id } = useParams();

  // 2. Find the matching product in your database
  const product = products.find((p) => p.id === id);

  // 3. Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Safety Check: If someone types a wrong URL
  if (!product) {
    return (
      <>
        <Navbar />
        <div style={{ padding: "150px 20px", textAlign: "center" }}>
          <h2>Product Not Found</h2>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="page-container" style={pageContainerStyle}>
        {/* Back Button */}
        <Link
          to="/shop"
          style={{
            textDecoration: "none",
            color: "#666",
            display: "inline-block",
            marginBottom: "20px",
          }}
        >
          &larr; Back to Collection
        </Link>

        <div className="product-layout" style={layoutStyle}>
          {/* Left Column: Image */}
          <div className="product-image-section" style={{ flex: 1 }}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              }}
            />
          </div>

          {/* Right Column: Details */}
          <div
            className="product-info-section"
            style={{ flex: 1, paddingLeft: "40px" }}
          >
            <h1
              className="serif-font"
              style={{ fontSize: "2.5rem", marginBottom: "10px" }}
            >
              {product.name}
            </h1>

            {/* Tagline */}
            <p
              style={{
                fontStyle: "italic",
                color: "#8d6e63",
                marginBottom: "20px",
              }}
            >
              {product.tagline}
            </p>

            {/* Price */}
            <h2
              style={{
                fontSize: "1.8rem",
                color: "#3e2723",
                marginBottom: "20px",
              }}
            >
              {product.price}
            </h2>

            {/* Description */}
            <p
              style={{
                lineHeight: "1.8",
                color: "#5d4037",
                marginBottom: "30px",
              }}
            >
              {product.description}
            </p>

            {/* Features List */}
            {product.features && (
              <ul
                style={{
                  marginBottom: "30px",
                  paddingLeft: "20px",
                  color: "#5d4037",
                }}
              >
                {product.features.map((feature, index) => (
                  <li key={index} style={{ marginBottom: "10px" }}>
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            {/* Add to Cart Button */}
            <button
              className="btn-add-to-cart"
              style={buttonStyle}
              onClick={() => addToCart(product)} // <--- CLICK HANDLER
            >
              Add To Cart
            </button>

            {/* Ingredients Section */}
            <div
              style={{
                marginTop: "40px",
                borderTop: "1px solid #eee",
                paddingTop: "20px",
              }}
            >
              <h4
                style={{
                  textTransform: "uppercase",
                  fontSize: "0.9rem",
                  color: "#aaa",
                }}
              >
                Ingredients
              </h4>
              <p style={{ fontSize: "0.9rem", color: "#888" }}>
                {product.ingredients}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

// Internal Styles (to keep it clean)
const pageContainerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "120px 20px",
};

const layoutStyle = {
  display: "flex",
  gap: "40px",
  flexWrap: "wrap", // Makes it responsive on mobile
  alignItems: "flex-start",
};

const buttonStyle = {
  backgroundColor: "#3e2723", // Dark chocolate color
  color: "#fff",
  padding: "15px 40px",
  border: "none",
  borderRadius: "30px",
  fontSize: "1rem",
  cursor: "pointer",
  transition: "background 0.3s ease",
};

export default ProductPage;
