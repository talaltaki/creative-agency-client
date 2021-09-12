import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Works = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 100,
    dots: true,
    arrows: false,
    autoplay: true,
  };

  return (
    <section className="container">
      <h3 className="mt-5 pt-5 text-center text-light font-weight-bolder mb-5">
        Here are some of <span className="text-dark">our works</span>
      </h3>

      <Slider {...settings} className="mb-5 pb-5">
        <div className="ml-2">
          <img
            src="https://i.ibb.co/nky1N0N/carousel-1.png"
            alt="carousel-1"
            className="img-fluid w-100"
          />
        </div>
        <div className="ml-3">
          <img
            src="https://i.ibb.co/Qkj88JP/carousel-2.png"
            alt="carousel-2"
            className="img-fluid w-100"
          />
        </div>
        <div className="ml-4">
          <img
            src="https://i.ibb.co/jR8PhJH/carousel-3-2.png"
            alt="carousel-3"
            className="img-fluid w-100"
          />
        </div>
        <div className="ml-5">
          <img
            src="https://i.ibb.co/FxF34SG/carousel-4.png"
            alt="carousel-4"
            className="img-fluid w-100"
          />
        </div>
        <div className="ml-5">
          <img
            src="https://i.ibb.co/SXbqBdF/carousel-5.png"
            alt="carousel-5"
            className="img-fluid w-100"
          />
        </div>
      </Slider>
    </section>
  );
};

export default Works;
