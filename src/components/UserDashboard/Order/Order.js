import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import { UserContext } from "../../../App";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";

const Order = () => {
  document.title = "Place Your Order";

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const [services, setServices] = useState([]);
  const [service, setService] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
        const myService = data.find((e) => e._id === id);
        setService(myService);
      });
  }, []);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
    fetch("http://localhost:5000/place-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((done) => {
        if (done) {
          alert("Your Order has been placed successfully!");
        }
        history.replace("/service-list-user");
      });
    e.preventDefault();
  };

  return (
    <div className="container-fluid d-flex">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="col-md-10 mt-5">
        <div className="d-flex container-fluid">
          <h3 className="font-weight-bolder">Order</h3>
          <h6 className="font-weight-bolder ml-auto my-auto">
            {loggedInUser.name}
          </h6>
        </div>
        <div className="container-fluid bg-light mt-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group pt-5 w-50">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Your Name / Company's Name"
                name="name"
                defaultValue={loggedInUser.name}
                ref={register({ required: true })}
              />
              {errors.name && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="form-group w-50">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Your Email Address"
                name="email"
                defaultValue={loggedInUser.email}
                ref={register({ required: true })}
              />
              {errors.email && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="form-group w-50">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Project Name"
                name="project"
                defaultValue={service.title}
                ref={register({ required: true })}
              />
              {errors.project && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="form-group w-50">
              <textarea
                className="form-control form-control-lg"
                placeholder="Project Details"
                rows="4"
                name="details"
                defaultValue={service.description}
                ref={register({ required: true })}
              ></textarea>
              {errors.details && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="d-flex">
              <div className="form-group w-25 mr-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Price"
                  name="price"
                  ref={register({ required: true })}
                />
                {errors.price && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="form-group w-25">
                <input
                  type="text"
                  className="form-control form-control-lg border-0 btn btn-success mt-1 d-none"
                  name="image"
                  defaultValue={service.image}
                  ref={register}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-dark px-5 mb-5">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;
