import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageStyles from "./styles/PageStyles";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
import DMCA from "./pages/DMCA";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import ScrollToTop from "./Components/ScrollToTop";
import ProtectedRoute from "./Components/ProtectedRoutes";
import NotFound from "./pages/NotFound";
import AddProduct from "./pages/AddProduct";
import ManageProducts from "./pages/ManageProducts";
import AddBlog from "./pages/AddBlog";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AdminRoute from "./Components/AdminRoute";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <PageStyles />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop" element={<Shop />} />

              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/dmca" element={<DMCA />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/checkout"
                element={
                  <ProtectedRoute>
                    <Checkout />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/account"
                element={
                  <ProtectedRoute>
                    <Account />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/host"
                element={
                  <AdminRoute>
                    <AddProduct />
                  </AdminRoute>
                }
              />

              <Route
                path="/admin"
                element={
                  <AdminRoute>
                    <ManageProducts />
                  </AdminRoute>
                }
              />
              <Route
                path="/write"
                element={
                  <AdminRoute>
                    <AddBlog />
                  </AdminRoute>
                }
              />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </>
  );
}
