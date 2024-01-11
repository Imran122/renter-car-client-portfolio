import React from "react";
import "./MostBookedCars.css";
import mercedesThumb from "../../../../../../assets/images/iris.png";
import toyotaThumb from "../../../../../../assets/images/pngwing 2.png";
import MostBookedCarsCardComponent from "../MostBookedCarsCard/MostBookedCarsCardComponent";
import useHostBookingCarList from "../../../../../../hooks/useHostBookingCarList";

const MostBookedCarsComponent = () => {
  const [hostBookingCarList, setHostBookingCarList] = useHostBookingCarList();

  const count = {};

  hostBookingCarList.forEach((element) => {
    count[element.carMake] = (count[element.carMake] || 0) + 1;
  });

  // 👇️ {one: 3, two: 2, three: 1}

  let result = [];
  for (let item in count) {
    if (count[item] >= 5) {
      result.push(hostBookingCarList.find((o) => o.carMake === item));
    }
  }

  return (
    <div>
      {/* most booked cars */}
      <h4 className="mb-4">Most Booked Cars</h4>
      {/* booked cars cards */}
      {result.map((bookedCar) => (
        <MostBookedCarsCardComponent
          key={bookedCar._id}
          hostBookingCarList={bookedCar}
        />
      ))}
    </div>
  );
};

export default MostBookedCarsComponent;
