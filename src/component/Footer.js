import "./Footer.css";

import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Trippy</h1>
          <p>Choose your favorite desitnation.</p>
        </div>
        <div>
          <a>
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a>
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a>
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          <a>
            <i className="fa-brands fa-youtube-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a>Changelog</a>
          <a>Status</a>
          <a>License</a>
          <a>All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a>Github</a>
          <a>Issues</a>
          <a>Project</a>
          <a>Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a>Support</a>
          <a>Troubleshooting</a>
          <a>Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a>Terms of Serive</a>
          <a>Privacy Policy</a>
          <a>License</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
