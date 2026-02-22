import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <>
      <Navbar />
      <div className="page-container" style={pageStyle}>
        
        {/* Header Section */}
        <h1 className="serif-font" style={{ marginBottom: "10px" }}>Terms of Service</h1>
        <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "5px" }}>
          Effective Date: April 29, 2025
        </p>
        <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "40px" }}>
          Website: <a href="https://www.noirsane.com" style={{ color: "#d2691e" }}>https://www.noirsane.com</a>
        </p>

        {/* Legal Content Start */}
        <div className="legal-content" style={{ textAlign: "left", lineHeight: "1.6" }}>
          
          <section style={sectionStyle}>
            <h3>1. Acceptance of Terms</h3>
            <p>
              By accessing or using the website <strong>noirsane.com</strong> (referred to as “we”, “us”, “our”, or “the Site”), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, <strong>please do not use this website</strong>.
            </p>
            <p>
              These terms constitute a binding legal agreement between you (the user, visitor, or contributor) and noirsane.com.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3>2. Changes to Terms</h3>
            <p>
              We reserve the right to update, change, or replace any part of these Terms of Service at any time. Changes will take effect immediately upon posting. Your continued use of the website constitutes acceptance of any modifications.
            </p>
            <p>We encourage you to <strong>review this page periodically</strong> for any changes.</p>
          </section>

          <section style={sectionStyle}>
            <h3>3. User Eligibility</h3>
            <p>By using this site, you confirm that you:</p>
            <ul style={listStyle}>
              <li>Are at least <strong>13 years of age</strong></li>
              <li>Have the legal capacity to enter into a binding agreement</li>
              <li>Will comply with all applicable laws and regulations</li>
            </ul>
            <p>
              If you access this website from outside your home country, you are responsible for compliance with local laws.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3>4. Website Content</h3>
            <p>All content provided on noirsane.com is:</p>
            <ul style={listStyle}>
              <li>For <strong>informational and entertainment purposes only</strong></li>
              <li>The <strong>intellectual property</strong> of noirsane.com unless otherwise noted</li>
              <li>Protected by copyright and trademark laws</li>
            </ul>
            <p><strong>You may:</strong> Share links to our content, Quote short passages with proper credit and links.</p>
            <p><strong>You may not:</strong> Copy entire articles or images, Reproduce or distribute content without permission, Use our content for commercial gain without licensing.</p>
          </section>

          <section style={sectionStyle}>
            <h3>5. Affiliate Disclosure and Advertising</h3>
            <p>This website may display:</p>
            <ul style={listStyle}>
              <li>Google AdSense ads</li>
              <li>Affiliate marketing links</li>
              <li>Sponsored articles or banners</li>
            </ul>
            <p>
              If you click on affiliate links and make a purchase, we may earn a small commission at <strong>no additional cost to you</strong>. This helps us provide free content.
            </p>
            <p>
              We only promote products or services that we <strong>genuinely believe are of value</strong>, but we are not liable for your experience with third-party vendors.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3>6. News and Editorial Standards</h3>
            <p>
              noirsane.com publishes news, opinions, editorials, and informational articles. While we strive for accuracy and fairness:
            </p>
            <ul style={listStyle}>
              <li>News evolves rapidly, and some reports may become outdated</li>
              <li>Editorials reflect individual author opinions</li>
              <li>We do not guarantee completeness or accuracy of every post</li>
            </ul>
            <p>Corrections or updates are made when necessary and feasible.</p>
          </section>

          <section style={sectionStyle}>
            <h3>7. User Conduct</h3>
            <p>By using the site, you agree not to:</p>
            <ul style={listStyle}>
              <li>Violate any applicable laws or regulations</li>
              <li>Post or transmit any content that is <strong>harassing, defamatory, obscene, misleading, or harmful</strong></li>
              <li>Attempt to gain unauthorized access to our site or systems</li>
              <li>Upload viruses, malware, or malicious code</li>
            </ul>
            <p>Violation of these rules may result in termination of access without notice.</p>
          </section>

          <section style={sectionStyle}>
            <h3>8. User-Generated Content</h3>
            <p>We may allow users to: Comment on articles, Submit opinions or tips.</p>
            <p>
              You retain ownership of your content but grant us a <strong>non-exclusive, royalty-free license</strong> to display, reproduce, or distribute your contributions on our platform and social media.
            </p>
            <p>We reserve the right to <strong>moderate or remove</strong> any content we deem inappropriate or non-compliant with our policies.</p>
          </section>

          <section style={sectionStyle}>
            <h3>9. Third-Party Links and Services</h3>
            <p>
              noirsane.com may contain links to external websites and embedded content. We do not control or endorse third-party content. Your interactions with external services are governed by their respective terms and privacy policies.
            </p>
            <p>We are <strong>not responsible</strong> for damages or issues arising from third-party interactions.</p>
          </section>

          <section style={sectionStyle}>
            <h3>10. Intellectual Property Rights</h3>
            <p>Unless stated otherwise:</p>
            <ul style={listStyle}>
              <li>All logos, graphics, text, design, software, and images are owned by noirsane.com</li>
              <li>Use of our trademarks or branding requires prior written consent</li>
            </ul>
            <p>Unauthorized use of our intellectual property is strictly prohibited and may lead to legal action.</p>
          </section>

          <section style={sectionStyle}>
            <h3>11. Disclaimer of Warranties</h3>
            <p>
              The website is provided <strong>“as is”</strong> and <strong>“as available”</strong> without warranties of any kind. We do not guarantee continuous or error-free access, freedom from viruses, or that the content is always accurate. You use this website <strong>at your own risk</strong>.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3>12. Limitation of Liability</h3>
            <p>To the fullest extent permitted by law, we shall not be liable for any:</p>
            <ul style={listStyle}>
              <li>Direct or indirect damages</li>
              <li>Loss of data, revenue, or profits</li>
              <li>Personal injury or harm resulting from use of this website</li>
            </ul>
            <p>This includes damages from site downtime, errors, inaccurate content, user conduct, or external links.</p>
          </section>

          <section style={sectionStyle}>
            <h3>13. Indemnification</h3>
            <p>
              You agree to indemnify and hold harmless noirsane.com, its owners, affiliates, partners, employees, and contributors from any claim, demand, or legal action resulting from your use of the website, your violation of these terms, or your infringement of third-party rights.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3>14. Governing Law and Jurisdiction</h3>
            <p>
              These terms are governed by the laws of India. Any disputes or claims shall be subject to the <strong>exclusive jurisdiction of the courts in Kolkata, West Bengal, India</strong>. If any provision is found to be invalid, the rest shall remain enforceable.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3>15. Termination</h3>
            <p>
              We may suspend or terminate access to the site for any reason, including violation of these Terms, legal concerns, or site maintenance. Upon termination, your right to use the website will immediately cease.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3>16. Contact Information</h3>
            <p>If you have questions or concerns about these Terms of Service, please contact:</p>
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

// Internal styles
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

export default Terms;
