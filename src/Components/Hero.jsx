import React from "react";
import { Link } from "react-router-dom"; // 1. Import Link
import { BadgeIcon } from "./Icons";

export default function Hero() {
  return (
    <main className="hero-section">
      <div className="hero-content">
        <span className="badge">
          <BadgeIcon /> Handcrafted Luxury
        </span>

        <h1>
          Indulge in <span className="highlight">Pure Elegance</span>
        </h1>

        <p>
          Discover our exquisite collection of artisanal chocolates, crafted
          with the finest ingredients and adorned with edible gold.
        </p>

        <div className="hero-buttons">
          {/* 2. Link "Explore Collection" to /shop */}
          <Link to="/shop" className="btn-primary">
            Explore Collection →
          </Link>
          
          {/* 3. Link "Our Story" to /about */}
          <Link to="/about" className="btn-secondary">
            Our Story
          </Link>
        </div>
      </div>

      <div className="hero-graphic-container">
        <div className="hero-graphic-blur"></div>
        <div className="hero-graphic-image"></div>
      </div>
    </main>
  );
}