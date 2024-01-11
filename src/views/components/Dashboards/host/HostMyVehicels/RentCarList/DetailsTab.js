import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { BiGasPump } from "react-icons/bi";
import { FaCarSide } from "react-icons/fa";
import { GiCarDoor, GiSteeringWheel } from "react-icons/gi";
import { MdOutlineEventSeat } from "react-icons/md";
import { RiOilLine } from "react-icons/ri";
import "../MyVehicles.css";

const DetailsTab = (props) => {
  const {
    seatNumber,
    doorNumber,
    milesPerGallon,
    fuelType,
    bodyType,
    transmissionType,
    carAvailability,
    carRegistrationState,
    authorizedMilage,
    carMake,
    carMakeYear,
    carInsuranceName,
    policyNumber,
    insuranceExpireDate,
    carImage,
    chargePlanName,
    rentCharges,
    milageAllowence,
  } = props.hostMyVeiclesData;

  return (
    <>
      <div className="row g-2 g-xxl-3">
        <div className="col col-12">
          <Tabs
            defaultActiveKey="apr_about"
            id="uncontrolled-tab-example"
            className=" mb-3 myvehicle-details-tab"
          >
            <Tab eventKey="apr_about" title="About Car">
              <div className="apr_about">
                <div className="px-2">
                  <MdOutlineEventSeat />
                  <p>
                    SEATS - <strong>{seatNumber}</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <GiCarDoor />
                  <p>
                    DOORS - <strong>{doorNumber}</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <RiOilLine />
                  <p>
                    MPG - <strong>{milesPerGallon}</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <BiGasPump />
                  <p>
                    FUEL - <strong>{fuelType}</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <FaCarSide />
                  <p>
                    BODY - <strong>{bodyType}</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <GiSteeringWheel />
                  <p>
                    TRANSMISSION -<strong>{transmissionType}</strong>
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="cc-av-title">Car availability</h4>

                <div className="row g-3">
                  {carAvailability === "alwaysAvailable" ? (
                    <div className="col col-12 col-md-4">
                      <div className="form-check radio-container p-0 m-0">
                        <input
                          className="form-check-input radio-input"
                          type="radio"
                          defaultChecked
                        />
                        <label
                          className="form-check-label d-block p-4 cc-radio-label"
                          htmlFor="exampleRadios1"
                        >
                          My car is always available
                        </label>
                      </div>
                    </div>
                  ) : (
                    <div className="col col-12 col-md-4">
                      <div className="form-check radio-container p-0 m-0">
                        <input
                          className="form-check-input radio-input"
                          type="radio"
                          id="exampleRadios1"
                        />
                        <label
                          className="form-check-label d-block p-4 cc-radio-label"
                          htmlFor="exampleRadios1"
                        >
                          My car is always available
                        </label>
                      </div>
                    </div>
                  )}
                  {/* new div */}

                  {carAvailability === "weeklyAvailable" ? (
                    <div className="col col-12 col-md-4">
                      <div className="form-check radio-container p-0 m-0">
                        <input
                          className="form-check-input radio-input"
                          type="radio"
                          id="exampleRadios2"
                          defaultChecked
                        />
                        <label
                          className="form-check-label d-block p-4 cc-radio-label"
                          htmlFor="exampleRadios2"
                        >
                          My car is available on weekends only
                        </label>
                      </div>
                    </div>
                  ) : (
                    <div className="col col-12 col-md-4">
                      <div className="form-check radio-container p-0 m-0">
                        <input
                          className="form-check-input radio-input"
                          type="radio"
                        />
                        <label
                          className="form-check-label d-block p-4 cc-radio-label"
                          htmlFor="exampleRadios2"
                        >
                          My car is available on weekends only
                        </label>
                      </div>
                    </div>
                  )}
                  {/* new div */}
                  {carAvailability === "ClanderAvailable" ? (
                    <div className="col col-12 col-md-4">
                      <div className="form-check radio-container p-0 m-0">
                        <input
                          className="form-check-input radio-input"
                          type="radio"
                          id="exampleRadios3"
                          name="carAvailability"
                          defaultValue="ClanderAvailable"
                          defaultChecked
                        />
                        <label
                          className="form-check-label d-block p-4 cc-radio-label"
                          htmlFor="exampleRadios3"
                        >
                          My car is available based on calendar
                        </label>
                      </div>
                    </div>
                  ) : (
                    <div className="col col-12 col-md-4">
                      <div className="form-check radio-container p-0 m-0">
                        <input
                          className="form-check-input radio-input"
                          type="radio"
                          id="exampleRadios3"
                          name="carAvailability"
                          defaultValue="ClanderAvailable"
                        />
                        <label
                          className="form-check-label d-block p-4 cc-radio-label"
                          htmlFor="exampleRadios3"
                        >
                          My car is available based on calendar
                        </label>
                      </div>
                    </div>
                  )}
                  {/* new div */}
                </div>
              </div>
            </Tab>
            <Tab eventKey="apr_details" title="Details">
              <div className="apr_about">
                <div className="px-2">
                  <p>
                    STATE: <strong>{carRegistrationState}</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                {/* <div className="px-2">
                  <p>
                    TRAVELED: <strong>{singleRentCar.authorizedMilage}</strong>
                  </p>
                </div> */}
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <p>
                    AUTORIZED MILAGE:
                    <strong>{authorizedMilage}</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <p>
                    MAKE: <strong>{carMake}</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <p>
                    MAKER’S YEAR: <strong>{carMakeYear}</strong>
                  </p>
                </div>
              </div>
            </Tab>
            <Tab eventKey="apr_insurance" title="Insurance">
              <div className="apr_about">
                <div className="px-2">
                  <p>
                    INSURANCE: <strong>{carInsuranceName}</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <p>
                    POLICY: <strong>{policyNumber}</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <p>
                    EXPIRY DATE:
                    <strong>{insuranceExpireDate}</strong>
                  </p>
                </div>
              </div>
            </Tab>
            <Tab eventKey="apr_photos" title="Photos">
              <div className="apr_photos">
                <div className="row g-3">
                  <div className="col col-3">
                    <div className="car-apr-photos">
                      <img
                        src={carImage[0]}
                        className="img-fluid"
                        alt="mercedes car"
                      />
                    </div>
                  </div>
                  <div className="col col-3">
                    <div className="car-apr-photos">
                      <img
                        src={carImage[1]}
                        className="img-fluid"
                        alt="mercedes car"
                      />
                    </div>
                  </div>
                  <div className="col col-3">
                    <div className="car-apr-photos">
                      <img
                        src={carImage[2]}
                        className="img-fluid"
                        alt="mercedes car"
                      />
                    </div>
                  </div>
                  <div className="col col-3">
                    <div className="car-apr-photos">
                      <img
                        src={carImage[3]}
                        className="img-fluid"
                        alt="mercedes car"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="apr_charges" title="Charges">
              <div className="apr_about">
                <div className="px-2">
                  <p>
                    PLAN: <strong>{chargePlanName}</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <p>
                    MILAGE ALLOWENCE: <strong>{milageAllowence}</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <p>
                    TOTAL COST: <strong>${rentCharges}</strong>
                  </p>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default DetailsTab;
