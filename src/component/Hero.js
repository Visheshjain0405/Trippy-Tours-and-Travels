import React from "react";
import "./Hero.css";
import Night from "../assets/1.jpg";
function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="HerpImg" src={props.heroimg} />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>
      </div>
    </>
  );
}

export default Hero;
