import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <div id="home" className="content visible">
      <h1>Nothing to Something Commissions LLC</h1>
      <img id="logo-big" src="/logo.png" alt="" />

      <h2 id="mission_statement">
        To provide fair wages, benefits and various opportunities to people who
        work or are interested in working in trucking, transportation,
        logistics, and warehousing.
      </h2>

      <div className="buttons">
        <span className="button-wrap">
          <a href="#about" className="btn">
            About
          </a>
        </span>
        <span className="button-wrap">
          <a href="#contact" className="btn">
            Contact
          </a>
        </span>
        <span className="button-wrap">
          <a href="#services" className="btn">
            Services
          </a>
        </span>
      </div>
    </div>
  );
}
