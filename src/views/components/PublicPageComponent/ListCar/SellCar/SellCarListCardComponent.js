import { React, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SellCarListCardComponent = (props) => {
  const {
    milesPerGallon,
    carImage,
    sellPrice,
    carModel,
    pickupAddress,
    carCondition,
    carMake,
    userId,
    firstname,
    profileImage,
  } = props.sellCarList;
  const navigate = useNavigate();

  const [favorite, setFavorite] = useState(false);
  const toggleFavorite = () => setFavorite((prev) => !prev);

  return (
    <div className="col cr-car-card">
      <article className="top-rated-car-card border-black8 rounded-0 h-100">
        <div className="top-rated-car-card-img w-100">
          <img className="img-fluid" src={carImage[0]} alt="car-thumb" />
          {/* like button */}
          <button
            onClick={toggleFavorite}
            className="top-rated-car-react-button"
          >
            {favorite ? (
              <MdFavorite style={{ color: "#F76631" }} />
            ) : (
              <MdFavoriteBorder style={{ color: "#F76631" }} />
            )}
          </button>
        </div>
        <div className="top-rated-car-content">
          <div className="top-rated-car-card-body">
            {/* rating and distance */}
            <div className="d-flex justify-content-between align-items-center">
              {/* rating */}
              <p className="most-booked-cars-rating d-inline-block p-1 fw-500 rounded">
                <AiFillStar />
                <span className="mx-1">{carCondition}</span>
              </p>
              {/* distance */}
              <p className="top-rated-car-distance d-flex align-items-center">
                <HiOutlineLocationMarker size={18} />
                <span className="ms-1 fw-500">{milesPerGallon} MPG </span>
              </p>
            </div>
            {/* car title */}
            <h4 className="top-rated-car-title fw-bold">{carMake}</h4>
            <p>{carModel}</p>
            <p className="top-rated-car-location d-flex align-items-center">
              <HiOutlineLocationMarker size={18} />
              <span className="ms-1 fw-500">
                {pickupAddress.address.slice(0, 12)}...
              </span>
            </p>
            <div className="d-flex align-items-center">
              <img
                className="img-fluid rounded-circle me-2"
                src={profileImage}
                alt="user"
                width={30}
                height={30}
              />
              <p className="fw-500 m-0">
                <span className="me-1">{firstname}</span>
                <BsFillCheckCircleFill
                  size={16}
                  style={{ color: "var(--green)" }}
                />
              </p>
            </div>
          </div>

          {/* rent/h and book now button */}
          <div className="top-rated-car-card-footer d-flex justify-content-between align-items-center">
            <p className="d-flex align-items-center m-0">
              <span className="fw-bold">${sellPrice} / </span>
              <small> price</small>
            </p>

            <button
              onClick={() => {
                navigate(`/sell-car-details/${props.sellCarList._id}`, {
                  replace: true,
                });
              }}
              className="px-3 py-2 text-white primary-button border-0 d-inline-block cr-button"
            >
              Buy now
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SellCarListCardComponent;
