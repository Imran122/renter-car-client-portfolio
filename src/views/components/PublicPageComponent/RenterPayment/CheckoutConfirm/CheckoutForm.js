import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAuth from "../../../../../hooks/useAuth";
import { getCookie, removeLocalStorage } from "../../../../../utilities/helper";
import axios from "axios";
const CheckoutForm = () => {
  const { user, isLoading, setIsLoading, rentCarData, setRentCarData } =
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
      setError("");

      try {
        const { id } = paymentMethod;
        setIsLoading(true);
        const response = await axios.post(
          `${process.env.REACT_APP_API}/api/rentcarpayment`,
          {
            totalCostAll: rentCarData.totalCostAll,
            rentCarData: rentCarData,
            id: id,
          },

          {
            headers: {
              authorization: `Bearer ${getCookie("token")}`,
            },
          }
        );

        if (response.status === 200) {
          setIsLoading(false);
          navigate("/renter-pay/success", { replace: true });
        }
      } catch (error) {
        setError(error.message);
      }
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
            <Link to="/renter-pay/driver-license-info">
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
