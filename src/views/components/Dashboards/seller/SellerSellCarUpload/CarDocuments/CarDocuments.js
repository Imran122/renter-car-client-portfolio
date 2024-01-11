import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiFileUploadLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import useAuth from "../../../../../../hooks/useAuth";
import "./CarDocuments.css";
function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}
const CarDocuments = () => {
  const [fileData, setFileData] = useState(null);

  const { user, isLoading, setIsLoading, sellCarData, setSellCarData } =
    useAuth();

  const handleOnType = (e) => {
    const field = e.target.name;
    //const value = e.target.value;
    const file = e.target.files[0];
    let postid = uuidv4();
    let { type, name } = file;
    console.log("type:--", type);
    let namesplit = name.split(".");
    let nameExtension = namesplit[namesplit.length - 1];
    let blob = file.slice(0, file.size, type);
    let newFile = new File([blob], `${postid}_post.${nameExtension}`, {
      type: type,
    });
    const newSellData = { ...sellCarData };
    newSellData[field] = newFile;
    setSellCarData(newSellData);

    //new image upload preview system
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setFileData(reader.result);
    });
    reader.readAsDataURL(e.target.files[0]);
  };
  const submitCarData = (e) => {};
  return (
    <>
      {/* step count and title */}
      <div className="d-flex align-items-center cc-border-bottom p-4">
        <div className="p-3 rounded-circle cc-step-border flex-justify-align-center me-3">
          <h6>
            <span className="cc-step-color">4</span>/6
          </h6>
        </div>
        <div className="mt-3">
          <h5>Upload documents</h5>
          <p>
            <strong>Next:</strong>{" "}
            <span className="cc-input-label">Upload car photos</span>
          </p>
        </div>
      </div>

      {/* inputs */}
      <div className="input-container p-4">
        <Form onSubmit={submitCarData}>
          <div className="cc-docs">
            {fileData ? (
              <Link to={fileData} className="" alt="user pdf">
                {sellCarData?.carDocumentPdf && (
                  <p>{sellCarData?.carDocumentPdf.name}</p>
                )}
              </Link>
            ) : (
              <IoDocumentTextOutline />
            )}
          </div>

          <div className="cc-file-upload">
            <label htmlFor="file_upload">
              <RiFileUploadLine />
              <h4 className="file-up-txt">
                Drag and drop or click to upload isurance document
              </h4>
              <input
                type="file"
                name="carDocumentPdf"
                onChange={handleOnType}
                id="file_upload"
                accept="image/*,.pdf"
              />
            </label>
          </div>

          <div className="row g-3 mt-3">
            <div className="col col-6 col-md-3">
              <Link to="/dashboard/seller-sell-car-upload/carsellprice">
                <button className="cc-back-btn">Back</button>
              </Link>
            </div>
            <div className="col col-6 col-md-3">
              <Link to="/dashboard/seller-sell-car-upload/seller-photos">
                <button
                  type="submit"
                  onClick={() => submitCarData()}
                  className="cc-continue-btn ms-4"
                >
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default CarDocuments;
