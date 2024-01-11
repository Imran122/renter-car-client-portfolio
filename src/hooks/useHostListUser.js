import { useEffect, useState } from "react";
import { getCookie } from "../utilities/helper";

const useHostListUser = () => {
  //set data in services
  const [hostUserData, setHostUserData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/super-admin-user-host`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setHostUserData(data));
  }, []);
  return [hostUserData, setHostUserData];
};

export default useHostListUser;
