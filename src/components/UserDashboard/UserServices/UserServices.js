import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import UserServiceCards from "../UserServiceCards/UserServiceCards";

const UserServices = () => {
  document.title = "Orders you placed";

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [placedOrders, setPlacedOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders?email=" + loggedInUser.email)
      .then((response) => response.json())
      .then((result) => setPlacedOrders(result));
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

        <div className="container-fluid row bg-light mt-3">
          {placedOrders.map((placedOrder) => (
            <UserServiceCards key={placedOrder._id} placedOrder={placedOrder} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserServices;
