import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="page-container" style={pageStyle}>
        
        {/* Header Section */}
        <h1 className="serif-font" style={{ marginBottom: "20px" }}>About Us</h1>
        <p style={{ fontSize: "1.1rem", marginBottom: "10px", lineHeight: "1.6" }}>
          Welcome to <strong>noirsane.com</strong> – Your Source for Reliable and Insightful News.
        </p>
        <p style={{ color: "#666", marginBottom: "40px" }}>
          At noirsane.com, we are dedicated to delivering timely, accurate, and engaging news content across various categories including current affairs, technology, entertainment, lifestyle, and more.
        </p>

        {/* Content Start */}
        <div className="about-content" style={{ textAlign: "left", lineHeight: "1.6" }}>
          
          <section style={sectionStyle}>
            <h3>📰 What We Do</h3>
            <p>We aim to keep our readers informed with:</p>
            <ul style={listStyle}>
              <li>Latest news updates</li>
              <li>Thoughtful analysis</li>
              <li>Original reporting</li>
              <li>Community-focused stories</li>
            </ul>
            <p>We believe in the power of journalism to inform, educate, and inspire — and we’re committed to maintaining high editorial standards.</p>
          </section>

          <section style={sectionStyle}>
            <h3>🌐 Our Vision</h3>
            <p>
              To become a trusted destination for independent, honest, and balanced news reporting that empowers our readers with credible information.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3>✅ Why Trust noirsane.com?</h3>
            <ul style={listStyle}>
              <li>Our content is written and reviewed by real humans — not AI-generated.</li>
              <li>We prioritize accuracy, fairness, and transparency.</li>
              <li>We always fact-check before publishing.</li>
              <li>We follow Google News and AdSense content policies.</li>
            </ul>
          </section>

          <section style={sectionStyle}>
            <h3>📢 Ad-Supported Model</h3>
            <p>
              noirsane.com is <strong>free to access</strong> and supported by Google AdSense advertisements. Ads help us:
            </p>
            <ul style={listStyle}>
              <li>Maintain content quality</li>
              <li>Keep our platform free for all readers</li>
              <li>Invest in better reporting and writers</li>
            </ul>
            <p>We strive to keep ads non-intrusive and relevant to our audience.</p>
          </section>

          <section style={sectionStyle}>
            <h3>🤝 Contact Us</h3>
            <p>
              We welcome suggestions, corrections, or inquiries. Visit our <Link to="/contact" style={{ color: "#d2691e", fontWeight: "bold" }}>Contact Page</Link> or email us at:
            </p>
            <p style={{ marginTop: "10px", textAlign: "center" }}>
              <a href="mailto:saptarshisingh78@noirsane.com" style={emailButtonStyle}>
                saptarshisingh78@noirsane.com
              </a>
            </p>
          </section>

        </div>
        {/* Content End */}

      </div>
      <Footer />
    </>
  );
};

// Styles
const pageStyle = {
  padding: "120px 20px",
  maxWidth: "800px",
  margin: "0 auto",
  textAlign: "center"
};

const sectionStyle = {
  marginBottom: "40px",
  padding: "25px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  border: "1px solid #eee",
  boxShadow: "0 2px 5px rgba(0,0,0,0.05)" // Subtle shadow for elegance
};

const listStyle = {
  listStyleType: "disc",
  marginLeft: "20px",
  marginBottom: "15px"
};

const emailButtonStyle = {
  backgroundColor: "#3e2723",
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "20px",
  textDecoration: "none",
  fontWeight: "bold",
  display: "inline-block"
};

export default About;
