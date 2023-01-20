import React from "react";
import "./Companyhero.css";

function Companyhero() {
  return (
    <div className="heroSession">
      <div className="heroCont">
        <div className="writeup">
          <h1 className="paragraph1">
            We want to change your perspective about credit
          </h1>

          <p className="paragraph2">
            Apply, get approved and ahead with life. Aibanc is changing the way{" "}
            you see credit by helping you access credit cheaper and faster.
          </p>
        </div>
        <div className="imageCont">
          <img src="/Images/companyImage.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Companyhero;
