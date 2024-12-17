import React from "react";
import "./TeamSlider.css"; // Add your CSS styling

const TeamSlider = ({ name, title, imageUrl }) => {
  return (
    <div className="team-member">
      {/* <img src={imageUrl} alt={name} className="team-member-image" /> */}
      <h3 className="team-member-title">{name}</h3>
      <p className="team-member-role">{title}</p>
    </div>
  );
};

export default TeamSlider;
