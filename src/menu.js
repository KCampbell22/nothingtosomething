import React from "react";
import "./menu.css";

export default function AppMenu() {
  return (
    <div id="menu">
      <div id="logo-wrapper">
        <img
          id="logo"
          src="./images/Screenshot_2023-07-08_at_5.48.29_PM-removebg-preview.png"
          alt=""
        />
      </div>
      <div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
