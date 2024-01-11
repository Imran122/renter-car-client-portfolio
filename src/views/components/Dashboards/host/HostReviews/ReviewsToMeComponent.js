import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HostReviewMeDetailsComponent from "./HostReviewMeComponent/HostReviewMeDetailsComponent";

import "./HostReviews.css";

const ReviewsToMeComponent = () => {
  
  return (
    <div className="row g-0">
      <div className="col col-12">
        <div className="not-dashboard-home-left-col">
          {/* booking request card */}
          <div className="vehicles-button">
            <Link to={"/dashboard/reviews"} className="active">Reviews to me</Link>

            <Link to={"/dashboard/reviews/my-review"}>
              Reviews I provided
            </Link>
          </div>
            <HostReviewMeDetailsComponent />
        </div>
      </div>
    </div>
  );
};

export default ReviewsToMeComponent;
