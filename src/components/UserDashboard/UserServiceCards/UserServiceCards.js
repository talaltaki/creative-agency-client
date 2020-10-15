import React from "react";

const UserServiceCards = ({ placedOrder }) => {
  return (
    <div
      class="card mt-4 mb-3 ml-4 border-0"
      style={{ width: "400px", borderRadius: "15px" }}
    >
      <div class="card-body">
        <img
          src={placedOrder.image}
          alt="service"
          className="img-fluid"
          style={{ height: "60px" }}
        />
        <h5 class="card-title mt-3">{placedOrder.project}</h5>
        <p class="card-text">{placedOrder.details}</p>
        {placedOrder.status === "Pending" && (
          <button class="btn btn-danger">{placedOrder.status}</button>
        )}
        {placedOrder.status === "On going" && (
          <button class="btn btn-warning">{placedOrder.status}</button>
        )}
        {placedOrder.status === "Done" && (
          <button class="btn btn-success">{placedOrder.status}</button>
        )}
      </div>
    </div>
  );
};

export default UserServiceCards;
