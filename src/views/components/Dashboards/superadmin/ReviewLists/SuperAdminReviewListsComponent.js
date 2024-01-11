import React from "react";
import CarReviewListsComponent from "./CarReviewListsComponent";
import "./ReviewLists.css";

const SuperAdminReviewListsComponent = () => {
  return (
    <div className="row g-0 h-100">
      <div className="col col-12 col-xl-9 p-4">
        <div className="content-wrapper h-100">
            <div className="row">
                <CarReviewListsComponent/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminReviewListsComponent;
