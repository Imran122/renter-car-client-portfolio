import React from "react";
import { AiOutlineCar, AiOutlineStar } from "react-icons/ai";
import { BiBookmarks, BiCog } from "react-icons/bi";
import { IoMailOutline, IoChatbubblesOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { BsUpload } from "react-icons/bs";
import HeaderComponent from "../../Layout/Header/HeaderComponent";
import SidebarComponent from "../../Layout/Sidebar/SidebarComponent";
import "./HostDashboard.css";
import HostDashboardHomeComponent from "../HostDashboardHome/HostDashboardHomeComponent";
import { Route, Routes } from "react-router-dom";
import HostRentCarUploadComponent from "../HostRentCarUpload/HostRentCarUploadComponent";
import HostSellCarUploadComponent from "../HostSellCarUpload/HostSellCarUploadComponent";
import HostMainSettingsComponent from "../HostDashboardSettings/HostMainSettingsComponent";
import HostBookingsComponent from "../HostBookings/HostBookingsComponent";
import HostMyVehicelsComponent from "../HostMyVehicels/HostMyVehicelsComponent";
import HostReviewsComponent from "../HostReviews/HostReviewsComponent";
// links object
const HostDashboardLinks = [
  {
    to: "/dashboard",
    icon: <MdDashboard size={24} />,
    text: "Dashboard",
  },
  {
    to: "/dashboard/temp",
    icon: <IoMailOutline size={24} />,
    text: "Messages",
  },
  {
    to: "/dashboard/bookings",
    icon: <BiBookmarks size={24} />,
    text: "Bookings",
  },
  {
    to: "/dashboard/my-vehicles",
    icon: <AiOutlineCar size={24} />,
    text: "My Vehicles",
  },
  {
    to: "/dashboard/rent-car-upload",
    icon: <BsUpload size={24} />,
    text: "Rent Car Upload",
  },
  {
    to: "/dashboard/sell-car-upload",
    icon: <BsUpload size={24} />,
    text: "Sell Car Upload",
  },
  {
    to: "/dashboard/reviews",
    icon: <AiOutlineStar size={24} />,
    text: "Reviews",
  },
  {
    to: "/dashboard/temp",
    icon: <IoChatbubblesOutline size={24} />,
    text: "Support",
  },
  {
    to: "/dashboard/settings",
    icon: <BiCog size={24} />,
    text: "Settings",
  },
];

const HostDashboardComponent = () => {
  return (
    <div className="d-flex">
      <SidebarComponent sidebarLinks={HostDashboardLinks} />
      <div className="dashboard-header-content-container flex-grow-1">
        <HeaderComponent
          sidebarLinks={HostDashboardLinks}
          subtitle="Manage cars and bookings from here"
        />
        {/* content */}
        <Routes>
          <Route index element={<HostDashboardHomeComponent />} />
          <Route
            path="rent-car-upload/*"
            element={<HostRentCarUploadComponent />}
          />
          <Route
            path="sell-car-upload/*"
            element={<HostSellCarUploadComponent />}
          />
          <Route path="bookings" element={<HostBookingsComponent />} />
          <Route path="reviews/*" element={<HostReviewsComponent />} />
          <Route path="my-vehicles/*" element={<HostMyVehicelsComponent />} />
          <Route path="settings/*" element={<HostMainSettingsComponent />} />
        </Routes>
      </div>
    </div>
  );
};

export default HostDashboardComponent;
