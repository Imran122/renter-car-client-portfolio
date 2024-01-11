import { useEffect, useState } from "react";
import { getCookie } from "../utilities/helper";
import useAuth from "./useAuth";

//load user data by user id

const useHostBookingCarList = () => {
  const { user, setUser } = useAuth();
  const [hostBookingCarList, setHostBookingCarList] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/host-booking-rent-carlist`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setHostBookingCarList(data));
  }, []);

  return [hostBookingCarList, setHostBookingCarList];
};
export default useHostBookingCarList;
