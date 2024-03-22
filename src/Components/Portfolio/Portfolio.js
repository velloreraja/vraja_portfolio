import React from "react";
import "./portfolio.css";
import Button from "./Button";
import Po1 from "../../assets/images/po1.jpg";
import Po2 from "../../assets/images/po2.jpg";
import Po3 from "../../assets/images/po3.jpg";
import Po4 from "../../assets/images/po4.jpg";
import Po5 from "../../assets/images/po5.jpg";
import Po6 from "../../assets/images/po6.jpg";

const Portfolio = () => {
  // const projectTitles = ['Login Page','jokes','project3','project4','project5','project6'];
  const projectDetails = {
    project1: {
      projectName: "Login Page",
      projectLink: "https://velloreraja.github.io/LoginPage/Loginpage.html",
    },
    project2: {
      projectName: "Weather Details",
      projectLink: "https://velloreraja.github.io/weatherapp/weather.html",
    },
    project3: {
      projectName: "JokesGenerator",
      projectLink: "https://velloreraja.github.io/Jokesgenerator.RJ/",
    },
    project4: {
      projectName: "Virtual Keyboard",
      projectLink:
        "https://velloreraja.github.io/virtualKeyboard/keyboard.html",
    },
    project5: {
      projectName: "Bootstrap Template",
      projectLink: "https://velloreraja.github.io/BootTemplate/DotPerson.html",
    },
    project6: {
      projectName: "Note",
      projectLink: "https://velloreraja.github.io/Note/note.html",
    },
  };

  return (
    <section id="portfolio">
      <h2 className="portTitle">My Portfolio</h2>
      <span className="portDesk">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptas
        ipsa, repellat libero cupiditate doloremque officia earum ratione
        incidunt fugiat?Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Repellat, voluptatum?
      </span>
      <div className="portImages">
        <div className="portImageWrapper">
          <a href="/" className="portlink">
            <img src={Po1} alt="" className="portImage zoom blur" />
          </a>
          <a
            href="https://velloreraja.github.io/LoginPage/Loginpage.html"
            target="blank"
            className="portImgTitle fade"
          >
            Login Page
          </a>
          <Button
            projectName={projectDetails.project1.projectName}
            projectLink={projectDetails.project1.projectLink}
          />
        </div>

        <div className="portImageWrapper">
          <a
            href="https://velloreraja.github.io/weatherapp/weather.html"
            className="portlink"
          >
            <img src={Po2} alt="" className="portImage zoom blur" />
          </a>
          <a
            href="https://velloreraja.github.io/weatherapp/weather.html"
            target="blank"
            className="portImgTitle fade"
          >
            Weather Details
          </a>
          <Button
            projectName={projectDetails.project2.projectName}
            projectLink={projectDetails.project2.projectLink}
          />
        </div>
        <div className="portImageWrapper">
          <a
            href="https://velloreraja.github.io/Jokesgenerator.RJ/"
            className="portlink"
          >
            <img src={Po3} alt="" className="portImage zoom blur" />
          </a>
          <a
            href="https://velloreraja.github.io/Jokesgenerator.RJ/"
            target="blank"
            className="portImgTitle fade"
          >
            Jokesgenerator
          </a>
          <Button
            projectName={projectDetails.project3.projectName}
            projectLink={projectDetails.project3.projectLink}
          />
        </div>
        <div className="portImageWrapper">
          <a
            href="https://velloreraja.github.io/virtualKeyboard/keyboard.html"
            className="portlink"
          >
            <img src={Po4} alt="" className="portImage zoom blur" />
          </a>
          <a
            href="https://velloreraja.github.io/virtualKeyboard/keyboard.html"
            target="blank"
            className="portImgTitle fade"
          >
            Virtual Keyboard
          </a>

          <Button
            projectName={projectDetails.project4.projectName}
            projectLink={projectDetails.project4.projectLink}
          />
        </div>
        <div className="portImageWrapper">
          <a
            href="https://velloreraja.github.io/BootTemplate/DotPerson.html"
            className="portlink"
          >
            <img src={Po5} alt="" className="portImage zoom blur" />
          </a>
          <a
            href="https://velloreraja.github.io/BootTemplate/DotPerson.html"
            className="portImgTitle fade"
            target="blank"
          >
            Bootstrap Template
          </a>
          <Button
            projectName={projectDetails.project5.projectName}
            projectLink={projectDetails.project5.projectLink}
          />
        </div>
        <div className="portImageWrapper">
          <a
            href="https://velloreraja.github.io/Note/note.html"
            className="portlink"
          >
            <img src={Po6} alt="" className="portImage zoom blur" />
          </a>
          <a
            href="https://velloreraja.github.io/Note/note.html"
            target="blank"
            className="portImgTitle fade"
          >
            Note
          </a>
          <Button
            projectName={projectDetails.project6.projectName}
            projectLink={projectDetails.project6.projectLink}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
