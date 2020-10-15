import React, { useEffect, useState } from "react";
import FeedbackCard from "../FeedbackCard/FeedbackCard";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/feedbacks")
      .then((response) => response.json())
      .then((data) => setFeedbacks(data));
  }, []);

  return (
    <section className="container">
      <h3 className="mt-5 pt-5 text-center font-weight-bolder mb-5">
        Clients <span className="text-success">Feedback</span>
      </h3>

      <div className="row">
        {feedbacks.length === 0 && (
          <div
            className="spinner-border"
            style={{ width: "5rem", height: "5rem" }}
            role="status"
          >
            <span class="sr-only">Loading...</span>
          </div>
        )}
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback._id} feedback={feedback} />
        ))}
      </div>
    </section>
  );
};

export default Feedback;
