import React, { useContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import { firebaseConfig } from "./firebaseConfig";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();

  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        storeAuthToken();
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle error
      });
  };

  return (
    <>
      <a href="/">
        <img
          className="logo mx-auto d-block mt-5 img-fluid"
          style={{ height: "60px" }}
          src={"https://i.ibb.co/BCbDc1K/logo.png"}
          href="/"
          alt="logo"
        />
      </a>

      <div className="card w-50 mx-auto d-block rounded mt-5 pt-5">
        <div className="card-body text-center">
          <h4 className="font-weight-bolder mt-5">Login With</h4>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-default border rounded-pill mt-4 p-2 w-75"
          >
            <span className="d-md-flex d-inline">
              <img
                className="img-fluid"
                style={{ width: "30px", height: "30px" }}
                src="https://i.ibb.co/whn6KpV/google.png"
                alt="google"
              />
              <p className="mx-auto h5 font-weight-normal">
                Continue with Google
              </p>
            </span>
          </button>
          <p className="mx-auto h6 font-weight-normal mt-3 mb-5 pb-5">
            Don't have an account?
            <a className="ml-1" href="/login">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
