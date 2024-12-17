import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './OurTeam.css';
import TeamSlider from './TeamSlider'; // Assume you have a slider component
import TeamGrid from "./TeamGrid";

import sahirAliBagga from '../images/Celebrities/celebrity1.jpeg';
import mahiraKhan from '../images/Celebrities/celebrity2.jpg';
import anwarmaqsood from '../images/Celebrities/celebrity3.jpg';
import fahadMustafa from '../images/Celebrities/celebrity4.jpg';
import asimAzhar from '../images/Celebrities/celebrity5.jpeg';
import umerAlam from '../images/Celebrities/celebrity6.jpeg';
import hibaBukhari from '../images/Celebrities/celebrity7.jpg';


const OurTeam = () => {
  return (
    <Container>
      <div className="main-head">
        <h1>Meet Our Team</h1>
        <h3>Celebrities and Influencers</h3>
      </div>
      <Row className="celebrities-row">
        <Col xs={12} md={6} lg={3}>
          <div className="image-container mt-5">
            <img src={sahirAliBagga} alt="sahirAliBagga" className="img-fluid" />
            <div className="overlay">
              <div className="text">Sahir Ali Baggha</div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <div className="image-container mt-5">
            <img src={mahiraKhan} alt="mahiraKhan" className="img-fluid" />
            <div className="overlay">
              <div className="text">Mahira Khan</div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <div className="image-container mt-5">
            <img src={anwarmaqsood} alt="anwarMaqsood" className="img-fluid" />
            <div className="overlay">
              <div className="text">Anwar Maqsood</div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <div className="image-container mt-5">
            <img src={fahadMustafa} alt="fahadMustafa" className="img-fluid" />
            <div className="overlay">
              <div className="text">Fahad Mustafa</div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <div className="image-container mt-5">
            <img src={asimAzhar} alt="asimAzhar" className="img-fluid" />
            <div className="overlay">
              <div className="text">Asim Azhar</div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <div className="image-container mt-5">
            <img src={umerAlam} alt="umerAlam" className="img-fluid" />
            <div className="overlay">
              <div className="text">Umer Alam</div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <div className="image-container mt-5">
            <img src={hibaBukhari} alt="hibaBukhari" className="img-fluid" />
            <div className="overlay">
              <div className="text">Hiba Bukhari</div>
            </div>
          </div>
        </Col>
      </Row>
      <h3 className="teamMembers mt-5">YAP Team Members</h3>
      <TeamSlider />
      <TeamGrid />
    </Container>
  );
};

export default OurTeam;
