import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://guarded-sierra-46966.herokuapp.com/services")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section>
      <h3 className="mt-5 pt-5 text-center font-weight-bolder">
        Provide awesome <span className="text-success">services</span>
      </h3>

      <div className="row container-fluid d-flex justify-content-center">
        {services.length === 0 && (
          <div
            className="spinner-border"
            style={{ width: "5rem", height: "5rem" }}
            role="status"
          >
            <span class="sr-only">Loading...</span>
          </div>
        )}
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
