import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import Order from "./components/UserDashboard/Order/Order";
import PrivateRoute from "./components/Login/PrivateRoute";
import Review from "./components/UserDashboard/Review/Review";
import AddService from "./components/AdminDashboard/AddService/AddService";
import MakeAdmin from "./components/AdminDashboard/MakeAdmin/MakeAdmin";
import ServicesList from "./components/Dashboard/ServicesList/ServicesList";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    photo: "",
    email: "",
    password: "",
    error: "",
    success: "",
  });
  const [newUser, setNewUser] = useState(true);

  return (
    <UserContext.Provider
      value={[
        loggedInUser,
        setLoggedInUser,
        user,
        setUser,
        newUser,
        setNewUser,
      ]}
    >
      <Router>
        <div className="font-poppins">
          <Switch>
            <PrivateRoute path="/make-admin">
              <MakeAdmin />
            </PrivateRoute>

            <PrivateRoute path="/add-service">
              <AddService />
            </PrivateRoute>

            <PrivateRoute path="/review">
              <Review />
            </PrivateRoute>

            <PrivateRoute path="/service-list">
              <ServicesList />
            </PrivateRoute>

            <PrivateRoute path="/order/:id">
              <Order />
            </PrivateRoute>

            <Route path="/login">
              <Login />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
