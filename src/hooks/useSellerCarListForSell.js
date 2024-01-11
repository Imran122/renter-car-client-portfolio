import { useEffect, useState } from "react";
import { getCookie } from "../utilities/helper";
import useAuth from "./useAuth";

//load user data by user id

const useSellerCarListForSell = () => {
  const { user, setUser } = useAuth();
  const [sellerMyVeiclesData, setSellerMyVeiclesData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/my-car-list-seller`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setSellerMyVeiclesData(data));
  }, []);

  return [sellerMyVeiclesData, setSellerMyVeiclesData];
};
export default useSellerCarListForSell;
