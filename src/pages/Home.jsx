import React from "react";
import Navbar from "../Components/Navbar"; // Check if your folder is 'Components' or 'Components'
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import FeaturedCollection from "../Components/FeaturedCollection";
import CraftedWithPassion from "../Components/CraftedWithPassion";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="choco-verse-app">
      <div className="choco-verse-container">
        <Navbar />
        <Hero />
      </div>
      <div className="choco-verse-container">
        <Features />
      </div>
      <div className="choco-verse-app-continued">
        <FeaturedCollection />
        <CraftedWithPassion />
        <Footer />
      </div>
    </div>
  );
};

export default Home;