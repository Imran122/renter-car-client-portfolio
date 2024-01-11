import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { FaCheckSquare } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { IoDocumentOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { GrCar } from "react-icons/gr";
import { FaUsers } from "react-icons/fa";
import HeaderComponent from "../../Layout/Header/HeaderComponent";
import SidebarComponent from "../../Layout/Sidebar/SidebarComponent";
import "./SuperAdminDashboard.css";
import SuperAdminDashboardHomeComponent from "../SuperAdminDashboardHome/SuperAdminDashboardHomeComponent";
import SuperAdminApprovalComponent from "../ApprovalRequests/SuperAdminApprovalComponent";
import SuperAdminDocumentsComponent from "../Documents/SuperAdminDocumentsComponent";
import SuperAdminReviewListsComponent from "../ReviewLists/SuperAdminReviewListsComponent";
import SuperAdminAdministratorComponent from "../Administrator/SuperAdminAdministratorComponent";
import SuperAdminAllBookingsComponent from "../AllBookings/SuperAdminAllBookingsComponent";
import SuperAdminMangeHostRenterComponent from "../MangeHostRenter/SuperAdminMangeHostRenterComponent";
// links object
const SuperAdminDashboardLinks = [
  {
    to: "/dashboard",
    icon: <MdDashboard size={24} />,
    text: "Dashboard",
  },
  {
    to: "/dashboard/approval-requests",
    icon: <FaCheckSquare size={24} />,
    text: "Approval Requests",
  },
  {
    to: "/dashboard/documents",
    icon: <IoDocumentOutline size={24} />,
    text: "Documents",
  },
  {
    to: "/dashboard/all-bookings",
    icon: <GrCar size={24} />,
    text: "All Bookings",
  },
  {
    to: "/dashboard/review-lists",
    icon: <AiFillStar size={24} />,
    text: "Review Lists",
  },
  {
    to: "/dashboard/manage",
    icon: <FaUsers size={24} />,
    text: "Manage host/ renter",
  },
  {
    to: "/dashboard/administrator",
    icon: <AiOutlineUser size={24} />,
    text: "Administrator",
  },
  {
    to: "/dashboard/temp",
    icon: <FiSettings size={24} />,
    text: "Payment Systems",
  },
];

const SuperAdminDashboardComponent = () => {
  return (
    <div className="d-flex">
      <SidebarComponent sidebarLinks={SuperAdminDashboardLinks} />
      <div className="dashboard-header-content-container flex-grow-1">
        <HeaderComponent
          sidebarLinks={SuperAdminDashboardLinks}
          subtitle="Manage your systems from here"
        />
        {/* content */}
        <Routes>
          <Route index element={<SuperAdminDashboardHomeComponent />} />
          <Route
            path="approval-requests/*"
            element={<SuperAdminApprovalComponent />}
          />
          <Route path="documents" element={<SuperAdminDocumentsComponent />} />
          <Route path="review-lists" element={<SuperAdminReviewListsComponent />} />
          <Route path="administrator" element={<SuperAdminAdministratorComponent />} />
          <Route path="all-bookings" element={<SuperAdminAllBookingsComponent />} />
          <Route
            path="manage/*"
            element={<SuperAdminMangeHostRenterComponent />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default SuperAdminDashboardComponent;
