import React from "react";
import CarBookRequestCardComponent from "./CarBookRequestCard/CarBookRequestCardComponent";
import BookingFilterComponent from "./BookingFilter/BookingFilterComponent";
import "./HostBookings.css";
import useHostBookingCarList from "../../../../../hooks/useHostBookingCarList";
import useAuth from "../../../../../hooks/useAuth";

const HostBookingsComponent = () => {
  const [hostBookingCarList, setHostBookingCarList] = useHostBookingCarList();
  //console.log("hostBookingCarList", hostBookingCarList);

  const {
    user,
    isLoading,
    setIsLoading,

    filterCarList,
    setFilterCarList,
  } = useAuth();
  return (
    <div className="row g-0 flex-xl-row-reverse">
      <div className="col col-12 col-xl-4">
        <div className="not-dashboard-home-right-col">
          <BookingFilterComponent />
        </div>
      </div>

      <div className="col col-12 col-xl-8">
        <div className="not-dashboard-home-left-col border-end">
          {/* booking request card */}
          {filterCarList.map((data) => (
            <CarBookRequestCardComponent key={data._id} filterCarList={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HostBookingsComponent;
