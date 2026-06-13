import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import {
  HomeIcon,
  AboutIcon,
  SkillsIcon,
  ProjectsIcon,
  ContactIcon,
} from "../Icons/Icons";
import "./Navbar.css";

function CustomNavbar() {
  const [theme, setTheme] = useState("dark");

  return (
    <Navbar expand="lg" className={`custom-navbar ${theme}`}>
      <Container>
        <Navbar.Brand href="#" className="d-flex align-items-center gap-2">
          <span>Portofolio</span>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto gap-3">
            <Nav.Link href="#">
              <span className="nav-icon">
                <HomeIcon />
              </span>{" "}
              Home
            </Nav.Link>

            <Nav.Link href="#">
              <span className="nav-icon">
                <AboutIcon />
              </span>{" "}
              About Me
            </Nav.Link>

            <Nav.Link href="#">
              <span className="nav-icon">
                <SkillsIcon />
              </span>{" "}
              My Skills
            </Nav.Link>

            <Nav.Link href="#">
              <span className="nav-icon">
                <ProjectsIcon />
              </span>{" "}
              My Projects
            </Nav.Link>

            <Nav.Link href="#">
              <span className="nav-icon">
                <ContactIcon />
              </span>{" "}
              Contact Me
            </Nav.Link>

            {/* Theme Toggle */}
            <button
              className="btn btn-outline-info ms-3"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
