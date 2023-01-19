import React from "react";
import Values from "../../Values/Values";
import Download from "../Downloads/Download";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Testimonial from "../Testimonial/Testimonial";

function Company() {
  return (
    <>
      <Navbar />
      <Values />
      <Download />
      <Testimonial />
      <Footer />
    </>
  );
}

export default Company;
