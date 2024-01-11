import React from "react";
import defaultUser from "../../../../../assets/images/user_image.png";
import "./Administrator.css";

const SuperAdminAdministratorComponent = () => {
  return (
    <div className="row g-0">
      <div className="col col-12 col-xl-9">
        <div className="not-dashboard-home-left-col">
          {/* booking request card */}
          

          <div className="mt-4 row row-cols-1 row-cols-xl-1 g-x-md-1 g-x-xxl-4 admin-add-content">

            <div className="col">
                <form>
                    <div className="row">
                        <div className="col col-12 col-lg-10">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Assign a Role</label>
                                <input type="email" 
                                    className="form-control" 
                                    id="exampleInputEmail1" 
                                    placeholder="Enter email to invite as a admin"
                                />
                                <p className="d-none d-lg-block mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard.</p>
                            </div>
                        </div>
                        <div className="col col-12 col-lg-2">
                            <button className="btnadmin">
                                Add as Editor
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="col">
              <div className="admin-tbl mt-3">
                  <h2>Currently Admins</h2>
                  {Array.from({ length: 4 }, (_, i) =>
                  <div className="admin-lists mt-4" key={i}>
                    <div className="row">
                        <div className="col col-2 col-lg-2">
                          <img src={defaultUser} alt="User"/>
                        </div>
                        <div className="col col-6 col-lg-7">
                          <h3>David Willie</h3>
                          <p>Admin</p>
                        </div>
                        <div className="col col-4 col-lg-3">
                          <button className="btn-remove">
                            Remove
                          </button>
                        </div>
                    </div>
                  </div>
                  )}
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className="col col-12 col-xl-4">
        <div className="not-dashboard-home-right-col">
          
        </div>
      </div>
    </div>
  );
};

export default SuperAdminAdministratorComponent;