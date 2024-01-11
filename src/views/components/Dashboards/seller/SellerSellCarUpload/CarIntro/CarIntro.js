import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import useAuth from "../../../../../../hooks/useAuth";
import useCarListFormData from "../../../../../../hooks/useCarListFormData";
import useShowMessage from "../../../../../../hooks/useShowMessage";
import "./CarIntro.css";

const CarIntro = () => {
  const { user, isLoading, setIsLoading, sellCarData, setSellCarData } =
    useAuth();
  const handleOnType = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newSellData = { ...sellCarData };
    newSellData[field] = value;
    setSellCarData(newSellData);
  };

  //work for car make model year
  //...............................
  const [carlistFormData, setCarListFOrmData] = useCarListFormData();

  //unique array list making list is here

  let uniqueList = [
    ...new Map(carlistFormData.map((item) => [item["Make"], item])).values(),
  ];

  let options = [];
  for (let index = 0; index < uniqueList.length; index++) {
    const element = uniqueList[index];
    options.push({ value: element.Make, label: element.Make, name: "carMake" });
  }
  const handleType = (e) => {
    const field = e.name;
    const value = e.value;
    const newSellData = { ...sellCarData };
    newSellData[field] = value;
    setSellCarData(newSellData);
    //setSelectedOption(value);
  };
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

  //work for car model select
  //.........................................
  let uniquemodelList = [
    ...new Map(carlistFormData.map((item) => [item["Model"], item])).values(),
  ];
  let optionsModel = [];
  for (let index = 0; index < uniquemodelList.length; index++) {
    const element = uniquemodelList[index];
    optionsModel.push({
      value: element.Model,
      label: element.Model,
      name: "carModel",
    });
  }

  //..................................
  //...........car year...............
  let uniqueyearList = [
    ...new Map(carlistFormData.map((item) => [item["Year"], item])).values(),
  ];
  let result = uniqueyearList.map((a) => a.Year);
  //make year as ascending
  let ShortResultYear = result.sort((a, b) => a - b);
  let optionsYear = [];
  for (let index = 0; index < ShortResultYear.length; index++) {
    const element = ShortResultYear[index];
    optionsYear.push({
      value: element,
      label: element,
      name: "carMakeYear",
    });
  }
  //...........car year...............

  //...........car registration state...............
  const optionsState = [
    { value: "Alaska", label: "Alaska", name: "carRegistrationState" },
    { value: "Arizona", label: "Arizona", name: "carRegistrationState" },
    { value: "Arkansas", label: "Arkansas", name: "carRegistrationState" },
    { value: "California", label: "California", name: "carRegistrationState" },
    { value: "Colorado", label: "Colorado", name: "carRegistrationState" },
    {
      value: "Connecticut",
      label: "Connecticut",
      name: "carRegistrationState",
    },
    { value: "Delaware", label: "Delaware", name: "carRegistrationState" },
    { value: "Florida", label: "Florida", name: "carRegistrationState" },
    { value: "Georgia", label: "Georgia", name: "carRegistrationState" },
    { value: "Hawaii", label: "Hawaii", name: "carRegistrationState" },
    { value: "Idaho", label: "Idaho", name: "carRegistrationState" },
    { value: "Illinois", label: "Illinois", name: "carRegistrationState" },
    { value: "Indiana", label: "Indiana", name: "carRegistrationState" },
    { value: "Iowa", label: "Iowa", name: "carRegistrationState" },
    { value: "Kansas", label: "Kansas", name: "carRegistrationState" },
    {
      value: "Kentucky[D]",
      label: "Kentucky[D]",
      name: "carRegistrationState",
    },
    { value: "Louisiana", label: "Louisiana", name: "carRegistrationState" },
    { value: "Maine", label: "Maine", name: "carRegistrationState" },
    { value: "Maryland", label: "Maryland", name: "carRegistrationState" },
    {
      value: "Massachusetts[D]",
      label: "Massachusetts[D]",
      name: "carRegistrationState",
    },
    { value: "Michigan", label: "Michigan", name: "carRegistrationState" },
    { value: "Minnesota", label: "Minnesota", name: "carRegistrationState" },
    {
      value: "Mississippi",
      label: "Mississippi",
      name: "carRegistrationState",
    },
    { value: "Missouri", label: "Missouri", name: "carRegistrationState" },
    { value: "Montana", label: "Montana", name: "carRegistrationState" },
    { value: "Nebraska", label: "Nebraska", name: "carRegistrationState" },
    { value: "Nevada", label: "Nevada", name: "carRegistrationState" },
    {
      value: "New Hampshire",
      label: "New Hampshire",
      name: "carRegistrationState",
    },
    { value: "New Jersey", label: "New Jersey", name: "carRegistrationState" },
    { value: "New Mexico", label: "New Mexico", name: "carRegistrationState" },
    { value: "New York", label: "New York", name: "carRegistrationState" },
    {
      value: "North Carolina",
      label: "North Carolina",
      name: "carRegistrationState",
    },
    {
      value: "North Dakota",
      label: "North Dakota",
      name: "carRegistrationState",
    },
    { value: "Oklahoma", label: "Oklahoma", name: "carRegistrationState" },
    { value: "Oregon", label: "Oregon", name: "carRegistrationState" },
    {
      value: "Pennsylvania[D]",
      label: "Pennsylvania[D]",
      name: "carRegistrationState",
    },
    {
      value: "Rhode Island",
      label: "Rhode Island",
      name: "carRegistrationState",
    },
    {
      value: "South Carolina",
      label: "South Carolina",
      name: "carRegistrationState",
    },
    {
      value: "South Dakota",
      label: "South Dakota",
      name: "carRegistrationState",
    },
    { value: "Tennessee", label: "Tennessee", name: "carRegistrationState" },
    { value: "Texas", label: "Texas", name: "carRegistrationState" },
    { value: "Utah", label: "Utah", name: "carRegistrationState" },
    { value: "Vermont", label: "Vermont", name: "carRegistrationState" },
    {
      value: "Virginia[D]",
      label: "Virginia[D]",
      name: "carRegistrationState",
    },
    { value: "Washington", label: "Washington", name: "carRegistrationState" },
    {
      value: "West Virginia",
      label: "West Virginia",
      name: "carRegistrationState",
    },
    { value: "Wisconsin", label: "Wisconsin", name: "carRegistrationState" },
    { value: "Wyoming", label: "Wyoming", name: "carRegistrationState" },
    {
      value: "District of Columbia",
      label: "District of Columbia",
      name: "carRegistrationState",
    },
  ];
  //...........car registration state................
  //end ofwork for car make model year

  //map api work start

  //map api work start

  const [pickup, setPickup] = useState({ address: "" });
  const [latLngAddress, setLatLngAddress] = useState("");
  const handleChange = (address) => {
    setPickup({ address });
  };

  const handleSelect = (address) => {
    setPickup({ address });

    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        setLatLngAddress(latLng);
      })
      .catch((error) => console.error("Error", error));
  };

  //map api work end

  const [showElement, setShowElement] = useShowMessage();
  const navigate = useNavigate();

  const submitCarData = (e) => {
    let userPickupAddress = { ...pickup, ...latLngAddress };

    if (pickup.address) {
      const newdata = {
        ...sellCarData,
        userPickupAddress: JSON.stringify(userPickupAddress),
      };

      setSellCarData(newdata);
      navigate("/dashboard/seller-sell-car-upload/feature", { replace: true });
    } else {
      setShowElement(true);
    }
  };

  return (
    <>
      {/* step count and title */}
      <div className="d-flex align-items-center cc-border-bottom p-4">
        <div className="p-3 rounded-circle cc-step-border flex-justify-align-center me-3">
          <h6>
            <span className="cc-step-color">1</span>/7
          </h6>
        </div>
        <div className="mt-3">
          <h5>
            <strong>Intro of the car</strong>
          </h5>
          <p>
            <strong>Next:</strong>{" "}
            <span className="cc-input-label">Features of the car</span>
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
                  <strong>Car Make</strong>
                </label>
                <Select
                  styles={customStyles}
                  onChange={handleType}
                  options={options}
                />
              </div>
            </div>
            {/* input */}
            <div className="col col-12 col-md-4">
              <div className="input-wrapper">
                <label className="fw-600 mb-2 cc-input-label form-label">
                  <strong>Car Model</strong>
                </label>
                <Select
                  styles={customStyles}
                  onChange={handleType}
                  options={optionsModel}
                />
              </div>
            </div>
            {/* input */}
            <div className="col col-12 col-md-4">
              <div className="input-wrapper">
                <label className="fw-600 mb-2 cc-input-label form-label">
                  <strong>Makers Year</strong>
                </label>
                <Select
                  styles={customStyles}
                  onChange={handleType}
                  options={optionsYear}
                />
              </div>
            </div>
            {/* input */}
            <div className="col col-12">
              <div className="input-wrapper">
                <label className="fw-600 mb-2 cc-input-label form-label">
                  <strong>Registration State</strong>
                </label>
                <Select
                  styles={customStyles}
                  onChange={handleType}
                  options={optionsState}
                />
              </div>
            </div>

            {/* location */}
            <div className="col col-12 col-md-12">
              <div className="input-wrapper">
                <label className="fw-600 mb-2 cc-input-label form-label">
                  <strong>Enter Pick Up Location</strong>
                  {showElement === true ? (
                    <span className="cr-alert">*Please enter a Location</span>
                  ) : (
                    <></>
                  )}
                </label>
                <PlacesAutocomplete
                  value={pickup.address}
                  onChange={handleChange}
                  onSelect={handleSelect}
                >
                  {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading,
                  }) => (
                    <div>
                      <input
                        {...getInputProps({
                          placeholder: "Pickup Location Set ...",
                          className: "location-search-input cc-in form-control",
                        })}
                      />
                      <div className="autocomplete-dropdown-container">
                        {loading && <div>Loading...</div>}
                        {suggestions.map((suggestion) => {
                          const className = suggestion.active
                            ? "suggestion-item--active"
                            : "suggestion-item";
                          // inline style for demonstration purpose
                          const style = suggestion.active
                            ? { backgroundColor: "#fafafa", cursor: "pointer" }
                            : { backgroundColor: "#ffffff", cursor: "pointer" };
                          return (
                            <div
                              key={suggestion.placeId}
                              {...getSuggestionItemProps(suggestion, {
                                className,
                                style,
                              })}
                            >
                              <span>{suggestion.description}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </PlacesAutocomplete>
              </div>
            </div>
            {/* location */}
            {/* input */}
            <div className="col col-12 col-md-6">
              <div className="input-wrapper">
                <label className="fw-600 mb-2 cc-input-label form-label">
                  <strong>Enter License Number</strong>
                </label>
                <input
                  placeholder="GJZ 56RX358"
                  type="text"
                  className="cc-in form-control"
                  name="carLicenseNumber"
                  onChange={handleOnType}
                />
              </div>
            </div>
            {/* input */}
            <div className="col col-12 col-md-6">
              <div className="input-wrapper">
                <label className="fw-600 mb-2 cc-input-label form-label">
                  <strong>Enter VIN Number</strong>
                </label>
                <input
                  type="text"
                  placeholder="1G4GD5G32FF256545"
                  name="carVinNumber"
                  onChange={handleOnType}
                  className="cc-in form-control"
                />
              </div>
            </div>
            {/* address contact link */}
            <div className="col col-12 col-md-6">
              <div className="input-wrapper">
                <label className="fw-600 mb-2 cc-input-label form-label">
                  <strong>Enter Contact Number</strong>
                </label>
                <input
                  placeholder="+18143519594"
                  type="text"
                  className="cc-in form-control"
                  name="contactNumber"
                  onChange={handleOnType}
                />
              </div>
            </div>
            {/* input */}
            <div className="col col-12 col-md-6">
              <div className="input-wrapper">
                <label className="fw-600 mb-2 cc-input-label form-label">
                  <strong>Enter Sociale Media Link</strong>
                </label>
                <input
                  type="text"
                  placeholder="https://www.facebook.com/mdkuddus"
                  name="socialeMediaLink"
                  onChange={handleOnType}
                  className="cc-in form-control"
                />
              </div>
            </div>
            {/* address contact link */}
          </div>
        </form>
        <div className="row g-3 mt-3">
          <div className="col col-6 col-md-3">
            <button
              type="submit"
              onClick={() => submitCarData()}
              className="button-style cc-continue-btn mt-3"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarIntro;
