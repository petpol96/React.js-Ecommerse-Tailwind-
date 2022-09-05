import React from "react";
import Header from "./Header";
import image from "../Images/burger.jpg";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="LandingPageWrapper">
      <Header />

      <div src={image} className="LandingPageBackGround">
        <div className="LandingPageHolder">
          <span className="LandingPageTitle">Plan your vacation now</span>
          <span className="LandingPageComment">
            The journey of a thousand miles begins with a single click.
          </span>
          <button className="LandingPageButton">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
