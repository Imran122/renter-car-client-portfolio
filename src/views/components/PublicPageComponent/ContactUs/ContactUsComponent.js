import React from "react";
import NavbarComponent from "../../common/NavBar/NavbarComponent";
import Footer from "../../common/Footer/Footer";
import ContactUsDetailsComponent from "./ContactUsDetailsComponent";
import './ContactUs.css';

const ContactUsComponent = () => {
  return (
    <>
      <NavbarComponent />
      <ContactUsDetailsComponent />
      <Footer />
    </>
  );
};

export default ContactUsComponent;
