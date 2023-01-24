import React from "react";
import "./HowItWorks.css";

function HowItWorks() {
  return (
    <div className="HowItWorks">
      <div className="Leftcont">
        <h3 className="headline">
          Get the credit you need in <br className="brrr" /> 5 minutes
        </h3>
        <div class="step">
          <div>
            <div class="circle">01</div>
          </div>
          <div>
            <div class="title">Register within minutes</div>
            <div class="caption">
              Tell us a few details about you to help us create your Aibanc
              account quickly.
            </div>
          </div>
        </div>
        <div class="step step-active">
          <div>
            <div class="circle">02</div>
          </div>
          <div>
            <div class="title">Activate credit limit</div>
            <div class="caption">
              Verify and link your bank account to determine your credit limit.
            </div>
          </div>
        </div>
        <div class="step">
          <div className="circleCont">
            <div class="circle">03</div>
          </div>
          <div>
            <div class="title">Withdraw credit</div>
            <div class="caption">
              Initiate Withdrawal and get credited directly into your account in
              minutes.{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="HowItWorksrightcont">
        <img src="/Images/four.png" alt="" />
      </div>
    </div>
  );
}

export default HowItWorks;
