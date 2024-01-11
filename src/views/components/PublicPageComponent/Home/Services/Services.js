import React from "react";
import "./Services.css";
import icon1 from "../../../../../assets/icons/Group 10072.png";
import icon2 from "../../../../../assets/icons/Group 10073.png";
import icon3 from "../../../../../assets/icons/Group 10076.png";
import icon4 from "../../../../../assets/icons/Group 10133.png";

const Services = () => {
  return (
    <div className="container py-5 d-none d-xl-block">
      <div className="section-title text-center">
        <h3>Why rent from us</h3>
      </div>

      {/* content */}
      <div className="row g-4">
        {/* service card */}
        <div className="col col-3">
          <article className="services-card px-3 py-4 border-black8 text-center">
            <img className="img-fluid mb-4" src={icon1} alt="icons" />
            <p className="text-center">
            We verify every registered car 
            </p>
          </article>
        </div>
        {/* service card */}
        <div className="col col-3">
          <article className="services-card px-3 py-4 border-black8   text-center">
            <img className="img-fluid mb-4" src={icon2} alt="icons" />
            <p className="text-center">
              We provide the best reasonable pricing in the market
            </p>
          </article>
        </div>
        {/* service card */}
        <div className="col col-3">
          <article className="services-card px-3 py-4 border-black8   text-center">
            <img className="img-fluid mb-4" src={icon3} alt="icons" />
            <p className="text-center">
            We are increasing Pick up locations across the country to pick from
            </p>
          </article>
        </div>
        {/* service card */}
        <div className="col col-3">
          <article className="services-card px-3 py-4 border-black8   text-center">
            <img className="img-fluid mb-4" src={icon4} alt="icons" />
            <p className="text-center">
            We pay attention to the Reviews to help improve your car rental services
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Services;
