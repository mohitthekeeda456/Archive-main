import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BlogPost() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/blogs/${id}`)
      .then(res => res.json())
      .then(data => setBlog(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!blog) return <div style={{ padding: "150px", textAlign: "center" }}>Loading...</div>;

  return (
    <>
      <Navbar />
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "120px 20px" }}>
        
        <p style={{ color: "#888", textAlign: "center", marginBottom: "20px" }}>
          {new Date(blog.createdAt).toLocaleDateString()} • {blog.author}
        </p>

        <h1 className="serif-font" style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "40px", color: "#3e2723" }}>
          {blog.title}
        </h1>

        <img src={blog.image} alt={blog.title} style={{ width: "100%", borderRadius: "10px", marginBottom: "50px" }} />

        <div style={{ lineHeight: "1.8", fontSize: "1.1rem", color: "#333", whiteSpace: "pre-wrap" }}>
          {blog.content}
        </div>

        <div style={{ marginTop: "60px", textAlign: "center" }}>
          <Link to="/blog" style={{ color: "#d2691e", fontWeight: "bold", textDecoration: "none" }}>← Back to Journal</Link>
        </div>

      </div>
      <Footer />
    </>
  );
}
