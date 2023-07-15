import React, { useState, useEffect } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import AppMenu from "./menu";
import "./App.css";

function App() {
  const [visibleSection, setVisibleSection] = useState("home");

  useEffect(() => {
    const savedSection = localStorage.getItem("visibleSection");
    if (savedSection) {
      setVisibleSection(savedSection);
    }
  }, []);

  const handleMenuClick = (section) => {
    setVisibleSection(section);
    localStorage.setItem("visibleSection", section);
  };

  return (
    <div id="wrapper">
      <AppMenu
        visibleSection={visibleSection}
        handleMenuClick={handleMenuClick}
      />

      <div id="content">
        {visibleSection === "home" && <Home />}
        {visibleSection === "about" && <About />}
        {visibleSection === "contact" && <Contact />}
        {visibleSection === "services" && <Services />}
      </div>
    </div>
  );
}

export default App;
