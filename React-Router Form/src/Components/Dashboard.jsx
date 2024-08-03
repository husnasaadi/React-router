// src/components/Dashboard.jsx

import React from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom"; 

const Dashboard = () => {
  const { user, logout } = useAuth(); 
  const navigate = useNavigate(); 

  const handleLogout = () => {
    logout(); 
    navigate("/login"); 
  };

  return (
    <div style={styles.container}>
      <h1>Welcome, {user?.name || "Guest"}</h1>
      <p>Email: {user?.email}</p>
      <button style={styles.button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

// Styling for the dashboard component
const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#FF5733",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Dashboard;
