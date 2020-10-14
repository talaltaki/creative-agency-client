import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import AdminServices from "../../AdminDashboard/AdminServices/AdminServices";
import UserServices from "../../UserDashboard/UserServices/UserServices";

const ServicesList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((response) => response.json())
      .then((data) => setIsAdmin(data));
  }, []);

  return <div>{isAdmin ? <AdminServices /> : <UserServices />}</div>;
};

export default ServicesList;
