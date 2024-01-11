import { React, useState } from "react";
import useAuth from "../../../../../hooks/useAuth";
import FilterCarData from "../FilterCarData/FilterCarData";
import MapComp from "../MapComp/MapComp";
import "../SearchCar.css";

const AllSearchCarDataList = () => {
  const [hoverSelectedCar, setHoverSelectedCar] = useState({});
  const [show, setShow] = useState(false);

  const [value, setValue] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //...............................................................
  //dynamic data show work

  const {
    user,
    isLoading,
    setSearchCarData,
    searchCarData,
    setFilterCarList,
    filterCarList,
  } = useAuth();

  //selectModelcategoryID, setModelCategoryID
  /*   useEffect(() => {
    let carFilterWiselList = filterCarList.filter(
      (car) => car.carModel === selectModelcategoryID.carModel
    );
    setFilterCarList(carFilterWiselList);
    if (carFilterWiselList.length === 0) {
      setFilterCarList(searchCarData);
    }
  }, [selectModelcategoryID]); */
  //****************** filter work data show end */

  /* const makeYear = [
    { value: "2010", label: "2010" },
    { value: "2022", label: "2022" },
    { value: "2018", label: "2018" },
  ];

  const carSeat = [
    { value: "2", label: "2" },
    { value: "4", label: "4" },
    { value: "6", label: "6" },
  ]; */

  return (
    <section className="container-fluid-lg car-search pt-0">
      <div className="row g-0 g-lg-4 py-lg-4">
        {/* start of left col */}
        <div className="col-wrapper col-12 col-lg-5 car-detail-map-container">
          <div className="car-detail-left-col car-map-wrapper">
            <MapComp hoverSelectedCar={hoverSelectedCar}></MapComp>
          </div>
        </div>
        {/* end of left col */}

        {/* start of right col */}
        <FilterCarData
          setHoverSelectedCar={setHoverSelectedCar}
        ></FilterCarData>
        {/* end of right col */}
      </div>
    </section>
  );
};

export default AllSearchCarDataList;
