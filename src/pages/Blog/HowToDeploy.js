import React from "react";
import "animate.css";
import Header from "../../components/Header";

export default function HowToDeploy() {
  return (
    <div>
      <Header />

      <div className="container animate__animated animate__slideInLeft mt-3">
        <h1>Tutorial: how to deploy a production React app to Heroku</h1>
        <h5>Step 1: Create a React App</h5>
        <h5>Step 2: Add your own app icon to the Public folder</h5>
        <h5>
          Step 3: Create an Express JS server to serve your production build
        </h5>
        <h5>Step 4: Create a React production build</h5>
        <h5>Step 5: Prevent source code from being deployed</h5>
        <h5>Step 6: Deploy to heroku</h5>
      </div>
    </div>
  );
}
