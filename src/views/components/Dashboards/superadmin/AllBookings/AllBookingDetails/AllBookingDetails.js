import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { BiGasPump } from "react-icons/bi";
import { FaCarSide } from "react-icons/fa";
import { GiCarDoor, GiSteeringWheel } from "react-icons/gi";
import { MdOutlineEventSeat } from "react-icons/md";
import { RiOilLine } from "react-icons/ri";
import CarDefault from "../../../../../../assets/images/testCarImg.png";
import useSuperAdminBookingCarInfo from "../../../../../../hooks/useSuperAdminBookingCarInfo";
import "../AllBookings.css";

const AllBookingDetails = (props) => {
  const {
    carMake,
    carModel,
    carImage,
    booktStatus,
    totalCostAll,
    tripStartDateTime,
    tripEndDateTime,
    firstname,
  } = props.adminDashboardBookingCarList;
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
                    SEATS - <strong> 1</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <GiCarDoor />
                  <p>
                    DOORS - <strong> 5</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <RiOilLine />
                  <p>
                    MPG - <strong> 00</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <BiGasPump />
                  <p>
                    FUEL - <strong> 00</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <FaCarSide />
                  <p>
                    BODY - <strong> null</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <GiSteeringWheel />
                  <p>
                    TRANSMISSION -<strong>null</strong>
                  </p>
                </div>
              </div>
            </Tab>
            <Tab eventKey="apr_details" title="Details">
              <div className="apr_about">
                <div className="px-2">
                  <p>
                    STATE: <strong>null</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <p>
                    AUTORIZED MILAGE:
                    <strong>null</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <p>
                    MAKE: <strong>null</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <p>
                    MAKER’S YEAR: <strong>null</strong>
                  </p>
                </div>
              </div>
            </Tab>
            <Tab eventKey="apr_insurance" title="Insurance">
              <div className="apr_about">
                <div className="px-2">
                  <p>
                    INSURANCE: <strong>null</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <p>
                    POLICY: <strong>null</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <p>
                    EXPIRY DATE:
                    <strong>null</strong>
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
                        src={CarDefault}
                        className="img-fluid"
                        alt="mercedes car"
                      />
                    </div>
                  </div>
                  <div className="col col-3">
                    <div className="car-apr-photos">
                      <img
                        src={CarDefault}
                        className="img-fluid"
                        alt="mercedes car"
                      />
                    </div>
                  </div>
                  <div className="col col-3">
                    <div className="car-apr-photos">
                      <img
                        src={CarDefault}
                        className="img-fluid"
                        alt="mercedes car"
                      />
                    </div>
                  </div>
                  <div className="col col-3">
                    <div className="car-apr-photos">
                      <img
                        src={CarDefault}
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
                    PLAN: <strong>null</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <p>
                    MILAGE ALLOWENCE: <strong>null</strong>
                  </p>
                </div>
              </div>
              <div className="apr_about">
                <div className="px-2">
                  <p>
                    TOTAL COST: <strong>$null</strong>
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

export default AllBookingDetails;
