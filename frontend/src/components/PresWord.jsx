// src/components/PresWords.js

import React from 'react';
import './PresWords.css';
import presWord from '../images/PresidentArtsCouncil.jpg'

const PresWord = () => {
  return (
    <div className="container py-5" id="preswords">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0 text-center">
          <img
            src={presWord}
            alt="President"
            className="img-fluid shadow-sm"
          />
        </div>
        <div className="col-lg-6">
          <h2 className="mb-3 font-weight-bold">Dear Youth of Pakistan,</h2>
          <p className="presWord">
            I invite you to join our Youth Ambassador Programme at the Arts Council of Pakistan, Karachi. This programme is designed to help you grow as an artist and connect with a lively community of creative individuals. <br />
            As a Youth Ambassador, you will gain special access to our events, utilize our modern library, and participate in workshops and mentorship programs. You’ll collaborate with talented artists and professionals, expanding your network and honing your skills. This is a wonderful opportunity to learn, develop your talents, and contribute positively to the arts community. I encourage you to join us on this exciting journey.
          </p>
          <h4 className="text-muted d-flex justify-content-end align-items-center text-align-center">- Muhammad Ahmed Shah</h4>
          <h4 className="text-muted d-flex justify-content-end align-items-center text-align-center">- President, Arts Council of Pakistan</h4>
        </div>
      </div>
    </div>
  );
};

export default PresWord;
