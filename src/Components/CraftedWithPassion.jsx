import React from "react";
import { Link } from "react-router-dom"; // 1. Import Link

export default function CraftedWithPassion() {
  return (
    <div className="choco-verse-container-wide">
      <section className="crafted-with-passion">
        <div className="crafted-image">
          <img
            src="https://i.pinimg.com/1200x/28/de/01/28de01ee6f6a97998ded64f8bcaf29a0.jpg"
            alt="Close-up of handcrafted chocolate"
          />
        </div>
        <div className="crafted-content">
          <h2 className="serif-font">
            Crafted with <span className="serif-font">Passion</span>
          </h2>
          <p>
            Our master chocolatiers source the finest cacao beans from
            sustainable farms around the world.
          </p>
          <p>
            A harmonious blend of tradition and innovation creates chocolates
            that delight the senses.
          </p>
          
          {/* 2. Link to the About page */}
          <Link to="/about" className="btn-primary-yellow">
            Discover Our Journey
          </Link>
          
        </div>
      </section>
    </div>
  );
}