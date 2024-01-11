import { useEffect, useState } from "react";
import { getCookie } from "../utilities/helper";
import useAuth from "./useAuth";

//load user data by user id

const useMyVeiclesHost = () => {
  const { user, setUser } = useAuth();
  const [hostMyVeiclesData, setHostMyVeiclesData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/mycarlisthost`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setHostMyVeiclesData(data));
  }, []);

  return [hostMyVeiclesData, setHostMyVeiclesData];
};
export default useMyVeiclesHost;
