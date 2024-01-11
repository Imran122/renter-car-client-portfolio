import React from "react";
import { Route, Routes } from "react-router-dom";
import SellCarDetailComponent from "../../components/PublicPageComponent/CarDetail/SellCar/CarDetailComponent/SellCarDetailComponent";

const SellCarDetails = (props) => {
  // console.log("props", props);
  return (
    <>
      <SellCarDetailComponent />
    </>
  );
};

export default SellCarDetails;
