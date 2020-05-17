import React from "react";

import Header from "../../components/Header";

import Slide from "react-reveal/Slide";

export default function JavascriptQuestion() {
  return (
    <div>
      <Header />
      <Slide left big delay={1000}>
        <div className="container"></div>
      </Slide>
    </div>
  );
}
