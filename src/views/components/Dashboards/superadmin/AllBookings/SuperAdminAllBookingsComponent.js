import React from "react";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import BookingHeaderComponent from "./AllBookingDetails/BookingHeaderComponent";
import AllBookingDetails from "./AllBookingDetails/AllBookingDetails";
import useSuperAdminBookingCarInfo from "../../../../../hooks/useSuperAdminBookingCarInfo";
import "./AllBookings.css";

const SuperAdminAllBookingsComponent = () => {
  const [adminDashboardBookingCarList, setAdminDashboardBookingCarList] =
    useSuperAdminBookingCarInfo();

  return (
    <>
      <div className="row g-0 h-100">
        <div className="col col-12 col-xl-8">
          <div className="content-wrapper px-2 px-md-3 px-xxl-5 py-3 py-md-4 h-100">
            <div className="cr-accordion">
              {adminDashboardBookingCarList.map((data) => (
                <BookingHeaderComponent
                  key={data.BookingList._id}
                  adminDashboardBookingCarList={data}
                />
              ))}

              {/*    <Accordion>
                {adminDashboardBookingCarList.map((data) => (
                  <Accordion.Item key={data._id} eventKey={data._id}>
                    <Accordion.Header>
                      <BookingHeaderComponent
                        adminDashboardBookingCarList={data}
                      />
                    </Accordion.Header>
                       <Accordion.Body>
                      <AllBookingDetails adminDashboardBookingCarList={data} />
                    </Accordion.Body> 
                  </Accordion.Item>
                ))}
              </Accordion> */}
            </div>

            <div className="section-title mt-3">
              <nav className="pagination-outer" aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <Link to={"/"} className="page-link" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link to={"/"} className="page-link active">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link to={"/"} className="page-link">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link to={"/"} className="page-link">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link to={"/"} className="page-link">
                      4
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link to={"/"} className="page-link">
                      5
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link to={"/"} className="page-link" aria-label="Next">
                      <span aria-hidden="true">»</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperAdminAllBookingsComponent;
