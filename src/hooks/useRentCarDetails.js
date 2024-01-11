import { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const useRentCarDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  //set data in services
  const [checkDetailsRentCar, setCheckDetailsRentCar] = useState([]);
  //fetch data from db
  //load data
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/rentcardetails/${id}`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 401) {
          navigate("/rent-car", { replace: true });
        }
      })
      .then((data) => {
        //localStorage.setItem("car", JSON.stringify(data));
        setCheckDetailsRentCar(data);
      });
  }, [id]);
  return [checkDetailsRentCar, setCheckDetailsRentCar];
};

export default useRentCarDetails;
