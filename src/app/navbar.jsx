"use client";

import { AppBar, Button } from "@mui/material";
import styled from "styled-components";
import { useState, useEffect } from "react";

// Define sections for navigation
const sections = ["home", "events", "projects", "quizzes"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offset = element.offsetTop - 100;
          if (scrollPosition >= offset) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };

  return (
    <NavbarContainer>
      {sections.map((section) => (
        <NavButton
          key={section}
          onClick={() => scrollToSection(section)}
          className={activeSection === section ? "active" : ""}
        >
          {section.toUpperCase()}
        </NavButton>
      ))}
    </NavbarContainer>
  );
}

// Styled Navbar Components
const NavbarContainer = styled(AppBar)`
  background: rgba(255, 105, 180, 0.2);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  z-index: 10;
  box-shadow: 0px 4px 10px rgba(255, 105, 180, 0.5);
`;

const NavButton = styled(Button)`
  color: #fff !important;
  font-weight: bold !important;
  font-size: 1rem !important;
  margin: 0 15px !important;
  padding: 8px 15px !important;
  transition: all 0.3s ease-in-out !important;

  &:hover, &.active {
    background: rgba(255, 105, 180, 0.5) !important;
    border-radius: 10px !important;
  }
`;
