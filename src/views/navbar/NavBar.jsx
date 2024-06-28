import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported
import TransLogo from "/src/assets/transLogo.png";

const NavbarT = () => {
  const [navBackground, setNavBackground] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 310;
      if (show) {
        setNavBackground("bg-[#122038]");
      } else {
        setNavBackground("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`${navBackground} transition-colors duration-300 pt-10 pl-5 pr-5`}
    >
      <Container>
        <Navbar.Brand href="#" className="pl-20">
          <img className="w-16" src={TransLogo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto pr-10 space-x-8 justify-center">
            <Nav.Link href="#" className="text-white font-dm-sans text-sm">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="text-white font-dm-sans text-sm">
              About
            </Nav.Link>
            <Nav.Link href="#" className="text-white font-dm-sans text-sm">
              Solutions
            </Nav.Link>
            <Nav.Link href="#" className="text-white font-dm-sans text-sm">
              News & Insights
            </Nav.Link>
            <Nav.Link href="#" className="text-white font-dm-sans text-sm">
              Solutions
            </Nav.Link>
            <Button className="text-black text-md px-3 py-2 border border-sm bg-green-400 hover:bg-green-200 border-r-green-400">
              Get Started
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarT;
