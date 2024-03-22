import React from "react";

const Button = ({ projectName, projectLink }) => {
  return (
    <div
      className="projectBelowTotle"
      style={{
        fontSize: "1.2rem",
        textAlign: "left",
        marginBottom: "15px",
        marginLeft: "15px",
        cursor: "pointer",
      }}
    >
      <a
        className="projectBelowTotle"
        style={{ color: "white" }}
        href={projectLink}
        target="blank"
      >
        {projectName}
      </a>
    </div>
  );
};

export default Button;
