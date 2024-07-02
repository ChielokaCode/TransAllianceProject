import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported
import TransLogo from "/src/assets/images/transLogo.png";
import BlackArrow from "/src/assets/images/BlackArrow.png";

const NavbarT = () => {
  const [navBackground, setNavBackground] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 10;
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
      className={`${navBackground} transition-colors duration-300 pt-10`}
    >
      <Container className="">
        <Navbar.Brand href="#" className="md:pl-20">
          <img className="md:w-16 w-12" src={TransLogo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="bg-yellow-400"
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="bg-[#122038] md:bg-transparent"
        >
          <Nav className="md:ml-auto md:pr-10 md:space-x-8 justify-center p-3 md:p-0">
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
            <Button className="flex items-center text-black p-3 border bg-green-400 hover:bg-green-200 border-r-green-400 transform transition-transform duration-300 hover:scale-105 z-30">
              <span className="text-sm mr-2 font-dm-sans font-medium">
                Get Started
              </span>
              <img className="w-2 h-2" src={BlackArrow} alt="" />
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarT;
