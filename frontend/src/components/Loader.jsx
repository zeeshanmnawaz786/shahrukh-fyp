// src/components/Loader.jsx
import React from 'react';
import './Loader.css';

// Import the video from the src folder
import LoaderVideo from '../videos/Loader video.mp4';

const Loader = () => {
  return (
    <div className="loader">
      <video autoPlay loop muted>
        <source src={LoaderVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Loader;
