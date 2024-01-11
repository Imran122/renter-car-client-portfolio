import React from "react";
import NavbarComponent from "../../common/NavBar/NavbarComponent";
import Footer from "../../common/Footer/Footer";
import AboutUsDetailsComponent from "./AboutUsDetailsComponent";
import './AboutUs.css';

const AboutUsComponent = () => {
  return (
    <>
      <NavbarComponent />
      <AboutUsDetailsComponent />
      <Footer />
    </>
  );
};

export default AboutUsComponent;
