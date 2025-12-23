import React, { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./OrdersAdmin.css";

export default function OrdersAdmin() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Get admin username from localStorage
  const adminUsername = localStorage.getItem("adminUsername");

  // Fetch orders from backend when component loads
    useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("adminToken");
      const response = await fetch("http://localhost:5000/api/orders", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      if (response.status === 401 || response.status === 403) {
        localStorage.removeItem("isAdminLoggedIn");
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
        throw new Error("Unauthorized");
      }

      if (!response.ok) {
        throw new Error("Failed to fetch orders");
      }

      const data = await response.json();
      setOrders(data);
      setError(null);
    } catch (err) {
      console.error("Error fetching orders:", err);
      setError("Failed to load orders. Make sure the backend is running.");
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const handleLogout = () => {
    // Clear login status
    localStorage.removeItem("isAdminLoggedIn");
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUsername");

    // Redirect to login page
    navigate("/admin/login");
  };

  // Format date to readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  // Update Order Status
  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(`http://localhost:5000/api/orders/${orderId}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (!response.ok) throw new Error("Failed to update status");

      // Update local state
      setOrders(orders => orders.map(order =>
        order._id === orderId ? { ...order, status: newStatus } : order
      ));

      // Show success toast
      toast.success(`Status updated to ${newStatus}`);
    } catch (err) {
      console.error("Error updating status:", err);
      toast.error("Failed to update status");
    }
  };

  // Delete Order
  const handleDelete = async (orderId) => {
    if (!window.confirm("Are you sure you want to delete this order? This action cannot be undone.")) {
      return;
    }

    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(`http://localhost:5000/api/orders/${orderId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      if (!response.ok) throw new Error("Failed to delete order");

      // Update local state by filtering out the deleted order
      setOrders(orders.filter(order => order._id !== orderId));

      toast.success("Order deleted successfully");
    } catch (err) {
      console.error("Error deleting order:", err);
      toast.error("Failed to delete order");
    }
  };

  if (loading) {
    return (
      <div className="orders-admin">
        <h1>Orders Dashboard</h1>
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading orders...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="orders-admin">
        <h1>Orders Dashboard</h1>
        <div className="error">
          <p>{error}</p>
          <button onClick={fetchOrders} className="retry-btn">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-admin">
      <Toaster position="top-right" />
      <div className="header">
        <div className="header-left">
          <h1>Orders Dashboard</h1>
          <p className="welcome-text">Welcome, Jerome!</p>
        </div>
        <div className="header-actions">
          <button onClick={fetchOrders} className="refresh-btn">
            🔄 Refresh
          </button>
          <button onClick={handleLogout} className="logout-btn">
            🚪 Logout
          </button>
        </div>
      </div>

      <div className="stats">
        <div className="stat-card">
          <h3>Total Orders</h3>
          <p className="stat-number">{orders.length}</p>
        </div>
        <div className="stat-card">
          <h3>Pending</h3>
          <p className="stat-number" style={{ color: "#f57c00" }}>
            {orders.filter(o => o.status === "Pending" || !o.status).length}
          </p>
        </div>
        <div className="stat-card">
          <h3>Completed</h3>
          <p className="stat-number" style={{ color: "#4caf50" }}>
            {orders.filter(o => o.status === "Completed").length}
          </p>
        </div>
      </div>

      {orders.length === 0 ? (
        <div className="no-orders">
          <p>No orders yet. Orders will appear here once customers submit them.</p>
        </div>
      ) : (
        <div className="table-container">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Status</th>
                <th>Product</th>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Payment</th>
                <th>File</th>
                <th>Color</th>
                <th>Instructions</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td className="order-id">{order._id.slice(-6)}</td>
                  <td>
                    <select
                      value={order.status || "Pending"}
                      onChange={(e) => handleStatusChange(order._id, e.target.value)}
                      className={`status-select status-${(order.status || "Pending").toLowerCase()}`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="product-name">{order.productName}</td>
                  <td>
                    {order.firstName} {order.lastName}
                  </td>
                  <td>{order.email}</td>
                  <td className="address">{order.address}</td>
                  <td>
                    <span className="payment-badge">{order.payment}</span>
                  </td>
                  <td>
                    {order.file ? (
                      <a
                        href={`http://localhost:5000/uploads/${order.file}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="file-link"
                      >
                        📎 View File
                      </a>
                    ) : (
                      <span className="no-file">No file</span>
                    )}
                  </td>
                  <td>
                    <span className="color-badge">{order.color || "None"}</span>
                  </td>
                  <td className="instructions">
                    {order.instructions || "None"}
                  </td>
                  <td className="date">{formatDate(order.createdAt)}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(order._id)}
                      className="delete-btn"
                      title="Delete Order"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}