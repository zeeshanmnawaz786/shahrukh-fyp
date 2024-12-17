import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './PrDrives.css';

// Import images for PR Drives
import prDrive1 from '../images/PrDrives/prDrives1.jpg';
import prDrive2 from '../images/PrDrives/prDrives2.jpg';
import prDrive3 from '../images/PrDrives/prDrives3.jpg';

const PrDrives = () => {
  const prDrivesPhotos = [
    { title: 'PR Drive 1', image: prDrive1 },
    { title: 'PR Drive 2', image: prDrive2 },
    { title: 'PR Drive 3', image: prDrive3 },
  ];

  return (
    <Container className="pr-drives-container">
      <Row>
        {prDrivesPhotos.map((photo, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index} className="pr-drives-photo-col">
            <div className="pr-drives-photo-wrapper">
              <img
                className="img-fluid pr-drives-photo"
                src={photo.image}
                alt={photo.title}
              />
              <div className="pr-drives-photo-caption">
                <p>{photo.title}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PrDrives;
