import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { BsClock, BsFillCheckCircleFill } from "react-icons/bs";
import { IoCalendarClearOutline, IoLocationOutline } from "react-icons/io5";
import useRentCarDetails from "../../../../../../hooks/useRentCarDetails";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import "./CarTripBook.css";
import useAuth from "../../../../../../hooks/useAuth";
import useUsersDetails from "../../../../../../hooks/useUsersDetails";
import { setLocalStorage } from "../../../../../../utilities/helper";

const CarTripBook = () => {
  const { user, isLoading, setIsLoading, rentCarData, setRentCarData } =
    useAuth();
  const [userSingleData, setUserSingleData] = useUsersDetails();
  //console.log("userSingleData", userSingleData);
  const [pickup, setPickup] = useState({
    address: rentCarData?.pickupAddress?.address || "",
  });
  const [dropup, setDropup] = useState({
    address: rentCarData?.dropupAddress?.address || "",
  });
  const handleChange = (address) => {
    setPickup({ address });
  };
  const handleSelect = (address) => {
    setPickup({ address });
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        const newRentData = { ...rentCarData };
        newRentData["pickupAddress"] = { address, ...latLng };
        setRentCarData(newRentData);
      })
      .catch((error) => console.error("Error", error));
  };

  const handleChangeDrop = (address) => {
    setDropup({ address });
  };
  const handleSelectDrop = (address) => {
    setDropup({ address });
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        const newRentData = { ...rentCarData };
        newRentData["dropupAddress"] = { address, ...latLng };
        setRentCarData(newRentData);
      })
      .catch((error) => console.error("Error", error));
  };
  const navigate = useNavigate();
  let defValue = rentCarData?.pickupAddress?.address;
  const [checkDetailsRentCar, setCheckDetailsRentCar] = useRentCarDetails();
  //console.log("car info", checkDetailsRentCar.hostUserId);
  //select date and time
  const handleOnType = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRentData = { ...rentCarData };
    newRentData[field] = value;
    setRentCarData(newRentData);
  };
  let totalAmountCost = 0;
  let totalCostAll = 0;
  let hoursTotal = 0;
  let daysTotal = 0;
  let weeksTotal = 0;
  let monthsTotal = 0;
  let deliveryCharges = 0;
  //calculation part
  if (checkDetailsRentCar.chargePlanName === "Hourly") {
    let date1 = new Date(rentCarData?.tripEndDateTime);

    let date2 = new Date(rentCarData?.tripStartDateTime);

    //count total minute from a date-time to a date-time
    let result = Math.abs(date2 - date1);

    let resultsInMinute = result / (1000 * 60);
    //count total hours by minute
    hoursTotal = Math.ceil(resultsInMinute / 60);

    if (
      rentCarData?.tripStartDateTime === undefined ||
      rentCarData?.tripEndDateTime === undefined
    ) {
      hoursTotal = 0;
    }

    totalAmountCost = hoursTotal * parseFloat(checkDetailsRentCar.rentCharges);
    //subtotal amount calculation

    if (pickup?.address !== dropup?.address) {
      totalCostAll =
        totalAmountCost + parseFloat(checkDetailsRentCar.deliveryCharges);
      deliveryCharges = checkDetailsRentCar.deliveryCharges;
    } else {
      totalCostAll = totalAmountCost;
      deliveryCharges = 0;
    }
  } else if (checkDetailsRentCar.chargePlanName === "Daily") {
    let date1 = new Date(rentCarData?.tripEndDateTime);
    let date2 = new Date(rentCarData?.tripStartDateTime);
    //count total minute from a date-time to a date-time
    let result = Math.abs(date2 - date1);
    let resultsInMinute = result / (1000 * 60);
    //count total day by minute
    daysTotal = Math.ceil(resultsInMinute / 1440);
    if (
      rentCarData?.tripStartDateTime === undefined ||
      rentCarData?.tripEndDateTime === undefined
    ) {
      daysTotal = 0;
    }
    totalAmountCost = daysTotal * parseFloat(checkDetailsRentCar.rentCharges);
    if (pickup.address !== dropup.address) {
      totalCostAll =
        totalAmountCost + parseFloat(checkDetailsRentCar.deliveryCharges);
      deliveryCharges = checkDetailsRentCar.deliveryCharges;
    } else {
      totalCostAll = totalAmountCost;
      deliveryCharges = 0;
    }
  } else if (checkDetailsRentCar.chargePlanName === "Weekly") {
    let date1 = new Date(rentCarData?.tripEndDateTime);
    let date2 = new Date(rentCarData?.tripStartDateTime);
    //count total minute from a date-time to a date-time
    let result = Math.abs(date2 - date1);
    let resultsInMinute = result / (1000 * 60);
    //count total week by minute
    weeksTotal = Math.ceil(resultsInMinute / 10080);
    if (
      rentCarData?.tripStartDateTime === undefined ||
      rentCarData?.tripEndDateTime === undefined
    ) {
      weeksTotal = 0;
    }
    totalAmountCost = weeksTotal * parseFloat(checkDetailsRentCar.rentCharges);
    if (pickup.address !== dropup.address) {
      totalCostAll =
        totalAmountCost + parseFloat(checkDetailsRentCar.deliveryCharges);
      deliveryCharges = checkDetailsRentCar.deliveryCharges;
    } else {
      totalCostAll = totalAmountCost;
      deliveryCharges = 0;
    }
  } else if (checkDetailsRentCar.chargePlanName === "Monthly") {
    let date1 = new Date(rentCarData?.tripEndDateTime);
    let date2 = new Date(rentCarData?.tripStartDateTime);
    //count total minute from a date-time to a date-time
    let result = Math.abs(date2 - date1);
    let resultsInMinute = result / (1000 * 60);
    //count total month by minute
    monthsTotal = Math.ceil(resultsInMinute / 43200);
    if (
      rentCarData?.tripStartDateTime === undefined ||
      rentCarData?.tripEndDateTime === undefined
    ) {
      monthsTotal = 0;
    }
    totalAmountCost = monthsTotal * parseFloat(checkDetailsRentCar.rentCharges);
    if (pickup.address !== dropup.address) {
      totalCostAll =
        totalAmountCost + parseFloat(checkDetailsRentCar.deliveryCharges);
      deliveryCharges = checkDetailsRentCar.deliveryCharges;
    } else {
      totalCostAll = totalAmountCost;
      deliveryCharges = 0;
    }
  }
  //calulcation of total and subtotal

  const submitCarBookForRentData = (e) => {
    e.preventDefault();

    let carMake = checkDetailsRentCar.carMake;
    let carModel = checkDetailsRentCar.carModel;
    let chargePlanName = checkDetailsRentCar.chargePlanName;
    let rentCharges = checkDetailsRentCar.rentCharges;

    let carImage = checkDetailsRentCar.carImage[0];
    let rentCarId = checkDetailsRentCar._id;
    let carUploadPersonHostId = checkDetailsRentCar.hostUserId;
    let newdata = {};
    if (hoursTotal > 0) {
      newdata = {
        ...rentCarData,
        rentCarId,
        carUploadPersonHostId,
        totalCostAll,
        totalAmountCost,
        deliveryCharges,
        hoursTotal,
        chargePlanName,
        carMake,
        rentCharges,
        carImage,

        carModel,
      };
    } else if (daysTotal > 0) {
      newdata = {
        ...rentCarData,
        rentCarId,
        carUploadPersonHostId,
        totalCostAll,
        totalAmountCost,
        deliveryCharges,
        daysTotal,
        chargePlanName,
        carMake,
        rentCharges,
        carImage,

        carModel,
      };
    } else if (weeksTotal > 0) {
      newdata = {
        ...rentCarData,
        rentCarId,
        carUploadPersonHostId,
        totalCostAll,
        totalAmountCost,
        deliveryCharges,
        weeksTotal,
        chargePlanName,
        carMake,
        rentCharges,
        carImage,

        carModel,
      };
    } else if (monthsTotal > 0) {
      newdata = {
        ...rentCarData,
        rentCarId,
        carUploadPersonHostId,
        totalCostAll,
        totalAmountCost,
        deliveryCharges,
        monthsTotal,
        chargePlanName,
        carMake,
        rentCharges,
        carImage,

        carModel,
      };
    }
    setRentCarData(newdata);
    setLocalStorage("paymentinfo", newdata);
    navigate("/renter-pay/insurance-info", { replace: true });
  };

  return (
    <div className="trip-book-container d-lg-flex flex-column">
      {/* trip cost */}
      <form onSubmit={submitCarBookForRentData}>
        {/* trip start end details */}
        <div className="trip-book-time-container order-1">
          {/* trip book alert */}
          <div className="trip-book-alert d-flex align-items-center">
            <BsFillCheckCircleFill size={18} />
            <p className="ms-1">
              Free cancellation for 24 hours before pickup{" "}
            </p>
          </div>

          {/* trip book location and start-end */}
          <div className="trip-book-location-start-end-container">
            {/* pickup */}
            <div className="trip-book-input-container">
              <Form.Group className="input-wrapper">
                <Form.Label className="trip-picker-input-label">
                  Pickup location
                </Form.Label>

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
                          className:
                            "location-search-input cc-lan-in form-control",
                        })}
                      />
                      {/* <div className="trip-picker-input-append bg-transparent border-0 p-0 ccloc-icon">
                        <IoLocationOutline size={18} />
                      </div> */}
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
              </Form.Group>
            </div>
            {/* drop-off */}
            <div className="trip-book-input-container">
              <Form.Group className="input-wrapper">
                <Form.Label className="trip-picker-input-label">
                  Drop-off location
                </Form.Label>
                {/*    <InputGroup className="trip-picker-input-group">
                  <InputGroup.Text className="trip-picker-input-append bg-transparent border-0 p-0">
                    <IoLocationOutline size={18} />
                  </InputGroup.Text>
                  <Form.Control
                    className="trip-picker-input border-0 p-0"
                    placeholder={rentCarData?.dropupAddress?.address}
                    defaultValue={rentCarData?.dropupAddress?.address}
                  />
                </InputGroup> */}
                <PlacesAutocomplete
                  value={dropup.address}
                  onChange={handleChangeDrop}
                  onSelect={handleSelectDrop}
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
                          placeholder: "Drop Off Location Set ...",
                          className:
                            "location-search-input cc-lan-in form-control",
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
              </Form.Group>
            </div>
            {/* trip start */}
            <div className="trip-book-input-container">
              <Form.Group className="input-wrapper">
                <Form.Label className="trip-picker-input-label">
                  Trip Start
                </Form.Label>

                <div className="row row-cols-2 g-0 trip-picker-input-group">
                  {/* trip start date */}
                  <div className="col border-end ttt">
                    <input
                      type="datetime-local"
                      className="trip-picker-input trip-picker-datetime border-0 p-0"
                      name="tripStartDateTime"
                      onChange={handleOnType}
                      defaultValue={rentCarData?.tripStartDateTime}
                    />
                  </div>
                  {/* trip start time */}
                  {/* trip start time */}
                  {/*  <div className="col ttt">
                    <Form.Control
                      type="time"
                      className="trip-picker-input trip-picker-datetime border-0 p-0"
                      name="tripStartTime"
                      onChange={handleOnType}
                      defaultValue={rentCarData?.tripStartTime?.toLocaleString()}
                    />
                  </div> */}
                </div>
              </Form.Group>
            </div>
            {/* trip end */}
            <div className="trip-book-input-container">
              <Form.Group className="input-wrapper">
                <Form.Label className="trip-picker-input-label">
                  Trip End
                </Form.Label>

                <div className="row row-cols-2 g-0 trip-picker-input-group">
                  {/* input trip end date */}
                  {/* input trip end date */}
                  <div className="col border-end ttt">
                    <input
                      className="trip-picker-input trip-picker-datetime border-0 p-0"
                      type="datetime-local"
                      name="tripEndDateTime"
                      onChange={handleOnType}
                      defaultValue={rentCarData?.tripEndDateTime}
                    />
                  </div>

                  {/* input trip end time */}
                </div>
              </Form.Group>
            </div>
          </div>
        </div>

        <div className="trip-cost-container order-2">
          <div className="trip-cost-container-wrapper">
            {/* hour rate and delivery */}
            <div className="trip-cost">
              <div className="trip-cost-item d-flex justify-content-between align-items-center">
                <p>
                  <span
                    className="fw-500"
                    style={{
                      color: "#101828",
                    }}
                  >
                    ${checkDetailsRentCar.rentCharges}/
                  </span>
                  {checkDetailsRentCar.chargePlanName}
                </p>
                {/* <p>X4</p> */}
                <p>$ {totalAmountCost}</p>
              </div>

              <div className="trip-cost-item d-flex justify-content-between align-items-center">
                <p>Delivery</p>

                {pickup.address !== dropup.address ? (
                  <p>${checkDetailsRentCar.deliveryCharges}</p>
                ) : (
                  <p>$0.00</p>
                )}
              </div>
            </div>
            {/* subtotal and vat */}
            <div className="trip-cost">
              <div className="trip-cost-item d-flex justify-content-between align-items-center">
                <p>Subtotal</p>
                <p>${totalCostAll}</p>
              </div>
              {/*   <div className="trip-cost-item d-flex justify-content-between align-items-center">
              <p>Vat(+8%)</p>
              <p>$17.5</p>
            </div> */}
            </div>
            {/* total */}
            <div className="trip-cost-item d-flex justify-content-between align-items-center">
              <p>Total</p>
              <p className="trip-cost-total-value">${totalCostAll}</p>
            </div>
          </div>
        </div>

        {/* book button */}
        <div className="mx-4 mx-lg-0 order-3 mb-4">
          <button
            className="primary-button d-inline-block border-0 text-white py-2 fw-500 w-100 mx-lg-0"
            type="submit"
            onClick={submitCarBookForRentData}
          >
            Book now
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarTripBook;
