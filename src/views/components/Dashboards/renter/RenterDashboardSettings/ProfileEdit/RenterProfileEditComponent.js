import React, { useEffect, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import profileIcon from "../../../../../../assets/images/profileIcon.png";
import useAuth from "../../../../../../hooks/useAuth";
import {
  getCookie,
  isAuth,
  updateUser,
} from "../../../../../../utilities/helper";
import "../RenterSettings.css";
function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}
const RenterProfileEditComponent = () => {
  const { user, setUser } = useAuth();
  let initialInfo = {};
  //load user data by user id
  const [userSingleData, setUserSingleData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/user/${user._id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        initialInfo = {
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          contact_number: data.contact_number,
          address: data.address,
        };
        setUserSingleData(data);
      });
  }, []);

  const [updateData, setUpdateData] = useState(initialInfo);

  const navigate = useNavigate();

  //type data in form
  const handelOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUserData = { ...updateData };
    newUserData[field] = value;

    setUpdateData(newUserData);
  };
  const [imgData, setImgData] = useState(null);
  //end of load user data by user id
  const [editProfileImage, setEditProfileImage] = useState([]);
  //file upload work
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
    const newData = { ...editProfileImage };
    newData[field] = newFile;
    setEditProfileImage(newData);
    //new image upload preview system
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setImgData(reader.result);
    });
    reader.readAsDataURL(e.target.files[0]);
  };

  const submitCarData = (e) => {
    e.preventDefault();

    const newData = {
      ...updateData,
      ...editProfileImage,
    };

    let formData = new FormData();

    for (let item in newData) {
      if (item === "profileImage") {
        formData.append("ImageFile", newData[item]);
        continue;
      }
      if (newData.hasOwnProperty(item)) {
        formData.append(item, newData[item]);
      }
    }

    //update data by call api
    fetch(`${process.env.REACT_APP_API}/api/user/update`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${getCookie("token")}`,
      },
      body: formData,
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 401) {
          navigate("/", { replace: true });
        }
      })

      .then((response) => {
        if (response.data) {
          updateUser(response.data, () => {
            setUser(isAuth());
            // setIsLoading(false);

            setUpdateData("");
            setEditProfileImage("");
            navigate("/dashboard", { replace: true });
          });
        }
      });
  };

  return (
    <>
      <div className="d-md-flex cr-edit">
        <Link to={"/dashboard/settings"}>
          <p className="d-inline-block p-1 fw-600 my-3">
            <AiOutlineLeft />
            <span className="mx-1">Edit profile</span>
          </p>
        </Link>
      </div>
      <article className="cr-border p-4 mt-3">
        {/* booking user & car details */}
        <form onSubmit={submitCarData}>
          <div className="d-md-flex justify-content-between align-items-center">
            {/* user & car */}
            <div className="image-upload">
              <label htmlFor="file-input">
                {imgData ? (
                  <img
                    src={imgData}
                    className="car-book-request-thumb rounded-circle border img-fluid"
                    alt="user profile"
                  />
                ) : (
                  <img
                    src={profileIcon}
                    className="car-book-request-thumb rounded-circle border img-fluid"
                    alt="user profile"
                  />
                )}
              </label>

              <input
                id="file-input"
                type="file"
                name="profileImage"
                onChange={handleOnType}
                accept="image/*,.pdf"
              />
            </div>
          </div>
          <div className="d-md-flex justify-content-between align-items-center">
            <div className="input-container mt-3 w-100">
              <div className="row g-2">
                <div className="col col-12 col-md-6">
                  <div className="input-wrapper">
                    <label className="fw-600 mb-2 cc-input-label form-label">
                      <strong>First name</strong>
                    </label>
                    <input
                      placeholder="Alex"
                      type="text"
                      name="firstname"
                      defaultValue={userSingleData?.firstname}
                      onChange={handelOnChange}
                      className="cc-in form-control"
                    />
                  </div>
                </div>
                <div className="col col-12 col-md-6">
                  <div className="input-wrapper">
                    <label className="fw-600 mb-2 cc-input-label form-label">
                      <strong>Last name</strong>
                    </label>
                    <input
                      placeholder="Simmons"
                      type="text"
                      name="lastname"
                      defaultValue={userSingleData?.lastname}
                      onChange={handelOnChange}
                      className="cc-in form-control"
                    />
                  </div>
                </div>

                <div className="col col-12">
                  <div className="input-wrapper">
                    <label className="fw-600 mb-2 cc-input-label form-label">
                      <strong>Email address</strong>
                    </label>
                    <input
                      placeholder="alex@email.com"
                      type="email"
                      name="email"
                      defaultValue={userSingleData.email}
                      disabled
                      className="cc-in form-control"
                    />
                  </div>
                </div>

                <div className="col col-12">
                  <div className="input-wrapper">
                    <label className="fw-600 mb-2 cc-input-label form-label">
                      <strong>Phone number</strong>
                    </label>
                    <input
                      placeholder="(480) 555-0103"
                      type="text"
                      name="contact_number"
                      defaultValue={userSingleData?.contact_number}
                      onChange={handelOnChange}
                      className="cc-in form-control"
                    />
                  </div>
                </div>
                <div className="col col-12">
                  <div className="input-wrapper">
                    <label className="fw-600 mb-2 cc-input-label form-label">
                      <strong>Address</strong>
                    </label>
                    <input
                      placeholder="address"
                      type="text"
                      name="address"
                      defaultValue={userSingleData?.address}
                      onChange={handelOnChange}
                      className="cc-in form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="row g-3 mt-3">
                <div className="col col-6 col-md-3">
                  <button
                    type="submit"
                    className="button-style primary-button me-2 me-xl-4 cr-button"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </article>
    </>
  );
};

export default RenterProfileEditComponent;
