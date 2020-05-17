import React from "react";

import birthday from "../images/birthday.svg";
import gender from "../images/gender.svg";
import phone from "../images/phone.svg";
import email from "../images/email.svg";
import place from "../images/place.svg";

import Zoom from "react-reveal/Zoom";

export default function AboutLeft() {
  return (
    <Zoom delay={1000}>
      <div className="bg-left">
        <div className="d-flex justify-content-center">
          <img
            src="https://res.cloudinary.com/depdygupn/image/upload/v1589533866/avatar_insta_yuvpvv.png"
            width="190"
            height="190"
            className="mt-5 mb-3"
            alt=""
          />
        </div>

        <div className="text-center">
          <h4>LÂM ANH QUỐC</h4>
          <p className="text-black-50 font-italic">
            FRESHER FRONT-END DEVELOPER
          </p>
        </div>
        <hr />

        <div className="ml-3">
          <div className="d-flex mb-3">
            <img src={birthday} width="20" alt="" className="" />
            27/06/1990
          </div>
          <div className="d-flex mb-3">
            <img src={gender} width="20" alt="" className="mr-2" />
            Male
          </div>
          <div className="d-flex mb-3">
            <img src={phone} width="20" alt="" className="mr-2" />
            0772548486
          </div>
          <div className="d-flex mb-3">
            <img src={email} width="20" alt="" className="mr-2" />
            quoc27690@ gmail.com
          </div>
          <div className="d-flex mb-3">
            <img src={place} width="20" alt="" className="mr-2" />
            DaNang, VietNam
          </div>
        </div>
        <hr />

        <div className="ml-3">
          <h5 className="text-success mb-3">OBJECTIVE</h5>
          <p className="font-weight-bold">Senior Front-end Developer</p>
        </div>
        <hr />

        <div className="ml-3 mr-3">
          <h5 className="text-success mb-3">SKILL</h5>
          <p className="font-italic">HTML/CSS</p>
          <div className="meter mb-3">
            <span style={{ width: "80%" }}>
              <span className="progress"></span>
            </span>
          </div>
          <p className="font-italic">JAVASCRIPT</p>
          <div className="meter mb-3">
            <span style={{ width: "80%" }}>
              <span className="progress"></span>
            </span>
          </div>
          <p className="font-italic">NODEJS</p>
          <div className="meter mb-3">
            <span style={{ width: "60%" }}>
              <span className="progress"></span>
            </span>
          </div>
          <p className="font-italic">REACT</p>
          <div className="meter mb-3">
            <span style={{ width: "80%" }}>
              <span className="progress"></span>
            </span>
          </div>
          <p className="font-italic">REACT NATIVE</p>
          <div className="meter mb-3">
            <span style={{ width: "60%" }}>
              <span className="progress"></span>
            </span>
          </div>
          <p className="font-italic">VUE.JS</p>
          <div className="meter mb-3">
            <span style={{ width: "60%" }}>
              <span className="progress"></span>
            </span>
          </div>
          <p className="font-italic">ENGLISH</p>
          <div className="meter mb-3">
            <span style={{ width: "60%" }}>
              <span className="progress"></span>
            </span>
          </div>
          <p className="font-italic">TEAMWORK</p>
          <div className="meter mb-3">
            <span style={{ width: "100%" }}>
              <span className="progress"></span>
            </span>
          </div>
          <p className="font-italic">COMMUNICATION</p>
          <div className="meter mb-3">
            <span style={{ width: "100%" }}>
              <span className="progress"></span>
            </span>
          </div>
        </div>
        <br />
      </div>
    </Zoom>
  );
}
