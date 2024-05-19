import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Night from "../assets/10.jpg";
import Servicesadd from "../component/Servicesadd";
import Footer from "../component/Footer";

function Service() {
  return (
    <div>
      <Navbar />
      <Hero cName="hero-mid" heroimg={Night} title="Service" />
      <Servicesadd />
      <Footer />
    </div>
  );
}

export default Service;
