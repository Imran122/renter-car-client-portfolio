import React from "react";
import { Route, Routes } from "react-router-dom";
import { AiOutlineCar, AiOutlineStar } from "react-icons/ai";
import { BiBookmarks, BiCog } from "react-icons/bi";
import { IoMailOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import HeaderComponent from "../../Layout/Header/HeaderComponent";
import SidebarComponent from "../../Layout/Sidebar/SidebarComponent";
import RenterDashboardHomeComponent from "../RenterDashboardHome/RenterDashboardHomeComponent";
import RenterSettingsComponent from "../RenterDashboardSettings/RenterSettingsComponent";
import RenterMyBookingsComponent from "../MyBookings/RenterMyBookingsComponent";
import RenterMyFavouritesComponent from "../MyFavourites/RenterMyFavouritesComponent";
import RenterMyReviewsComponent from "../MyReviews/RenterMyReviewsComponent";
import RenterEditReviewComponent from "../MyReviews/EditReviews/RenterEditReviewComponent"
import "./RenterDashboard.css";

// links object
const RenterDashboardLinks = [
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
    to: "/dashboard/my-bookings",
    icon: <BiBookmarks size={24} />,
    text: "My Bookings",
  },
  {
    to: "/dashboard/my-favourites",
    icon: <AiOutlineCar size={24} />,
    text: "My Favourites",
  },
  {
    to: "/dashboard/my-reviews",
    icon: <AiOutlineStar size={24} />,
    text: "My Reviews",
  },
  {
    to: "/dashboard/settings",
    icon: <BiCog size={24} />,
    text: "Settings",
  },
];

const RenterDashboardComponent = () => {
  return (
    <div className="d-flex">
      <SidebarComponent sidebarLinks={RenterDashboardLinks} />
      <div className="dashboard-header-content-container flex-grow-1 min-vh-100">
        <HeaderComponent
          sidebarLinks={RenterDashboardLinks}
          subtitle="Book a car most conveniently"
        />
        {/* content */}
        <Routes>
          <Route index element={<RenterDashboardHomeComponent />} />
          <Route
            path="settings/*"
            element={<RenterSettingsComponent />}
          />
          <Route
            path="my-bookings"
            element={<RenterMyBookingsComponent />}
          />
          <Route
            path="my-favourites"
            element={<RenterMyFavouritesComponent />}
          />
          <Route
            path="my-reviews/*"
            element={<RenterMyReviewsComponent />}
          />
          <Route
            path="my-reviews/edit"
            element={<RenterEditReviewComponent />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default RenterDashboardComponent;
