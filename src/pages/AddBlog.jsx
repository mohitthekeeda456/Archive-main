import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AddBlog() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    excerpt: "",
    content: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Article Published! 📰");
        navigate("/blog"); // We will create this next
      } else {
        alert("Failed to publish");
      }
    } catch (err) {
      alert("Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: "120px 20px", maxWidth: "800px", margin: "0 auto" }}>
        <h1 className="serif-font">Write New Article</h1>
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "20px", marginTop: "30px" }}>
          
          <input name="title" placeholder="Article Title" required style={inputStyle} onChange={handleChange} />
          <input name="image" placeholder="Cover Image URL" required style={inputStyle} onChange={handleChange} />
          
          <textarea name="excerpt" placeholder="Short Summary (2 sentences)" rows="3" required style={inputStyle} onChange={handleChange} />
          
          {/* Main Content Area */}
          <textarea 
            name="content" 
            placeholder="Write your full article here..." 
            rows="15" 
            required 
            style={{ ...inputStyle, fontFamily: "sans-serif", lineHeight: "1.6" }} 
            onChange={handleChange} 
          />

          <button type="submit" style={btnStyle} disabled={loading}>
            {loading ? "Publishing..." : "Publish Article"}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

const inputStyle = { width: "100%", padding: "15px", border: "1px solid #ddd", borderRadius: "5px", fontSize: "1rem" };
const btnStyle = { padding: "15px", backgroundColor: "#3e2723", color: "#fff", border: "none", borderRadius: "5px", fontSize: "1.1rem", cursor: "pointer" };
