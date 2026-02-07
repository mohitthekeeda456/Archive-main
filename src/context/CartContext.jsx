import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext"; // We need to know IF the user is logged in

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const { user } = useAuth(); // Get the current user
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  // 1. LOAD CART (When app starts OR user changes)
  useEffect(() => {
    if (user) {
      // A. If User Logged In -> Fetch from Database
      fetch(`http://localhost:5000/api/cart/${user._id}`)
        .then(res => res.json())
        .then(data => {
            // MongoDB might return null if cart is empty, so default to []
            setCart(data || []); 
        })
        .catch(err => console.error("Error loading cart:", err));
    } else {
      // B. If Guest -> Fetch from Local Storage
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      } else {
        setCart([]); // Reset to empty if no local cart
      }
    }
  }, [user]); // Rerun this whenever 'user' changes (Login/Logout)

  // 2. CALCULATE TOTAL (Runs automatically when cart changes)
  useEffect(() => {
    const total = cart.reduce((sum, item) => {
      const priceNumber = parseFloat(item.price.replace("$", ""));
      return sum + priceNumber * item.quantity;
    }, 0);
    setCartTotal(total.toFixed(2));
  }, [cart]);

  // 3. SAVE CART HELPER (Decides where to save)
  const saveCart = (newCart) => {
    setCart(newCart); // Update State immediately (so UI is fast)

    if (user) {
      // If User -> Send to Database
      fetch(`http://localhost:5000/api/cart/${user._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart: newCart }),
      }).catch(err => console.error("Error saving cart:", err));
    } else {
      // If Guest -> Save to Local Storage
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  // --- ACTIONS ---

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    let newCart;

    if (existingItem) {
      // Increase quantity
      newCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      // Add new item (Ensure we save all fields needed for DB)
      newCart = [...cart, { 
        id: product.id,
        _id: product._id, 
        name: product.name, 
        price: product.price, 
        image: product.image, 
        quantity: 1 
      }];
    }
    saveCart(newCart); // Save to DB or LocalStorage
  };

  const removeFromCart = (productId) => {
    const newCart = cart.filter((item) => item.id !== productId);
    saveCart(newCart);
  };

  const updateQuantity = (productId, amount) => {
    // 1. Calculate new quantities
    const newCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + amount };
      }
      return item;
    });
    const finalCart = newCart.filter((item) => item.quantity > 0);
    saveCart(finalCart);
  };
  
  const clearCart = () => {
      saveCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, cartTotal, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};