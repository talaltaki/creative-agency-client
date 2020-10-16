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
      <div id="navbarNavAltMarkup">
        <div className="navbar-nav flex-row ml-auto">
          <a className="nav-link active mt-2 mr-2 mr-md-3 mr-sm-3" href="/">
            Home <span className="sr-only">(current)</span>
          </a>
          <a className="nav-link mt-2 mr-2 mr-md-3 mr-sm-3" href="/">
            Our Portfolio
          </a>
          <a className="nav-link mt-2 mr-2 mr-md-3 mr-sm-3" href="/">
            Our Team
          </a>
          <a className="nav-link mt-2 mr-2 mr-md-5 mr-sm-5" href="/">
            Contact Us
          </a>
          <a className="nav-link" href="/service-list">
            <button className="btn btn-dark px-3">Login</button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
