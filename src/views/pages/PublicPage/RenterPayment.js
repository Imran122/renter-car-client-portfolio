import React from "react";
import NavbarComponent from "../../components/common/NavBar/NavbarComponent";
import RenterPaymentComponent from "../../components/PublicPageComponent/RenterPayment/RenterPaymentComponent";
import Footer from "../../components/common/Footer/Footer";

const RenterPayment = (props) => {
  return (
    <>
        <NavbarComponent />
        <RenterPaymentComponent />
        <Footer />
    </>
  );
};

export default RenterPayment;
