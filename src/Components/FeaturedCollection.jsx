import React from "react";
import { Link } from "react-router-dom";
import AddToCartIcon from "./AddToCartIcon";
import { products } from "../data/products"; // <--- 1. IMPORT THE REAL DATABASE

export default function FeaturedCollection() {
  return (
    <section className="featured-collection">
      <h2 className="serif-font">Featured Collection</h2>
      <p>
        Explore our signature chocolates, each one a testament to
        craftsmanship and indulgence.
      </p>

      <div className="product-grid">
        {/* 2. Map through the REAL products from your database */}
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            
            {/* Image Link */}
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            
            <div className="product-info">
              {/* Title Link */}
              <Link to={`/product/${product.id}`}>
                <h3 className="serif-font">{product.name}</h3>
              </Link>
              
              {/* Use tagline for short description */}
              <p>{product.tagline}</p> 
              
              <span className="price">{product.price}</span>
              
              <button className="btn-add-to-cart">
                <AddToCartIcon /> Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <Link to="/shop" className="btn-view-all">View All Products</Link>
    </section>
  );
}