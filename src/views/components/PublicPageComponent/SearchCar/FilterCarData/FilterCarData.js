import MultiRangeSlider from "multi-range-slider-react";
import { React, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { IoFilter } from "react-icons/io5";
import Select from "react-select";
import campervanSuv from "../../../../../assets/icons/Campervan.png";
import hatchbackVan from "../../../../../assets/icons/Hatchback.png";
import radioIconCars from "../../../../../assets/icons/radio-icon-cars.png";
import radioIconMiniVan from "../../../../../assets/icons/radio-icon-mini-van.png";
import radioIconSuv from "../../../../../assets/icons/radio-icon-suv.png";
import radioIconTruck from "../../../../../assets/icons/radio-icon-truck.png";
import radioIconVan from "../../../../../assets/icons/radio-icon-van.png";
import useAuth from "../../../../../hooks/useAuth";
import SearchCarCardComponent from "../AllSearchCarDataList/SearchCarCardComponent";
import "./RangeSlider.css";

const FilterCarData = ({ setHoverSelectedCar }) => {
  const [show, setShow] = useState(false);
  const [bodyType, setBodyType] = useState("");

  const [value, setValue] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  const applyFilter = (e) => {
    setIsLoading(true);
    let carPriceFilterWiselList = [];

    if (selectcategoryID) {
      carPriceFilterWiselList = filterCarList.filter((car) => {
        if (bodyType) {
          return (
            car.rentCharges >= minValue &&
            car.rentCharges <= maxValue &&
            car.bodyType === bodyType
          );
        } else {
          return car.rentCharges >= minValue && car.rentCharges <= maxValue;
        }
      });
    } else {
      carPriceFilterWiselList = searchCarData.filter((car) => {
        if (bodyType) {
          return (
            car.rentCharges >= minValue &&
            car.rentCharges <= maxValue &&
            car.bodyType === bodyType
          );
        } else {
          return car.rentCharges >= minValue && car.rentCharges <= maxValue;
        }
      });
    }

    // console.log("carPriceFilterWiselList ", carPriceFilterWiselList);
    setFilterCarList(carPriceFilterWiselList);

    setIsLoading(false);
    handleClose();
  };

  const bodyTypeClick = (value) => {
    //console.log("body type value ", value);
    setBodyType(value);
  };
  const {
    user,
    isLoading,
    setIsLoading,
    setSearchCarData,
    searchCarData,
    filterCarList,
    setFilterCarList,
  } = useAuth();

  //...............................................................
  let [selectcategoryID, setCategoryID] = useState(0);

  //work for car make drop downlist
  let uniqueCarMakeList = [
    ...new Map(searchCarData.map((item) => [item["carMake"], item])).values(),
  ];

  //console.log("uniqueCarMakeList ", uniqueCarMakeList);
  let carMakeNameOptions = [];

  for (let index = 0; index < uniqueCarMakeList.length; index++) {
    const element = uniqueCarMakeList[index];
    carMakeNameOptions.push({
      value: element.carMake,
      label: element.carMake,
      name: "carMake",
    });
  }

  //console.log("carMakeNameOptions ", carMakeNameOptions);
  //*********************************** */
  //*******************car model filter drop down**************** */
  let dependentModelList = searchCarData.filter(
    (data) => data.carMake === selectcategoryID.carMake
  );
  //console.log("dependentModelList ", dependentModelList);

  let uniqueCarModelList = [
    ...new Map(
      dependentModelList.map((item) => [item["carModel"], item])
    ).values(),
  ];
  // console.log("uniqueCarModelList ", uniqueCarModelList);

  let carModelNameOptions = [];
  for (let index = 0; index < uniqueCarModelList.length; index++) {
    const element = uniqueCarModelList[index];
    carModelNameOptions.push({
      value: element.carModel,
      label: element.carModel,
      name: "carModel",
    });
  }
  // console.log("carModelNameOptions ", carModelNameOptions);

  //*******************car model filter drop down end**************** */

  //****************** fileter work data show */
  //working here for display carMake wise select data

  const handleType = (e) => {
    const field = e.name;
    const value = e.value;
    const newData = { ...selectcategoryID };
    newData[field] = value;

    setIsLoading(true);
    //console.log("searchCarData ", searchCarData);
    //console.log("field ", field);
    //console.log("value ", value);
    if (field == "carMake") {
      delete newData?.carModel;
      //console.log("selectcategoryID.carMake", newData.carMake);

      let carFilterWiselList = searchCarData.filter(
        (car) => car.carMake === newData.carMake
      );

      setFilterCarList(carFilterWiselList);

      setIsLoading(false);
      if (carFilterWiselList.length === 0) {
        setFilterCarList(searchCarData);
      }
    }
    if (field == "carModel") {
      let carFilterWiselList = searchCarData.filter((car) => {
        return (
          car.carModel === newData.carModel && car.carMake === newData.carMake
        );
      });
      //console.log("carFilterWiselList........", carFilterWiselList)
      setFilterCarList(carFilterWiselList);

      setIsLoading(false);
    }
    // console.log("newData", newData);
    setCategoryID(newData);
  };
  /* useEffect(() => {
    let carFilterWiselList = searchCarData.filter(
      (car) => car.carMake === selectcategoryID.carMake
    );

    setFilterCarList(carFilterWiselList);

    if (carFilterWiselList.length === 0) {
      setFilterCarList(searchCarData);
    }
  }, []); */

  return (
    <div className="col-wrapper col-12 col-lg-7 px-4 car-detail-card-container">
      <div className="card-filter-wrapper">
        <div className="row g-0 g-lg-4 py-lg-4 car-filters-container">
          <div className="col col-12 col-lg-4">
            <div className="input-wrapper">
              <label className="fw-600 mb-2 cc-input-label form-label">
                <strong>Car Brand</strong>
              </label>
              <Select
                name="car_brand"
                options={carMakeNameOptions}
                onChange={handleType}
              />
            </div>
          </div>
          <div className="col col-12 col-lg-4">
            <div className="input-wrapper">
              <label className="fw-600 mb-2 cc-input-label form-label">
                <strong>Car Model </strong>
              </label>
              <Select
                name="car_model"
                //defaultValue={{ label: "Select Model", value: "" }}
                onChange={handleType}
                options={carModelNameOptions}
              />
            </div>
          </div>
          {/* <div className="col col-12 col-lg-2">
                <div className="input-wrapper">
                  <label className="fw-600 mb-2 cc-input-label form-label">
                    <strong>Makes year</strong>
                  </label>
                  <Select
                    name="car_model"
                    styles={customStyles}
                    options={makeYear}
                  />
                </div>
              </div>
              <div className="col col-12 col-lg-2">
                <div className="input-wrapper">
                  <label className="fw-600 mb-2 cc-input-label form-label">
                    <strong>Seat</strong>
                  </label>
                  <Select
                    name="car_model"
                    styles={customStyles}
                    options={carSeat}
                  />
                </div>
              </div> */}
          <div className="col col-12 col-lg-2">
            <Button className="more-filters" onClick={handleShow}>
              <IoFilter />
              <span>More filters</span>
            </Button>
            <Modal
              show={show}
              onHide={handleClose}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>Filter by</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="row">
                  <div className="col col-12">
                    <div className="input-wrapper">
                      <label className="fw-600 mb-2 cc-input-label form-label">
                        <strong>Price</strong>
                      </label>

                      <MultiRangeSlider
                        min={0}
                        max={5000}
                        step={5}
                        ruler={false}
                        label={true}
                        baseClassName="cr-multi-range"
                        preventWheel={false}
                        minValue={minValue}
                        maxValue={maxValue}
                        onInput={(e) => {
                          handleInput(e);
                        }}
                      />
                    </div>
                  </div>
                  {/*     <div className="col col-12 mt-3">
                    <div className="input-wrapper">
                      <label className="fw-600 mb-2 cc-input-label form-label">
                        <strong>Ratings</strong>
                      </label>
                      <div
                        style={{
                          color: "#524EB7",
                          fontSize: "25px",
                        }}
                      >
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    </div>
                  </div> */}

                  <div className="col col-12 mt-3">
                    <div className="input-wrapper">
                      <label className="fw-600 mb-2 cc-input-label form-label">
                        <strong>Body types</strong>
                      </label>
                      <div className="radio-with-Icon">
                        <p className="radioOption-Item">
                          <input
                            type="radio"
                            name="BannerTypes"
                            id="BannerType1"
                            onClick={() => {
                              bodyTypeClick("Car");
                            }}
                          />
                          <label htmlFor="BannerType1">
                            <img src={radioIconCars} alt="icon" />
                          </label>
                        </p>

                        <p className="radioOption-Item">
                          <input
                            type="radio"
                            name="BannerTypes"
                            id="BannerType2"
                            onClick={() => {
                              bodyTypeClick("SUV Car");
                            }}
                          />
                          <label htmlFor="BannerType2">
                            <img src={radioIconSuv} alt="icon" />
                          </label>
                        </p>

                        <p className="radioOption-Item">
                          <input
                            type="radio"
                            name="BannerTypes"
                            id="BannerType3"
                            onClick={() => {
                              bodyTypeClick("Campervan");
                            }}
                          />
                          <label htmlFor="BannerType3">
                            <img src={campervanSuv} alt="icon" />
                          </label>
                        </p>
                        <p className="radioOption-Item">
                          <input
                            type="radio"
                            name="BannerTypes"
                            id="BannerType4"
                            onClick={() => {
                              bodyTypeClick("Hatchback");
                            }}
                          />
                          <label htmlFor="BannerType4">
                            <img src={hatchbackVan} alt="icon" />
                          </label>
                        </p>
                        <p className="radioOption-Item">
                          <input
                            type="radio"
                            name="BannerTypes"
                            id="BannerType5"
                            onClick={() => {
                              bodyTypeClick("Mini Van");
                            }}
                          />
                          <label htmlFor="BannerType5">
                            <img src={radioIconMiniVan} alt="icon" />
                          </label>
                        </p>

                        <p className="radioOption-Item">
                          <input
                            type="radio"
                            name="BannerTypes"
                            id="BannerType6"
                            onClick={() => {
                              bodyTypeClick("Truck");
                            }}
                          />
                          <label htmlFor="BannerType6">
                            <img src={radioIconTruck} alt="icon" />
                          </label>
                        </p>

                        <p className="radioOption-Item">
                          <input
                            type="radio"
                            name="BannerTypes"
                            id="BannerType7"
                            onClick={() => {
                              bodyTypeClick("Van");
                            }}
                          />
                          <label htmlFor="BannerType7">
                            <img src={radioIconVan} alt="icon" />
                          </label>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className="modal-btn"
                  variant="primary"
                  onClick={applyFilter}
                >
                  Apply Filters
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>

      <div className="row g-0 g-lg-4 py-lg-4">
        {isLoading === true ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <>
            {filterCarList.map((data) => (
              <SearchCarCardComponent
                key={data._id}
                searchCarData={data}
                setCar={setHoverSelectedCar}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default FilterCarData;
