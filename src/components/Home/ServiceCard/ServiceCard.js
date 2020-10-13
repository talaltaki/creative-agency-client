import React from "react";
import { useSpring, animated } from "react-spring";
import "./ServiceCard.css";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ServiceCard = ({ service }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <animated.div
      className=".animated-card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <div className="animated-card col-md-4 mx-auto">
        <div className="card border-0 mt-5 ml-5" style={{ width: "18rem" }}>
          <img
            src={service.image}
            class="card-img-top img-fluid w-25 mx-auto mt-4"
            alt="service"
          />
          <div className="card-body text-center">
            <p className="card-title font-weight-bolder">{service.title}</p>
            <small className="card-text">{service.description}</small>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default ServiceCard;
