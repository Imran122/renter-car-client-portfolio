import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SellCarListCardComponent from "./SellCarListCardComponent";
import useSellCarList from "../../../../../hooks/useSellCarList";
import "./AllListCar.css";
import useAuth from "../../../../../hooks/useAuth";
const AllListCar = () => {
  const [sellCarList, setsellCarList] = useState([]);
  const { user } = useAuth();

  //fetch data from db
  const [pageCount, setPageCount] = useState(0);
  //page button er jonnno
  const [page, setPage] = useState(0);

  //load data
  let size = 9;
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API}/api/sellcarlist?page=${page}&&size=${size}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (user?._id) {
          fetch(`${process.env.REACT_APP_API}/api/favouriteallinfo/${user._id}`)
            .then((response) => response.json())
            .then((favdata) => {
              setsellCarList(data.finalResult);
              //setDisplayProducts(data.finalResult);
              const count = data.count;
              const pageNumber = Math.ceil(count / size);
              setPageCount(pageNumber);
            });
        } else {
          setsellCarList(data.finalResult);
          const count = data.count;
          const pageNumber = Math.ceil(count / size);

          setPageCount(pageNumber);
        }
      });
  }, [page]);

  return (
    <div className="container top-rated-cars-container py-5">
      <div className="section-title text-center d-none d-xl-block">
        <h3> Top Sell cars</h3>
      </div>

      {/* content */}
      <div className="row row-cols-1 row-cols-xl-3 g-4">
        {page < 0 || page + 1 > pageCount ? (
          <h3>no data</h3>
        ) : (
          <>
            {sellCarList.map((list) => (
              <SellCarListCardComponent key={list._id} sellCarList={list} />
            ))}
          </>
        )}
      </div>

      <div className="section-title d-none d-xl-block mt-3">
        <nav className="pagination-outer" aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              {page === 0 ? (
                <button className="page-link">
                  <span aria-hidden="true" disabled>
                    «
                  </span>
                </button>
              ) : (
                <button className="page-link" onClick={() => setPage(page - 1)}>
                  <span aria-hidden="true">«</span>
                </button>
              )}
            </li>
            {[...Array(pageCount).keys()].map((number) => (
              <li className="page-item" key={number}>
                <button className="page-link" onClick={() => setPage(number)}>
                  <span aria-hidden="true">{number + 1}</span>
                </button>
              </li>
            ))}

            <li className="page-item">
              <button className="page-link" onClick={() => setPage(page + 1)}>
                <span aria-hidden="true">»</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AllListCar;
