// src/components/Navbar.jsx

import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from '../images/yap_hero_img.png'; // Adjust path based on your directory structure
import './Navbar.css';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

const NavigationBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);

  const handleSignUpClose = () => setShowSignUp(false);
  const handleSignUpShow = () => setShowSignUp(true);

  return (
    <>
      <Navbar expand="lg" id='navbar' className="fixed-top">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              src={logo}
              alt="Youth Ambassador Programme Logo"
              className="navbar-logo"
            />
            <span className="ms-2">ACPKHI-YAP</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" id='navItems'>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#service">Service</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#login">
                <Button variant="dark" className='fw-bold' onClick={handleLoginShow}>Log In</Button>
              </Nav.Link>
              <Nav.Link href="#signup">
                <Button variant="dark" className='fw-bold' onClick={handleSignUpShow}>Sign Up</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <LoginModal show={showLogin} handleClose={handleLoginClose} />
      <SignUpModal show={showSignUp} handleClose={handleSignUpClose} />
    </>
  );
};

export default NavigationBar;
