import React, { useEffect, useState } from "react";
import useAuth from "../../../../../hooks/useAuth";
import CarListCardComponent from "../../../PublicPageComponent/ListCar/RentCar/CarListCardComponent";
import FavouritesCardCardsComponent from "./FavouritesCardCardsComponent";
import "./MyFavourites.css";

const RenterMyFavouritesComponent = () => {
  const { user } = useAuth();
  const [rentFavCarList, setFavRentCarList] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/favouriteallinfo/${user._id}`)
      .then((response) => response.json())
      .then((data) => {
        data = data.favcarlist;
        for (let index = 0; index < data.length; index++) {
          data[index]['favflag'] = true;
        }
        console.log('favdata');
        console.log(data);
        setFavRentCarList(data)
      });
  }, []);
  return (
    <div className="row g-0 h-100">
      <div className="col col-12 col-xl-8 p-4">
        <div className="content-wrapper h-100">
          <div className="row">

            {rentFavCarList.map((list) => (
              <FavouritesCardCardsComponent key={list._id} rentCarList={list} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenterMyFavouritesComponent;
