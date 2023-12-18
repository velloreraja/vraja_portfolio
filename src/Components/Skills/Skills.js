import React from "react";
import "./Skills.css";

// Font Awesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faReact,
  faGithub,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Know</span>
      <span className="skillDesk">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        enim dignissimos nihil nam officiis ea, atque asperiores debitis
        necessitatibus voluptatibus dolor pariatur doloribus illum quasi! alias
        dolorum ab sit.
      </span>

      <div className="skillBars">
        <div className="skillBar">
          <FontAwesomeIcon
            icon={faHtml5}
            className="htmlIcon"
            style={{ color: "#b64225" }}
          />
          <h2 className="skillName">HTML</h2>
        </div>
        <div className="skillBar">
          <FontAwesomeIcon
            icon={faCss3Alt}
            className="cssIcon"
            style={{ color: "#d5cf20" }}
          />
          <h2 className="skillName">CSS</h2>
        </div>
        <div className="skillBar">
          <FontAwesomeIcon
            icon={faJs}
            style={{ color: "#357e4b" }}
            className="jsIcon"
          />
          <h2 className="skillName">Javascript</h2>
        </div>
        <div className="skillBar">
          <FontAwesomeIcon
            icon={faBootstrap}
            className="bootstrapIcon"
            style={{ color: "#2675fd" }}
          />
          <h2 className="skillName">Bootstrap</h2>
        </div>
        <div className="skillBar">
          <FontAwesomeIcon icon={faReact} className="reactJsIcon" />
          <h2 className="skillName">React JS</h2>
        </div>
        <div className="skillBar">
          <FontAwesomeIcon icon={faGithub} className="githubIcon" />
          <h2 className="skillName">Github</h2>
        </div>
        <div className="skillBar">
          <FontAwesomeIcon
            icon={faFigma}
            className="figmaIcon"
            style={{ color: "#eb0a0a" }}
          />
          <h2 className="skillName">Figma</h2>
        </div>
      </div>
    </section>
  );
};

export default Skills;
