import React, { createContext, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
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

          <Route path="/review">
            <Review />
          </Route>

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
      </Router>
    </UserContext.Provider>
  );
}

export default App;
