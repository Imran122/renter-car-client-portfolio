import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import axios from "axios";
import useAuth from "../../../../../../hooks/useAuth";
import { getCookie } from "../../../../../../utilities/helper";

const CheckoutForm = () => {
  const { user, isLoading, setIsLoading, sellCarData, setSellCarData } =
    useAuth();
  //navigate("/renter-pay/success", { replace: true });
  //console.log("he me last:", rentCarData);
  const stripe = useStripe();
  const navigate = useNavigate();
  const elements = useElements();
  const [error, setError] = useState("");
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    console.log("submit", sellCarData);
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
    } else {
      let formData = new FormData();
      const { id } = paymentMethod;
      for (let item of sellCarData) {
        formData.append(item[0], item[1]);
      }
      formData.append("id", id);
      setIsLoading(true);
      fetch(`${process.env.REACT_APP_API}/api/sellcarupload`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: formData,
      })
        .then((response) => {
          if (response.status === 200) {
            setIsLoading(false);
            return response.json();
          } else if (response.status === 401) {
            navigate("/login", { replace: true });
          }
        })

        .then((data) => {
          if (data) {
            setSellCarData("");
            console.log("inserted");
            navigate("/dashboard", { replace: true });
          }
        });
    }
  };

  return (
    <>
      {isLoading === true && <div className="loader"></div>}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="row g-3 mt-3">
          <div className="col col-6 col-md-4">
            <Link to="/dashboard/seller-sell-car-upload/seller-photos">
              <button className="cr-rp-btn-back">Back</button>
            </Link>
          </div>
          <div className="col col-6 col-md-4">
            <button
              disabled={!stripe}
              type="submit"
              onClick={handleSubmit}
              className="button-style cr-rp-btn-continue"
            >
              Pay & Confirm
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
