import { useEffect, useState } from "react";
import { getCookie } from "../utilities/helper";

const useRenterListUser = () => {
  //set data in services
  const [renterUserData, setRenterUserData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/super-admin-user-renter`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setRenterUserData(data));
  }, []);
  return [renterUserData, setRenterUserData];
};

export default useRenterListUser;
