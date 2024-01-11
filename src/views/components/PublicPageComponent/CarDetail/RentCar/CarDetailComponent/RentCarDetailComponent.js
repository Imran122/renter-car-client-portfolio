import React from "react";
import NavbarComponent from "../../../../common/NavBar/NavbarComponent";
import CarInformation from "../CarInformation/CarInformation";
import CarInformationTabs from "../CarInformationTabs/CarInformationTabs";
import CarTripBook from "../CarTripBook/CarTripBook";
import "./CarDetailComponent.css";

const RentCarDetailComponent = () => {
  return (
    <>
      <NavbarComponent />
      <section className="renter-car-detail-container container-lg">
        <div className="row g-0 g-lg-4 py-lg-4">
          {/* start of left col */}
          <div className="col-wrapper col-12 col-lg-8">
            <div className="car-detail-left-col">
              <CarInformation />
              <CarInformationTabs />
            </div>
          </div>
          {/* end of left col */}

          {/* start of right col */}
          <div className="col-wrapper col-12 col-lg-4">
            <div className="car-detail-right-col">
              {/* trip booking */}
              <CarTripBook />
            </div>
          </div>
          {/* end of right col */}
        </div>
      </section>
    </>
  );
};

export default RentCarDetailComponent;
