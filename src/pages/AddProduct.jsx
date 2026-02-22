import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AddProduct() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    price: "",
    tagline: "",
    image: "",
    description: "",
    ingredients: "",
    isFeatured: false
  });

  // Separate state for Features because it's a list
  const [featureInput, setFeatureInput] = useState("");
  const [features, setFeatures] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  // Helper to add a feature to the list
  const addFeature = () => {
    if (featureInput.trim()) {
      setFeatures([...features, featureInput]);
      setFeatureInput(""); // Clear input
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Combine everything
    let finalPrice = formData.price;
    if (!finalPrice.startsWith("₹")) {
      finalPrice = "₹" + finalPrice;
    }
   const productData = { ...formData, price: finalPrice, features };

    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Chocolate Added Successfully! 🍫");
        navigate("/shop"); // Go to shop to see it
      } else {
        setError(data.message || "Failed to add product");
      }
    } catch (err) {
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="page-container" style={pageStyle}>
        <div style={formContainerStyle}>
          <h1 className="serif-font" style={{ textAlign: "center", marginBottom: "30px" }}>Add New Chocolate</h1>
          
          {error && <div style={{ color: "red", textAlign: "center", marginBottom: "20px" }}>{error}</div>}

          <form onSubmit={handleSubmit} style={{ display: "grid", gap: "20px" }}>
            
            {/* Row 1 */}
            <div style={rowStyle}>
              <input type="text" name="name" placeholder="Product Name (e.g. White Delight)" required style={inputStyle} onChange={handleChange} />
              <input type="text" name="id" placeholder="Unique ID (e.g. white-delight)" required style={inputStyle} onChange={handleChange} />
            </div>

            {/* Row 2 */}
            <div style={rowStyle}>
              <input type="text" name="price" placeholder="Price (e.g. 1200)" required style={inputStyle} onChange={handleChange} />
              <input type="text" name="tagline" placeholder="Short Tagline" required style={inputStyle} onChange={handleChange} />
            </div>

            {/* Image URL */}
            <input type="text" name="image" placeholder="Image URL (Paste from Unsplash)" required style={inputStyle} onChange={handleChange} />

            {/* Description */}
            <textarea name="description" placeholder="Full Description" rows="4" required style={inputStyle} onChange={handleChange}></textarea>

            {/* Features Builder */}
            <div style={{ background: "#f9f9f9", padding: "15px", borderRadius: "5px" }}>
              <label style={{ fontWeight: "bold", display: "block", marginBottom: "10px" }}>Features (e.g. Vegan, Gluten Free)</label>
              <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                <input 
                  type="text" 
                  value={featureInput} 
                  onChange={(e) => setFeatureInput(e.target.value)} 
                  placeholder="Type a feature..." 
                  style={{ ...inputStyle, flex: 1 }} 
                />
                <button type="button" onClick={addFeature} style={addBtnStyle}>Add</button>
              </div>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {features.map((f, i) => <li key={i} style={{ background: "#eee", display: "inline-block", padding: "5px 10px", margin: "2px", borderRadius: "15px", fontSize: "0.9rem" }}>{f}</li>)}
              </ul>
            </div>

            {/* Ingredients */}
            <textarea name="ingredients" placeholder="Ingredients List" rows="2" required style={inputStyle} onChange={handleChange}></textarea>

            {/* Is Featured Checkbox */}
            <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
              <input type="checkbox" name="isFeatured" onChange={handleChange} style={{ width: "20px", height: "20px" }} />
              <span style={{ fontWeight: "bold" }}>Make this a Featured Product?</span>
            </label>

            <button type="submit" style={submitBtnStyle} disabled={loading}>
              {loading ? "Adding..." : "Add to Shop"}
            </button>

          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

// --- STYLES ---
const pageStyle = { padding: "120px 20px", minHeight: "80vh", display: "flex", justifyContent: "center" };
const formContainerStyle = { width: "100%", maxWidth: "600px", backgroundColor: "#fff", padding: "40px", borderRadius: "10px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" };
const rowStyle = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" };
const inputStyle = { width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "5px", fontSize: "1rem" };
const addBtnStyle = { padding: "10px 20px", backgroundColor: "#666", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" };
const submitBtnStyle = { width: "100%", padding: "15px", backgroundColor: "#3e2723", color: "#fff", border: "none", borderRadius: "5px", fontSize: "1.1rem", fontWeight: "bold", cursor: "pointer", marginTop: "10px" };
