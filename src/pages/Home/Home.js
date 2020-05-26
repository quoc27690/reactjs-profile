import React from "react";
import "animate.css";

import Header from "../../components/Header";

import facebook from "../../images/facebook.svg";
import github from "../../images/github.svg";
import gmail from "../../images/gmail.svg";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="container text-center animate__animated animate__zoomIn">
        <img
          src="https://res.cloudinary.com/depdygupn/image/upload/v1589533866/avatar_insta_yuvpvv.png"
          width="190"
          height="190"
          className="mt-5 mb-3"
          alt=""
        />

        <div>
          <h2>ANH QUOC</h2>
          <h5 className="text-black-50">A Full Stack Developer</h5>
        </div>

        <div className="mt-5">
          <a
            href="https://www.facebook.com/anhquoc276"
            target="blank"
            className="mr-3"
          >
            <img src={facebook} style={{ width: 30 }} alt="" />
          </a>
          <a
            href="https://github.com/quoc27690"
            target="blank"
            className="mr-3"
          >
            <img src={github} style={{ width: 30 }} alt="" />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=quoc27690@gmail.com"
            target="blank"
          >
            <img src={gmail} style={{ width: 30 }} alt="" />
          </a>
        </div>

        <div className="mt-5">
          <Link to="/blog" className="btn btn-outline-dark mr-5">
            My Blog
          </Link>
          <Link to="/about" className="btn btn-outline-dark">
            About Me
          </Link>
        </div>

        <hr className="mt-5" />

        <div className="text-black-50">
          <p>Copyright © Anh Quoc 2020</p>
          <p>Design parameters: Language(Javascript) - Framework(React)</p>
        </div>
      </div>
    </div>
  );
}
