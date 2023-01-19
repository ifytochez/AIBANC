import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Download from "../Downloads/Download";
import Testimonial from "../Testimonial/Testimonial";
import FAQs from "../FAQ/FAQs";

function Home() {
  return (
    <>
      <Navbar />
      <Download />
      <Testimonial />
      <FAQs />
      <Footer />
    </>
  );
}

export default Home;
