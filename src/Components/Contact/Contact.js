import React from "react";
import "../Contact/Contact.css";
import Google from "../../assets/images/google.png";
import Amazon from "../../assets/images/amazon.png";
import Aertrip from "../../assets/images/aertrip.jpg";

const Contact = () => {
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
      <div id="contact"></div>
    </section>
  );
};

export default Contact;
