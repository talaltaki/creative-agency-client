import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import Order from "./components/Dashboard/Order/Order";
import PrivateRoute from "./components/Login/PrivateRoute";
import UserServices from "./components/Dashboard/UserServices/UserServices";
import Review from "./components/Dashboard/Review/Review";
import AdminServices from "./components/AdminDashboard/AdminServices/AdminServices";
import AddService from "./components/AdminDashboard/AddService/AddService";
import MakeAdmin from "./components/AdminDashboard/MakeAdmin/MakeAdmin";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/make-admin">
            <MakeAdmin />
          </Route>

          <Route path="/add-service">
            <AddService />
          </Route>

          <Route path="/service-list-admin">
            <AdminServices />
          </Route>

          <Route path="/review">
            <Review />
          </Route>

          <Route path="/service-list-user">
            <UserServices />
          </Route>

          <Route path="/order">
            <Order />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
