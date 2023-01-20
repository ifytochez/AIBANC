import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Download from "../Downloads/Download";
import Testimonial from "../Testimonial/Testimonial";
import FAQs from "../FAQ/FAQs";
import LandingPage from "../LandingPage/LandingPage";
import LandingPageContent from "../Landing_page_contents/LandingPageContent";
import HowItWorks from "../HowItWorks/HowItWorks";

function Home() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <LandingPageContent />
      <HowItWorks />
      <Download />
      <Testimonial />
      <FAQs />
      <Footer />
    </>
  );
}

export default Home;
