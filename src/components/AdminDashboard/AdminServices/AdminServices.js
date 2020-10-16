import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import AdminServicesList from "../AdminServicesList/AdminServicesList";

const AdminServices = () => {
  document.title = "Service List - Admin Panel";

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://guarded-sierra-46966.herokuapp.com/all-orders")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="row">
      <div className="col-md-2 col-sm-4 col-4">
        <Sidebar />
      </div>
      <div className="col-md-10 col-sm-8 col-8 mt-5">
        <div className="d-flex container-fluid">
          <h3 className="font-weight-bolder">Services</h3>
          <h6 className="font-weight-bolder ml-auto my-auto">
            {loggedInUser.name}
          </h6>
        </div>
        <div className="container-fluid bg-light mt-3">
          <table className="table table-responsive table-borderless">
            <thead>
              <tr>
                <th style={{ width: "150px" }} scope="col">
                  Name
                </th>
                <th scope="col">Email Id</th>
                <th style={{ width: "200px" }} scope="col">
                  Service
                </th>
                <th style={{ width: "400px" }} scope="col">
                  Project Details
                </th>
                <th style={{ width: "150px" }} scope="col">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <AdminServicesList key={service._id} service={service} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminServices;
