import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../contexts/AuthContext";

export default function Account() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Fetch Orders when page loads
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/api/orders/${user._id}`)
        .then((res) => res.json())
        .then((data) => {
          setOrders(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching orders:", err);
          setLoading(false);
        });
    }
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <div className="page-container" style={pageStyle}>
        <div style={headerStyle}>
          <h1 className="serif-font">My Account</h1>
          <p>
            Welcome back,{" "}
            <span style={{ fontWeight: "bold" }}>{user?.name}</span>
          </p>
          <button onClick={handleLogout} style={logoutBtnStyle}>
            Logout
          </button>
        </div>

        <div style={contentStyle}>
          <h2
            className="serif-font"
            style={{ borderBottom: "1px solid #ddd", paddingBottom: "10px" }}
          >
            Order History
          </h2>

          {loading ? (
            <p>Loading orders...</p>
          ) : orders.length === 0 ? (
            <p>You haven't placed any orders yet.</p>
          ) : (
            <div style={ordersGridStyle}>
              {orders.map((order) => (
                <div key={order._id} style={orderCardStyle}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                    }}
                  >
                    <span style={{ fontWeight: "bold" }}>
                      Order #{order._id.substring(0, 8)}...
                    </span>
                    <span style={{ color: "#666" }}>
                      {new Date(order.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <div style={{ marginBottom: "15px" }}>
                    {order.orderItems.map((item, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          marginBottom: "5px",
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover",
                            borderRadius: "5px",
                          }}
                        />
                        <span>
                          {item.name} x {item.qty}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderTop: "1px solid #eee",
                      paddingTop: "10px",
                    }}
                  >
                    <span style={{ fontWeight: "bold", color: "#3e2723" }}>
                      Total: ₹{order.totalPrice.toLocaleString("en-IN")}
                    </span>
                    <span style={statusBadgeStyle(order.isDelivered)}>
                      {order.isDelivered ? "Delivered" : "Processing"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

// --- STYLES ---
const pageStyle = {
  padding: "120px 20px",
  maxWidth: "1000px",
  margin: "0 auto",
  minHeight: "80vh",
};
const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "50px",
  flexWrap: "wrap",
  gap: "20px",
};
const logoutBtnStyle = {
  padding: "10px 20px",
  backgroundColor: "#f4f4f4",
  border: "1px solid #ddd",
  borderRadius: "5px",
  cursor: "pointer",
};
const contentStyle = {
  backgroundColor: "#fff",
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
};
const ordersGridStyle = { display: "grid", gap: "20px", marginTop: "20px" };
const orderCardStyle = {
  border: "1px solid #eee",
  borderRadius: "8px",
  padding: "20px",
  backgroundColor: "#fafafa",
};

const statusBadgeStyle = (isDelivered) => ({
  padding: "5px 10px",
  borderRadius: "20px",
  fontSize: "0.8rem",
  fontWeight: "bold",
  backgroundColor: isDelivered ? "#e8f5e9" : "#fff3e0",
  color: isDelivered ? "#2e7d32" : "#ef6c00",
});

