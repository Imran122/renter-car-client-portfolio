import React from "react";
import "./ListCarBanner.css";
import { Link, useNavigate } from "react-router-dom";
import listCarMainImg from "../../../../../assets/images/list-your-car-main.png";
import listCarMainBg from "../../../../../assets/images/listyourcarbg.png";

const ListCarBannerComponent = () => {
  const navigate = useNavigate();
  const Page = () => {
    navigate("/rent-car", { replace: true });
  };
  const Page2 = () => {
    navigate("#faq", { replace: true });
  };
  return (
    <div className="container list-car-primary-container py-5">
      <div className="list-car-container">
        <div className="list-car-wrapper">
          <div className="col">
            <div className="list-car-left-col text-white h-100">
              <h3 className="fw-bold">
                List your cars with us to <br className="d-none d-xl-block" />{" "}
                earn more
              </h3>
              <p>
                Put your car to work for you while you are sleeping or at home
                chilling doing what you love. Your car can make you money while
                you are in the office instead of leaving it at the parking lot.
              </p>
              <div className="d-flex list-car-left-col-buttons">
                <button onClick={() => Page()} className="me-2">
                  List a Car
                </button>

                <button>
                  <a className="worklink" href="#faq">
                    How it works?
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="list-car-right-col h-100">
              <img src={listCarMainImg} alt="person with money at hand" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCarBannerComponent;
