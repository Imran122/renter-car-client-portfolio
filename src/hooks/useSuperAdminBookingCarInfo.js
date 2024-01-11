import { useEffect, useState } from "react";
import { getCookie } from "../utilities/helper";
import useAuth from "./useAuth";

//load user data by user id

const useSuperAdminBookingCarInfo = () => {
  const { user, setUser } = useAuth();
  const [adminDashboardBookingCarList, setAdminDashboardBookingCarList] =
    useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/all-booking-car-list`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setAdminDashboardBookingCarList(data));
  }, []);

  return [adminDashboardBookingCarList, setAdminDashboardBookingCarList];
};
export default useSuperAdminBookingCarInfo;
