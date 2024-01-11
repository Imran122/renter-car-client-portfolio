import React from "react";
import RenterCarEditReviewCardComponent from "./RenterCarEditReviewCardComponent";
import RenterToHostEditReviewCardComponent from "./RenterToHostEditReviewCardComponent";
import "../MyReviews.css";

const RenterEditReviewComponent = () => {
  return (
    <div className="row g-0 h-100">
      <div className="col col-12 col-xl-8 p-4">
        <div className="content-wrapper h-100">
            <div className="row">
                <div className="cr-border">
                    <RenterCarEditReviewCardComponent/>
                    <RenterToHostEditReviewCardComponent/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RenterEditReviewComponent;
