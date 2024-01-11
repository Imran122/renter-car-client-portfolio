import React from "react";
import carImg from "../../../../../../assets/images/iris.png";
import { AiFillStar } from "react-icons/ai";
import "../MyReviews.css";

const RenterCarEditReviewCardComponent = () => {
  return (
    <div className="cr-review-card">
        <div className="p-4">
          {/* car details */}
          <div className="d-flex">
            <div className="cr-border flex-justify-align-center me-2">
              <img className="img-fluid" src={carImg} alt="car thumbs" />
            </div>
            {/* car thumb and model */}
            <div className="flex-grow-1 d-md-flex justify-content-between">
              <div className="mb-2 mb-md-0">
                <h5 className="fw-500 mb-2">Toyota Corolla Axio</h5>
                <small className="car-book-status p-1 rounded fw-500">
                  Completed
                </small>
                <p className="car-review-date">Fri 23 Feb 2021, 04:00 PM</p>
              </div>
              {/* money limit */}
              <div className="d-flex d-md-block book-money-title">
                <div style={{ color: "#FFAD60", fontSize: "22px" }}>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
            </div>
          </div>
          {/* review details */}
          <div className="d-flex mt-4 justify-content-end">
            <div className="col col-12 col-xl-10 offset-md-2">
              <div className="form-group">
                <textarea 
                  className="form-control cr-review-txtarea" 
                  id="exampleFormControlTextarea1" 
                  rows="3"
                  placeholder="Write your comment...">

                </textarea>
              </div>
            </div>
          </div>

        </div>
    </div>
  );
};

export default RenterCarEditReviewCardComponent;
