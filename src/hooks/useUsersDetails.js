import { useEffect, useState } from "react";
import { getCookie } from "../utilities/helper";
import useAuth from "./useAuth";

//load user data by user id

const useUsersDetails = () => {
  const { user, setUser } = useAuth();
  const [userSingleData, setUserSingleData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/user/${user._id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setUserSingleData(data));
  }, []);

  return [userSingleData, setUserSingleData];
};
export default useUsersDetails;
