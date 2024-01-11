import { useEffect, useState } from "react";
import { getCookie } from "../utilities/helper";
import useAuth from "./useAuth";

//load user data by user id

const useRenterTodaysBookCar = () => {
  const { user, setUser } = useAuth();
  const [renterTodaysBookCar, setRenterTodaysBookCar] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/renter-todays-bookcar`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setRenterTodaysBookCar(data));
  }, []);

  return [renterTodaysBookCar, setRenterTodaysBookCar];
};
export default useRenterTodaysBookCar;
