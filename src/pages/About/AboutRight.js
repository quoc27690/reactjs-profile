import React from "react";
import "animate.css";

import timeline from "../../images/timeline.svg";
import music from "../../images/music.svg";
import person from "../../images/person.svg";

export default function AboutRight() {
  return (
    <div className="ml-3 animate__animated animate__slideInRight">
      <br /> <br />
      <h4 className="text-danger">
        <img src={person} width="30" alt="" />
        &nbsp; SUMMARIZE MYSELF
      </h4>
      <div>
        <ul>
          <li>Favorite what is related to programming.</li>
          <li>A diligent and careful person.</li>
          <li>Cheerful and sociable personality.</li>
          <li>
            In work and life are not afraid of challenges and difficulties.
            Always want to explore new things to cultivate yourself.
          </li>
          <li>
            <a
              href="http://reactjs-profile-quoc276.herokuapp.com"
              target="blank"
              className="font-italic"
            >
              (My Blog - http://reactjs-profile-quoc276.herokuapp.com)
            </a>
          </li>
        </ul>
      </div>
      <h4 className="text-danger">
        <img src={timeline} width="30" alt="" />
        &nbsp; TIMELINE
      </h4>
      <div className="row ml-3">
        <div className="col-8">
          <p className="font-weight-bold" style={{ marginBottom: 0 }}>
            THE UNIVERSITY OF DA NANG - UNIVERSITY OF SCIENCE AND TECHNOLOGY
          </p>
          <p>Bridge & Road Construction Engineering</p>
        </div>
        <div className="col-4 d-flex justify-content-end">
          <p>07/2008 - 07/2013</p>
        </div>
      </div>
      <div className="row ml-3">
        <div className="col-8">
          <p className="font-weight-bold" style={{ marginBottom: 0 }}>
            B.R CONSULTING DESIGN CO., LTD. IN HO CHI MINH CITY
          </p>
          <p style={{ marginBottom: 0 }}>Infrastructure Engineer</p>
          <p>Design Bridge & Road by Software:</p>
        </div>
        <div className="col-4 d-flex justify-content-end">
          <p>08/2013 - 05/2019</p>
        </div>
        <div className="col-12">
          <ul>
            <li>CiVil 3D - Revit</li>
            <li>Plaxis - Midas</li>
            <li>Autocad with AutoLisp (Javascript Language)</li>
          </ul>
        </div>
      </div>
      <div className="row ml-3">
        <div className="col-8">
          <p className="font-weight-bold" style={{ marginBottom: 0 }}>
            JOINED REACT COURSES AT IMIC TECHNOLOGY
          </p>
        </div>
        <div className="col-4 d-flex justify-content-end">
          <p>05/2019 - 10/2019</p>
        </div>
        <div className="col-12">
          <ul>
            <li>Html/Css - Javascript</li>
            <li>React - React Native</li>
            <li>Vue.js</li>
          </ul>
        </div>
      </div>
      <div className="row ml-3">
        <div className="col-8">
          <p className="font-weight-bold" style={{ marginBottom: 0 }}>
            JOINED CODERSX 2020 AT CODERSX
          </p>
        </div>
        <div className="col-4 d-flex justify-content-end">
          <p>10/2019 - 04/2020</p>
        </div>
        <div className="col-12">
          <ul>
            <li>Html/Css - Javascript/ES6 - UI Design</li>
            <li>
              Node.js Web Server using Express (MongoDB, MongoDB Atlas,
              mongoose, Authentication, RESTful API, Bootstrap 4, ...)
              <br />
              <a
                href="https://nodejs-express-demo-quoc276.herokuapp.com"
                target="blank"
              >
                https://nodejs-express-demo-quoc276.herokuapp.com
              </a>
            </li>
            <li>
              React (React-Router, Redux, Redux-Thunk, RESTful API, Bootstrap 4,
              ...) <br />
              <a href="https://reactjs-pm-quoc276.herokuapp.com">
                https://reactjs-pm-quoc276.herokuapp.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row ml-3">
        <div className="col-8">
          <p className="font-weight-bold" style={{ marginBottom: 0 }}>
            SUN* INC.
          </p>
        </div>
        <div className="col-4 d-flex justify-content-end">
          <p>04/2020 - 12/2020</p>
        </div>
        <div className="col-12">
          <p className="mb-0 font-italic">Training through mini projects</p>
        </div>
        <div className="col-12">
          <ul>
            <li>
              Html/Css <br />
              <a
                href="https://quoc27690.github.io/html-css-web-basic/"
                target="blank"
              >
                https://quoc27690.github.io/html-css-web-basic/
              </a>
            </li>
            <li>
              Pug/Scss-Sass
              <br />
              <a
                href="https://quoc27690.github.io/pug-sass-basic/public/index"
                target="blank"
              >
                https://quoc27690.github.io/pug-sass-basic/public/index
              </a>
            </li>
            <li>
              Bootstrap 4
              <br />
              <a
                href="https://quoc27690.github.io/bootstrap-basic/public/index"
                target="blank"
              >
                https://quoc27690.github.io/bootstrap-basic/public/index
              </a>
            </li>
            <li>
              Javascript-ES6
              <br />
              <a
                href="https://quoc27690.github.io/js-cart-basic/public/index"
                target="blank"
              >
                https://quoc27690.github.io/js-cart-basic/public/index
              </a>
            </li>
            <li>
              React (React-Router, Redux-Toolkit, Redux-Thunk, Authentication,
              RESTful API, I18n, ...)
              <br />
              <a href="https://quoc276-cart.herokuapp.com" target="blank">
                https://quoc276-cart.herokuapp.com
              </a>
              <br />
              <a href="https://quoc276-movie.herokuapp.com/" target="blank">
                https://quoc276-movie.herokuapp.com
              </a>
            </li>
          </ul>
        </div>
        <div className="col-12">
          <p className="mb-0 font-italic">
            Joined real project: Human resource management projects in an
            organization.
          </p>
        </div>
        <div className="col-12">
          <ul>
            <li>
              Analysis and design UI/UX, Handing the Client-side logic, Optimize
              code, Bug Fixing
            </li>
            <li>Working in an Agile/Scrum development process.</li>
          </ul>
        </div>
      </div>
      <div className="row ml-3">
        <div className="col-8">
          <p className="font-weight-bold" style={{ marginBottom: 0 }}>
            TPS INC.
          </p>
        </div>
        <div className="col-4 d-flex justify-content-end">
          <p>12/2020 - Now</p>
        </div>
        <div className="col-12">
          <p className="mb-0 font-italic">
            Joined real project: Driver management - FE: Reactjs, BE: Nodejs 
          </p>
        </div>
        <div className="col-12">
          <ul>
            <li>
              Analysis and design UI/UX, Handing the SSR logic, Optimize
              code, Bug Fixing
            </li>
            <li>Working in an Agile/Scrum development process.</li>
          </ul>
        </div>
      </div>
      <h4 className="text-danger">
        <img src={music} width="30" alt="" />
        &nbsp; INTERESTS
      </h4>
      <div>
        <ul>
          <li>Playing tennis, Listening to music and Reading book</li>
        </ul>
      </div>
    </div>
  );
}
