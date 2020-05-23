import React from "react";
import "../App.css";
import "animate.css";

import { Link, useRouteMatch } from "react-router-dom";

function MenuLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <li className={match ? "active" : ""}>
      <Link to={to} className="nav-link">
        {label}
      </Link>
    </li>
  );
}

export default function Header() {
  return (
    <div className="sticky-top animate__animated animate__slideInLeft">
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
            <MenuLink label="Home" to="/" activeOnlyWhenExact={true} />
            <MenuLink label="Blog" to="/blog" activeOnlyWhenExact={false} />
            <MenuLink
              label="About Me"
              to="/about"
              activeOnlyWhenExact={false}
            />
            <MenuLink label="Game" to="/game" activeOnlyWhenExact={false} />
          </ul>
        </div>
      </nav>
    </div>
  );
}
