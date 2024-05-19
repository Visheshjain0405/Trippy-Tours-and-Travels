import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Night from "../assets/2.jpg";
import Contactform from "../component/Contactform";
import Footer from "../component/Footer";

function Contact() {
  return (
    <div>
      <Navbar />
      <Hero cName="hero-mid" heroimg={Night} title="Contact" />
      <Contactform />
      <Footer />
    </div>
  );
}

export default Contact;
