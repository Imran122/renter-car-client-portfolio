import React from "react";
import { Route, Routes } from "react-router-dom";
import RenterDashboardComponent from "../../components/Dashboards/renter/RenterDashboard/RenterDashboardComponent";
import "../../styles/dashboard-style.css";
import SuperAdminDashboardComponent from "../../components/Dashboards/superadmin/SuperAdminDashboard/SuperAdminDashboardComponent";
import HostDashboardComponent from "../../components/Dashboards/host/HostDashboard/HostDashboardComponent";
import SellerDashboardComponent from "../../components/Dashboards/seller/SellerDashboard/SellerDashboardComponent";
import useAuth from "../../../hooks/useAuth";

const Dashboard = (props) => {
  // console.log("props", props);
  const { user, isLoading } = useAuth();
  return (
    <>
      {user.email && user.role === "renter" && <RenterDashboardComponent />}
      {user.email && user.role === "super-admin" && (
        <SuperAdminDashboardComponent />
      )}
      {user.email && user.role === "host" && <HostDashboardComponent />}
      {user.email && user.role === "seller" && <SellerDashboardComponent />}
    </>
  );
};

export default Dashboard;
