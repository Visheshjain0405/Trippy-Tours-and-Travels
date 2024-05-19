import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Night from "../assets/night.jpg";
import Aboutus from "../component/Aboutus";
import Footer from "../component/Footer";

function About() {
  return (
    <div>
      <Navbar />
      <Hero cName="hero-mid" heroimg={Night} title="About" />
      <Aboutus />
      <Footer />
    </div>
  );
}

export default About;
