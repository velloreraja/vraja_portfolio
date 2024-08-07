import React from "react";

import Navbar from "./Components/Navbar/Nav.js";
import Home from "./Components/Home/Home.js";
import Skills from "./Components/Skills/Skills.js";
import Portfolio from "./Components/Portfolio/Portfolio.js";
import Contact from "./Components/Contact/Contact.js";
import Footer from "./Components/Footer/Footer.js";
import ScrolltopButton from "./Components/Scrolltop/Scrolltopbutton.js";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Portfolio />
      <Contact />
      <ScrolltopButton />
      <Footer />
    </div>
  );
};

export default App;
