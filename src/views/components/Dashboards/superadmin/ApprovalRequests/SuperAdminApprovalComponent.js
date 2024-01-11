import React from "react";
import { Route, Routes } from "react-router-dom";
import ApprovalDetails from "./Approval/ApprovalDetails";
import ApprovalPosts from "./Approval/ApprovalPosts";
import "./SuperAdminApproval.css";

const SuperAdminApprovalComponent = () => {
  return (
    <div className="row g-0">
      <div className="col col-12 col-xl-10">
        <div className="not-dashboard-home-left-col">
          {/* booking request card */}

          <Routes>
            <Route index element={<ApprovalPosts />} />
            <Route path="details/:id" element={<ApprovalDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminApprovalComponent;
