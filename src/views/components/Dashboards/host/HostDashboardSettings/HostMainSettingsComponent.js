import React from "react";
import { Route, Routes } from "react-router-dom";
import HostSettingsComponent from "./Settings/HostSettingsComponent";
import HostProfileEditComponent from "./ProfileEdit/HostProfileEditComponent";
import HostChangePasswordComponent from "./ProfileEdit/HostChangePasswordComponent";
import "./HostSettings.css";

const HostMainSettingsComponent = () => {
  return (
    <>
      <div className="row g-0">
        <div className="col col-12 col-xl-9">
          <div className="not-dashboard-home-left-col">
            {/* booking request card */}
            <Routes>
              <Route index element={<HostSettingsComponent />} />
              <Route
                path="host-edit-profile"
                element={<HostProfileEditComponent />}
              />
              <Route
                path="host-change-password"
                element={<HostChangePasswordComponent />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default HostMainSettingsComponent;
