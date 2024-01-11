import { useEffect, useState } from "react";
import { getCookie } from "../utilities/helper";
import useAuth from "./useAuth";

//load user data by user id

const useHostSellMyVeiclesCar = () => {
  const { user, setUser } = useAuth();
  const [hostMySellVeiclesList, setHostMySellVeiclesList] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/mysellcarlisthost`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setHostMySellVeiclesList(data));
  }, []);

  return [hostMySellVeiclesList, setHostMySellVeiclesList];
};
export default useHostSellMyVeiclesCar;
