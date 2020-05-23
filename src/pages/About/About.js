import React from "react";

import Header from "../../components/Header";
import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";

import { Prompt } from "react-router-dom";

export default function About() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <AboutLeft />
          </div>
          <div className="col-sm-12 col-md-8">
            <AboutRight />
          </div>
        </div>
        <Prompt when={true} message="Are you sure you want to leave?" />
      </div>
    </div>
  );
}
