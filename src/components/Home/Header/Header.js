import React from "react";

const Header = () => {
  return (
    <div className="flex-md-row flex-sm-column flex-column container-fluid d-flex justify-content-center mt-5 pb-5">
      <div className="col-md-4 col-sm-12 col-12 mt-5 ml-md-5">
        <h1 className="font-weight-bolder">
          Let's Grow Your <br /> Brand To The <br /> Next Level
        </h1>
        <small className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
          inventore totam nemo voluptatem ut iure molestias, libero repellat
          ratione voluptas.
        </small>
        <br />
        <button className="btn btn-dark px-5 mt-3">Hire us</button>
      </div>
      <div className="col-md-6 col-sm-12 col-12 mx-auto">
        <img
          src="https://i.ibb.co/JFxgzZ1/Frame.png"
          alt=""
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default Header;
