import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent container pt-4">
      <a className="navbar-brand" href="/">
        <img
          src={"https://i.ibb.co/BCbDc1K/logo.png"}
          alt="logo"
          className="img-fluid w-25"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <a className="nav-link active mt-2 mr-5 mr-5" href="/">
            Home <span className="sr-only">(current)</span>
          </a>
          <a className="nav-link mt-2 mr-5" href="/">
            Our Portfolio
          </a>
          <a className="nav-link mt-2 mr-5" href="/">
            Our Team
          </a>
          <a className="nav-link mt-2 mr-3" href="/">
            Contact Us
          </a>
          <a className="nav-link" href="/login">
            <button className="btn btn-dark px-3">Login</button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
