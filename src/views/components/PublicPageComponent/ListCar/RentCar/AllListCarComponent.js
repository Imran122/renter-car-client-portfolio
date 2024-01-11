import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CarListCardComponent from "./CarListCardComponent";
import "./AllListCar.css";
import useRentCarList from "../../../../../hooks/useRentCarList";
import useAuth from "../../../../../hooks/useAuth";
const AllListCar = () => {
  // const [rentCarList, setRentCarList] = useRentCarList();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [rentCarList, setRentCarList] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  console.log("rentCarList", rentCarList);
  //fetch data from db
  const [pageCount, setPageCount] = useState(0);
  //page button er jonnno
  const [page, setPage] = useState(0);

  //load data
  let size = 9;
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API}/api/approvedrentcarlist?page=${page}&&size=${size}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (user?._id) {
          fetch(`${process.env.REACT_APP_API}/api/favouriteallinfo/${user._id}`)
            .then((response) => response.json())
            .then((favdata) => {
              favdata = favdata.favcarlist;

              for (let index = 0; index < data.finalResult.length; index++) {
                data.finalResult[index]["favflag"] = false;
                if (
                  favdata.some((fav) => fav._id === data.finalResult[index]._id)
                ) {
                  data.finalResult[index]["favflag"] = true;
                }
              }
              setRentCarList(data.finalResult);
              //setDisplayProducts(data.finalResult);
              const count = data.count;
              const pageNumber = Math.ceil(count / size);
              setPageCount(pageNumber);
            });
        } else {
          setRentCarList(data.finalResult);
          const count = data.count;
          const pageNumber = Math.ceil(count / size);

          setPageCount(pageNumber);
        }
      });
  }, [page]);
  return (
    <div className="container top-rated-cars-container py-5">
      <div className="section-title text-center d-none d-xl-block">
        <h3>All rental cars</h3>
      </div>

      {/* content */}
      <div className="row row-cols-1 row-cols-xl-3 g-4">
        {page < 0 || page + 1 > pageCount ? (
          <h3>no data</h3>
        ) : (
          <>
            {rentCarList.map((list) => (
              <CarListCardComponent
                key={list.uniqedata._id}
                rentCarList={list}
              />
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

            {/*  <li className="page-item">
              <Link to={"/"} className="page-link" aria-label="Next">
                <span aria-hidden="true">»</span>
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AllListCar;
