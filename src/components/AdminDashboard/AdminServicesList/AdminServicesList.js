import React from "react";

const AdminServicesList = ({ service }) => {
  const changeStatus = (e) => {
    fetch("https://guarded-sierra-46966.herokuapp.com/update-status", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: e.target.value,
        id: service._id,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          alert("Status updated successfully");
        }
      });
  };

  return (
    <tr>
      <td>{service.name}</td>
      <td>{service.email}</td>
      <td>{service.project}</td>
      <td>{service.details}</td>
      <td>
        {service.status === "Pending" && (
          <select className="form-control text-dark" onChange={changeStatus}>
            <option selected className="text-danger">
              Pending
            </option>
            <option className="text-warning">On going</option>
            <option className="text-success">Done</option>
          </select>
        )}
        {service.status === "On going" && (
          <select className="form-control text-dark" onChange={changeStatus}>
            <option className="text-danger">Pending</option>
            <option selected className="text-warning">
              On going
            </option>
            <option className="text-success">Done</option>
          </select>
        )}
        {service.status === "Done" && (
          <select className="form-control text-dark" onChange={changeStatus}>
            <option className="text-danger">Pending</option>
            <option className="text-warning">On going</option>
            <option selected className="text-success">
              Done
            </option>
          </select>
        )}
      </td>
    </tr>
  );
};

export default AdminServicesList;
