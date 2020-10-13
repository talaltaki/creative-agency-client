import React, { useContext } from "react";
import { UserContext } from "../../../App";
import { useForm } from "react-hook-form";
import Sidebar from "../../Shared/Sidebar/Sidebar";

const MakeAdmin = () => {
  document.title = "Make Admin";

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/add-admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((done) => {
        if (done) {
          alert("You've added a new person to the admin panel successfully!");
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
          <h3 className="font-weight-bolder">Make Admin</h3>
          <h6 className="font-weight-bolder ml-auto my-auto">
            {loggedInUser.name}
          </h6>
        </div>

        <div className="container-fluid bg-light mt-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group pt-5 w-50">
              <label className="font-weight-bolder">Email</label>
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Email"
                name="email"
                ref={register({ required: true })}
              />
              {errors.email && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <button type="submit" className="btn btn-success px-5 mb-5">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
