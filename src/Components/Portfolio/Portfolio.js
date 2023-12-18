import React from "react";
import "./portfolio.css";
import Po1 from "../../assets/images/po1.jpg";
import Po2 from "../../assets/images/po2.jpg";
import Po3 from "../../assets/images/po3.jpg";
import Po4 from "../../assets/images/po4.jpg";
import Po5 from "../../assets/images/po5.jpg";
import Po6 from "../../assets/images/po6.jpg";

const Portfolio = () => {
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
          <a href="/" className="portImgTitle fade">
            Project 1
          </a>
        </div>
        <div className="portImageWrapper">
          <a href="/" className="portlink">
            <img src={Po2} alt="" className="portImage zoom blur" />
          </a>
          <a href="/" className="portImgTitle fade">
            Project 2
          </a>
        </div>
        <div className="portImageWrapper">
          <a href="/" className="portlink">
            <img src={Po3} alt="" className="portImage zoom blur" />
          </a>
          <a href="/" className="portImgTitle fade">
            Project 3
          </a>
        </div>
        <div className="portImageWrapper">
          <a href="/" className="portlink">
            <img src={Po4} alt="" className="portImage zoom blur" />
          </a>
          <a href="/" className="portImgTitle fade">
            Project 4
          </a>
        </div>
        <div className="portImageWrapper">
          <a href="/" className="portlink">
            <img src={Po5} alt="" className="portImage zoom blur" />
          </a>
          <a href="/" className="portImgTitle fade">
            Project 5
          </a>
        </div>
        <div className="portImageWrapper">
          <a href="/" className="portlink">
            <img src={Po6} alt="" className="portImage zoom blur" />
          </a>
          <a href="/" className="portImgTitle fade">
            Project 6
          </a>
        </div>
        {/*            
            <a href="/" className="portlink"><img src={Po2} alt="" className="portImage" /></a>
            <a href="/" className="portlink"><img src={Po3} alt="" className="portImage" /></a> 
            <a href="/" className="portlink"><img src={Po4} alt="" className="portImage" /></a>
            <a href="/" className="portlink"><img src={Po5} alt="" className="portImage" /></a>
            <a href="/" className="portlink"><img src={Po6} alt="" className="portImage" /></a> */}
      </div>
    </section>
  );
};

export default Portfolio;
