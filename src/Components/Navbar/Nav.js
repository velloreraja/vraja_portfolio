import React, {  useState } from "react";
import { Link } from "react-scroll";
import "../../Components/Navbar/Nav.css";
import Logo from "../../assets/images/RAJ LOGO.png";
import HBMenu from "../../assets/images/hamb.png";

const Nav = () => {

  const [showMenu,setShowMenu] =useState(false);

  return (
    <nav className="navbar">
      <img className="logo" src={Logo} alt="" />
      <div className="nav-items">
        <Link
          to="home"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          to="skills"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
          className="desktopMenuListItem"
        >
          Skills
        </Link>
        <Link
          to="portfolio"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
          className="desktopMenuListItem"
        >
          Porfolio
        </Link>
        <Link
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Contact
        </Link>
      </div>
      <button className="desktopResumeBtn">Resume</button>


      <img className="mobmenu" src={HBMenu} alt="menu"onClick={() => setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
        <Link
          to="home"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="ListItem" onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          to="skills"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
          className="ListItem" onClick={() => setShowMenu(!showMenu)}
        >
          Skills
        </Link>
        <Link
          to="portfolio"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
          className="ListItem" onClick={() => setShowMenu(!showMenu)}
        >
          Porfolio
        </Link>
        <Link
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="ListItem" onClick={() => setShowMenu(!showMenu)}
        >
          Clients
        </Link>
        <Link
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="ListItem" onClick={() => setShowMenu(!showMenu)}
        >
          Contact
        </Link>
      </div>


    </nav>
  );
};

export default Nav;
