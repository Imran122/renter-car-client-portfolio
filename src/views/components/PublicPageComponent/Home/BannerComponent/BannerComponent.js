import React from "react";
import { Container } from "react-bootstrap";
import "./BannerComponent.css";
import bannerImg from "../../../../../assets/images/banner-image.png";

const BannerComponent = () => {
  return (
    <header className="banner-container overflow-hidden">
      <div className="banner-content-container h-100">
        <div className="row h-100">
          {/* left col */}
          <div className="d-none d-xl-block col col-12 col-xl-6">
            <div className="banner-content-left-col h-100 d-flex align-items-center">
              <div className="wrapper">
                <h1 className="slide-in-left">
                  Find and book the best car easily
                </h1>
                <p className="slide-in-bottom">
                  A peer-to-peer car rental service that allows an individual to
                  rent his or her car to another individual for quick cash or
                  for profit in this sharing economy.
                </p>
              </div>
            </div>
          </div>
          {/* right col */}
          <div className="col col-12 col-xl-6">
            <div className="banner-content-right-col h-100">
              <img className="slide-in-right" src={bannerImg} alt="banner" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BannerComponent;
