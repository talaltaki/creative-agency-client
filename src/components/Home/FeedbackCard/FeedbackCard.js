import React from "react";

const FeedbackCard = ({ feedback }) => {
  return (
    <div className="card mx-auto" style={{ width: "20rem" }}>
      <div className="card-body">
        <div className="d-flex">
          <div className="col-md-4">
            <img
              src={feedback.image}
              alt="Customer"
              className="img-fluid w-100"
            />
          </div>
          <div className="col-md-8 mt-2">
            <h5 className="card-title">{feedback.name}</h5>
            <p className="card-subtitle mb-2 text-secondary">
              {feedback.designation}
            </p>
          </div>
        </div>
        <p className="card-text mt-3">{feedback.feedback}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
