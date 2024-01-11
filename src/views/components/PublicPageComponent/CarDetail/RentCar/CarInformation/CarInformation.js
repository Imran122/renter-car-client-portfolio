import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { IoMailOutline } from "react-icons/io5";
import userImgPlaceholder from "../../../../../../assets/images/user-img-2.png";
import useCarReviewData from "../../../../../../hooks/useCarReviewData";
import useRentCarDetails from "../../../../../../hooks/useRentCarDetails";
import "./CarInformation.css";

const CarInformation = () => {
  const [checkDetailsRentCar, setCheckDetailsRentCar] = useRentCarDetails();
  const [reviewListData, setreviewListData] = useCarReviewData();

  let findReviewsData = reviewListData.map((product) => {
    return product.reviewList.reviewStarToCar;
  });

  const averageOfReview =
    findReviewsData.reduce((a, b) => a + b, 0) / findReviewsData.length;

  return (
    <>
      {/* car images */}
      <div className="car-img-container">
        <div className="car-img-on-focus car-img-wrapper">
          {checkDetailsRentCar?.carImage && (
            <img
              className="img-fluid"
              src={checkDetailsRentCar?.carImage[0]}
              alt="car-pics"
            />
          )}
        </div>
        <div className="d-none d-lg-block car-img-list-container">
          <div className="row row-cols-5">
            {/* collection of car images ----> mutate the Array here */}

            {checkDetailsRentCar?.carImage &&
              checkDetailsRentCar?.carImage.map((carThumb) => (
                <div className="col" key={carThumb}>
                  <div className="car-img-wrapper px-2 py-4 cursor-pointer">
                    <img className="img-fluid" src={carThumb} alt="cars pic" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* car detail section */}
      <div className="car-detail-container">
        {/* rating and options */}
        <div className="d-flex justify-content-between align-items-center">
          {/* rating */}
          <p className="most-booked-cars-rating p-1 fw-500 rounded">
            <AiFillStar />
            <span className="mx-1">
              {averageOfReview ? averageOfReview.toFixed(2) : 0}
            </span>
            <span>({reviewListData.length} trips)</span>
          </p>
          {/* options button */}
          <button className="bg-transparent border-0 d-inline-block">
            <HiDotsVertical size={18} />
          </button>
        </div>

        {/* car title and specs */}
        <div className="car-title-specs-container mb-4">
          <h3 className="fw-bold">{checkDetailsRentCar.carMake}</h3>
          <div className="car-specs-container">
            <p className="car-spec text-uppercase">
              <span className="me-1">SEATS:</span>
              <span>{checkDetailsRentCar?.seatNumber}</span>
            </p>
            <p className="car-spec text-uppercase">
              <span className="me-1">DOORS:</span>
              <span>{checkDetailsRentCar?.doorNumber}</span>
            </p>
            <p className="car-spec text-uppercase">
              <span className="me-1">MPG:</span>
              <span>{checkDetailsRentCar?.milesPerGallon}</span>
            </p>
            <p className="car-spec text-uppercase">
              <span className="me-1">FUEL:</span>
              <span>{checkDetailsRentCar?.fuelType}</span>
            </p>
            <p className="car-spec text-uppercase">
              <span className="me-1">BODY:</span>
              <span>{checkDetailsRentCar?.bodyType}</span>
            </p>
          </div>
        </div>

        {/* host details */}
        <div className="car-host-details-container">
          <div className="host-details d-flex justify-content-between">
            {/* user thumbnail */}

            {checkDetailsRentCar.profileImage ? (
              <img
                src={checkDetailsRentCar.profileImage}
                className="car-book-request-thumb rounded-circle border img-fluid"
                alt="user profile"
              />
            ) : (
              <img
                src={userImgPlaceholder}
                className="car-book-request-thumb rounded-circle border img-fluid"
                alt="user profile"
              />
            )}

            <div className="ms-2">
              {/* host name and verification status */}
              <h6 className="d-flex align-items-center">
                <span className="fw-bold me-1">
                  {checkDetailsRentCar.firstname}
                </span>
                <span>
                  <BsFillCheckCircleFill
                    size={13}
                    style={{
                      color: "var(--green)",
                    }}
                  />
                </span>
              </h6>

              <p className="my-2">Member since 2018</p>

              {/* rating */}
              <p className="most-booked-cars-rating host-details-rating p-1 fw-500 rounded">
                <AiFillStar />
                <span className="mx-1">5.0 Out Of 5</span>
                {/*  <span>(243 trips)</span> */}
              </p>
            </div>
          </div>
          {/* message button */}
          <button className="bg-transparent flex-justify-align-center">
            <IoMailOutline />{" "}
            <small className="d-none d-lg-inline ms-lg-1">Send a Message</small>
          </button>
        </div>
      </div>
    </>
  );
};

export default CarInformation;
