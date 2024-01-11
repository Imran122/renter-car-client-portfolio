import React from "react";
import CarImage from "../../../../../assets/images/car1.png";
import { Tab, Tabs } from "react-bootstrap";
import { BiGasPump } from "react-icons/bi";
import { FaCarSide } from "react-icons/fa";
import { GiCarDoor, GiSteeringWheel } from "react-icons/gi";
import { MdOutlineEventSeat } from "react-icons/md";
import { RiOilLine } from "react-icons/ri";
import "./MyVehicles.css";

const DetailsTab = (props) => {
  const {
    seatNumber,
    doorNumber,
    milesPerGallon,
    fuelType,
    bodyType,
    transmissionType,

    carRegistrationState,
    authorizedMilage,
    carMake,
    carMakeYear,
    carInsuranceName,
    policyNumber,
    insuranceExpireDate,
    carImage,
    carCondition,
    sellPrice,
  } = props.sellerMyVeiclesData;
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
                    Sell Price: <strong>{sellPrice}</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <p>
                    MILAGE ALLOWENCE: <strong>{authorizedMilage}</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <p>
                    Condition: <strong>${carCondition}</strong>
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
