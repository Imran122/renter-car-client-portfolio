import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../../../hooks/useAuth";
import "./TripPickerComponent.css";

const TripPickerComponent = () => {
  const {
    user,
    isLoading,
    setIsLoading,
    rentCarData,
    setRentCarData,
    setSearchCarData,
    searchCarData,
    setFilterCarList,
  } = useAuth();
  const [favRentCarList, setFavRentCarList] = useState([]);
  useEffect(() => {
    if (user?._id) {
      fetch(`${process.env.REACT_APP_API}/api/favouriteallinfo/${user._id}`)
        .then((response) => response.json())
        .then((favdata) => {
          setFavRentCarList(favdata.favcarlist);
        });
    }
  }, [user?._id]);

  const [pickup, setPickup] = useState({ address: "" });
  const [dropup, setDropup] = useState({ address: "" });
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
  //select date and time
  const handleOnType = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRentData = { ...rentCarData };
    newRentData[field] = value;
    setRentCarData(newRentData);
  };

  //map api work end
  const navigate = useNavigate();
  const submitCarData = (e) => {
    // let userPickupAddress = { ...pickup, ...latLngAddress };

    // const newdata = {
    //   ...rentCarData,
    //   userPickupAddress: JSON.stringify(userPickupAddress),
    // };

    // setRentCarData(newdata);

    e.preventDefault();

    if (rentCarData.pickupAddress) {
      const { lat, lng } = rentCarData.pickupAddress;
      const { tripStartDateTime, tripEndDateTime } = rentCarData;
      fetch(
        `${process.env.REACT_APP_API}/api/search-car/?lat=${lat}&lng=${lng}&tripStartDateTime=${tripStartDateTime}&tripEndDateTime=${tripEndDateTime}`
      )
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else if (response.status === 401) {
            console.log("error found");
          }
        })
        .then((data) => {
          //localStorage.setItem("car", JSON.stringify(data));
          for (let index = 0; index < data.length; index++) {
            data[index]['favflag'] = false;
            if (favRentCarList.some(fav => fav._id === data[index]._id)) {
              data[index]['favflag'] = true;
            }
          }
          setSearchCarData(data);
          setFilterCarList(data);
          console.log("data ", data);
          navigate("/search", { replace: true });
        });
    }
    // console.log("rentCarData ", rentCarData);
    // navigate("/search", { replace: true });
  };
  return (
    <div className="trip-picker-container slide-in-elliptic-bottom-fwd">
      <form className="row g-3 align-items-end" onSubmit={submitCarData}>
        <div className="col col-12 col-xl-12">
          <div className="row g-3">
            {/* input - pickup location */}
            <div className="col col-12 col-xl-3">
              <Form.Group className="input-wrapper">
                <Form.Label className="trip-picker-input-label">
                  Pickup Location
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
            {/* input - drop-off pickup location */}
            <div className="col col-12 col-xl-2">
              <Form.Group className="input-wrapper">
                <Form.Label className="trip-picker-input-label">
                  Drop-off Location
                </Form.Label>
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
            {/* input - trip start */}
            <div className="col col-12 col-xl-3">
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
                    />
                  </div>
                  {/* trip start time */}
                  {/*   <div className="col ttt">
                    <Form.Control
                      type="time"
                      className="trip-picker-input trip-picker-datetime border-0 p-0"
                      name="tripStartTime"
                      onChange={handleOnType}
                    />
                  </div> */}
                </div>
              </Form.Group>
            </div>
            {/* input - trip end */}
            <div className="col col-12 col-xl-3">
              <Form.Group className="input-wrapper">
                <Form.Label className="trip-picker-input-label">
                  Trip End
                </Form.Label>

                <div className="row row-cols-2 g-0 trip-picker-input-group">
                  {/* input trip end date */}
                  <div className="col border-end ttt">
                    <input
                      type="datetime-local"
                      className="trip-picker-input trip-picker-datetime border-0 p-0"
                      name="tripEndDateTime"
                      onChange={handleOnType}
                    />
                  </div>
                  {/* input trip end time */}
                </div>
              </Form.Group>
            </div>
            <div className="col col-12 col-xl-1 trip-picker-input-button-container">
              <button
                className="align-self-bottom primary-button d-block w-100 border-0 text-white py-2"
                type="submit"
                onClick={submitCarData}
              >
                <span className="d-xl-none">Find Cars</span>
                <span className="d-none d-xl-inline">
                  <AiOutlineSearch size={20} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TripPickerComponent;
