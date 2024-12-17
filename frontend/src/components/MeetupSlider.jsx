import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './MeetupSlider.css';

import meetupimg1 from '../images/MeetUp/meetupimg1.jpg';
import meetupimg2 from '../images/MeetUp/meetupimg2.jpg';
import meetupimg3 from '../images/MeetUp/meetupimg3.jpg';
import meetupimg4 from '../images/MeetUp/meetupimg4.jpg';
import meetupimg5 from '../images/MeetUp/meetupimg5.jpg';
import meetupimg6 from '../images/MeetUp/meetupimg6.jpg';
import meetupimg7 from '../images/MeetUp/meetupimg7.jpg';
import meetupimg8 from '../images/MeetUp/meetupimg8.jpg';
import meetupimg9 from '../images/MeetUp/meetupimg9.jpg';
import meetupimg10 from '../images/MeetUp/meetupimg10.jpg';
import meetupimg11 from '../images/MeetUp/meetupimg11.jpg';
import meetupimg12 from '../images/MeetUp/meetupimg12.jpg';

const Meetup = () => {
  const meetupPhotos = [
    { title: 'Meetup 1', image: meetupimg1 },
    { title: 'Meetup 2', image: meetupimg2 },
    { title: 'Meetup 3', image: meetupimg3 },
    { title: 'Meetup 4', image: meetupimg4 },
    { title: 'Meetup 5', image: meetupimg5 },
    { title: 'Meetup 6', image: meetupimg6 },
    { title: 'Meetup 7', image: meetupimg7 },
    { title: 'Meetup 8', image: meetupimg8 },
    { title: 'Meetup 9', image: meetupimg9 },
    { title: 'Meetup 10', image: meetupimg10 },
    { title: 'Meetup 11', image: meetupimg11 },
    { title: 'Meetup 12', image: meetupimg12 },
  ];

  return (
    <Container className="meetup-container">
      <Row>
        {meetupPhotos.map((photo, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index} className="meetup-photo-col">
            <div className="meetup-photo-wrapper">
              <img
                className="img-fluid meetup-photo"
                src={photo.image}
                alt={photo.title}
              />
              <div className="meetup-photo-caption">
                <p>{photo.title}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Meetup;
