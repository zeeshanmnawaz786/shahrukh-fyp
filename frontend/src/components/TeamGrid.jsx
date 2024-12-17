import React from "react";
import "./TeamGrid.css";
// Team 01
import azaib from '../images/TeamMember/azaib.png';
import mazhar from '../images/TeamMember/mazhar.png';
// import ilsa from '../images/TeamMember/ilsa.png';
// import shehriyar from '.."/images/TeamMember/shehriyar.png"';
// Team 02
import anus from '../images/TeamMember/anus.png';
import ghulam from '../images/TeamMember/ghulam.jpeg';
import rawaid from '../images/TeamMember/rawaid.jpeg';
// Team 03
import noman from '../images/TeamMember/noman.jpg';
import mariyam from '../images/TeamMember/mariyam.jpg';
import eeman from '../images/TeamMember/eeman2.jpg';
import aqsa from '../images/TeamMember/aqsa.jpg';
// Team 04
import ali from '../images/TeamMember/ali.jpeg';
import alim from '../images/TeamMember/alim.jpg';
import arisha from '../images/TeamMember/arisha.jpg';
import mahnoor from '../images/TeamMember/mahnoor.jpg';



const TeamGrid = () => {
  return (
    <div className="team-grid-container">
      {/* Leader Group 1 */}
      <div className="leader-group">
        <div className="leader">
          <img src={azaib} alt="Azaib Image" className="leader-image" />
          <h2 className="leader-title">Azaib Khan</h2>
          <p className="leader-role">Role</p>
        </div>
        <div className="team-members">
          <div className="team-member">
            <img src={mazhar} alt="Mazhar Image" className="team-member-image" />
            <h3 className="team-member-title">Mazhar Suleman Noorani</h3>
            <p className="team-member-role">Role</p>
          </div>
          {/* <div className="team-member">
            <img src={ilsa} alt="Ilsa" className="team-member-image" />
            <h3 className="team-member-title">Ilsa</h3>
            <p className="team-member-role">Role</p>
          </div>
          <div className="team-member">
            <img src={shehriyar} alt="Syed Shehriyar" className="team-member-image" />
            <h3 className="team-member-title">Syed Shehriyar</h3>
            <p className="team-member-role">Role</p>
          </div> */}
        </div>
      </div>

      {/* Leader Group 2 */}
      <div className="leader-group">
        <div className="leader">
          <img src={anus} alt="Anus Khalil" className="leader-image" />
          <h2 className="leader-title">Anus Khalil</h2>
          <p className="leader-role">Role</p>
        </div>
        <div className="team-members">
          <div className="team-member">
            <img src={ghulam} alt="Ghulam Rasool" className="team-member-image" />
            <h3 className="team-member-title">Ghulam Rasool</h3>
            <p className="team-member-role">Role</p>
          </div>
          <div className="team-member">
            <img src={rawaid} alt="Rawaid Khan" className="team-member-image" />
            <h3 className="team-member-title">Rawaid Khan</h3>
            <p className="team-member-role">Role</p>
          </div>
        </div>
      </div>

      {/* Leader Group 3 */}
      <div className="leader-group">
        <div className="leader">
          <img src={noman} alt="Noman" className="leader-image" />
          <h2 className="leader-title">Noman</h2>
          <p className="leader-role">Role</p>
        </div>
        <div className="team-members">
          <div className="team-member">
            <img src={mariyam} alt="Mariyam" className="team-member-image" />
            <h3 className="team-member-title">Mariyam</h3>
            <p className="team-member-role">Role</p>
          </div>
          <div className="team-member">
            <img src={eeman} alt="eeman" className="team-member-image" />
            <h3 className="team-member-title">Eiman</h3>
            <p className="team-member-role">Role</p>
          </div>
          <div className="team-member">
            <img src={aqsa} alt="aqsa" className="team-member-image" />
            <h3 className="team-member-title">Aqsa</h3>
            <p className="team-member-role">Role</p>
          </div>
        </div>
      </div>

      {/* Leader Group 4 */}
      <div className="leader-group">
        <div className="leader">
          <img src={ali} alt="Ali" className="leader-image" />
          <h2 className="leader-title">Ali Mehdi</h2>
          <p className="leader-role">Role</p>
        </div>
        <div className="team-members">
          <div className="team-member">
            <img src={alim} alt="Alim" className="team-member-image" />
            <h3 className="team-member-title">Alim Mohiuddin</h3>
            <p className="team-member-role">Role</p>
          </div>
          <div className="team-member">
            <img src={arisha} alt="arisha" className="team-member-image" />
            <h3 className="team-member-title">Arisha</h3>
            <p className="team-member-role">Role</p>
          </div>
          <div className="team-member">
            <img src={mahnoor} alt="mahnoor" className="team-member-image" />
            <h3 className="team-member-title">Mahnoor</h3>
            <p className="team-member-role">Role</p>
          </div>
        </div>
      </div>



      {/* Add more leader groups following the same pattern */}
    </div>
  );
};

export default TeamGrid;
