import React from "react";

const FeedbackCard = ({ feedback }) => {
  return (
    <div className="card mx-auto mt-3 d-flex col-md-4 col-sm-6 col-12">
      <div className="card-body">
        <div className="d-md-flex d-inline">
          <div className="col-md-4 col-sm-6">
            <img
              src={feedback.image}
              alt="Customer"
              className="img-fluid w-auto"
            />
          </div>
          <div className="col-md-8 col-sm-6 mt-2">
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
