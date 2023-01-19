import React from "react";
import Download from "../Downloads/Download";
import FAQs from "../FAQ/FAQs";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Testimonial from "../Testimonial/Testimonial";

function FaqPage() {
  return (
    <>
      <Navbar />
      <FAQs />
      <Download />
      <Testimonial />
      <Footer />
    </>
  );
}

export default FaqPage;
