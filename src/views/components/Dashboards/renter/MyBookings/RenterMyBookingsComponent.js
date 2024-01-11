import React from "react";
import RenterBookingCardComponent from "./RenterBookingCardComponent";
import useMyBookingCarRenter from "../../../../../hooks/useMyBookingCarRenter";
import "./MyBookings.css";

const RenterMyBookingsComponent = () => {
  const [myBookingCarData, setMyBookingCarData] = useMyBookingCarRenter();

  return (
    <div className="row g-0 h-100">
      <div className="col col-12 col-xl-8">
        <div className="content-wrapper px-2 px-md-3 px-xxl-5 py-3 py-md-4 border-end h-100">
          {/* start of scheduled bookings */}
          {myBookingCarData.map((data) => (
            <RenterBookingCardComponent
              key={data._id}
              myBookingCarData={data}
            />
          ))}

          {/* end of scheduled bookings */}
        </div>
      </div>
    </div>
  );
};

export default RenterMyBookingsComponent;
