import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Download from "../Downloads/Download";
import Testimonial from "../Testimonial/Testimonial";
import FAQs from "../FAQ/FAQs";
import LandingPage from "../LandingPage/LandingPage";

function Home() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Download />
      <Testimonial />
      <FAQs />
      <Footer />
    </>
  );
}

export default Home;
