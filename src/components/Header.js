import React from "react";
import "../App.css";

import { Link } from "react-router-dom";

import Fade from "react-reveal/Fade";

export default function Header() {
  return (
    <Fade left>
      <div className="sticky-top">
        <nav className="navbar navbar-expand-lg navbar-light bg-header">
          <Link to="/" className="navbar-brand">
            <img
              src="https://res.cloudinary.com/depdygupn/image/upload/v1589533421/screenshot_1589533381_nadvaq.png"
              width="30"
              height="30"
              className="d-inline-block align-top rounded-circle mr-2"
              alt=""
              loading="lazy"
            />
            Quoc's Profile
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/game" className="nav-link">
                  Game
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Fade>
  );
}
