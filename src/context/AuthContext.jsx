import React, { createContext, useState, useContext, useEffect } from "react";

// 1. Create the Context
const AuthContext = createContext();

// 2. Custom Hook
export const useAuth = () => useContext(AuthContext);

// 3. The Provider
export const AuthProvider = ({ children }) => {
  // Check Local Storage on load (so you stay logged in if you refresh)
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Function: Login
  const login = (userData) => {
    // In the future, this is where you save the "Token" from the backend
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Save to browser
  };

  // Function: Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Clear from browser
    // Optional: Clear cart on logout? 
    // localStorage.removeItem("cart"); 
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};