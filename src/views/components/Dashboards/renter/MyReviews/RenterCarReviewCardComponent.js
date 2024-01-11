import React from "react";
import carImg from "../../../../../assets/images/iris.png";
import { AiFillStar } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import "./MyReviews.css";

const RenterCarReviewCardComponent = (props) => {
  const {
    rentCarId,
    carUploadPersonHostId,
    renterUserId,
    hostFirstName,
    hostLastName,
    reviewStarToCar,
    reviewStartToHost,
    reviewTextToCar,
    reviewTextToHost,
    carMake,
    carModel,
    hostProfileImage,
    rentCarImage,
  } = props.myReviewList;
  return (
    <div className="cr-review-card cr-rc-sep">
      <div className="p-4">
        {/* car details */}
        <div className="d-flex">
          <div className="cr-border flex-justify-align-center me-2">
            <img className="img-fluid" src={rentCarImage} width={'98px'} height={'51px'} alt="car thumbs" />
          </div>
          {/* car thumb and model */}
          <div className="flex-grow-1 d-md-flex justify-content-between">
            <div className="mb-2 mb-md-0">
              <h5 className="fw-500 mb-2">
                {carMake} {carModel}
              </h5>
              <small className="car-book-status p-1 rounded fw-500">
                Completed
              </small>
              {/* <p className="car-review-date">Fri 23 Feb 2021, 04:00 PM</p> */}
            </div>
            {/* money limit */}
            <div className="d-flex d-md-block book-money-title">
              <div>
                {[...Array(5)].map((star, i) => {
                  const ratingValue = i + 1;
                  return (
                    <label key={i}>
                      <input
                        type="radio"
                        className="rating-radio-btn"
                        name="reviewStarToCar"
                        value={ratingValue}
                      />
                      <FaStar
                        className="start-rating"
                        color={
                          ratingValue <= reviewStarToCar ? "#ffc107" : "#e4e5e9"
                        }
                        size={20}
                      />
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* review details */}
        <div className="d-md-flex mt-4 mt-md-0">
          {/* review start */}
          <div className="d-flex justify-content-between review-details-item">
            <p>{reviewTextToCar}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenterCarReviewCardComponent;
