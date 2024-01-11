import { useEffect, useState } from "react";

const useSellCarList = () => {
  //set data in services
  const [sellCarList, setSellCarList] = useState([]);
  //fetch data from db
  //load data
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/sellcarlist`)
      .then((response) => response.json())
      .then((data) => setSellCarList(data));
  }, []);
  return [sellCarList, setSellCarList];
};

export default useSellCarList;
