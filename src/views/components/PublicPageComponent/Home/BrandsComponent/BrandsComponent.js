import React from "react";
import "./BrandsComponent.css";
import brand1 from "../../../../../assets/icons/brandLamborgini.png";
import brand2 from "../../../../../assets/icons/brandNissan.png";
import brand3 from "../../../../../assets/icons/brandMercedez.png";
import brand4 from "../../../../../assets/icons/brandToyota.png";
import brand5 from "../../../../../assets/icons/brandLexus.png";
import brand6 from "../../../../../assets/icons/brandBmw.png";

const BrandsComponent = () => {
  return (
    <div className="container py-5 d-none d-xl-block">
      <div className="section-title">
        <h3>Brand of cars that you can rent</h3>
      </div>

      {/* content */}
      <div className="row row-cols-4 row-cols-xl-6 g-2 g-xxl-4">
        {/* brand card */}
        <div className="col">
          <article className="brand-card  d-flex flex-column justify-content-center align-items-center">
            <div className="brand-card-img-container">
              <img className="img-fluid mb-4" src={brand1} alt="icons" />
            </div>
            <div className="text-center">
              <h5>Lamborghini</h5>
              {/*     <p>80 Cars</p> */}
            </div>
          </article>
        </div>
        {/* brand card */}
        <div className="col">
          <article className="brand-card  d-flex flex-column justify-content-center align-items-center">
            <div className="brand-card-img-container">
              <img className="img-fluid mb-4" src={brand2} alt="icons" />
            </div>
            <div className="text-center">
              <h5>Nissan</h5>
              {/*  <p>36 Cars</p> */}
            </div>
          </article>
        </div>
        {/* brand card */}
        <div className="col">
          <article className="brand-card  d-flex flex-column justify-content-center align-items-center">
            <div className="brand-card-img-container">
              <img className="img-fluid mb-4" src={brand3} alt="icons" />
            </div>
            <div className="text-center">
              <h5>Mercedez-Benz</h5>
              {/* <p>33 Cars</p> */}
            </div>
          </article>
        </div>
        {/* brand card */}
        <div className="col">
          <article className="brand-card  d-flex flex-column justify-content-center align-items-center">
            <div className="brand-card-img-container">
              <img className="img-fluid mb-4" src={brand4} alt="icons" />
            </div>
            <div className="text-center">
              <h5>Toyota</h5>
              {/* <p>32 Cars</p> */}
            </div>
          </article>
        </div>
        {/* brand card */}
        <div className="col">
          <article className="brand-card  d-flex flex-column justify-content-center align-items-center">
            <div className="brand-card-img-container">
              <img className="img-fluid mb-4" src={brand5} alt="icons" />
            </div>
            <div className="text-center">
              <h5>Lexus</h5>
              {/* <p>28 Cars</p> */}
            </div>
          </article>
        </div>
        {/* brand card */}
        <div className="col">
          <article className="brand-card  d-flex flex-column justify-content-center align-items-center">
            <div className="brand-card-img-container">
              <img className="img-fluid mb-4" src={brand6} alt="icons" />
            </div>
            <div className="text-center">
              <h5>BMW</h5>
              {/*  <p>23 Cars</p> */}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BrandsComponent;
