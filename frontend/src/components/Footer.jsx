// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h3>ACP-YAP</h3>
            <p>
              As a Youth Ambassador, you will get special access to events, our modern library, and chances to improve your skills. Meet new people, work on projects together, and enjoy discounts at our cafe. This programme helps you grow and get involved in the arts. Don't miss this chance to learn and make a difference.
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h3>Quick Links</h3>
            <Nav className="flex-column">
              <Nav.Link className='home text-dark text-decoration-none' href="#home">Home</Nav.Link>
              <Nav.Link className='home text-dark text-decoration-none' href="#about">About</Nav.Link>
              <Nav.Link className='home text-dark text-decoration-none' href="#service">Service</Nav.Link>
              <Nav.Link className='home text-dark text-decoration-none' href="#blog">Blog</Nav.Link>
              <Nav.Link className='home text-dark text-decoration-none' href="#contact">Contact</Nav.Link>
            </Nav>
          </Col>
          <Col md={4} className="mb-3">
            <h3>Get In Touch</h3>
            <p>
              <FaMapMarkerAlt /> 7400. M.R Kiyani Road, Saddar Town Karachi, Pakistan
            </p>
            <p>
              <FaPhone /> +92 300-0802391
            </p>
            <p>
              <FaEnvelope /> info@acpkhi.com
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>© 2024 Youth Ambassador Program. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
