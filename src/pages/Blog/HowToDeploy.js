import React from "react";
import "animate.css";
import Header from "../../components/Header";

export default function HowToDeploy() {
  return (
    <div>
      <Header />

      <div className="container animate__animated animate__slideInLeft mt-3">
        <h3>Tutorial: how to deploy a production React app to Heroku</h3>
        <br />
        <p>Step 1: Create a React App</p>
        <p>Step 2: Add your own app icon to the Public folder</p>
        <p>
          Step 3: Create an Express JS server to serve your production build
        </p>
        <p>Step 4: Create a React production build</p>
        <p>Step 5: Prevent source code from being deployed</p>
        <p>Step 6: Deploy to heroku</p>
      </div>
    </div>
  );
}
