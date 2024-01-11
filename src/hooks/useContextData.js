import { useState } from "react";
import { isAuth } from "../utilities/helper";

const useContextData = () => {
  const [user, setUser] = useState(isAuth());
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState("");
  const [authSuccess, setAuthSuccess] = useState("");
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");
  //car rent upload data state
  const [rentCarData, setRentCarData] = useState([]);
  const [sellCarData, setSellCarData] = useState([]);
  const [searchCarData, setSearchCarData] = useState([]);
  //for request rent car list
  const [rentRequestCarList, setRentRequestCarList] = useState([]);
  //single car rent details
  const [singleRentCar, setSingleCarRent] = useState([]);

  // state for rent car details  data
  const [checkDetailsRentCar, setCheckDetailsRentCar] = useState([]);
  // state for rent car details  data
  const [checkDetailsSellCar, setCheckDetailsSellCar] = useState([]);

  const [filterCarList, setFilterCarList] = useState([]);
  return {
    user,
    setUser,
    token,
    isLoading,
    setIsLoading,
    authError,
    setAuthError,
    authSuccess,
    setAuthSuccess,
    admin,
    setAdmin,
    rentCarData,
    setRentCarData,
    sellCarData,
    setSellCarData,
    rentRequestCarList,
    setRentRequestCarList,
    singleRentCar,
    setSingleCarRent,
    checkDetailsRentCar,
    setCheckDetailsRentCar,
    checkDetailsSellCar,
    setCheckDetailsSellCar,
    setSearchCarData,
    searchCarData,
    setFilterCarList,
    filterCarList,
  };
};

export default useContextData;
