import React from "react";
import "animate.css";

import birthday from "../../images/birthday.svg";
import gender from "../../images/gender.svg";
import phone from "../../images/phone.svg";
import email from "../../images/email.svg";
import place from "../../images/place.svg";

export default function AboutLeft() {
  return (
    <div className="bg-left animate__animated animate__slideInLeft">
      <div className="row">
        <div className="col-12 text-center">
          <img
            src="https://res.cloudinary.com/depdygupn/image/upload/v1589533866/avatar_insta_yuvpvv.png"
            width="60%"
            className="mt-5 mb-3"
            alt=""
          />
        </div>
      </div>

      <div className="text-center">
        <h4>LÂM ANH QUỐC</h4>
        <p className="text-black-50 font-italic">JUNIOR FULL STACK DEVELOPER</p>
      </div>
      <hr />

      <div className="row ml-3">
        <div className="col-12 mb-3">
          <img src={birthday} width="20" alt="" className="mr-2" />
          27/06/1990
        </div>
        <div className="col-12 mb-3">
          <img src={gender} width="20" alt="" className="mr-2" />
          Male
        </div>
        <div className="col-12 mb-3">
          <img src={phone} width="20" alt="" className="mr-2" />
          0772548486
        </div>
        <div className="col-12 mb-3">
          <img src={email} width="20" alt="" className="mr-2" />
          quoc27690@ gmail.com
        </div>
        <div className="col-12 mb-3">
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
  );
}
