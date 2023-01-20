import React from "react";
import Download from "../Downloads/Download";
import FAQs from "../FAQ/FAQs";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Navbar from "../Navbar/Navbar";
import Testimonial from "../Testimonial/Testimonial";
import "./Contact.css";
function Contact() {
  return (
    <>
      <Navbar />
      <Form />
      <FAQs />
      <Download />
      <Testimonial />
      <Footer />
    </>
  );
}

export default Contact;
