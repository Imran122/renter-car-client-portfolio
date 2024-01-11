import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useRentCarList = () => {
  //set data in services
  const { user } = useAuth();
  const [rentCarList, setRentCarList] = useState([]);
  //fetch data from db
  //load data
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/approvedrentcarlist`)
      .then((response) => response.json())
      .then((data) => {
        if (user?._id) {
          fetch(`${process.env.REACT_APP_API}/api/favouriteallinfo/${user._id}`)
            .then((response) => response.json())
            .then((favdata) => {
              favdata = favdata.favcarlist;
              for (let index = 0; index < data.length; index++) {
                data[index]["favflag"] = false;
                if (favdata.some((fav) => fav._id === data[index]._id)) {
                  data[index]["favflag"] = true;
                }
              }
              setRentCarList(data.finalResult);
            });
        } else {
          setRentCarList(data.finalResult);
        }
      });
  }, []);
  return [rentCarList, setRentCarList];
};

export default useRentCarList;
