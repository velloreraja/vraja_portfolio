import React from "react";
import Navbar from "./Components/Navbar/Nav.js";
import Home from "./Components/Home/Home.js";
import Skills from "./Components/Skills/Skills.js";
import Portfolio from "./Components/Portfolio/Portfolio.js";
import Contact from "./Components/Contact/Contact.js";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Portfolio />
      <Contact/>
    </div>
  );
};

export default App;
