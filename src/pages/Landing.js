import React from "react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>
      <div className="container">
        <div className="info">
          <h1>
            job <span> tracking</span> app
          </h1>
          <p>
            I'm baby master cleanse locavore gochujang, air plant neutral milk
            hotel salvia whatever tbh same mlkshk sus food truck keffiyeh. Ascot
            godard man bun tumblr shaman mumblecore intelligentsia.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </main>
  );
};

export default Landing;
