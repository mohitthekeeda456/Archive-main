// src/components/Features.jsx
import React from "react";
import { QualityIcon, HandcraftedIcon, LuxuryIcon } from "./Icons";

export default function Features() {
  return (
    <section className="features-section">
      <div className="feature-item">
        <QualityIcon />
        <h3>Premium Quality</h3>
        <p>Single-origin cacao from world’s finest plantations</p>
      </div>

      <div className="feature-item">
        <HandcraftedIcon />
        <h3>Handcrafted</h3>
        <p>Every piece meticulously crafted</p>
      </div>

      <div className="feature-item">
        <LuxuryIcon />
        <h3>Luxury Experience</h3>
        <p>Elegant packaging for gifting</p>
      </div>
    </section>
  );
}
