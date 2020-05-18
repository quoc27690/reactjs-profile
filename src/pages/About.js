import React from "react";

import Header from "../components/Header";
import AboutLeft from "../components/AboutLeft";
import AboutRight from "../components/AboutRight";

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
      </div>
    </div>
  );
}
