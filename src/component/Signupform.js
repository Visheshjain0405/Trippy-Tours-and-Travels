import React, { useState } from "react";
import "./Form.css";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
// import img4 from "../assets/4.jpg";
function Signupform() {
  const [inputdata, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });

  console.log(inputdata);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputdata, [name]: value });
  };

  //validation

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = inputdata;

    if (name === "") {
      toast.error("Enter Your Name !");
    } else if (email === "") {
      toast.error("Enter Your Email !");
    } else if (!email.includes("@")) {
      toast.error("Invalid Email Id !");
    } else if (!password === "") {
      toast.error("Invalid Password");
    } else if (password.length < 6) {
      toast.error("Password Should be greater than 6 character!");
    } else {
      try {
        await axios
          .post("http://localhost:4002/user/register", inputdata)
          .then((res) => console.log(res));
        toast.success("Sign Up Success");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p style={{ textAlign: "center" }}>
              We are glad that you will be using Project Cloud to manage your
              tasks! We hope that you will get like it.
            </p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Enter Your Name"
              />
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Enter Your Email Address"
              />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>

              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Enter Your password"
              />
            </div>

            <Link to="/login">
              {" "}
              <button className="btn" onClick={handleSubmit}>
                Sign Up
              </button>
            </Link>
            <p>Don't have and account </p>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  );
}

export default Signupform;
