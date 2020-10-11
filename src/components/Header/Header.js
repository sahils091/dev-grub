import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./header.css";

const Header = () => {
  return (
    <header className="head">
      <Container className="p-0" fluid={true}>
        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand>Dev Grub</Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-toggle" className="border-0" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <a className="nav-link" href="#home">
                {" "}
                Home{" "}
              </a>
              <a className="nav-link" href="#about">
                About Us
              </a>
              <a className="nav-link" href="#projects">
                Get In Touch
              </a>
              <a className="nav-link" href="#contact">
                Why Dev-Grub
              </a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
