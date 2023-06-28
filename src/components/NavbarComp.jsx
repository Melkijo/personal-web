import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavbarComp.css";
import { useState, useEffect } from "react";
import Github from "../assets/img/github.png";
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
         style={{ backgroundColor: isSticky ? "#373B4C" : "" }}
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
               <Nav
                  className="ms-auto gap-3 text-center "
                  style={{
                     fontSize: 18,
                     display: "flex",
                     alignItems: "center",
                  }}
               >
                  <Nav.Link href="#home" style={{ color: "white" }}>
                     Home
                  </Nav.Link>
                  <Nav.Link href="#portfolio" style={{ color: "white" }}>
                     Portfolio
                  </Nav.Link>
                  <Nav.Link href="#about" style={{ color: "white" }}>
                     About
                  </Nav.Link>
                  <Nav.Link
                     href="https://github.com/Melkijo"
                     style={{ color: "white" }}
                     target="_blank"
                  >
                     <img src={Github} width={35} />
                  </Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}
