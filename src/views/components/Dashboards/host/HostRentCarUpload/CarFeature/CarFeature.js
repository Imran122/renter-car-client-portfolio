import React from "react";
import { BiGasPump } from "react-icons/bi";
import { GiCarDoor, GiGearStick } from "react-icons/gi";
import { IoSpeedometerOutline } from "react-icons/io5";
import { MdOutlineEventSeat } from "react-icons/md";
import { RiCarLine, RiOilLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Select from "react-select";
import useAuth from "../../../../../../hooks/useAuth";
import "./CarFeature.css";
//reat select design
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    background: "#fff",
    borderColor: "#eaecf0",
    // width: "220px",
    height: "60px",

    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      // Overwrittes the different states of border
      borderColor: "#eaecf0",
    },
  }),
};
//reat select design
const CarFeature = () => {
  const { user, isLoading, setIsLoading, rentCarData, setRentCarData } =
    useAuth();

  //for type of milage
  const handleOnTypeMile = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRentData = { ...rentCarData };
    newRentData[field] = value;
    setRentCarData(newRentData);
  };
  //for type of milage

  const handleOnType = (e) => {
    const field = e.name;
    const value = e.value;
    const newRentData = { ...rentCarData };
    newRentData[field] = value;
    setRentCarData(newRentData);
  };
  //...............car seat.....................
  const optionsSeat = [
    { value: "1", label: "1", name: "seatNumber" },
    { value: "2", label: "2", name: "seatNumber" },
    { value: "3", label: "3", name: "seatNumber" },
    { value: "4", label: "4", name: "seatNumber" },
    { value: "5", label: "5", name: "seatNumber" },
    { value: "6", label: "6", name: "seatNumber" },
    { value: "7", label: "7", name: "seatNumber" },
    { value: "8", label: "8", name: "seatNumber" },
    { value: "9", label: "9", name: "seatNumber" },
    { value: "10", label: "10", name: "seatNumber" },
    { value: "11", label: "11", name: "seatNumber" },
    { value: "12", label: "12", name: "seatNumber" },
    { value: "13", label: "13", name: "seatNumber" },
    { value: "14", label: "14", name: "seatNumber" },
    { value: "15", label: "15", name: "seatNumber" },
    { value: "16", label: "16", name: "seatNumber" },
    { value: "17", label: "17", name: "seatNumber" },
    { value: "18", label: "18", name: "seatNumber" },
    { value: "19", label: "19", name: "seatNumber" },
    { value: "20", label: "20", name: "seatNumber" },
    { value: "21", label: "21", name: "seatNumber" },
    { value: "22", label: "22", name: "seatNumber" },
    { value: "23", label: "23", name: "seatNumber" },
    { value: "24", label: "24", name: "seatNumber" },
    { value: "25", label: "25", name: "seatNumber" },
    { value: "26", label: "26", name: "seatNumber" },
    { value: "27", label: "27", name: "seatNumber" },
    { value: "28", label: "28", name: "seatNumber" },
    { value: "29", label: "29", name: "seatNumber" },
    { value: "30", label: "30", name: "seatNumber" },
    { value: "35", label: "35", name: "seatNumber" },
    { value: "40", label: "40", name: "seatNumber" },
    { value: "45", label: "45", name: "seatNumber" },
    { value: "50", label: "50", name: "seatNumber" },
  ];

  //.................car seat........................
  //.................car body type........................
  const optionsDoor = [
    { value: "2", label: "2", name: "doorNumber" },
    { value: "4", label: "4", name: "doorNumber" },
  ];

  //.................car body type........................

  //.................car fuel type........................
  const optionsFuel = [
    { value: "Gasoline", label: "Gasoline", name: "fuelType" },
    { value: "Petrol", label: "Petrol", name: "fuelType" },
    { value: "Diesel", label: "Diesel", name: "fuelType" },
    { value: "Electric", label: "Electric", name: "fuelType" },
    { value: "Hybrid", label: "Hybrid", name: "fuelType" },
  ];
  //.................car fuel type........................
  //.................car body type........................

  const optionsBody = [
    { value: "Sedan", label: "Sedan", name: "bodyType" },
    { value: "Coupe", label: "Coupe", name: "bodyType" },

    { value: "Hatchback", label: "Hatchback", name: "bodyType" },
    { value: "Mini Van", label: "Mini Van", name: "bodyType" },
    { value: "Van", label: "Van", name: "bodyType" },

    { value: "SUV Car", label: "SUV Car", name: "bodyType" },
    { value: "Campervan", label: "Campervan", name: "bodyType" },
    { value: "Truck", label: "Truck", name: "bodyType" },
  ];

  //.................car body type........................
  //.................car transmission type........................

  const optionsTransmission = [
    { value: "Manual", label: "Manual", name: "transmissionType" },
    { value: "Automated", label: "Automated", name: "transmissionType" },
    {
      value: "Continuously variable",
      label: "Continuously variable",
      name: "transmissionType",
    },
    {
      value: "Semi-automatic",
      label: "Semi-automatic",
      name: "transmissionType",
    },
  ];
  //.................car transmission type........................

  const submitCarData = (e) => {};
  console.log("cc", rentCarData);
  return (
    <>
      {/* step count and title */}
      <div className="d-flex align-items-center cc-border-bottom p-4">
        <div className="p-3 rounded-circle cc-step-border flex-justify-align-center me-3">
          <h6>
            <span className="cc-step-color">2</span>/7
          </h6>
        </div>
        <div className="mt-3">
          <h5>Features of the car</h5>
          <p>
            <strong>Next:</strong>{" "}
            <span className="cc-input-label">Insurance</span>
          </p>
        </div>
      </div>

      {/* inputs */}
      <div className="input-container p-4">
        <form onSubmit={submitCarData}>
          <div className="row g-3">
            {/* input */}
            <div className="col col-12 col-md-4">
              <div className="input-wrapper">
                <label className="fw-600 mb-2 cc-input-label form-label">
                  <strong>Number of Seats</strong>
                </label>
                <div className="mb-3 cc-in-g input-group">
                  <span className="bg-transparent cc-in-border input-group-text">
                    <MdOutlineEventSeat />
                  </span>
                  <Select
                    className="cr-rs-width"
                    styles={customStyles}
                    onChange={handleOnType}
                    options={optionsSeat}
                  />
                </div>
              </div>
            </div>
            {/* input */}
            <div className="col col-12 col-md-4">
              <div className="input-wrapper">
                <label className="fw-600 mb-2 cc-input-label form-label">
                  <strong>Number of Doors</strong>
                </label>
                <div className="mb-3 cc-in-g input-group">
                  <span className="bg-transparent cc-in-border input-group-text">
                    <GiCarDoor />
                  </span>
                  <Select
                    className="cr-rs-width"
                    styles={customStyles}
                    options={optionsDoor}
                    onChange={handleOnType}
                  />
                </div>
              </div>
            </div>
            {/* input */}
            <div className="col col-12 col-md-4">
              <div className="input-wrapper">
                <label className="fw-600 mb-2 cc-input-label form-label">
                  <strong>Miles Per Gallon</strong>
                </label>
                <div className="mb-3 cc-in-g input-group">
                  <span className="bg-transparent cc-in-border input-group-text">
                    <RiOilLine />
                  </span>
                  <input
                    placeholder="Miles Per Gallon"
                    type="text"
                    className="form-control cc-in-border"
                    name="milesPerGallon"
                    onChange={handleOnTypeMile}
                  />
                </div>
              </div>
            </div>
            {/* input optionsFuel */}

            <div className="col col-12 col-md-4">
              <div className="input-wrapper">
                <label className="fw-600 mb-2 cc-input-label form-label">
                  <strong>Fuel Type</strong>
                </label>
                <div className="mb-3 cc-in-g input-group">
                  <span className="bg-transparent cc-in-border input-group-text">
                    <BiGasPump />
                  </span>
                  <Select
                    className="cr-rs-width"
                    styles={customStyles}
                    options={optionsFuel}
                    onChange={handleOnType}
                  />
                  {/*   <select
                    name="fuelType"
                    className="border-start-0 cc-form-select ps-0 form-select"
                    onChange={handleOnType}
                  >
                    <option defaultValue="">Select Fuel Type</option>
                    <option defaultValue="Gasoline">Gasoline</option>
                    <option defaultValue="Petrol">Petrol</option>
                    <option defaultValue="Diesel">Diesel</option>
                    <option defaultValue="Electric">Electric</option>
                    <option defaultValue="Hybrid">Hybrid</option>
                  </select> */}
                </div>
              </div>
            </div>

            <div className="col col-12 col-md-4">
              <div className="input-wrapper">
                <label className="fw-600 mb-2 cc-input-label form-label">
                  <strong>Body Type</strong>
                </label>
                <div className="mb-3 cc-in-g input-group">
                  <span className="bg-transparent cc-in-border input-group-text">
                    <RiCarLine />
                  </span>
                  <Select
                    className="cr-rs-width"
                    styles={customStyles}
                    options={optionsBody}
                    onChange={handleOnType}
                  />
                </div>
              </div>
            </div>
            <div className="col col-12 col-md-4">
              <div className="input-wrapper">
                <label className="fw-600 mb-2 cc-input-label form-label">
                  <strong>Transmission</strong>
                </label>
                <div className="mb-3 cc-in-g input-group">
                  <span className="bg-transparent cc-in-border input-group-text">
                    <GiGearStick />
                  </span>

                  <Select
                    className="cr-rs-width"
                    styles={customStyles}
                    options={optionsTransmission}
                    onChange={handleOnType}
                  />
                </div>
              </div>
            </div>

            {/* input */}

            {/* input */}
            {/* input */}
            <div className="col col-12 ">
              <div className="input-wrapper">
                <label className="fw-600 mb-2 cc-input-label form-label">
                  <strong>Authorized Mileage</strong>
                </label>
                <div className="mb-3 cc-in-g input-group ">
                  <span className="col col-1 bg-transparent cc-in-border input-group-text">
                    <IoSpeedometerOutline />
                  </span>

                  <div className="input-wrapper col col-11 ">
                    <input
                      placeholder="Authorized Mileage"
                      name="authorizedMilage"
                      type="text"
                      className="cc-in form-control"
                      onChange={handleOnTypeMile}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="row g-3 mt-3">
          <div className="col col-6 col-md-3">
            <Link to="/dashboard/rent-car-upload/">
              <button className="cc-back-btn">Back</button>
            </Link>
          </div>
          <div className="col col-6 col-md-3">
            <Link to="/dashboard/rent-car-upload/insurance">
              <button
                type="submit"
                onClick={() => submitCarData()}
                className="button-style cc-continue-btn ms-4"
              >
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarFeature;
