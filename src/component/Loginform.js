import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../assets/1.jpg";
import img4 from "../assets/4.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
function Loginform() {
  const [email, setEmail] = useState("");

  //send otp

  const sendOtp = (e) => {
    e.preventDefault();

    //validation

    if (email === "") {
      toast.error("Enter Your Email Id");
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email Id !");
    } else {
      toast.success("Login Success");
    }
  };
  return (
    <section>
      <div className="form_data">
        <div className="form_heading">
          <h1>Welcome Back, Log In</h1>
          <p>Hi, we are you glad you are back. Please login.</p>
        </div>
        <form>
          <div className="form_input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id=""
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email Address"
            />
          </div>
          <Link to="/otp">
            {" "}
            <button className="btn" onClick={sendOtp}>
              Login
            </button>
          </Link>
          <p>
            Don't have and account <Link to="/signup">Sing up</Link>{" "}
          </p>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Loginform;
