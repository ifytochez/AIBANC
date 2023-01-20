import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <section className="Herosection">
      <div className="CONT">
        <div className="leftcont">
          <div className="boldtext">
            Get the credit you deserve <span className="now">now.</span>
          </div>
          <p className="mediumtext">
            Access credit at an affordable rate, manage your credit <br /> limit
            and earn 20% cashback on repayment.
          </p>

          <div className="googleLink">
            <a href="https://play.google.com/store/apps/details?id=co.aibanc.Aibanc_APP">
              <img
                className="google"
                src="/Images/GooglePlayBadge2.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="rightcont">
          <img src="/Images/landing.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
