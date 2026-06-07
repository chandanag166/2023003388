import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await axios.get("http://localhost:5000/notifications");
      setNotifications(response.data.notifications || []);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  const priorityNotifications = [...notifications]
    .sort((a, b) => {
      const weight = { Placement: 3, Result: 2, Event: 1 };
      if (weight[b.Type] !== weight[a.Type]) return weight[b.Type] - weight[a.Type];
      return new Date(b.Timestamp) - new Date(a.Timestamp);
    })
    .slice(0, 10);

  const filteredNotifications =
    filter === "All"
      ? notifications
      : filter === "Priority"
      ? priorityNotifications
      : notifications.filter((n) => n.Type === filter);

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedNotifications = filteredNotifications.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredNotifications.length / limit) || 1;

  const getCardColor = (type) => {
    switch (type) {
      case "Placement": return "#d4edda";
      case "Result": return "#d1ecf1";
      case "Event": return "#fff3cd";
      default: return "#ffffff";
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f4f6f9", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <div style={{ background: "#1e3a8a", color: "white", padding: "25px", borderRadius: "12px", marginBottom: "20px" }}>
        <h1>Campus Notification Dashboard</h1>
        <p>Placement, Result and Event Notifications Management System</p>
      </div>

      {/* Stats Cards */}
      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", marginBottom: "20px" }}>
        <div style={{ background: "white", padding: "20px", borderRadius: "10px", width: "180px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <h3>Total</h3>
          <h2>{notifications.length}</h2>
        </div>
        <div style={{ background: "#d4edda", padding: "20px", borderRadius: "10px", width: "180px" }}>
          <h3>Placement</h3>
          <h2>{notifications.filter((n) => n.Type === "Placement").length}</h2>
        </div>
        <div style={{ background: "#d1ecf1", padding: "20px", borderRadius: "10px", width: "180px" }}>
          <h3>Result</h3>
          <h2>{notifications.filter((n) => n.Type === "Result").length}</h2>
        </div>
        <div style={{ background: "#fff3cd", padding: "20px", borderRadius: "10px", width: "180px" }}>
          <h3>Event</h3>
          <h2>{notifications.filter((n) => n.Type === "Event").length}</h2>
        </div>
        <div style={{ background: "#fde68a", padding: "20px", borderRadius: "10px", width: "180px" }}>
          <h3>Priority</h3>
          <h2>{priorityNotifications.length}</h2>
        </div>
      </div>

      {/* Filter and Limit Selector */}
      <div style={{ background: "white", padding: "20px", borderRadius: "10px", marginBottom: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
        <h2>Filter Notifications</h2>
        <select value={filter} onChange={(e) => { setFilter(e.target.value); setPage(1); }} style={{ padding: "10px", fontSize: "16px", borderRadius: "6px" }}>
          <option value="All">All Notifications</option>
          <option value="Priority">Top 10 Priority</option>
          <option value="Placement">Placement</option>
          <option value="Result">Result</option>
          <option value="Event">Event</option>
        </select>

        <div style={{ marginTop: "15px" }}>
          <label> Limit:
            <select value={limit} onChange={(e) => { setLimit(Number(e.target.value)); setPage(1); }} style={{ marginLeft: "10px", padding: "8px" }}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </label>
          <span style={{ marginLeft: "20px", fontWeight: "bold" }}>Page {page} of {totalPages}</span>
        </div>
      </div>

      {/* Notifications */}
      <div style={{ background: "white", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
        <h2>{filter === "Priority" ? "Top 10 Priority Notifications" : "Notifications"}</h2>
        
        {paginatedNotifications.map((notification) => (
          <div key={notification.ID} style={{ background: getCardColor(notification.Type), padding: "15px", marginBottom: "15px", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
            <h3>{notification.Type}</h3>
            <p><strong>Message:</strong> {notification.Message}</p>
            <p><strong>Timestamp:</strong> {notification.Timestamp}</p>
            <small><strong>ID:</strong> {notification.ID}</small>
          </div>
        ))}

        {/* Pagination Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px" }}>
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
          <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;