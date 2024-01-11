import React from "react";
import { Link } from "react-router-dom";
import useRentCarList from "../../../../../hooks/useRentCarList";
import TopRatedCarsCard from "../TopRatedCarsCard/TopRatedCarsCard";
import "./TopRatedCarsComponent.css";

const TopRatedCarsComponent = () => {
  const [rentCarList, setRentCarList] = useRentCarList();

  return (
    <div className="container top-rated-cars-container py-5">
      <div className="section-title text-center d-none d-xl-block">
        <h3>Book your car today</h3>
      </div>

      {/* content */}
      <div className="row row-cols-1 row-cols-xl-3 g-4">
        {/*  {rentCarList?.slice(0, 6).map((list) => (
          <TopRatedCarsCard key={list.uniqedata._id} rentCarList={list} />
        ))} */}
        {rentCarList?.slice(0, 6).map((list) => (
          <TopRatedCarsCard key={list.uniqedata._id} rentCarList={list} />
        ))}
      </div>

      <div className="section-title text-center d-none d-xl-block mt-2">
        <Link to={"/rent-car"}>
          <button className="px-3 py-2 text-white primary-button border-0 d-inline-block cr-button">
            See all cars
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopRatedCarsComponent;
