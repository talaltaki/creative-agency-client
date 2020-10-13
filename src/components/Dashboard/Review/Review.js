import React, { useContext } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import { useForm } from "react-hook-form";

const Review = () => {
  document.title = "Leave your valuable review";

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/add-feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((done) => {
        if (done) {
          alert("Thanks for your valuable review!");
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
          <h3 className="font-weight-bolder">Review</h3>
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
                placeholder="Your Name"
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
                type="text"
                className="form-control form-control-lg"
                placeholder="Company's Name & Designation"
                name="designation"
                ref={register({ required: true })}
              />
              {errors.designation && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="form-group w-50">
              <textarea
                className="form-control form-control-lg"
                placeholder="Feedback"
                rows="4"
                name="feedback"
                ref={register({ required: true })}
              ></textarea>
              {errors.feedback && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="form-group w-25">
              <input
                type="file"
                className="form-control form-control-lg border-0 btn btn-success mt-1"
                name="image"
                ref={register}
              />
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

export default Review;
