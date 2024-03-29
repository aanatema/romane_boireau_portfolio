//this page is for the main navbar of the site.

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../index.css";
import { Image } from "react-bootstrap";
import logo from "../Images/logo.png";

function NavBar() {
  return (
    <>
      <Navbar sticky='top' className="navabar" collapseOnSelect expand="md" s>
        <Container>
          <Navbar.Brand href="/">
          <Image className="logo" style={{ width: "4rem", height:"4rem", marginRight:"1rem"}} src={logo} alt="logo du portfolio, un cercle avec un R et un B"/> ROMANE BOIREAU</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="" >
              <Nav.Link className="navbarLinks" href="/updates">PATCH NOTES</Nav.Link>
              <Nav.Link className="navbarLinks" href="/projects">PROJETS</Nav.Link>
              <Nav.Link className="navbarLinks" href="/contact">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
