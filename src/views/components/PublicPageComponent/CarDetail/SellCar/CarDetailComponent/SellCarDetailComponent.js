import React, { useEffect } from "react";
import "./CarDetailComponent.css";
import NavbarComponent from "../../../../common/NavBar/NavbarComponent";
import SellCarTripBook from "../SellCarTripBook/SellCarTripBook";
import SellCarInformation from "../CarInformation/SellCarInformation";
import SellCarInformationTabs from "../SellCarInformationTabs/SellCarInformationTabs";
import useAuth from "../../../../../../hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";

const SellCarDetailComponent = () => {
  const { checkDetailsSellCar, setCheckDetailsSellCar } = useAuth();
  const { id } = useParams();

  //console.log("requsted car id: ", id);
  const navigate = useNavigate();
  //load data
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/sellcardetails`, {
      headers: {
        id: id,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 401) {
          navigate("/sell-car", { replace: true });
        }
      })
      .then((data) => {
        //localStorage.setItem("car", JSON.stringify(data));
        setCheckDetailsSellCar(data);
      });
  }, []);

  return (
    <>
      <NavbarComponent />
      <section className="renter-car-detail-container container-lg">
        <div className="row g-0 g-lg-4 py-lg-4">
          {/* start of left col */}
          <div className="col-wrapper col-12 col-lg-8">
            <div className="car-detail-left-col">
              <SellCarInformation />
              <SellCarInformationTabs />
            </div>
          </div>
          {/* end of left col */}

          {/* start of right col */}
          <div className="col-wrapper col-12 col-lg-4">
            <div className="car-detail-right-col">
              {/* trip booking */}
              <SellCarTripBook />
            </div>
          </div>
          {/* end of right col */}
        </div>
      </section>
    </>
  );
};

export default SellCarDetailComponent;
