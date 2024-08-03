// src/components/Signup.jsx

import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext"; // Import the useAuth hook
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const Signup = () => {
  const { signup } = useAuth(); // Access the signup function from AuthContext
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigate for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signup details:", { name, email, password });

    const success = await signup(name, email, password); // Call signup function

    if (success) {
      alert("Signup successful!");
      navigate("/dashboard"); // Navigate to dashboard on success
    } else {
      alert("Signup failed! Please try again."); // Show error on failure
    }
  };

  return (
    <div style={styles.container}>
      <h1>Signup Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter Name</label>
        <input
          style={styles.input}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          required
        />

        <br />
        <br />

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
          Signup
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <a href="/login" style={styles.link}>
          Login here
        </a>
      </p>
    </div>
  );
};

// Styling for the signup component
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
    backgroundColor: "#FF5733",
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

export default Signup;
