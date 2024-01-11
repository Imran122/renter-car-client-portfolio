import React from "react";
import Footer from "../../../common/Footer/Footer";
import NavbarComponent from "../../../common/NavBar/NavbarComponent";
import BannerComponent from "../BannerComponent/BannerComponent";
import BrandsComponent from "../BrandsComponent/BrandsComponent";
import FQAComponent from "../FQAComponent/FQAComponent";
import ListCarBannerComponent from "../ListCarBannerComponent/ListCarBannerComponent";
import Services from "../Services/Services";
import TopRatedCarsComponent from "../TopRatedCarsComponent/TopRatedCarsComponent";
import TripPickerComponent from "../TripPickerComponent/TripPickerComponent";
import "./HomeComponent.css";

const PublicHomeComponent = () => {
  return (
    <>
      <NavbarComponent />
      <BannerComponent />
      <TripPickerComponent />
      <Services />
      <BrandsComponent />
      <TopRatedCarsComponent />
      <ListCarBannerComponent />
      <FQAComponent />
      <Footer />
    </>
  );
};

export default PublicHomeComponent;
