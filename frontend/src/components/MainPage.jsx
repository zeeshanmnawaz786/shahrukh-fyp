import React from 'react';
import { Container } from 'react-bootstrap';
import './MainPage.css';

import UniversitySlider from './UniversitySlider';
import PRDrivesSlider from './PrDrivesSlider';
import MeetupSlider from './MeetupSlider';
import Scholarships from './ScholarshipsAndInternships';

const UniversityPage = () => {
  return (
    <div className="university-page">
      {/* MoU Signed Universities Section */}
      <section id="mou-signed-universities">
        <h2 className="section-title fs-1 fw-bold">MoU Signed Universities</h2>
        <UniversitySlider />
      </section>

      {/* PR Drives Photos Slider */}
      <section id="pr-drives">
        <h2 className="section-title fs-1 fw-bold">PR Drives Photos</h2>
        <PRDrivesSlider />
      </section>

      {/* Meetup Photos Slider */}
      <section id="meetup-photos">
        <h2 className="section-title fs-1 fw-bold">Meetup Gallery</h2>
        <MeetupSlider />
      </section>

      {/* Scholarships and Internships Section */}
      <section id="scholarships">
        <h2 className="section-title fs-1 fw-bold">Scholarships and Internships</h2>
        <Scholarships />
      </section>
    </div>
  );
};

export default UniversityPage;
