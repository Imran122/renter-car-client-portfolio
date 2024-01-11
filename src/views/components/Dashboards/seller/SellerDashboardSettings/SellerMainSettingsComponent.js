import React from "react";
import { Route, Routes } from "react-router-dom";
import SellerSettingsComponent from "./Settings/SellerSettingsComponent";
import SellerProfileEditComponent from "./ProfileEdit/SellerProfileEditComponent";
import SellerChangePasswordComponent from "./ProfileEdit/SellerChangePasswordComponent";
import "./SellerSettings.css";

const SellerMainSettingsComponent = () => {
  return (
    <>
      <div className="row g-0">
        <div className="col col-12 col-xl-9">
          <div className="not-dashboard-home-left-col">
            {/* booking request card */}
            <Routes>
              <Route index element={<SellerSettingsComponent />} />
              <Route
                path="seller-edit-profile"
                element={<SellerProfileEditComponent />}
              />
              <Route
                path="seller-change-password"
                element={<SellerChangePasswordComponent />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerMainSettingsComponent;
