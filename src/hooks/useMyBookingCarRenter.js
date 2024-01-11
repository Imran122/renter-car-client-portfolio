import { useEffect, useState } from "react";
import { getCookie } from "../utilities/helper";
import useAuth from "./useAuth";

//load user data by user id

const useMyBookingCarRenter = () => {
  const { user, setUser } = useAuth();
  const [myBookingCarData, setMyBookingCarData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/my-booking-rent-carist`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setMyBookingCarData(data));
  }, []);

  return [myBookingCarData, setMyBookingCarData];
};
export default useMyBookingCarRenter;
