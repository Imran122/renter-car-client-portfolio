import React from "react";
import "./MostBookedCars.css";
import mercedesThumb from "../../../../../../assets/images/iris.png";
import MostBookedCarsCardComponent from "../MostBookedCarsCard/MostBookedCarsCardComponent";
import useMostBookCarSuperAdmin from "../../../../../../hooks/useMostBookCarSuperAdmin";

const MostBookedCarsComponent = () => {
  const [superadminMostBookCar, setSuperadminMostBookCar] =
    useMostBookCarSuperAdmin();

  return (
    <div>
      {/* most booked cars */}
      <h4 className="mb-4">Most Booked Cars</h4>
      {/* booked cars cards */}
      {superadminMostBookCar.map((bookedCar) => (
        <MostBookedCarsCardComponent
          key={bookedCar._id}
          superadminMostBookCar={bookedCar}
        />
      ))}
    </div>
  );
};

export default MostBookedCarsComponent;
