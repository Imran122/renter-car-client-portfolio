import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicHomeComponent from "../../components/PublicPageComponent/Home/PublicHomeComponent/PublicHomeComponent";
import "../../styles/dashboard-style.css";

const PublicHome = (props) => {
  // console.log("props", props);
  return (
    <>
      <PublicHomeComponent />
    </>
  );
};

export default PublicHome;
