import { useEffect, useState } from "react";
import { getCookie } from "../utilities/helper";
import useAuth from "./useAuth";

//load user data by user id

const useSuperAdminEarningData = () => {
  const { user, setUser } = useAuth();
  const [superAdminEarningData, setSuperAdminEarningData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/super-admin-data-balance`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setSuperAdminEarningData(data));
  }, []);

  return [superAdminEarningData, setSuperAdminEarningData];
};
export default useSuperAdminEarningData;
