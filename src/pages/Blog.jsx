import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../Components/Footer";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Fetch Articles
  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="page-container" style={pageStyle}>
        
        <div style={headerStyle}>
          <h1 className="serif-font" style={{ fontSize: "3rem", marginBottom: "20px" }}>The Cocoa Chronicles</h1>
          <p style={{ color: "#666", fontSize: "1.1rem" }}>
            Stories of craftsmanship, wellness, and the art of chocolate.
          </p>
        </div>

        {loading ? (
          <h2 style={{ textAlign: "center" }}>Loading Stories...</h2>
        ) : (
          <div className="blog-grid" style={gridStyle}>
            {blogs.map((blog) => (
              <div key={blog._id} className="blog-card" style={cardStyle}>
                
                {/* Image Link */}
                <Link to={`/blog/${blog._id}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <div style={imageContainerStyle}>
                    <img src={blog.image} alt={blog.title} style={imageStyle} />
                  </div>
                </Link>

                <div style={contentStyle}>
                  {/* Date & Tags */}
                  <div style={metaStyle}>
                    <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                    {blog.tags && blog.tags.length > 0 && (
                      <span style={{ color: "#d2691e" }}> • {blog.tags[0]}</span>
                    )}
                  </div>

                  {/* Title */}
                  <Link to={`/blog/${blog._id}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <h2 className="serif-font" style={titleStyle}>{blog.title}</h2>
                  </Link>

                  {/* Excerpt */}
                  <p style={{ color: "#555", lineHeight: "1.6", marginBottom: "20px" }}>
                    {blog.excerpt}
                  </p>

                  {/* Read More Button */}
                  <Link to={`/blog/${blog._id}`} style={readMoreStyle}>
                    Read Full Story →
                  </Link>
                </div>

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
const pageStyle = { padding: "120px 5%", maxWidth: "1200px", margin: "0 auto", minHeight: "80vh" };
const headerStyle = { textAlign: "center", marginBottom: "80px" };

const gridStyle = { 
  display: "grid", 
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
  gap: "50px" 
};

const cardStyle = { 
  backgroundColor: "#fff", 
  borderRadius: "10px", 
  overflow: "hidden", 
  boxShadow: "0 10px 30px rgba(0,0,0,0.03)", 
  transition: "transform 0.3s" 
};

const imageContainerStyle = { height: "250px", overflow: "hidden" };
const imageStyle = { width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" };
const contentStyle = { padding: "30px" };
const metaStyle = { fontSize: "0.85rem", color: "#888", marginBottom: "15px", textTransform: "uppercase", letterSpacing: "1px" };
const titleStyle = { fontSize: "1.5rem", marginBottom: "15px", color: "#3e2723", lineHeight: "1.3" };
const readMoreStyle = { color: "#d2691e", fontWeight: "bold", textDecoration: "none", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "1px" };