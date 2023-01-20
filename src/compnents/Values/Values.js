import React from "react";
import { MdSecurity } from "react-icons/md";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { RiSearchEyeLine } from "react-icons/ri";
import { MdPeopleOutline } from "react-icons/md";
import "./Values.css";

function Values() {
  return (
    <div className="value_container">
      <p className="value_paragraph1">Our Values</p>
      <div className="values">
        <div className="container">
          <button className="value_button security">
            <MdSecurity className="font" />
          </button>
          <p className="p1">Security</p>
          <p className="p2">
            We ensure the security of financial transactions and data of our
            users.
          </p>
        </div>

        <div className="container ">
          <button className="value_button transparency">
            <RiSearchEyeLine className="font" />
          </button>
          <p className="p1">Transparency</p>
          <p className="p2">
            We provide clear, concise information about their products and
            services
          </p>
        </div>

        <div className="container">
          <button className="value_button efficiency">
            <MdPeopleOutline className="font" />
          </button>
          <p className="p1">Efficiency</p>
          <p className="p2">
            We use technology to automate and streamline financial processes
          </p>
        </div>

        <div className="container">
          <button className="value_button innovation">
            <MdOutlineTipsAndUpdates className="font" />
          </button>
          <p className="p1">Innovation</p>
          <p className="p2">
            We use technology to innovate and improve financial services
          </p>
        </div>
      </div>
    </div>
  );
}

export default Values;
