import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const SuperAdminRoute = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }
  return user.email && user.role === "admin" ? (
    children
  ) : (
    <Navigate to="/login" replace />
  );
};
export default SuperAdminRoute;
