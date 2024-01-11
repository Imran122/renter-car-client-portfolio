import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import userImg from "../../../../../assets/images/user_image.png";
import carImg from "../../../../../assets/images/iris.png";
import useMyBookingCarRenter from "../../../../../hooks/useMyBookingCarRenter";
import { useNavigate, useParams } from "react-router-dom";
import { getCookie } from "../../../../../utilities/helper";
import { FaStar } from "react-icons/fa";
import useAuth from "../../../../../hooks/useAuth";

const AddReview = ({ id, booktStatus }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const { user } = useAuth();
  const [myBookingCarData, setMyBookingCarData] = useMyBookingCarRenter();

  const [getDataForPost, setGetDataForPost] = useState([]);
  const navigate = useNavigate();
  //console.log("cc:", getDataForPost);
  const getFormData = () => {
    //console.log("clikc");
    setShow(true);

    //load data

    fetch(`${process.env.REACT_APP_API}/api/get-datafor-post-review/${id}`, {
      headers: {
        authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 401) {
          navigate("/dashboard", { replace: true });
        }
      })
      .then((data) => setGetDataForPost(data));
  };
  //start rating work
  const [reviewStarToCar, setReviewStarToCar] = useState(null);
  const [reviewStartToHost, setReviewStartToHost] = useState(null);
  const [hoverForCar, setHoverForCar] = useState(null);
  const [hover, setHover] = useState(null);
  //console.log("rating", reviewStarToCar);
  //console.log("rating2", reviewStartToHost);

  //post review data
  const [ratingDataPost, setRatingDataPost] = useState([]);
  const handleOnType = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRatingData = { ...ratingDataPost };
    newRatingData[field] = value;
    setRatingDataPost(newRatingData);
  };

  const submitData = (event) => {
    event.preventDefault();

    const allData = {
      reviewTextToCar: ratingDataPost.reviewTextToCar,
      reviewTextToHost: ratingDataPost.reviewTextToHost,
      booktStatus: getDataForPost.booktStatus,
      carMake: getDataForPost.carMake,
      carModel: getDataForPost.carModel,
      carUploadPersonHostId: getDataForPost.carUploadPersonHostId,
      hostFirstName: getDataForPost.hostFirstName,
      hostLastName: getDataForPost.hostLastName,
      hostProfileImage: getDataForPost.hostProfileImage,
      rentCarId: getDataForPost.rentCarId,
      rentCarImage: getDataForPost.rentCarImage,
      renterUserId: getDataForPost.renterUserId,
      reviewStarToCar,
      reviewStartToHost,
    };
    //console.log("allData", allData);
    fetch(`${process.env.REACT_APP_API}/api/review-data-post`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${getCookie("token")}`,
      },
      body: JSON.stringify(allData),
    })
      .then((response) => {
        if (response.status === 200) {
          //setIsLoading(false);
          return response.json();
        } else if (response.status === 401) {
          navigate("/login", { replace: true });
        }
      })

      .then((data) => {
        if (data) {
          setRatingDataPost("");
          setGetDataForPost("");
          setReviewStartToHost("");
          setReviewStarToCar("");
          navigate("/dashboard/my-bookings", { replace: true });
        }
      });
    setShow(false);
  };
  return (
    <div className="row">
      <div className="col col-12">
        {booktStatus === "complete" ? (
          <button
            type="submit"
            className="button-style cc-add-review-btn"
            onClick={() => getFormData(id)}
          >
            Add Review
          </button>
        ) : (
          <button
            type="submit"
            className="button-style cc-add-review-btn"
            onClick={() => getFormData(id)}
            disabled
          >
            Add Review
          </button>
        )}

        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <form onSubmit={submitData}>
            <Modal.Body>
              <div className="col col-12">
                <div className="cr-border">
                  <div className="cr-review-card">
                    <div className="p-4">
                      {/* car details */}
                      <div className="d-flex">
                        <div className="cr-border flex-justify-align-center me-2">
                          {getDataForPost?.rentCarImage ? (
                            <img
                              className="img-fluid"
                              src={getDataForPost?.rentCarImage}
                              alt="car thumbs"
                              width={"98px"}
                              height={"51px"}
                            />
                          ) : (
                            <img
                              className="img-fluid"
                              src={carImg}
                              alt="car thumbs"
                              width={"98px"}
                              height={"51px"}
                            />
                          )}
                        </div>
                        {/* car thumb and model */}
                        <div className="flex-grow-1 d-md-flex justify-content-between">
                          <div className="mb-2 mb-md-0">
                            <h5 className="fw-500 mb-2">
                              {getDataForPost.carMake} {getDataForPost.carModel}
                            </h5>
                            <small className="car-book-status p-1 rounded fw-500">
                              {getDataForPost.booktStatus}
                            </small>
                            {/*  <p className="car-review-date">
                            Fri 23 Feb 2021, 04:00 PM
                          </p> */}
                          </div>
                          {/* money limit */}
                          <div className="d-flex d-md-block book-money-title">
                            <div
                            /*   style={{
                              color: "#FFAD60",
                              fontSize: "22px",
                            }} */
                            >
                              {[...Array(5)].map((star, i) => {
                                const ratingValue = i + 1;
                                return (
                                  <label key={i}>
                                    <input
                                      type="radio"
                                      className="rating-radio-btn"
                                      name="reviewStarToCar"
                                      value={ratingValue}
                                      onClick={() =>
                                        setReviewStarToCar(ratingValue)
                                      }
                                    />
                                    <FaStar
                                      className="start-rating"
                                      color={
                                        ratingValue <=
                                        (hoverForCar || reviewStarToCar)
                                          ? "#ffc107"
                                          : "#e4e5e9"
                                      }
                                      size={20}
                                      onMouseEnter={() =>
                                        setHoverForCar(ratingValue)
                                      }
                                      onMouseLeave={() => setHoverForCar(null)}
                                    />
                                  </label>
                                );
                              })}

                              {/*  <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar /> */}
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
                              placeholder="Write your comment..."
                              name="reviewTextToCar"
                              onChange={handleOnType}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cr-review-card">
                    <div className="p-4">
                      {/* car details */}
                      <div className="d-flex review-host-title-txt">
                        <h4>Review to Host</h4>
                      </div>
                      <div className="d-flex">
                        <div className="me-2">
                          {getDataForPost?.hostProfileImage ? (
                            <img
                              src={getDataForPost.hostProfileImage}
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
                            <div className="host-review-user-title">
                              <h5 className="mb-2">
                                {getDataForPost.hostFirstName}{" "}
                                {getDataForPost.hostLastName}
                                <BsFillCheckCircleFill
                                  size={16}
                                  style={{ color: "var(--green)" }}
                                />
                              </h5>
                            </div>
                            <p className="car-review-date">Member since 2018</p>
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
                                      name="reviewStartToHost"
                                      value={ratingValue}
                                      onClick={() =>
                                        setReviewStartToHost(ratingValue)
                                      }
                                    />
                                    <FaStar
                                      className="start-rating"
                                      color={
                                        ratingValue <=
                                        (hover || reviewStartToHost)
                                          ? "#ffc107"
                                          : "#e4e5e9"
                                      }
                                      size={20}
                                      onMouseEnter={() => setHover(ratingValue)}
                                      onMouseLeave={() => setHover(null)}
                                    />
                                  </label>
                                );
                              })}
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
                              placeholder="Write your comment..."
                              name="reviewTextToHost"
                              onChange={handleOnType}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button
                className="button-style cc-reviwlist-modal-btn"
                onClick={submitData}
              >
                Post Now
              </button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default AddReview;
