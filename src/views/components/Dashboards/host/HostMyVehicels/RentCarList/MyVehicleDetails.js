import React from "react";
import { Accordion } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import useMyVeiclesHost from "../../../../../../hooks/useMyVeiclesHost";
import DetailsTab from "./DetailsTab";
import "../MyVehicles.css";

const MyVehicleDetails = () => {
  const [hostMyVeiclesData, setHostMyVeiclesData] = useMyVeiclesHost();

  return (
    <>
      <div className="cr-accordion">
        <Accordion>
          {/* first item start accordion-item */}
          {hostMyVeiclesData?.map((data) => (
            <Accordion.Item eventKey={data._id} key={data._id}>
              <Accordion.Header>
                <article className="p-4">
                  <div className="d-md-flex justify-content-between align-items-center">
                    {/* user & car */}
                    <div className="d-flex">
                      <div className="me-2 d-flex">
                        {/* car thumbnail */}
                        <div className="car-request-thumb flex-justify-align-center">
                          <img
                            src={data.carImage[0]}
                            className="img-fluid"
                            alt="mercedes car"
                          />
                        </div>
                      </div>

                      <div className="car-book-request-user">
                        <p className="most-booked-cars-rating d-inline-block p-1 fw-500 rounded my-1">
                          <AiFillStar />
                          <span className="mx-1">5.0</span>
                          <span>(18 trips)</span>
                        </p>
                        <div className="car-approval-request">
                          <h5>
                            {data.carMake} || {data.carModel}
                          </h5>
                          <p>
                            <span>Car Lisence:</span> {data.carLicenseNumber}
                            {/*  <span className="car-approval-id">Car ID</span> */}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Accordion.Header>
              <Accordion.Body>
                <div className="crp row row-cols-1">
                  <div className="col">
                    <div className="content-wrapper">
                      <DetailsTab hostMyVeiclesData={data} />
                    </div>
                  </div>
                </div>

                {/*  <div className="row g-3 my-3">
                  <div className="col col-10 col-md-3">
                    <Link to="/dashboard/rent-car-upload/rents">
                      <button
                        type="submit"
                        className="button-style cc-continue-btn ms-4"
                      >
                        Edit
                      </button>
                    </Link>
                  </div>
                </div> */}
              </Accordion.Body>
            </Accordion.Item>
          ))}
          {/* first item end accordion-item */}
        </Accordion>
      </div>
    </>
  );
};

export default MyVehicleDetails;
