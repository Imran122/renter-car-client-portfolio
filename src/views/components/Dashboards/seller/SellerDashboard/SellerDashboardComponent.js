import React from "react";
import { Route, Routes } from "react-router-dom";
import { AiOutlineCar } from "react-icons/ai";
import { BiCog } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { BsUpload } from "react-icons/bs";
import HeaderComponent from "../../Layout/Header/HeaderComponent";
import SidebarComponent from "../../Layout/Sidebar/SidebarComponent";
import SellerDashboardHomeComponent from "../SellerDashboardHome/SellerDashboardHomeComponent";
import SellerSellCarUploadComponent from "../SellerSellCarUpload/SellerSellCarUploadComponent";
import SellerMainSettingsComponent from "../SellerDashboardSettings/SellerMainSettingsComponent";
import SellerMyVehicelsComponent from "../SellerMyVehicels/SellerMyVehicelsComponent";
import "./SellerDashboard.css";
// links object
const SellerDashboardLinks = [
  {
    to: "/dashboard",
    icon: <MdDashboard size={24} />,
    text: "Dashboard",
  },
  /*   {
    to: "/dashboard/my-vehicles",
    icon: <AiOutlineCar size={24} />,
    text: "My Vehicles",
  }, */
  {
    to: "/dashboard/seller-sell-car-upload",
    icon: <BsUpload size={24} />,
    text: "Sell Car Upload",
  },
  {
    to: "/dashboard/settings",
    icon: <BiCog size={24} />,
    text: "Settings",
  },
];

const SellerDashboardComponent = () => {
  return (
    <div className="d-flex">
      <SidebarComponent sidebarLinks={SellerDashboardLinks} />
      <div className="dashboard-header-content-container flex-grow-1">
        <HeaderComponent
          sidebarLinks={SellerDashboardLinks}
          subtitle="Manage cars and selling from here"
        />
        {/* content */}
        <Routes>
          {/* <Route index element={<SellerDashboardHomeComponent />} /> */}
          <Route index element={<SellerMyVehicelsComponent />} />
          <Route
            path="seller-sell-car-upload/*"
            element={<SellerSellCarUploadComponent />}
          />

          <Route path="settings/*" element={<SellerMainSettingsComponent />} />
        </Routes>
      </div>
    </div>
  );
};

export default SellerDashboardComponent;
