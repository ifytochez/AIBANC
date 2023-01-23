import React from "react";
import "./LandingPageContent.css";

function LandingPageContent() {
  return (
    <div>
      <section className="CreditSection one">
        <div className="Creditleftcont">
          <div className="mockupleft">
            <img src="/Images/one.png" alt="" />
          </div>
        </div>
        <div className="Creditrightcont">
          <p className="smallHeadline">Instant Withdrawal</p>
          <div className="semiboldtext">
            Get the credit you need within few minutes
          </div>
          <p className="semimediumtext">
            Initiate a withdrawal request and get credited directly into your
            bank account within minutes
          </p>
          <div className="downloadNow">
            <a href="#download">Download Now</a>
          </div>
        </div>
      </section>

      <section className="CreditSection two">
        <div className="Creditrightcont">
          <p className="smallHeadline">Affordable interest rate</p>
          <div className="semiboldtext">Enjoy low interest rate</div>
          <p className="semimediumtext">
            We offer an affordable interest rate, so you can get up to 6 months
            credit with as low as 5% monthly interest. Apply for a loan today
            and start enjoying.
          </p>
          <div className="downloadNow">
            <a href="#download">Download Now</a>
          </div>
        </div>

        <div className="Creditleftcont">
          <div className="mockupleft">
            <img src="/Images/two.png" alt="" />
          </div>
        </div>
      </section>

      <section className="CreditSection three">
        <div className="Creditleftcont">
          <div className="mockupleft">
            <img src="/Images/three.png" alt="" />
          </div>
        </div>

        <div className="Creditrightcont">
          <p className="smallHeadline">Enjoy money rewards</p>
          <div className="semiboldtext">Get Cashback on your Credit</div>
          <p className="semimediumtext">
            Aibanc cashback reward service provides up to 5% cashback rewards
            when you repay your credit on or before the due date.
          </p>
          <div className="downloadNow">
            <a href="#download">Download Now</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPageContent;
