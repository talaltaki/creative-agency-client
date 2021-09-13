import React, { useContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from "../../App";
import { Link, useHistory, useLocation } from "react-router-dom";
import { firebaseConfig } from "./firebaseConfig";

const Login = () => {
  const [loggedInUser, setLoggedInUser, user, setUser, newUser, setNewUser] =
    useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  // Google Sign in
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

  // Sign up and Sign in with Email and Password
  // const handleBlur = (event) => {
  //   let isFieldValid = true;
  //   // Validation of Email and Password
  //   if (event.target.name === "email") {
  //     isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
  //   }
  //   if (event.target.name === "password") {
  //     const isPasswordValid = event.target.value.length > 6;
  //     const passwordHasNumber = /\d{1}/.test(event.target.value);
  //     isFieldValid = isPasswordValid && passwordHasNumber;
  //   }
  //   if (isFieldValid) {
  //     const newUserInfo = { ...user };
  //     newUserInfo[event.target.name] = event.target.value;
  //     setUser(newUserInfo);
  //   }
  // };

  // const handleSubmit = (event) => {
  //   if (newUser && user.email && user.password) {
  //     firebase
  //       .auth()
  //       .createUserWithEmailAndPassword(user.email, user.password)
  //       .then((res) => {
  //         // Signed in
  //         const newUserInfo = { ...user };
  //         newUserInfo.error = "";
  //         newUserInfo.success = true;
  //         setLoggedInUser(newUserInfo);
  //         updateUserName(user.name);
  //         if (res) {
  //           alert("User resgisterd successfully");
  //         }
  //       })
  //       .catch((error) => {
  //         const newUserInfo = { ...user };
  //         newUserInfo.error = error.message;
  //         newUserInfo.success = false;
  //         setLoggedInUser(newUserInfo);
  //       });
  //   }

  //   if (!newUser && user.email && user.password) {
  //     firebase
  //       .auth()
  //       .signInWithEmailAndPassword(user.email, user.password)
  //       .then((res) => {
  //         // Signed in
  //         const newUserInfo = { ...user };
  //         newUserInfo.error = "";
  //         newUserInfo.success = true;
  //         setUser(newUserInfo);
  //         setLoggedInUser(newUserInfo);
  //         console.log("Signed in User Info", res.user);
  //         storeAuthToken();
  //       })
  //       .catch((error) => {
  //         const newUserInfo = { ...user };
  //         newUserInfo.error = error.message;
  //         newUserInfo.success = false;
  //         setLoggedInUser(newUserInfo);
  //       });
  //   }
  //   event.preventDefault();
  // };

  // const updateUserName = (name) => {
  //   const user = firebase.auth().currentUser;

  //   user
  //     .updateProfile({
  //       displayName: name,
  //     })
  //     .then(() => {
  //       // Update successful
  //       console.log("Username updated successfully");
  //     })
  //     .catch((error) => {
  //       // An error occurred
  //       console.log(error);
  //     });
  // };

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
      <Link to="/">
        <img
          className="logo mx-auto d-block mt-5 mb-5 img-fluid"
          style={{ height: "60px" }}
          src={"https://i.ibb.co/BCbDc1K/logo.png"}
          href="/"
          alt="logo"
        />
      </Link>

      <div className="card w-50 mx-auto d-block rounded mt-5 pt-5 border-0">
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
        </div>
      </div>

      {/* <button
        onClick={handleGoogleSignIn}
        className="btn btn-white border-secondary mx-auto d-block w-25 rounded-pill mt-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-google mb-1 me-2"
          viewBox="0 0 16 16"
        >
          <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
        </svg>{" "}
        Continue with Google
      </button> */}

      {/* <p className="font-weight-bolder text-center mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-dash-lg mb-1"
          viewBox="0 0 16 16"
        >
          <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z" />
        </svg>{" "}
        OR{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-dash-lg mb-1"
          viewBox="0 0 16 16"
        >
          <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z" />
        </svg>
      </p> */}

      {/* <div class="container" style={{ width: "470px" }}>
        <form className="container mt-3">
          {newUser ? (
            <>
              <div
                class="font-weight-bolder text-center"
                style={{ color: "#71BA58" }}
              >
                Sign up with your Email Address
              </div>
              <div class="mt-3 mb-2">
                <label>
                  <small>What's your email?</small>
                </label>
                <input
                  onBlur={handleBlur}
                  type="text"
                  name="email"
                  class="form-control rounded-0 border-secondary mt-1"
                />
              </div>
              <div class="mb-2">
                <label>
                  <small>Create a password</small>
                </label>
                <input
                  onBlur={handleBlur}
                  type="password"
                  name="password"
                  class="form-control rounded-0 border-secondary mt-1"
                />
              </div>
              <div class="mb-3">
                <label>
                  <small>What should I call you?</small>
                </label>
                <input
                  onBlur={handleBlur}
                  type="text"
                  name="name"
                  class="form-control rounded-0 border-secondary mt-1"
                />
              </div>
              <button
                onSubmit={handleSubmit}
                class="btn btn-block btn-sm py-1 text-white rounded-0"
                style={{ backgroundColor: "#71BA58" }}
                type="button"
              >
                Create an account
              </button>
              <div className="text-center mt-3">
                <small>
                  Already have an account?{" "}
                  <a
                    className="text-success font-weight-bolder"
                    href="#"
                    onClick={() => setNewUser(!newUser)}
                  >
                    Login
                  </a>
                </small>
              </div>
            </>
          ) : (
            <>
              <div
                class="font-weight-bolder text-center"
                style={{ color: "#71BA58" }}
              >
                Login with your Email Address
              </div>
              <div class="mt-3 mb-2">
                <label>
                  <small>What's your email?</small>
                </label>
                <input
                  onBlur={handleBlur}
                  type="text"
                  name="email"
                  class="form-control rounded-0 border-secondary mt-1"
                />
              </div>
              <div class="mb-2">
                <label>
                  <small>Create a password</small>
                </label>
                <input
                  onBlur={handleBlur}
                  type="password"
                  name="password"
                  class="form-control rounded-0 border-secondary mt-1"
                />
              </div>
              <button
                onSubmit={handleSubmit}
                class="btn btn-block btn-sm py-1 text-white rounded-0"
                style={{ backgroundColor: "#71BA58" }}
                type="button"
              >
                Login
              </button>
              <div className="text-center mt-3">
                <small>
                  Don't you have an account?{" "}
                  <a
                    className="text-success font-weight-bolder"
                    href="#"
                    onClick={() => setNewUser(!newUser)}
                  >
                    Sign up
                  </a>
                </small>
              </div>
            </>
          )}
        </form>
      </div> */}
    </>
  );
};

export default Login;
