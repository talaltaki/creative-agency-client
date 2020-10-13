import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import Sidebar from "../../Shared/Sidebar/Sidebar";

const AddService = () => {
  document.title = "Add Services - Admin Panel";

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/add-service", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((done) => {
        if (done) {
          alert("A New Service has been added successfully!");
        }
      });
  };

  return (
    <div className="container-fluid d-flex">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="col-md-10 mt-5">
        <div className="d-flex container-fluid">
          <h3 className="font-weight-bolder">Add Service</h3>
          <h6 className="font-weight-bolder ml-auto my-auto">
            {loggedInUser.name}
          </h6>
        </div>
        <div className="container-fluid bg-light mt-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex">
              <div className="form-group pt-5 w-50">
                <label className="font-weight-bolder">Service Title</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Title"
                  name="title"
                  ref={register({ required: true })}
                />
                {errors.title && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="form-group w-25 mt-5 ml-5">
                <label className="font-weight-bolder">Image</label>
                <input
                  type="file"
                  className="form-control form-control-lg border-0 btn btn-success mt-1"
                  name="image"
                  ref={register}
                />
              </div>
            </div>
            <div className="form-group w-50">
              <label className="font-weight-bolder">Description</label>
              <textarea
                className="form-control form-control-lg"
                placeholder="Enter Description"
                rows="4"
                name="description"
                ref={register({ required: true })}
              ></textarea>
              {errors.description && (
                <span className="text-danger">This field is required</span>
              )}
            </div>

            <button type="submit" className="btn btn-dark px-5 mb-5">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;