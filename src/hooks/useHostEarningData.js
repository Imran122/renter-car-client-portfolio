import { useEffect, useState } from "react";
import { getCookie } from "../utilities/helper";
import useAuth from "./useAuth";

//load user data by user id

const useHostEarningData = () => {
  const { user, setUser } = useAuth();
  const [hostEraningData, setHostEraningData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/hostbalancedata`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setHostEraningData(data));
  }, []);

  return [hostEraningData, setHostEraningData];
};
export default useHostEarningData;
