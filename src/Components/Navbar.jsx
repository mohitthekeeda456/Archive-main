import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.png";

export default function Navbar() {
  const { cart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  // --- SEARCH STATE ---
  const [query, setQuery] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  // Calculate total items
  const totalItems = cart ? cart.reduce((total, item) => total + item.quantity, 0) : 0;

  // 1. Fetch products for search (Runs once)
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
      .catch((err) => console.error("Search Error:", err));
  }, []);

  // 2. Filter Logic
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);

    if (searchTerm.length > 0) {
      const filtered = allProducts.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 3)); // Top 3 results
    } else {
      setSuggestions([]);
    }
  };

  // 3. Handle Click -> Navigate to Product
  const handleResultClick = (id) => {
    navigate(`/product/${id}`);
    setQuery("");
    setSuggestions([]);
  };

  return (
    <>
      <nav style={styles.navbar}>
        
        {/* LEFT SECTION: Logo & ALL Menu Links */}
        <div style={styles.navLeft}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="NoirSane" style={styles.logo} />
          </Link>

          <div style={styles.linksContainer}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/shop" style={styles.link}>Shop</Link>
            <Link to="/blog" style={styles.link}>Journal</Link>
            
            {/* 👇 THESE ARE BACK NOW */}
            <Link to="/about" style={styles.link}>About</Link>
            <Link to="/contact" style={styles.link}>Contact</Link>
            
            {user && user.isAdmin && (
              <Link to="/dashboard" style={styles.dashboardLink}>Dashboard</Link>
            )}
          </div>
        </div>

        {/* MIDDLE SECTION: Search Bar */}
        <div style={styles.searchContainer}>
          <input 
            type="text" 
            placeholder="Search..." 
            value={query}
            onChange={handleSearch}
            style={styles.searchInput}
          />
          
          {/* Search Dropdown */}
          {suggestions.length > 0 && (
            <div style={styles.searchResults}>
              {suggestions.map((product) => (
                <div 
                  key={product.id} 
                  style={styles.resultItem}
                  onClick={() => handleResultClick(product.id)}
                >
                  <img src={product.image} alt="" style={styles.resultImage} />
                  <span>{product.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT SECTION: User & Cart */}
        <div style={styles.navRight}>
          {user ? (
            <Link to="/account" style={styles.link}>Hello, {user.name.split(" ")[0]}</Link>
          ) : (
            <Link to="/login" style={styles.link}>Login</Link>
          )}

          <Link to="/cart" style={styles.cartContainer}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {totalItems > 0 && <span style={styles.badge}>{totalItems}</span>}
          </Link>
        </div>

      </nav>
      {/* Spacer */}
      <div style={{ height: "90px" }}></div>
    </>
  );
}

// --- STYLES OBJECT ---
const styles = {
  navbar: {
    position: "fixed", top: 0, left: 0, width: "100%", height: "90px",
    backgroundColor: "rgba(255, 255, 255, 0.98)", backdropFilter: "blur(10px)",
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "0 4%", // Slightly reduced padding to fit everything
    boxShadow: "0 2px 15px rgba(0,0,0,0.04)", zIndex: 1000, boxSizing: "border-box",
  },
  
  navLeft: { display: "flex", alignItems: "center", gap: "30px" }, // Reduced gap slightly
  logo: { height: "60px", width: "auto", objectFit: "contain", display: "block" },
  
  linksContainer: { display: "flex", gap: "20px", alignItems: "center" }, // Reduced gap to fit search bar
  link: { textDecoration: "none", color: "#3e2723", fontSize: "0.95rem", fontWeight: "500", fontFamily: "'Inter', sans-serif", transition: "color 0.2s ease" },
  dashboardLink: { textDecoration: "none", color: "#d2691e", fontWeight: "bold", fontSize: "0.9rem", border: "1px solid #d2691e", padding: "5px 12px", borderRadius: "20px" },

  // --- SEARCH STYLES ---
  searchContainer: { position: "relative", width: "220px", margin: "0 20px" }, // Added margin
  searchInput: {
    width: "100%", padding: "8px 15px", borderRadius: "20px", border: "1px solid #ddd",
    outline: "none", backgroundColor: "#f9f9f9", fontSize: "0.9rem", color: "#333"
  },
  searchResults: {
    position: "absolute", top: "45px", left: 0, width: "100%", backgroundColor: "#fff",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)", borderRadius: "10px", overflow: "hidden", zIndex: 1001
  },
  resultItem: {
    display: "flex", alignItems: "center", gap: "10px", padding: "10px",
    cursor: "pointer", borderBottom: "1px solid #eee", fontSize: "0.9rem", color: "#333",
    transition: "background 0.2s"
  },
  resultImage: { width: "30px", height: "30px", borderRadius: "4px", objectFit: "cover" },

  // --- RIGHT SECTION ---
  navRight: { display: "flex", alignItems: "center", gap: "25px" },
  cartContainer: { position: "relative", color: "#3e2723", display: "flex", alignItems: "center", textDecoration: "none" },
  badge: { position: "absolute", top: "-6px", right: "-10px", backgroundColor: "#d32f2f", color: "white", borderRadius: "50%", width: "18px", height: "18px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "10px", fontWeight: "bold", border: "2px solid #fff", boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }
};