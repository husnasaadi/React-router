// src/context/AuthContext.js

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to handle login
  const login = async (email, password) => {
    // Simulate an API call for authentication
    if (email === 'test@example.com' && password === 'password') {
      setUser({ email, name: 'Test User' });
      return true; 
    }
    return false; // Login failed
  };

  // Function to handle signup
  const signup = async (name, email, password) => {
    setUser({ name, email });
    return true; 
  };

  // Function to handle logout
  const logout = () => {
    setUser(null); 
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user, 
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
