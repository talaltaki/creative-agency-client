import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import firebase from "firebase/app";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://guarded-sierra-46966.herokuapp.com/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((response) => response.json())
      .then((data) => setIsAdmin(data));
  }, []);

  const handleGoogleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        const signedOutUser = {
          name: "",
          email: "",
          photo: "",
        };
        setLoggedInUser(signedOutUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent pt-4">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={"https://i.ibb.co/BCbDc1K/logo.png"}
            alt="logo"
            className="img-fluid w-25"
          />
        </Link>
        <button
          class="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <div className="navbar-nav mx-auto mb-2 mb-lg-0">
            <Link className="nav-link text-dark mr-3 mt-2" to="/">
              Home
            </Link>
            <a className="nav-link text-dark mr-3 mt-2" href="#projects">
              Projects
            </a>
            <a className="nav-link text-dark mr-3 mt-2" href="#services">
              Services
            </a>
            <a className="nav-link text-dark mr-3 mt-2" href="#testimonials">
              Testimonials
            </a>
            <a className="nav-link text-dark mt-2" href="#contact">
              Contact
            </a>
          </div>
          <span className="navbar-text">
            {loggedInUser.name ? (
              <div>
                <div
                  className="font-weight-bolder border-0 text-center"
                  style={{ pointerEvents: "none" }}
                >
                  Hi, <span className="main-text">{loggedInUser.name}</span>
                </div>
                {!isAdmin ? (
                  <div>
                    <Link to="/service-list" className="text-decoration-none">
                      <div className="text-center border border-dark">
                        Orders
                      </div>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Link to="/service-list" className="text-decoration-none">
                      <div className="text-center border border-primary">
                        Dashboard
                      </div>
                    </Link>
                  </div>
                )}
                <button
                  onClick={handleGoogleSignOut}
                  className="btn btn-dark btn-sm text-white mx-auto d-block px-5 mt-1 rounded-0"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-dark btn-sm text-white px-4 rounded-1">
                  Login
                </button>
              </Link>
            )}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
