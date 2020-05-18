import React from "react";

import timeline from "../images/timeline.svg";
import music from "../images/music.svg";
import person from "../images/person.svg";

import Slide from "react-reveal/Slide";

export default function AboutRight() {
  return (
    <Slide right big delay={1000}>
      <div className="ml-3">
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
          </ul>
        </div>
        <h4 className="text-danger">
          <img src={timeline} width="30" alt="" />
          &nbsp; TIMELINE
        </h4>
        <div className="row ml-3">
          <div style={{ width: 500 }}>
            <p className="font-weight-bold" style={{ marginBottom: 0 }}>
              THE UNIVERSITY OF DA NANG - UNIVERSITY OF SCIENCE AND TECHNOLOGY
            </p>
            <p>Bridge & Road Construction Engineering</p>
          </div>
          <div className="ml-auto mr-3">
            <p>07/2008 - 07/2013</p>
          </div>
        </div>
        <div className="row ml-3">
          <div style={{ width: 500 }}>
            <p className="font-weight-bold" style={{ marginBottom: 0 }}>
              B.R CONSULTING DESIGN CO., LTD. IN HO CHI MINH CITY
            </p>
            <p style={{ marginBottom: 0 }}>Infrastructure Engineer</p>
            <p>Design Bridge & Road by Software:</p>
            <ul>
              <li>CiVil 3D</li>
              <li>Revit</li>
              <li>Plaxis</li>
              <li>Midas</li>
              <li>Autocad with AutoLisp (javascript language)</li>
            </ul>
          </div>
          <div className="ml-auto mr-3">
            <p>08/2013 - 11/2019</p>
          </div>
        </div>
        <div className="row ml-3">
          <div style={{ width: 500 }}>
            <p className="font-weight-bold" style={{ marginBottom: 0 }}>
              JOINED REACT COURSES AT IMIC TECHNOLOGY
            </p>
            <ul>
              <li>Html/Css</li>
              <li>Javascript</li>
              <li>React</li>
              <li>React Native</li>
              <li>Vue.js</li>
            </ul>
          </div>
          <div className="ml-auto mr-3">
            <p>11/2019 - 02/2020</p>
          </div>
        </div>
        <div className="row ml-3">
          <div style={{ width: 500 }}>
            <p className="font-weight-bold" style={{ marginBottom: 0 }}>
              JOINED CODERSX 2020 AT CODERSX
            </p>
            <ul>
              <li>Html/Css</li>
              <li>Javascript/ES6</li>
              <li>UI Design</li>
              <li>Node.js Web Server using Express</li>
              <li>React</li>
            </ul>
          </div>
          <div className="ml-auto mr-3">
            <p>02/2019 - 05/2020</p>
          </div>
        </div>
        <h4 className="text-danger">
          <img src={music} width="30" alt="" />
          &nbsp; INTERESTS
        </h4>
        <div>
          <ul>
            <li>Playing tennis</li>
            <li>Listening to music</li>
            <li>Reading book</li>
          </ul>
        </div>
      </div>
    </Slide>
  );
}
