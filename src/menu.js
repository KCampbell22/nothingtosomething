import React from "react";
import "./menu.css";

export default function AppMenu({ visibleSection, handleMenuClick }) {
  return (
    <div id="menu">
      <div id="logo-wrapper">
        <img id="logo" src="/logo-nb.png" alt="" />
      </div>
      <div>
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
    </div>
  );
}
