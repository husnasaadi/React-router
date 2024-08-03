// src/components/Login.jsx

import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext"; // Import the useAuth hook
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const Login = () => {
  const { login } = useAuth(); // Access the login function from AuthContext
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigate for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login details:", { email, password });

    const success = await login(email, password); // Call login function

    if (success) {
      alert("Login successful!");
      navigate("/dashboard"); // Navigate to dashboard on success
    } else {
      alert("Invalid credentials! Try again."); // Show error on failure
    }
  };

  return (
    <div style={styles.container}>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Enter Email</label>
        <input
          style={styles.input}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Enter Email"
          value={email}
          required
        />

        <br />
        <br />

        <label htmlFor="password">Enter Password</label>
        <input
          style={styles.input}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
          required
        />

        <br />
        <br />

        <button style={styles.button} type="submit">
          Login
        </button>
      </form>
      <p>
        Don't have an account?{" "}
        <a href="/signup" style={styles.link}>
          Signup here
        </a>
      </p>
    </div>
  );
};

// Styling for the login component
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
  input: {
    width: "90%",
    padding: "8px",
    margin: "8px 0",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  link: {
    color: "#007BFF",
    textDecoration: "none",
  },
};

export default Login;
