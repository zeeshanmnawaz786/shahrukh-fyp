import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ScholarshipsAndInternships = () => {
  const scholarships = [
    { title: 'Scholarship 1', description: 'Description for Scholarship 1' },
    { title: 'Scholarship 2', description: 'Description for Scholarship 2' },
    // Add more scholarships
  ];

  return (
    <Container>
      <Row>
        {scholarships.map((scholarship, index) => (
          <Col md={6} key={index} className="mb-4">
            <div className="scholarship-card p-3">
              <h4>{scholarship.title}</h4>
              <p>{scholarship.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ScholarshipsAndInternships;
