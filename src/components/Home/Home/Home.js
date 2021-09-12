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
      <div style={{ backgroundColor: "#52BE80" }}>
        <Navbar />
        <Header />
      </div>
      <Customers />
      <Services />
      <div style={{ backgroundColor: "#52BE80" }}>
        <Works />
      </div>
      <Feedback />
      <div style={{ backgroundColor: "#52BE80" }}>
        <Footer />
      </div>
    </>
  );
};

export default Home;
