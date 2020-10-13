import React from "react";
import Customers from "../Customers/Customers";
import Feedback from "../Feedback/Feedback";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import Works from "../Works/Works";

const Home = () => {
  return (
    <>
      <div style={{ backgroundColor: "#FBD062" }}>
        <Navbar />
        <Header />
      </div>
      <Customers />
      <Services />
      <div style={{ backgroundColor: "#111430" }}>
        <Works />
      </div>
      <Feedback />
      <div style={{ backgroundColor: "#FBD062" }}>
        <Footer />
        <footer className="text-center mt-5 pt-5">
          <small>copyright Orange Labs 2020</small>
        </footer>
      </div>
    </>
  );
};

export default Home;
