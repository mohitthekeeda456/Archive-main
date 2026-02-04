import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // 1. Load Cart on Startup
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = window.localStorage.getItem("cart");
      if (savedCart) {
        console.log("🛒 Loaded cart from storage:", JSON.parse(savedCart));
        return JSON.parse(savedCart);
      } else {
        return [];
      }
    } catch (error) {
      console.error("Error loading cart:", error);
      return [];
    }
  });

  // 2. Save Cart whenever it changes
  useEffect(() => {
    console.log("💾 Saving cart:", cart);
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // --- FUNCTIONS ---
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    alert(`${product.name} added to cart!`);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cart.reduce((total, item) => {
     const priceString = item.price.replace(/[^0-9.]/g, ''); 
     const priceNumber = parseFloat(priceString);
     return total + (priceNumber * item.quantity);
  }, 0).toFixed(2);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};