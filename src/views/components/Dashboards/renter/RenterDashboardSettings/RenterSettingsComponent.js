import React from "react";
import { Route, Routes } from "react-router-dom";
import SettingsComponent from "./Settings/SettingsComponent";
import RenterProfileEditComponent from "./ProfileEdit/RenterProfileEditComponent";
import ChangePasswordComponent from "./ProfileEdit/ChangePasswordComponent";
import "./RenterSettings.css";

const RenterSettingsComponent = () => {
  return (
    <>
      <div className="row g-0">
        <div className="col col-12 col-xl-9">
          <div className="not-dashboard-home-left-col">
            {/* booking request card */}
            <Routes>
              <Route index element={<SettingsComponent />} />
              <Route
                path="renter-profile-update"
                element={<RenterProfileEditComponent />}
              />
              <Route
                path="renter-change-password"
                element={<ChangePasswordComponent />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default RenterSettingsComponent;
