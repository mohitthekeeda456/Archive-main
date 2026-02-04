import React from "react";
import Navbar from "../components/Navbar";
import FeaturedCollection from "../Components/FeaturedCollection"; // Reusing your grid!
import Footer from "../Components/Footer";

const Shop = () => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "80px" }}>
        <FeaturedCollection />
      </div>
      <Footer />
    </>
  );
};
export default Shop;