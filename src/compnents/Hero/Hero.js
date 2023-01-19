import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <div className="hero">
      <div className="hero-cont">
        <div className="heroContainer">
          <h3>
            Get the credit you deserve <span>now</span>{" "}
          </h3>
          <p>
            Access credit at an affordable rate, manage your credit limit and
            earn 20% cashback on repayment.
          </p>
        </div>
        <div className="Hero-picture">
          <img src="Images/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
