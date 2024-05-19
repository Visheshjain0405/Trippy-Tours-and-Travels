import React from "react";
import { Link } from "react-router-dom";

function Otp() {
  return (
    <div>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Please Enter Your OTP Here</h1>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="otp">OTP</label>
              <input
                type="text"
                name="otp"
                id=""
                // onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter Your OTP"
              />
            </div>
            <Link to="/home">
              {" "}
              <button className="btn">Submit</button>
            </Link>
          </form>
        </div>
        {/* <ToastContainer /> */}
      </section>
    </div>
  );
}

export default Otp;
