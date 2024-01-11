import React from "react";
import NavbarComponent from "../../common/NavBar/NavbarComponent";
import Footer from "../../common/Footer/Footer";
import PrivacyPolicyDetailsComponent from "./PrivacyPolicyDetailsComponent";

const PrivacyPolicyComponent = () => {
  return (
    <>
      <NavbarComponent />
      <PrivacyPolicyDetailsComponent />
      <Footer />
    </>
  );
};

export default PrivacyPolicyComponent;
