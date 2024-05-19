import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
// import "../component/Hero.css";
import heroimg from "../assets/12.jpg";
import Destinations from "../component/Destinations";
import Trip from "../component/Trip";
import Footer from "../component/Footer";
// import Destination from "../component/destination";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroimg={heroimg}
        title="YPur Jounery your story"
        text="choose your favortite desitnation"
        buttonText="Travel Plan"
        url="/"
        btnclass="show"
      />
      <Destinations />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
