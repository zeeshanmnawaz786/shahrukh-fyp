import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../images/yap_hero_img.jpg";
import "./Navbar.css";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import AdminModal from "./AdminModal"; // Import the AdminModal component

const NavigationBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false); // State for Admin modal
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);

  const handleSignUpClose = () => setShowSignUp(false);
  const handleSignUpShow = () => setShowSignUp(true);

  const handleAdminClose = () => setShowAdmin(false);
  const handleAdminShow = () => setShowAdmin(true);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  };

  return (
    <>
      <Navbar expand="lg" id="navbar" className="fixed-top">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              src={logo}
              alt="NETWORK VOLUNTERRING Logo"
              className="navbar-logo"
            />
            <span className="ms-2">NET-VOL</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" id="navItems">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#service">Service</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              {isLoggedIn ? (
                <>
                  <Nav.Link>
                    <Button
                      variant="dark"
                      className="fw-bold"
                      onClick={handleLogout}
                    >
                      Log Out
                    </Button>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link>
                    <Button
                      variant="dark"
                      className="fw-bold"
                      onClick={handleLoginShow}
                    >
                      Log In
                    </Button>
                  </Nav.Link>
                  <Nav.Link>
                    <Button
                      variant="dark"
                      className="fw-bold"
                      onClick={handleSignUpShow}
                    >
                      Sign Up
                    </Button>
                  </Nav.Link>
                  <Nav.Link>
                    <Button
                      variant="dark"
                      className="fw-bold"
                      onClick={handleAdminShow}
                    >
                      Admin
                    </Button>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <LoginModal show={showLogin} handleClose={handleLoginClose} />
      <SignUpModal show={showSignUp} handleClose={handleSignUpClose} />
      <AdminModal show={showAdmin} handleClose={handleAdminClose} />
    </>
  );
};

export default NavigationBar;
