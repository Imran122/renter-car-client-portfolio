import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { BiGasPump } from "react-icons/bi";
import { FaCarSide } from "react-icons/fa";
import { GiCarDoor, GiSteeringWheel } from "react-icons/gi";
import { MdOutlineEventSeat } from "react-icons/md";
import { RiOilLine } from "react-icons/ri";
import useAuth from "../../../../../../hooks/useAuth";
import "../SuperAdminApproval.css";
import cardefault from "../../../../../../assets/images/car-default.jpg";
const ApprovalDetailsTab = () => {
  const { singleRentCar, setSingleCarRent } = useAuth();

  //const x = Buffer.from(singleRentCar.carImage1, "").toString("");

  return (
    <>
      <div className="row g-2 g-xxl-3">
        <div className="col col-12">
          <Tabs
            defaultActiveKey="apr_about"
            id="uncontrolled-tab-example"
            className="mb-3 approval-details-tab"
          >
            <Tab eventKey="apr_about" title="About Car">
              <div className="apr_about">
                <div className="px-2">
                  <MdOutlineEventSeat />
                  <p>
                    SEATS - <strong>{singleRentCar.seatNumber}</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <GiCarDoor />
                  <p>
                    DOORS - <strong>{singleRentCar.doorNumber}</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <RiOilLine />
                  <p>
                    MPG - <strong>{singleRentCar.milesPerGallon}</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <BiGasPump />
                  <p>
                    FUEL - <strong>{singleRentCar.fuelType}</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <FaCarSide />
                  <p>
                    BODY - <strong>{singleRentCar.bodyType}</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <GiSteeringWheel />
                  <p>
                    TRANSMISSION -{" "}
                    <strong>{singleRentCar.transmissionType}</strong>
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="cc-av-title">Car availability</h4>

                <div className="row g-3">
                  <div className="col col-12 col-md-3">
                    <div className="input-wrapper">
                      <label className="fw-600 mb-2 cc-input-label form-label">
                        <strong>From</strong>
                      </label>
                      <input
                        name="carAvailabeDateStart"
                        type="date"
                        className="cc-in form-control"
                        defaultValue={singleRentCar.carAvailabeDateStart}
                      />
                    </div>
                  </div>
                  <div className="col col-12 col-md-3">
                    <div className="input-wrapper">
                      <label className="fw-600 mb-2 cc-input-label form-label">
                        <strong>To</strong>
                      </label>
                      <input
                        name="carAvailabeDateEnd"
                        type="date"
                        className="cc-in form-control"
                      />
                    </div>
                  </div>
                  <div className="col col-12 col-md-3">
                    <div className="input-wrapper">
                      <label className="fw-600 mb-2 cc-input-label form-label">
                        <strong>Start time</strong>
                      </label>
                      <input
                        name="carAvailabeTimeStart"
                        type="time"
                        className="cc-in form-control"
                      />
                    </div>
                  </div>
                  <div className="col col-12 col-md-3">
                    <div className="input-wrapper">
                      <label className="fw-600 mb-2 cc-input-label form-label">
                        <strong>End time</strong>
                      </label>
                      <input
                        name="carAvailabeTimeEnd"
                        type="time"
                        className="cc-in form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="apr_details" title="Details">
              <div className="apr_about">
                <div className="px-2">
                  <p>
                    STATE: <strong>{singleRentCar.carRegistrationState}</strong>
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
                    AUTORIZED MILAGE:{" "}
                    <strong>{singleRentCar.authorizedMilage}</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <p>
                    MAKE: <strong>{singleRentCar.carMake}</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <p>
                    MAKER’S YEAR: <strong>{singleRentCar.carMakeYear}</strong>
                  </p>
                </div>
              </div>
            </Tab>
            <Tab eventKey="apr_insurance" title="Insurance">
              <div className="apr_about">
                <div className="px-2">
                  <p>
                    INSURANCE: <strong>{singleRentCar.carInsuranceName}</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <p>
                    POLICY: <strong>{singleRentCar.policyNumber}</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <p>
                    EXPIRY DATE:{" "}
                    <strong>{singleRentCar.insuranceExpireDate}</strong>
                  </p>
                </div>
              </div>
            </Tab>
            <Tab eventKey="apr_photos" title="Photos">
              <div className="apr_photos">
                <div className="row g-3">
                  <div className="col col-3">
                    <div className="car-apr-photos">
                      {singleRentCar.carImage === undefined ? (
                        <img
                          src={cardefault}
                          className="img-fluid"
                          alt="mercedes car"
                        />
                      ) : (
                        <img
                          src={singleRentCar.carImage[0]}
                          className="img-fluid"
                          alt="mercedes car"
                        />
                      )}
                    </div>
                  </div>
                  <div className="col col-3">
                    <div className="car-apr-photos">
                      {singleRentCar.carImage === undefined ? (
                        <img
                          src={cardefault}
                          className="img-fluid"
                          alt="mercedes car"
                        />
                      ) : (
                        <img
                          src={singleRentCar.carImage[1]}
                          className="img-fluid"
                          alt="mercedes car"
                        />
                      )}
                    </div>
                  </div>
                  <div className="col col-3">
                    <div className="car-apr-photos">
                      {singleRentCar.carImage === undefined ? (
                        <img
                          src={cardefault}
                          className="img-fluid"
                          alt="mercedes car"
                        />
                      ) : (
                        <img
                          src={singleRentCar.carImage[2]}
                          className="img-fluid"
                          alt="mercedes car"
                        />
                      )}
                    </div>
                  </div>
                  <div className="col col-3">
                    <div className="car-apr-photos">
                      {singleRentCar.carImage === undefined ? (
                        <img
                          src={cardefault}
                          className="img-fluid"
                          alt="mercedes car"
                        />
                      ) : (
                        <img
                          src={singleRentCar.carImage[3]}
                          className="img-fluid"
                          alt="mercedes car"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="apr_charges" title="Charges">
              <div className="apr_about">
                <div className="px-2">
                  <p>
                    PLAN: <strong>WEEKLY RENTAL</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <p>
                    MILAGE ALLOWENCE:{" "}
                    <strong>800 MILE ($60 FOR AN EXTRA MILE)</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <p>
                    TOTAL COST: <strong>$1300</strong>
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

export default ApprovalDetailsTab;
