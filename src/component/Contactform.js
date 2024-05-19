import React from "react";
import "./Contactform.css";
import { Link } from "react-router-dom";
function Contactform() {
  return (
    <div className="form-container">
      <h1 style={{ textAlign: "center" }}>send a message to us!</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Message" rows="4" />
        <Link to="/">
          <button className="btn btn-success">Send Message</button>
        </Link>
      </form>
    </div>
  );
}
export default Contactform;
