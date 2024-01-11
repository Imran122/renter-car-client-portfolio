import { React, useEffect, useState } from "react";
import userImg from "../../../../../assets/images/user_image.png";
import { Modal } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./ReviewLists.css";
import AdminEditReview from "./AdminEditReview";
import { FaStar } from "react-icons/fa";
import { getCookie } from "../../../../../utilities/helper";
import useAdminReviewList from "../../../../../hooks/useAdminReviewList";

const CarReviewListsComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [star, setStar] = useState(false);
  const toggleStar = () => setStar((prev) => !prev);
  const [adminReviewListData, setAdminReviewListData] = useAdminReviewList();
  return (
    <div className="cr-border sa-review-box p-4">
      {/* car details */}
      {adminReviewListData.map((data) => (
        <div className="row" key={data._id}>
          <div className="col col-12 col-xl-8">
            <div className="d-flex">
              <div className="me-2">
                {data?.renterProfileImage ? (
                  <img
                    src={data.renterProfileImage}
                    className="car-book-request-thumb rounded-circle border img-fluid"
                    style={{ marginLeft: "10px" }}
                    alt="user profile"
                  />
                ) : (
                  <img
                    src={userImg}
                    className="car-book-request-thumb rounded-circle border img-fluid"
                    style={{ marginLeft: "10px" }}
                    alt="user profile"
                  />
                )}
              </div>
              {/* car thumb and model */}
              <div className="flex-grow-1 d-md-flex justify-content-between">
                <div className="mb-2 mb-md-0">
                  <div className="sa-review-user-title">
                    <h5 className="ms-2 mb-2">
                      <strong>
                        {data.renterFirstName} {data.renterLastName}{" "}
                      </strong>
                      rated to
                      <strong>
                        {" "}
                        {data.reviewList.carMake} {data.reviewList.carModel}{" "}
                      </strong>
                      of <strong>{data.reviewList.hostFirstName}</strong>
                    </h5>
                  </div>

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
                                ratingValue <= data?.reviewList?.reviewStarToCar
                                  ? "#ffc107"
                                  : "#e4e5e9"
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
            </div>
            {/* review details */}
            <div className="d-md-flex mt-4 mt-md-0">
              {/* review start */}
              <div className="d-flex justify-content-between review-details-item2">
                <p>{data.reviewList?.reviewTextToCar}</p>
              </div>
            </div>
          </div>

          <AdminEditReview adminReviewListData={data} />
        </div>
      ))}
    </div>
  );
};

export default CarReviewListsComponent;
