import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import ServicesTable from "../ServicesTable/ServicesTable";

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
    <div className="container-fluid d-flex">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="col-md-10 mt-5">
        <div className="d-flex container-fluid">
          <h3 className="font-weight-bolder">Services</h3>
          <h6 className="font-weight-bolder ml-auto my-auto">
            {loggedInUser.name}
          </h6>
        </div>
        <div className="container-fluid bg-light mt-3">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email Id</th>
                <th scope="col">Service</th>
                <th scope="col">Project Details</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <ServicesTable key={service._id} service={service} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminServices;
