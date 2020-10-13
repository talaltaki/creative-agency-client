import React, { useContext } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../../Shared/Sidebar/Sidebar";

const UserServices = () => {
  document.title = "Services for You";

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

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
      </div>
    </div>
  );
};

export default UserServices;
