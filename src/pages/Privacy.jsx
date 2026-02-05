import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Privacy = () => {
  return (
    <>
      <Navbar />
      <div className="page-container" style={{ padding: "100px 20px", maxWidth: "800px", margin: "0 auto" }}>
        <h1 className="serif-font">Privacy Policy</h1>
        <p>Last Updated: [Date]</p>
        <br />
        <h3>1. Information We Collect</h3>
        <p>[Paste the Privacy Policy text from the old site here...]</p>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;