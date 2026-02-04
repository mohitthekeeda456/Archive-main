import React from "react";
import Navbar from "../components/Navbar"; // Check if your folder is 'components' or 'Components'
import Hero from "../components/Hero";
import Features from "../components/Features";
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