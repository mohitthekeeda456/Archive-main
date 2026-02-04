import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../Components/Footer";

const Disclaimer = () => {
  return (
    <>
      <Navbar />
      <div className="page-container" style={pageStyle}>
        
        {/* Header Section */}
        <h1 className="serif-font" style={{ marginBottom: "10px" }}>Disclaimer</h1>
        <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "40px" }}>
          Effective Date: April 29, 2025
        </p>

        {/* Legal Content Start */}
        <div className="legal-content" style={{ textAlign: "left", lineHeight: "1.6" }}>
          
          <section style={sectionStyle}>
            <h3>1. General Disclaimer</h3>
            <p>
              The information contained on <strong>noirsane.com</strong> is for <strong>general informational, educational, and entertainment purposes only</strong>. The content is provided in <strong>good faith</strong>; however, <strong>noirsane.com makes no representation or warranty of any kind</strong>, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information.
            </p>
            <p>
              Under <strong>no circumstance shall we be liable</strong> for any loss or damage incurred as a result of the use of the site or reliance on any information provided.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3>2. Editorial Integrity and News Accuracy</h3>
            <p>
              noirsane.com is an <strong>independently operated digital news platform</strong> that strives for journalistic integrity. However:
            </p>
            <ul style={listStyle}>
              <li>The news, opinions, and analyses are subject to change.</li>
              <li>Some articles may reflect personal views or commentary.</li>
              <li>We do not guarantee that all information remains accurate, timely, or complete after publication.</li>
              <li>We regularly update and review articles but are not obligated to correct every piece unless legally mandated.</li>
            </ul>
          </section>

          <section style={sectionStyle}>
            <h3>3. Professional Advice Disclaimer</h3>
            <p>This website may contain:</p>
            <ul style={listStyle}>
              <li>Health tips</li>
              <li>Financial guides</li>
              <li>Legal insights</li>
              <li>Technology recommendations</li>
              <li>Personal opinions</li>
            </ul>
            <p>
              These are not a substitute for professional advice. <strong>You should consult with a qualified expert or licensed professional</strong> for decisions related to medical, financial, legal, or personal matters.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3>4. External Links and Third-Party Content</h3>
            <p>
              noirsane.com may contain links to third-party websites or services. These are provided only for your convenience and do not imply:
            </p>
            <ul style={listStyle}>
              <li>Any endorsement</li>
              <li>Responsibility</li>
              <li>Accuracy</li>
              <li>Ownership of content</li>
            </ul>
            <p>
              We do not control external sites and are <strong>not responsible</strong> for the content or privacy policies of such websites.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3>5. Comments and User Interactions</h3>
            <p>Users may be allowed to comment on news articles or engage with other readers:</p>
            <ul style={listStyle}>
              <li>All comments are moderated.</li>
              <li>Hate speech, spam, misinformation, or harassment is not tolerated.</li>
              <li>We may remove or block users who violate comment policies.</li>
              <li>Opinions expressed by commenters do not reflect the views of noirsane.com or its editorial staff.</li>
            </ul>
          </section>

          <section style={sectionStyle}>
            <h3>6. Sponsored Content and Advertising</h3>
            <p>
              We may feature <strong>ads, sponsored articles, and affiliate links</strong> to maintain the platform and deliver free content to users. These may be served by:
            </p>
            <ul style={listStyle}>
              <li>Google AdSense</li>
              <li>Affiliate networks</li>
              <li>Brand partners</li>
            </ul>
            <p>
              We only partner with <strong>trusted and verified advertisers</strong> but cannot guarantee every ad’s quality or accuracy. We are not responsible for your interactions with advertisers.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3>7. Copyright and Fair Use</h3>
            <p>Unless otherwise stated:</p>
            <ul style={listStyle}>
              <li>All content on <strong>noirsane.com</strong> is our intellectual property.</li>
              <li>Use of excerpts must include proper attribution.</li>
              <li>Unauthorized duplication is strictly prohibited.</li>
            </ul>
            <p>
              We honor <strong>fair use provisions</strong> under copyright law, especially for commentary, news reporting, research, and education.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3>8. Limitation of Liability</h3>
            <p>To the fullest extent permitted by applicable law, we disclaim:</p>
            <ul style={listStyle}>
              <li>All warranties</li>
              <li>Liabilities for direct or indirect damages</li>
              <li>Losses caused by service interruptions, errors, or third-party misconduct</li>
            </ul>
            <p>Users accept full responsibility for the use of this website and its content.</p>
          </section>

          <section style={sectionStyle}>
            <h3>9. No Warranties</h3>
            <p>We make no warranties that:</p>
            <ul style={listStyle}>
              <li>The website will operate uninterrupted</li>
              <li>The content is virus-free or error-free</li>
              <li>The results obtained will be reliable or complete</li>
            </ul>
            <p>We reserve the right to change, update, or remove content without notice.</p>
          </section>

          <section style={sectionStyle}>
            <h3>10. Jurisdiction and Governing Law</h3>
            <p>
              This Disclaimer shall be governed by and construed in accordance with the laws of your country of residence and/or international copyright and liability standards.
            </p>
          </section>

          <section style={sectionStyle}>
            <h3>11. Consent</h3>
            <p>By accessing or using noirsane.com, you agree to:</p>
            <ul style={listStyle}>
              <li>All the terms of this disclaimer</li>
              <li>Our privacy policy and terms of service</li>
            </ul>
            <p>If you do not agree, please discontinue use of the website.</p>
          </section>

          <section style={sectionStyle}>
            <h3>12. Contact Information</h3>
            <p>If you have questions regarding this disclaimer, you may contact us at:</p>
            <p>
              📧 Email: <a href="mailto:saptarshisingh@noirsane.com" style={{ color: "#d2691e" }}>saptarshisingh@noirsane.com</a>
            </p>
          </section>

        </div>
        {/* Legal Content End */}

      </div>
      <Footer />
    </>
  );
};

// Internal styles to keep code clean
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

export default Disclaimer;