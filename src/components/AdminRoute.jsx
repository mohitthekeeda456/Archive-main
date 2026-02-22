import React from "react";
import { Navigate } from "react-router-dom"; // Used to kick people out
import { useAuth } from "../context/AuthContext";

export default function AdminRoute({ children }) {
  const { user } = useAuth();

  // 1. Check if user is logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 2. Check if user is an Admin
  if (user.isAdmin !== true) {
    alert("⛔ Access Denied: Hosts Only!"); // Optional: Scold them
    return <Navigate to="/" replace />; // Send them home
  }

  // 3. If they pass both checks, let them in!
  return children;
}