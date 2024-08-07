import React, { useState, useEffect } from "react";
import "./Scrolltopbutton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Scrolltopbutton = () => {
  const [totop, setTotop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setTotop(true);
      } else {
        setTotop(false);
      }
    });
  }, []);

  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id="scrollButton">
      {totop && (
        <a href="/Home" className="to-top" onClick={scroll}>
          <FontAwesomeIcon
            icon={faArrowUp}
            style={{ color: "chartreuse", fontSize: "25px" }}
          />
        </a>
      )}
    </div>
  );
};
export default Scrolltopbutton;
