import React from "react";

const Footer = () => {
  return (
    <section className="flex-md-row flex-sm-column flex-column container-fluid d-flex justify-content-center mt-5 pb-5">
      <div className="col-md-6 col-sm-12 col-12 mt-5 pt-5 pl-md-5">
        <h3 className="font-weight-bolder mb-4">
          Let us handle your <br /> project, professionally
        </h3>
        <small className="text-muted">
          With well written codes, we build amazing apps for all <br />{" "}
          platforms, mobile and web apps in general.
        </small>
      </div>
      <div className="col-md-6 col-sm-12 col-12 mt-5 pt-md-5 pr-md-5">
        <form>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Your email address"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Your name / Company's name"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control form-control-lg"
              placeholder="Your message"
              rows="8"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-dark px-5">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Footer;
