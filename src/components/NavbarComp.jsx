import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavbarComp.css";
import { useState, useEffect } from "react";

export default function NavbarComp() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup;
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Navbar
      expand="lg"
      className="navbar-dark"
      fixed={"top"}
      style={{ backgroundColor: "#373B4C" }}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          style={{ fontSize: 24, fontWeight: 800, color: "white" }}
        >
          <span style={{ color: "#01CC8E" }}>MEJO</span>DEV.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3 text-center" style={{ fontSize: 18 }}>
            <Nav.Link href="#home" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#portfolio" style={{ color: "white" }}>
              Portfolio
            </Nav.Link>
            <Nav.Link href="#about" style={{ color: "white" }}>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
