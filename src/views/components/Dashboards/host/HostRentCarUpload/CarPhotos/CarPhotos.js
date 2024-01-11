import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { BiImageAdd } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../../../../hooks/useAuth";
import { getCookie } from "../../../../../../utilities/helper";
import "./CarPhotos.css";
function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}
const CarPhotos = () => {
  const { user, isLoading, setIsLoading, rentCarData, setRentCarData } =
    useAuth();
  const navigate = useNavigate();
  //preview image state
  const [imgData1, setImgData1] = useState(null);
  const [imgData2, setImgData2] = useState(null);
  const [imgData3, setImgData3] = useState(null);
  const [imgData4, setImgData4] = useState(null);
  const handleOnType = (e) => {
    const field = e.target.name;
    //const value = e.target.value;
    const file = e.target.files[0];
    let postid = uuidv4();
    let { type, name } = file;

    let namesplit = name.split(".");
    let nameExtension = namesplit[namesplit.length - 1];
    let blob = file.slice(0, file.size, type);
    let newFile = new File([blob], `${postid}_post.${nameExtension}`, {
      type: type,
    });
    const newRentData = { ...rentCarData };
    newRentData[field] = newFile;
    setRentCarData(newRentData);

    //new image upload preview system
    if (field === "carImage1") {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData1(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    } else if (field === "carImage2") {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData2(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    } else if (field === "carImage3") {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData3(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    } else if (field === "carImage4") {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData4(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const submitCarData = (e) => {
    const userInfo = user._id;
    const UsersUploadedCarData = {
      ...rentCarData,
      userInfo,
    };
    let formData = new FormData();

    for (let item in UsersUploadedCarData) {
      if (
        item === "carImage1" ||
        item === "carImage2" ||
        item === "carImage3" ||
        item === "carImage4" ||
        item === "carDocumentPdf"
      ) {
        formData.append("carImageFile", UsersUploadedCarData[item]);
        continue;
      }
      if (UsersUploadedCarData.hasOwnProperty(item)) {
        formData.append(item, UsersUploadedCarData[item]);
      }
    }
    console.log("formData", formData);
    console.log("UsersUploadedCarData", UsersUploadedCarData);
    // send data to the server by jwt token auth
    fetch(`${process.env.REACT_APP_API}/api/rentcarupload`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${getCookie("token")}`,
      },
      body: formData,
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 401) {
          navigate("/login", { replace: true });
        }
      })

      .then((data) => {
        if (data) {
          console.log("inserted");
          setRentCarData("");
          navigate("/dashboard", { replace: true });
        }
      });

    e.preventDefault();
  };

  return (
    <>
      {/* step count and title */}
      <div className="d-flex align-items-center border-bottom p-4">
        <div className="p-3 rounded-circle border flex-justify-align-center me-3">
          <h6>
            <span className="cc-step-color">7</span>/7
          </h6>
        </div>
        <div className="mt-3">
          <h5>Upload car photos</h5>
          <p>
            <strong>Next:</strong>{" "}
            <span className="cc-input-label">Finishing</span>
          </p>
        </div>
      </div>

      {/* inputs */}

      <div className="input-container p-4">
        <Form onSubmit={submitCarData} encType="multipart/form-data">
          <div className="row g-3">
            <div className="col col-12 col-md-3">
              <div className="cc-photo-upload">
                <label htmlFor="file_upload border">
                  {imgData1 ? (
                    <img
                      src={imgData1}
                      className="car-rent-thumb rounded mx-auto border img-fluid"
                      alt="user profile"
                    />
                  ) : (
                    <BiImageAdd />
                  )}

                  <input
                    type="file"
                    name="carImage1"
                    onChange={handleOnType}
                    id="file_upload"
                    accept="image/*,.pdf"
                  />
                </label>
              </div>
            </div>
            <div className="col col-12 col-md-3">
              <div className="cc-photo-upload">
                <label htmlFor="file_upload">
                  {imgData2 ? (
                    <img
                      src={imgData2}
                      className="car-rent-thumb rounded mx-auto border img-fluid"
                      alt="user profile"
                    />
                  ) : (
                    <BiImageAdd />
                  )}

                  <input
                    type="file"
                    name="carImage2"
                    onChange={handleOnType}
                    id="file_upload"
                    accept="image/*,.pdf"
                  />
                </label>
              </div>
            </div>
            <div className="col col-12 col-md-3">
              <div className="cc-photo-upload">
                <label htmlFor="file_upload">
                  {imgData3 ? (
                    <img
                      src={imgData3}
                      className="car-rent-thumb rounded mx-auto border img-fluid"
                      alt="user profile"
                    />
                  ) : (
                    <BiImageAdd />
                  )}
                  <input
                    type="file"
                    name="carImage3"
                    onChange={handleOnType}
                    id="file_upload"
                    accept="image/*,.pdf"
                  />
                </label>
              </div>
            </div>
            <div className="col col-12 col-md-3">
              <div className="cc-photo-upload">
                <label htmlFor="file_upload">
                  {imgData4 ? (
                    <img
                      src={imgData4}
                      className="car-rent-thumb rounded mx-auto border img-fluid"
                      alt="user profile"
                    />
                  ) : (
                    <BiImageAdd />
                  )}
                  <input
                    type="file"
                    name="carImage4"
                    onChange={handleOnType}
                    id="file_upload"
                    accept="image/*,.pdf"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="row g-3 mt-3">
            <div className="col col-6 col-md-3">
              <Link to="/dashboard/rent-car-upload/documents">
                <button className="cc-back-btn">Back</button>
              </Link>
            </div>
            <div className="col col-6 col-md-3">
              <button
                className="cc-continue-btn ms-4"
                type="submit"
                onClick={() => submitCarData}
              >
                Finish Adding Car
              </button>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default CarPhotos;
