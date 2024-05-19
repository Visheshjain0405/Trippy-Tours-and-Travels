import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = { clicked: false };
  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav className="NavbarItems">
          <h1 className="navbar-logo">Trippy</h1>
          {/* <div className="menu-icons">
          <i className="fas fa-bars" />
          <i className="fas fa-times" />
        </div> */}
          <div className="menu-icons" onClick={this.handleclick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            <li>
              {/* <Link>Home</Link> */}
              <Link to="/home">
                <i className="fa-solid fa-house"></i>Home
              </Link>
            </li>
            <li>
              {/* <Link>Home</Link> */}
              <Link to="/about">
                <i className="fa-solid fa-circle-info"></i>About
              </Link>
            </li>
            <li>
              {/* <Link>Home</Link> */}
              <Link to="/service">
                <i className="fa-solid fa-briefcase"></i>Service
              </Link>
            </li>
            <li>
              {/* <Link>Home</Link> */}
              <Link to="/contact">
                <i className="fa-solid fa-address-book"></i>Contact
              </Link>
            </li>
            <li>
              {/* <Link>Home</Link> */}
              <Link to="/signup" className="nav-links-signup">
                <i className="fa-solid fa-right-to-bracket"></i>Sign Up
              </Link>
            </li>
            {/* <div id="mobile" onClick={this.handleclick}>
              <i
                id="bar"
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </div> */}
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
