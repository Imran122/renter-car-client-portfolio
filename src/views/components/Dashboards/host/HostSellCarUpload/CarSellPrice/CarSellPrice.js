import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import useAuth from "../../../../../../hooks/useAuth";
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    background: "#fff",
    borderColor: "#eaecf0",
    height: "60px",

    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      // Overwrittes the different states of border
      borderColor: "#eaecf0",
    },
  }),
};
const CarSellPrice = () => {
  const { user, isLoading, setIsLoading, sellCarData, setSellCarData } =
    useAuth();
  const handleOnType = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newSellData = { ...sellCarData };
    newSellData[field] = value;
    setSellCarData(newSellData);
  };

  const optionsCondition = [
    { value: "New", label: "New", name: "carCondition" },

    { value: "Used", label: "Used", name: "carCondition" },
  ];
  const handleType = (e) => {
    const field = e.name;
    const value = e.value;
    const newSellData = { ...sellCarData };
    newSellData[field] = value;
    setSellCarData(newSellData);
    //setSelectedOption(value);
  };

  const submitCarData = (e) => {};

  return (
    <>
      {/* step count and title */}
      <div className="d-flex align-items-center cc-border-bottom p-4">
        <div className="p-3 rounded-circle cc-step-border flex-justify-align-center me-3">
          <h6>
            <span className="cc-step-color">3</span>/6
          </h6>
        </div>
        <div className="mt-3">
          <h5>Car Condition Details</h5>
          <p>
            <strong>Next:</strong>{" "}
            <span className="cc-input-label">Upload Document</span>
          </p>
        </div>
      </div>

      {/* inputs */}
      <div className="input-container p-4">
        <form onSubmit={submitCarData}>
          <div className="row g-3">
            {/* input */}
            <div className="col col-12">
              <div className="input-wrapper">
                <label className="fw-600 mb-2 cc-input-label form-label">
                  <strong>Car Condition</strong>
                </label>
                <Select
                  styles={customStyles}
                  onChange={handleType}
                  options={optionsCondition}
                />
              </div>
            </div>
            <div className="col col-12">
              <div className="input-wrapper">
                <label className="fw-600 mb-2 cc-input-label form-label">
                  <strong>Prices</strong>
                </label>
                <input
                  placeholder="$800"
                  name="sellPrice"
                  type="number"
                  className="cc-in form-control"
                  onChange={handleOnType}
                />
              </div>
            </div>
          </div>

          <div className="row g-3 mt-3">
            <div className="col col-6 col-md-3">
              <Link to="/dashboard/sell-car-upload/feature">
                <button className="cc-back-btn">Back</button>
              </Link>
            </div>
            <div className="col col-6 col-md-3">
              <Link to="/dashboard/sell-car-upload/documents">
                <button
                  className="button-style cc-continue-btn ms-4"
                  type="submit"
                  onClick={() => submitCarData()}
                >
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CarSellPrice;
