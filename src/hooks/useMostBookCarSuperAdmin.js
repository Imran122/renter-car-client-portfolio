import { useEffect, useState } from "react";
import { getCookie } from "../utilities/helper";
import useAuth from "./useAuth";

//load user data by user id

const useMostBookCarSuperAdmin = () => {
  const { user, setUser } = useAuth();
  const [superadminMostBookCar, setSuperadminMostBookCar] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/super-admin-most-bookcar`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setSuperadminMostBookCar(data));
  }, []);

  return [superadminMostBookCar, setSuperadminMostBookCar];
};
export default useMostBookCarSuperAdmin;
