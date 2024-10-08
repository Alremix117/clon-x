import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  return storedUser ? children : <Navigate to="/" />;
};
