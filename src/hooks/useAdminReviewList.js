import { useEffect, useState } from "react";
import { getCookie } from "../utilities/helper";

const useAdminReviewList = () => {
  //set data in services
  const [adminReviewListData, setAdminReviewListData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/all-review-data`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setAdminReviewListData(data));
  }, []);
  return [adminReviewListData, setAdminReviewListData];
};

export default useAdminReviewList;
