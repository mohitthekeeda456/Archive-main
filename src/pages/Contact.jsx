import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="page-container" style={pageStyle}>
        
        {/* Header Section */}
        <h1 className="serif-font" style={{ marginBottom: "20px" }}>Contact Us</h1>
        <p style={{ fontSize: "1.1rem", marginBottom: "40px", lineHeight: "1.6" }}>
          We’d love to hear from you! Whether you have a question, feedback, a news tip, 
          or a correction to suggest — feel free to reach out.
        </p>

        {/* Content Start */}
        <div className="contact-content" style={{ textAlign: "left", lineHeight: "1.6" }}>
          
          <section style={sectionStyle}>
            <h3>📬 General Inquiries & Feedback</h3>
            <p>For all general questions, collaborations, or feedback:</p>
            <div style={highlightBoxStyle}>
              📧 Email us at: <br />
              <a href="mailto:saptarshisingh78@noirsane.com" style={{ color: "#d2691e", fontWeight: "bold", fontSize: "1.1rem" }}>
                saptarshisingh78@noirsane.com
              </a>
            </div>
            <p style={{ fontStyle: "italic", color: "#666" }}>
              We try our best to respond within 24–48 hours on business days.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3>📰 Submit a News Tip</h3>
            <p>
              Have something important to share? You can send us a tip or report an issue anonymously or directly via email. Credible leads are always appreciated.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3>🛠️ Technical Issues</h3>
            <p>
              If you’re experiencing issues with the website, broken links, or bugs, please let us know. We’re working hard to improve your reading experience.
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
  padding: "20px",
  backgroundColor: "#fff", // Optional: adds a slight card effect if your background is off-white
  borderRadius: "8px",
  border: "1px solid #eee"
};

const highlightBoxStyle = {
  backgroundColor: "#faf7f2", // Light cream color matching your theme
  padding: "15px",
  borderRadius: "8px",
  margin: "15px 0",
  textAlign: "center"
};

export default Contact;