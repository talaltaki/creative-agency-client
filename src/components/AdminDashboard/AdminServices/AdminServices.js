import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../../Shared/Sidebar/Sidebar";

const AdminServices = () => {
  document.title = "Service List - Admin Panel";

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-orders")
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
                <th scope="col">Name</th>
                <th scope="col">Email Id</th>
                <th scope="col">Service</th>
                <th scope="col">Project Details</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr>
                  <td>{service.name}</td>
                  <td>{service.email}</td>
                  <td>{service.project}</td>
                  <td>{service.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminServices;
