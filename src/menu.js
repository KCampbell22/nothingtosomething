import React, { useEffect } from "react";
import "./menu.css";

export default function AppMenu({ visibleSection, handleMenuClick }) {
  // state to track if the menu is open or closed
  const [menuOpen, setMenuOpen] = React.useState(false);

  // useEffect to handle the document body scroll when the menu is open
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    handleScroll();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  useEffect(() => {
    // if #meny is open then turn #logo-mobile display to none
    const logoMobile = document.getElementById("logo-mobile");
    const closeMobileMenu = document.querySelector("#close-mobile-menu a");
    const logoWrapper = document.getElementById("close-mobile-menu");

    if (menuOpen) {
      logoMobile.style.display = "none";
      // turn the x display to block
      closeMobileMenu.style.display = "block";
      // add a border around the logo
      logoWrapper.style.border = "1px solid white";
      // display sticky
      document.getElementById("menu").style.position = "fixed";
    } else {
      logoMobile.style.display = "block";
      closeMobileMenu.style.display = "none";
      // no border around the logo
      logoWrapper.style.border = "none";
    }
  }, [menuOpen]);

  const handleLogoClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <React.Fragment>
      <div id="close-mobile-menu">
        <a onClick={handleLogoClick}>X</a>
        <button id="logo-mobile" onClick={handleLogoClick}></button>
      </div>
      <div id="menu" className={menuOpen ? "open" : "closed"}>
        <div id="logo-wrapper">
          <button id="logo" onClick={handleLogoClick}></button>
        </div>
        <ul>
          <li>
            <a
              href="#home"
              onClick={() => handleMenuClick("home")}
              className={visibleSection === "home" ? "active" : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => handleMenuClick("about")}
              className={visibleSection === "about" ? "active" : ""}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handleMenuClick("contact")}
              className={visibleSection === "contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={() => handleMenuClick("services")}
              className={visibleSection === "services" ? "active" : ""}
            >
              Services
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
