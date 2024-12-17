import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SocietiesSlider.css';

import society1 from '../images/Societies/Society1.png';
import society2 from '../images/Societies/Society2.png';
import society3 from '../images/Societies/Society3.png';
import society4 from '../images/Societies/Society4.png';
import society5 from '../images/Societies/Society5.png';
import society6 from '../images/Societies/Society6.png';
import society7 from '../images/Societies/Society7.png';
import society8 from '../images/Societies/Society8.png';
import society9 from '../images/Societies/Society9.png';
import society10 from '../images/Societies/Society10.png';
import society11 from '../images/Societies/Society11.png';
import society12 from '../images/Societies/Society12.png';
import society13 from '../images/Societies/Society13.png';
import society14 from '../images/Societies/Society14.png';
import society15 from '../images/Societies/Society15.png';
import society16 from '../images/Societies/Society16.png';

const SocietiesSlider = () => {
  const navigate = useNavigate();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const societies = [
    { id: 1, name: 'Readers & Writers', image: society1 },
    { id: 2, name: 'Dramatic & Alliance', image: society2 },
    { id: 3, name: 'Beats & Buzz', image: society3 },
    { id: 4, name: 'Sports Society', image: society4 },
    { id: 5, name: 'Beats Breaker', image: society5 },
    { id: 6, name: 'Quills and Scroll', image: society6 },
    { id: 7, name: 'Culinary Cooks', image: society7 },
    { id: 8, name: 'Tech Titans', image: society8 },
    { id: 9, name: 'Rhetoric Realm', image: society9 },
    { id: 10, name: 'Logistics Edge', image: society10 },
    { id: 11, name: 'Cinemagic', image: society11 },
    { id: 12, name: 'Community Cares', image: society12 },
    { id: 13, name: 'Trads & Transitions', image: society13 },
    { id: 14, name: 'Stitch & Stroke Club', image: society14 },
    { id: 15, name: 'Entrepreneurship', image: society15 },
    { id: 16, name: 'Psych Squad', image: society16 },
  ];

  const handleKnowMoreClick = (id) => {
    navigate(`/society/${id}`);
  };

  return (
    <div className="container my-5" id='OurSociety'>
      <Slider {...settings} className='main-societies'>
        {societies.map((society) => (
          <div key={society.id} className="society-slide">
            <div className="image-wrapper">
              <img src={society.image} alt={society.name} className="img-fluid" />
            </div>
            <h3>{society.name}</h3>
            <button id='sent' onClick={() => handleKnowMoreClick(society.id)}>Know more</button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SocietiesSlider;
