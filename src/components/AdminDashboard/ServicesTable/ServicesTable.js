import React from "react";

const ServicesTable = ({ service }) => {
  return (
    <>
      <tr>
        <td>{service.name}</td>
        <td>{service.email}</td>
        <td>{service.project}</td>
        <td>{service.details}</td>
        <td>
          <select name="status" className="btn btn-outline-secondary border-0">
            <option value="pending" className="text-danger">
              Pending
            </option>
            <option value="onGoing" className="text-warning">
              On Going
            </option>
            <option value="done" className="text-success">
              Done
            </option>
          </select>
        </td>
      </tr>
    </>
  );
};

export default ServicesTable;
