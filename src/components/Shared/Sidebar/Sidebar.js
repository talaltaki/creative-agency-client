import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faShoppingBag,
  faCommentDots,
  faPlus,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../App";

const Sidebar = () => {
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

  return (
    <div>
      <a href="/">
        <img
          className="logo mx-auto d-block mt-5 img-fluid"
          style={{ height: "50px" }}
          src={"https://i.ibb.co/BCbDc1K/logo.png"}
          href="/"
          alt="logo"
        />
      </a>
      <div
        className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-5"
        style={{ height: "100vh" }}
      >
        <ul className="list-unstyled">
          {!isAdmin ? (
            <div>
              <li>
                <Link to="/" className="text-dark text-decoration-none">
                  <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/service-list"
                  className="text-dark text-decoration-none"
                >
                  <FontAwesomeIcon icon={faShoppingBag} />{" "}
                  <span>Service List</span>
                </Link>
              </li>
              <li>
                <Link to="/review" className="text-dark text-decoration-none">
                  <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                </Link>
              </li>
            </div>
          ) : (
            <div>
              <li>
                <Link
                  to="/service-list"
                  className="text-dark text-decoration-none"
                >
                  <FontAwesomeIcon icon={faShoppingBag} />{" "}
                  <span>Service List</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/add-service"
                  className="text-dark text-decoration-none"
                >
                  <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/make-admin"
                  className="text-dark text-decoration-none"
                >
                  <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                </Link>
              </li>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
