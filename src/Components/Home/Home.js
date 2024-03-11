import React from "react";
import "../Home/Home.css";
import bg from "../../assets/images/raja.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section id="home">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Raja</span>
          <br></br>Front-End Developer
        </span>
        <p className="introPara">
          I am a skilled and passionate front-end developer with experience
          <br /> in developing visually appealing and user friendly websites.
        </p>
        <Link>
          <button className="btn" onClick={() =>{
        document.getElementById("contact").scrollIntoView({behavior: "smooth"});
      }}>Hire Me</button>
        </Link>
      </div>

      <img className="bg" src={bg} alt="Raja_Photo" />
    </section>
  );
};

export default Home;
