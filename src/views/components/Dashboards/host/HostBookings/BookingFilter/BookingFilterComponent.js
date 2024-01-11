import React from "react";
import Select from "react-select";
import { useEffect, useState } from "react";
import "./BookingFilter.css";
import { AiOutlineCar, AiOutlineStar } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import useHostBookingCarList from "../../../../../../hooks/useHostBookingCarList";
import useAuth from "../../../../../../hooks/useAuth";
const BookingFilterComponent = () => {
  const {
    user,
    isLoading,
    setIsLoading,

    filterCarList,
    setFilterCarList,
  } = useAuth();

  const [hostBookingCarList, setHostBookingCarList] = useHostBookingCarList();
  //console.log("hostBookingCarList", hostBookingCarList);
  useEffect(() => {
    setFilterCarList(hostBookingCarList);
  }, [hostBookingCarList]);

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

  /*   const carReview = [
    { value: '5Star', label: '5 Star' },
    { value: '4Star', label: '4 Star' },
    { value: '3Star', label: '3 Star' },
    { value: '2Star', label: '2 Star' },
    { value: '1Star', label: '1 Star' }
  ]; */

  //...............................................................
  let [selectcategoryID, setCategoryID] = useState(0);

  //work for car make drop downlist
  let uniqueCarMakeList = [
    ...new Map(
      hostBookingCarList.map((item) => [item["carMake"], item])
    ).values(),
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
  //*********************************** */
  //*******************car address filter drop down**************** */
  /*   let dependentAddressList = hostBookingCarList.filter(
    (data) => data.carMake === selectcategoryID.carMake
  );
  console.log("dependentAddressList ", dependentAddressList); */

  let uniqueCarAddressList = [
    ...new Map(
      hostBookingCarList.map((item) => [item.dropupAddress?.address, item])
    ).values(),
  ];
  //console.log("uniqueCarAddressList ", uniqueCarAddressList);

  let carAddressNameOptions = [];
  for (let index = 0; index < uniqueCarAddressList.length; index++) {
    const element = uniqueCarAddressList[index];
    carAddressNameOptions.push({
      value: element.dropupAddress?.address,
      label: element.dropupAddress?.address,
      name: "dropupAddress",
    });
  }

  const handleType = (e) => {
    const field = e.name;
    const value = e.value;
    const newData = { ...selectcategoryID };
    newData[field] = value;
    //console.log("field ", field);
    setIsLoading(true);
    //console.log("newData ", newData);
    //console.log("field ", field);
    //console.log("value ", value);
    if (field == "carMake") {
      //delete newData?.dropupAddress.address;
      //console.log("selectcategoryID.carMake", newData.carMake);

      let carFilterWiselList = hostBookingCarList.filter(
        (car) => car.carMake === newData.carMake
      );

      setFilterCarList(carFilterWiselList);

      setIsLoading(false);
      // console.log("x", carFilterWiselList.length);
      if (carFilterWiselList.length === 0) {
        setFilterCarList(hostBookingCarList);
      }
    }

    if (field === "dropupAddress") {
      let carFilterWiselList = hostBookingCarList.filter(
        (car) => car?.dropupAddress?.address === newData?.dropupAddress
      );
      /*  let carFilterWiselList = hostBookingCarList.filter((car) => {
        return car.dropupAddress?.address === newData.dropupAddress?.address;
      }); */

      // console.log("carFilterWiselList........", carFilterWiselList);
      setFilterCarList(carFilterWiselList);

      setIsLoading(false);
    }
    setCategoryID(newData);
  };
  return (
    <div>
      {/* most booked cars */}
      <h4 className="mb-4">Filter by:</h4>
      {/* booked cars cards */}
      <article className="booking-filter d-flex align-items-center mb-3">
        {/* booked cars card thumb */}
        <div className="input-container w-100">
          <form>
            <div className="row">
              <div className="col col-12">
                <div className="input-wrapper">
                  <label className="fw-600 mb-2 cc-input-label form-label">
                    <strong>Cars</strong>
                  </label>
                  <div className="mb-3 cc-in-g input-group">
                    <span className="bg-transparent cc-in-border input-group-text">
                      <AiOutlineCar />
                    </span>
                    <Select
                      name="car_brand"
                      className="cr-rs-width"
                      styles={customStyles}
                      onChange={handleType}
                      options={carMakeNameOptions}
                    />
                  </div>
                </div>
              </div>
              <div className="col col-12">
                <div className="input-wrapper">
                  <label className="fw-600 mb-2 cc-input-label form-label">
                    <strong>Delivery Location</strong>
                  </label>
                  <div className="mb-3 cc-in-g input-group">
                    <span className="bg-transparent cc-in-border input-group-text">
                      <HiOutlineLocationMarker />
                    </span>
                    <Select
                      name="dropup_Address"
                      className="cr-rs-width"
                      styles={customStyles}
                      onChange={handleType}
                      options={carAddressNameOptions}
                    />
                  </div>
                </div>
              </div>
              {/*      <div className="col col-12">
                  <div className="input-wrapper">
                    <label className="fw-600 mb-2 cc-input-label form-label">
                      <strong>Renter Ratings</strong>
                    </label>
                    <div className="mb-3 cc-in-g input-group">
                      <span className="bg-transparent cc-in-border input-group-text">
                        <AiOutlineStar />
                      </span>
                      <Select
                        name='carReview'
                        className="cr-rs-width"
                        styles={customStyles}
                        options={carReview}
                      />
                    </div>
                  </div>
                </div> */}
            </div>
          </form>
        </div>
      </article>
    </div>
  );
};

export default BookingFilterComponent;
