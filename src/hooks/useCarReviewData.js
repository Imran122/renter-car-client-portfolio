import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useCarReviewData = () => {
  //set data in services
  const [reviewListData, setreviewListData] = useState([]);
  //fetch data from fajedb json file
  //const id = "62a859acf8797ae6f2b1bd7b";

  const { id } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/car-details-page-review/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => setreviewListData(data));
  }, []);
  return [reviewListData, setreviewListData];
};

export default useCarReviewData;
