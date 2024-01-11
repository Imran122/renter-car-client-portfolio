import { React, useState } from "react";
import { Tab, Tabs, Modal } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import useRentCarDetails from "../../../../../../hooks/useRentCarDetails";
import RenterCarReviewCard from "../CarReviewCard/CarReviewCard";
import carImg from "../../../../../../assets/images/iris.png";
import userImg from "../../../../../../assets/images/user_image.png";
import "./CarInformationTabs.css";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import useCarReviewData from "../../../../../../hooks/useCarReviewData";

const CarInformationTabs = () => {
  const [checkDetailsRentCar, setCheckDetailsRentCar] = useRentCarDetails();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [reviewListData, setreviewListData] = useCarReviewData();

  let findReviewsData = reviewListData.map((product) => {
    return product.reviewList.reviewStarToCar;
  });

  const averageOfReview =
    findReviewsData.reduce((a, b) => a + b, 0) / findReviewsData.length;

  //start count
  let oneStart = findReviewsData.filter((x) => x === 1).length;
  let twoStart = findReviewsData.filter((x) => x === 2).length;
  let threeStart = findReviewsData.filter((x) => x === 3).length;
  let fourStart = findReviewsData.filter((x) => x === 4).length;
  let fiveStart = findReviewsData.filter((x) => x === 5).length;

  return (
    <div className="rent-car-information-tabs">
      <Tabs
        defaultActiveKey="description"
        id="uncontrolled-tab-example"
        className="mb-3 car-details-tabss"
      >
        {/* rent car description */}
        {/*   <Tab eventKey="description" title="Description">
          <p className="rent-car-description p-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Aliqua id fugiat nostrud irure
            ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt
            mollit dolore cillum minim tempor enim. Elit aute irure tempor
            cupidatat incididunt sint deserunt ut voluptate aute id deserunt
            nisi.
          </p>
        </Tab> */}

        {/* rent car review lists */}
        <Tab eventKey="reviews" title="Reviews">
          <div className="rent-car-reviews p-4">
            <div className="review-stats d-flex align-items-start">
              <div className="d-none d-xl-block review-stats-left d-grid gap-2">
                <p className="fs-5 mb-0">
                  {averageOfReview ? averageOfReview.toFixed(2) : 0} Out of 5
                </p>
                <div style={{ color: "#FFAD60" }}>
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
                            ratingValue <= averageOfReview
                              ? "#ffc107"
                              : "#e4e5e9"
                          }
                          size={20}
                        />
                      </label>
                    );
                  })}
                </div>
                <small>{reviewListData.length} Ratings</small>
              </div>
              {/* rating */}
              <div className="review-stats-right gap-2">
                {[
                  { rating: 5, starCount: fiveStart },
                  { rating: 4, starCount: fourStart },
                  { rating: 3, starCount: threeStart },
                  { rating: 2, starCount: twoStart },
                  { rating: 1, starCount: oneStart },
                ].map(({ rating, starCount }) => (
                  <div className="d-flex align-items-center" key={rating}>
                    {/* rating */}
                    <small>{rating} star</small>
                    <div className="review-stats-star-count-bar mx-2">
                      {/* set star count to the width to get percentage */}
                      <div
                        style={{
                          width: `${starCount}%`,
                        }}
                        className="review-stat-star-count-percent"
                      ></div>
                    </div>
                    {/* star count */}
                    <small>{starCount}</small>
                  </div>
                ))}
              </div>
            </div>

            {/* renter car review list */}
            <div className="review-list d-grid gap-4">
              {/* review card */}
              <RenterCarReviewCard />
              {/*  <RenterCarReviewCard /> */}

              <div className="row">
                <div className="col col-12 col-lg-4">
                  <Link
                    to="/dashboard/my-bookings"
                    className="button-style cc-add-review-btn"
                  >
                    Add Review
                  </Link>
                  {/*   <button
                    type="submit"
                    className="button-style cc-add-review-btn"
                    onClick={handleShow}
                  >
                    Add Review
                  </button> */}

                  <Modal
                    show={show}
                    onHide={handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Body>
                      <div className="col col-12">
                        <div className="cr-border">
                          <div className="cr-review-card">
                            <div className="p-4">
                              {/* car details */}
                              <div className="d-flex">
                                <div className="cr-border flex-justify-align-center me-2">
                                  <img
                                    className="img-fluid"
                                    src={carImg}
                                    alt="car thumbs"
                                  />
                                </div>
                                {/* car thumb and model */}
                                <div className="flex-grow-1 d-md-flex justify-content-between">
                                  <div className="mb-2 mb-md-0">
                                    <h5 className="fw-500 mb-2">
                                      Toyota Corolla Axio
                                    </h5>
                                    <small className="car-book-status p-1 rounded fw-500">
                                      Completed
                                    </small>
                                    <p className="car-review-date">
                                      Fri 23 Feb 2021, 04:00 PM
                                    </p>
                                  </div>
                                  {/* money limit */}
                                  <div className="d-flex d-md-block book-money-title">
                                    <div
                                      style={{
                                        color: "#FFAD60",
                                        fontSize: "22px",
                                      }}
                                    >
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
                                      placeholder="Write your comment..."
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
                                  <img
                                    src={userImg}
                                    className="car-book-request-thumb rounded-circle border img-fluid"
                                    style={{ marginLeft: "10px" }}
                                    alt="user profile"
                                  />
                                </div>
                                {/* car thumb and model */}
                                <div className="flex-grow-1 d-md-flex justify-content-between">
                                  <div className="mb-2 mb-md-0">
                                    <div className="host-review-user-title">
                                      <h5 className="mb-2">
                                        Alex Simmons
                                        <BsFillCheckCircleFill
                                          size={16}
                                          style={{ color: "var(--green)" }}
                                        />
                                      </h5>
                                    </div>
                                    <p className="car-review-date">
                                      Member since 2018
                                    </p>
                                  </div>
                                  {/* money limit */}
                                  <div className="d-flex d-md-block book-money-title">
                                    <div
                                      style={{
                                        color: "#524EB7",
                                        fontSize: "22px",
                                      }}
                                    >
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
                                      placeholder="Write your comment..."
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
                        onClick={handleClose}
                      >
                        Post Now
                      </button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </Tab>

        {/* rent cart delivery options */}
        <Tab eventKey="delivery_charges" title="Delivery Charges">
          <div className="p-4 delivery-card-list-container">
            <div className="col align-items-center  justify-content-center">
              <div className="delivery-card d-flex justify-content-between align-items-center">
                <div className="d-flex delivery-card-address">
                  <HiOutlineLocationMarker size={28} />
                  <p style={{ color: "var(--black4)" }} className="ms-2 fw-500">
                    {checkDetailsRentCar.pickupAddress?.address}
                  </p>
                </div>
                <p className="delivery-card-price">
                  ${checkDetailsRentCar.deliveryCharges}
                </p>
              </div>
            </div>
            {/*  <div className="col">
              <div className="delivery-card d-flex justify-content-between align-items-center">
                <div className="d-flex delivery-card-address">
                  <HiOutlineLocationMarker size={28} />
                  <p style={{ color: "var(--black4)" }} className="ms-2 fw-500">
                    4140 Parker Rd. Allentown, New Mexico 31134
                  </p>
                </div>

                                   free delivery badge
                          <p className="delivery-card-price">$80</p>
                          *
                <div className="delivery-card-badge text-white">
                  <span>FREE</span>
                </div>
              </div>
            </div>  */}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default CarInformationTabs;
