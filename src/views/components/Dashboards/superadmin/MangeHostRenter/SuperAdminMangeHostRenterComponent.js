import React from "react";
import { Route, Routes } from "react-router-dom";
import ManageHostComponent from "./ManageHostComponent";
import ManageRenterComponent from "./ManageRenterComponent";
import "./MangeHostRenter.css";

const SuperAdminMangeHostRenterComponent = () => {
  return (
    <div className="row g-0">
      <div className="col col-12 col-xl-10">
        <div className="not-dashboard-home-left-col">
          {/* booking request card */}
          <Routes>
              <Route
                index
                element={<ManageRenterComponent />}
              />
              <Route
                path="hosts"
                element={<ManageHostComponent />}
              />
            </Routes>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminMangeHostRenterComponent;
