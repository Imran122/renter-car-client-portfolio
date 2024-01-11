import { useEffect, useState } from "react";
import { getCookie } from "../utilities/helper";
import useAuth from "./useAuth";

//load user data by user id

const useRenterBookCountData = () => {
  const { user, setUser } = useAuth();
  const [renterBookCountData, setRenterBookCountData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/renter-book-datainfo`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setRenterBookCountData(data));
  }, []);

  return [renterBookCountData, setRenterBookCountData];
};
export default useRenterBookCountData;
