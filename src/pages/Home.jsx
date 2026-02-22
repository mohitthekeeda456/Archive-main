import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import FeaturedCollection from "../components/FeaturedCollection";
import CraftedWithPassion from "../components/CraftedWithPassion";
import Footer from "../components/Footer";

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
