import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DMCA = () => {
  return (
    <>
      <Navbar />
      <div className="page-container" style={pageStyle}>
        
        {/* Header Section */}
        <h1 className="serif-font" style={{ marginBottom: "10px" }}>DMCA Policy</h1>
        <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "5px" }}>
          Effective Date: April 29, 2025
        </p>
        <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "40px" }}>
          Website: <a href="https://www.noirsane.com" style={{ color: "#d2691e" }}>https://www.noirsane.com</a>
        </p>

        {/* Legal Content Start */}
        <div className="legal-content" style={{ textAlign: "left", lineHeight: "1.6" }}>
          
          <section style={sectionStyle}>
            <h3>1. Introduction</h3>
            <p>
              At <strong>noirsane.com</strong>, we respect the intellectual property rights of creators and publishers. This <strong>Digital Millennium Copyright Act (“DMCA”) Policy</strong> outlines our procedures for copyright infringement claims and complies with the <strong>U.S. Copyright Act</strong> and <strong>DMCA Title II</strong>.
            </p>
            <p>This document explains how to:</p>
            <ul style={listStyle}>
              <li>File a <strong>copyright complaint</strong></li>
              <li>Submit a <strong>counter-notification</strong></li>
              <li>Understand your rights and responsibilities under copyright law</li>
            </ul>
            <p>We take these matters seriously and act promptly on valid complaints.</p>
          </section>

          <section style={sectionStyle}>
            <h3>2. Our Role</h3>
            <p>noirsane.com acts as:</p>
            <ul style={listStyle}>
              <li>A <strong>news and content platform</strong></li>
              <li>A distributor of news, commentary, and editorial content</li>
              <li>A platform that may contain <strong>user-submitted media</strong> and <strong>third-party embeds</strong></li>
            </ul>
            <p>
              We are not responsible for third-party submissions or externally embedded content, but we will <strong>remove infringing materials</strong> if properly notified.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3>3. Filing a DMCA Notice of Copyright Infringement</h3>
            <p>
              If you are a copyright owner (or authorized representative), and you believe your work has been used or displayed on noirsane.com without permission, you must send a <strong>written notice</strong> including the following:
            </p>
            
            <h4 style={{marginTop: "15px"}}>✅ Required Information:</h4>
            <ul style={listStyle}>
              <li><strong>Your full name and contact details</strong> (Mailing address, phone number, and email)</li>
              <li><strong>A description of the copyrighted work</strong>. Be as specific as possible (title, URL, description, etc.)</li>
              <li><strong>The URL of the infringing material</strong> on noirsane.com</li>
              <li>A statement that you have a <strong>good faith belief</strong> that the use is unauthorized</li>
              <li>A statement <strong>under penalty of perjury</strong> that the information in your notice is accurate and that you are the copyright owner (or authorized to act on their behalf)</li>
              <li>An electronic or physical signature</li>
            </ul>

            <h4 style={{marginTop: "15px"}}>📧 Submit Your Notice to:</h4>
            <p>DMCA Agent – noirsane.com<br/>
            Email: <a href="mailto:saptarshisingh@noirsane.com" style={{ color: "#d2691e" }}>saptarshisingh@noirsane.com</a></p>
            <p>We respond to <strong>properly formatted notices</strong> within 5–7 business days.</p>
          </section>

          <section style={sectionStyle}>
            <h3>4. Response to Valid Complaints</h3>
            <p>Upon receipt of a valid DMCA takedown notice, we will:</p>
            <ul style={listStyle}>
              <li>Investigate and evaluate the claim</li>
              <li>Remove or disable access to the allegedly infringing material</li>
              <li>Notify the affected party with details and provide instructions for counter-claim (if applicable)</li>
            </ul>
            <p>Repeat infringers may be <strong>banned permanently</strong> from submitting content.</p>
          </section>

          <section style={sectionStyle}>
            <h3>5. Counter-Notification Procedure</h3>
            <p>
              If you believe your content was removed by mistake or misidentification, you may file a <strong>counter-notification</strong>. This is your legal right.
            </p>

            <h4 style={{marginTop: "15px"}}>✅ Include the Following:</h4>
            <ul style={listStyle}>
              <li>Your name, address, phone number, and email</li>
              <li>Identify the material that was removed and the URL where it appeared</li>
              <li>A statement under penalty of perjury that the material was removed as a result of mistake or misidentification</li>
              <li>Your consent to the jurisdiction of a U.S. Federal District Court (or appropriate authority)</li>
              <li>Your signature (physical or electronic)</li>
            </ul>

            <h4 style={{marginTop: "15px"}}>📧 Send Counter-Notices to:</h4>
            <p>
              Email: <a href="mailto:saptarshisingh@noirsane.com" style={{ color: "#d2691e" }}>saptarshisingh@noirsane.com</a>
            </p>
            <p>
              If we receive a valid counter-notice, we may restore the material unless the original complainant initiates legal action within <strong>10 business days</strong>.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3>6. Repeat Infringer Policy</h3>
            <p>To protect our platform and content partners:</p>
            <ul style={listStyle}>
              <li>Any user or entity with <strong>multiple confirmed violations</strong> will be permanently banned.</li>
              <li>Accounts may be removed <strong>without prior notice</strong>.</li>
              <li>This policy applies regardless of intent.</li>
            </ul>
          </section>

          <section style={sectionStyle}>
            <h3>7. No Legal Advice</h3>
            <p>
              This DMCA Policy is for informational purposes only and <strong>should not be considered legal advice</strong>. If you are unsure about your rights, responsibilities, or the DMCA process, consult with a qualified attorney.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3>8. Updates to This Policy</h3>
            <p>
              We may revise or update this DMCA Policy at any time. Changes take effect immediately upon posting. It is your responsibility to review this policy periodically.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3>9. Contact Information</h3>
            <p>For any copyright-related issues, complaints, or questions:</p>
            <p>
              📧 Email: <a href="mailto:saptarshisingh@noirsane.com" style={{ color: "#d2691e" }}>saptarshisingh@noirsane.com</a><br/>
              🌐 Website: <a href="https://www.noirsane.com" style={{ color: "#d2691e" }}>https://www.noirsane.com</a>
            </p>
          </section>

        </div>
        {/* Legal Content End */}

      </div>
      <Footer />
    </>
  );
};

// Internal styles to keep code clean and consistent with Disclaimer page
const pageStyle = {
  padding: "120px 20px",
  maxWidth: "800px",
  margin: "0 auto",
  textAlign: "center"
};

const sectionStyle = {
  marginBottom: "30px"
};

const listStyle = {
  listStyleType: "disc",
  marginLeft: "20px",
  marginBottom: "15px"
};

export default DMCA;
