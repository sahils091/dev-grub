import React from 'react';
import { Container,Navbar } from "react-bootstrap";

const Footer = () => {
    return (
        <Container className="p-0" fluid={true}>
        <Navbar className="border-bottom border-top" bg="transparent" expand="lg">
          <Navbar.Brand>© Dev Grub Inc</Navbar.Brand>
        </Navbar>
      </Container>
    );
};

export default Footer;