import React, { useRef } from "react";
import "../Contact/Contact.css";
import Google from "../../assets/images/google.png";
import Amazon from "../../assets/images/amazon.png";
import Aertrip from "../../assets/images/aertrip.jpg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qyofe24", "template_1h2tb9g", form.current, {
        publicKey: "1IjwxVmzPxWqLznugaBK8",
      })
      .then(
        () => {
          e.target.reset();
          alert("SUCCESS!");

        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="contact">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate,
          vero sint soluta tempora dolorem ullam.
        </p>
        <div className="clientImgs">
          <img src={Google} alt="" className="clientimg" />
          <img src={Aertrip} alt="" className="clientimg" />
          <img
            src={Amazon}
            alt=""
            className="clientimg"
            style={{ background: "white" }}
          />
        </div>
      </div>
      <div id="contact-form-details">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discus any work opportunities.
        </span>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            name="your_name"
            placeholder="Enter Your Name"
          />
          <input
            type="email"
            className="email"
            name="your_email"
            placeholder="Enter Your Email"
          />
          <textarea
            name="message"
            className="message"
            rows="5"
            placeholder="Enter Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitbtn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
