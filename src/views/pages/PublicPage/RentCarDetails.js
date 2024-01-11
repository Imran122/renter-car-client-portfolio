import React from "react";
import { Route, Routes } from "react-router-dom";
import RentCarDetailComponent from "../../components/PublicPageComponent/CarDetail/RentCar/CarDetailComponent/RentCarDetailComponent";

const RentCarDetails = (props) => {
  // console.log("props", props);
  return (
    <>
      <RentCarDetailComponent />
    </>
  );
};

export default RentCarDetails;
