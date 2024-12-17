import React from 'react';
import { useParams } from 'react-router-dom';
import {
  FaTheaterMasks,
  FaChalkboardTeacher,
  FaBook,
  FaUserFriends,
  FaMusic,
  FaPodcast,
  FaDrum,
  FaHeadphones,
  FaFootballBall,
  FaMedal,
  FaPeopleCarry,
  FaTrophy,
  FaGuitar,
  FaMicrophone,
  FaCompactDisc,
  FaUtensils,
  FaPepperHot,
  FaBlender,
  FaCarrot,
  FaLaptopCode,
  FaRobot,
  FaNetworkWired,
  FaMicrochip,
  FaFilm,
  FaVideo,
  FaPenFancy,
  FaCamera,
  FaHandsHelping,
  FaLeaf,
  FaHeart,
  FaHome,
  FaHistory,
  FaLandmark,
  FaPalette,
  FaCut,
  FaPaintBrush,
  FaGlobe,
  FaLightbulb,
  FaMoneyCheckAlt,
  FaChartLine,
  FaHandshake,
  FaFeatherAlt, // Added
  FaScroll, // Added
  FaPenNib, // Added
  FaBookOpen, // Added
  FaComments, // Added
  FaTruck, // Added
  FaWarehouse, // Added
  FaPlaneDeparture, // Added
  FaIndustry, // Added
  FaBrain,
} from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SocietyDetail.css';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

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



const societies = [
  { id: 1, name: 'Readers & Writers', image: society1, para: 'The Readers and Writers Society, Part of the ACP Youth Ambassador programme at the Arts Council of Pakistan, Karachi. It is designed for anyone who loves reading and writing.' },
  { id: 2, name: 'Dramatic & Alliance', image: society2, para: 'Part of the ACP Youth Ambassador programme at the Arts Council of Pakistan, Karachi, this society is perfect for those who are passionate about the arts. Whether you love the thrill of drama, the creativity of alliances, or the power of words, our society offers a platform for everyone who enjoys reading, writing, and artistic collaboration.' },
  { id: 3, name: 'Beats & Buzz', image: society3, para: 'The Beats and Buzz Society, part of the ACP Youth Ambassador programme at the Arts Council of Pakistan, Karachi, is designed for anyone who is passionate about music and entertainment.' },
  { id: 4, name: 'Sports Society', image: society4, para: 'The Sports Society, part of the ACP Youth Ambassador programme at the Arts Council of Pakistan, Karachi. This society is perfect for those who have a passion for sports and physical activities.' },
  { id: 5, name: 'Beats Breaker', image: society5, para: 'The Beats Breaker Society, part of the ACP Youth Ambassador programme at the Arts Council of Pakistan, Karachi. This society is designed for individuals who are passionate about dance, music, and the art of movement.' },
  { id: 6, name: 'Quills and Scroll', image: society6, para: 'The Quills and Scroll Society, part of the ACP Youth Ambassador programme at the Arts Council of Pakistan, Karachi. This society is perfect for anyone who enjoys the art of writing, calligraphy, and preserving history through words.' },
  { id: 7, name: 'Culinary Cooks', image: society7, para: 'The Culinary Cooks Society, part of the ACP Youth Ambassador programme at the Arts Council of Pakistan, Karachi. This society is designed for those who have a love for cooking, baking, and the culinary arts.' },
  { id: 8, name: 'Tech Titans', image: society8, para: 'The Tech Titans Society, part of the ACP Youth Ambassador programme at the Arts Council of Pakistan, Karachi. This society is ideal for individuals who are enthusiastic about technology, coding, and innovation.' },
  { id: 9, name: 'Rhetoric Realm', image: society9, para: 'The Rhetoric Realm Society, part of the ACP Youth Ambassador programme at the Arts Council of Pakistan, Karachi. This society is for those who are passionate about public speaking, debate, and the power of persuasion.' },
  { id: 10, name: 'Logistics Edge', image: society10, para: 'The Logistics Edge Society, part of the ACP Youth Ambassador programme at the Arts Council of Pakistan, Karachi. This society is for individuals interested in logistics, management, and the efficient flow of resources.' },
  { id: 11, name: 'Cinemagic', image: society11, para: 'The Cinemagic Society, part of the ACP Youth Ambassador programme at the Arts Council of Pakistan, Karachi. This society is designed for those who are passionate about filmmaking, acting, and the magic of cinema.' },
  { id: 12, name: 'Community Cares', image: society12, para: 'The Community Cares Society, part of the ACP Youth Ambassador programme at the Arts Council of Pakistan, Karachi. This society is for individuals who are committed to community service, social welfare, and making a positive impact.' },
  { id: 13, name: 'Traditions & Transitions', image: society13, para: 'The Traditions & Transitions Society, part of the ACP Youth Ambassador programme at the Arts Council of Pakistan, Karachi. This society focuses on preserving cultural heritage while embracing modern transitions and changes.' },
  { id: 14, name: 'Stitch & Stroke Club', image: society14, para: 'The Stitch & Stroke Club, part of the ACP Youth Ambassador programme at the Arts Council of Pakistan, Karachi. This society is designed for those who are passionate about textile arts, embroidery, painting, and creative craftsmanship.' },
  { id: 15, name: 'Entrepreneurship Club', image: society15, para: 'The Entrepreneurship Club, part of the ACP Youth Ambassador programme at the Arts Council of Pakistan, Karachi. This society is ideal for individuals who are interested in business, startups, and innovative ventures.' },
  { id: 16, name: 'Psych Squad', image: society16, para: 'The Psych Squad, part of the ACP Youth Ambassador programme at the Arts Council of Pakistan, Karachi. This society is focused on psychology, mental health, and understanding human behavior.' },
];

// Function to get slider content based on society ID
const getSliderContent = (societyId) => {
  switch (societyId) {
    case 1:
      return [
        { icon: <FaBook />, title: 'Reading Session', description: 'Join us for engaging reading sessions.' },
        { icon: <FaChalkboardTeacher />, title: 'Writing Workshop', description: 'Improve your writing skills with our workshops.' },
        { icon: <FaBook />, title: 'Book Club', description: 'Discuss and explore books in our club.' },
        { icon: <FaUserFriends />, title: 'Author Event', description: 'Meet and interact with famous authors.' }
      ];
    case 2:
      return [
        { icon: <FaTheaterMasks />, title: 'Drama Performance', description: 'Immerse yourself in captivating drama performances.' },
        { icon: <FaChalkboardTeacher />, title: 'Alliance Workshop', description: 'Enhance your collaborative skills with our alliance workshops.' },
        { icon: <FaTheaterMasks />, title: 'Theater Club', description: 'Join discussions and explorations of dramatic arts in our club.' },
        { icon: <FaUserFriends />, title: 'Artist Meet & Greet', description: 'Meet and interact with renowned artists and performers.' }
      ];
    case 3:
      return [
        { icon: <FaMusic />, title: 'Music Jam Session', description: 'Join us for energetic and creative jam sessions.' },
        { icon: <FaPodcast />, title: 'Podcast Workshop', description: 'Learn the art of podcasting with our expert-led workshops.' },
        { icon: <FaDrum />, title: 'Rhythm Club', description: 'Explore the world of beats and rhythm in our club.' },
        { icon: <FaHeadphones />, title: 'DJ Meet & Greet', description: 'Meet and interact with top DJs and music producers.' }
      ];
    case 4:
      return [
        { icon: <FaFootballBall />, title: 'Sports Tournaments', description: 'Compete in exciting sports tournaments.' },
        { icon: <FaMedal />, title: 'Training Sessions', description: 'Enhance your skills with professional training sessions.' },
        { icon: <FaPeopleCarry />, title: 'Team Building', description: 'Engage in team-building exercises and activities.' },
        { icon: <FaTrophy />, title: 'Awards Ceremony', description: 'Celebrate achievements with our awards ceremony.' }
      ];

    case 5:
      return [
        { icon: <FaGuitar />, title: 'Guitar Sessions', description: 'Learn and enjoy guitar playing sessions.' },
        { icon: <FaMusic />, title: 'Music Production Workshop', description: 'Get hands-on experience in music production.' },
        { icon: <FaMicrophone />, title: 'Vocal Training', description: 'Enhance your singing skills with vocal training.' },
        { icon: <FaCompactDisc />, title: 'Album Launch', description: 'Participate in album launch events.' }
      ];
    case 6:
      return [
        { icon: <FaFeatherAlt />, title: 'Calligraphy Workshop', description: 'Master the art of calligraphy in our workshops.' },
        { icon: <FaScroll />, title: 'Historical Manuscripts', description: 'Explore ancient scrolls and manuscripts.' },
        { icon: <FaPenNib />, title: 'Creative Writing', description: 'Join creative writing sessions.' },
        { icon: <FaBookOpen />, title: 'Literature Discussions', description: 'Engage in literature discussions and analyses.' }
      ];
    case 7:
      return [
        { icon: <FaUtensils />, title: 'Cooking Classes', description: 'Learn to cook delicious dishes in our classes.' },
        { icon: <FaPepperHot />, title: 'Spice Workshop', description: 'Explore the world of spices in our workshop.' },
        { icon: <FaBlender />, title: 'Baking Sessions', description: 'Bake your favorite treats in our sessions.' },
        { icon: <FaCarrot />, title: 'Healthy Cooking', description: 'Focus on healthy cooking techniques and recipes.' }
      ];
    case 8:
      return [
        { icon: <FaLaptopCode />, title: 'Coding Bootcamp', description: 'Enhance your coding skills in our bootcamp.' },
        { icon: <FaRobot />, title: 'AI & Robotics', description: 'Dive into AI and robotics projects.' },
        { icon: <FaNetworkWired />, title: 'Networking Workshop', description: 'Learn about computer networking and security.' },
        { icon: <FaMicrochip />, title: 'Tech Expo', description: 'Showcase your tech innovations at our expo.' }
      ];
    case 9:
      return [
        { icon: <FaMicrophone />, title: 'Debate Club', description: 'Join spirited debates on various topics.' },
        { icon: <FaChalkboardTeacher />, title: 'Public Speaking Workshop', description: 'Enhance your public speaking skills.' },
        { icon: <FaComments />, title: 'Panel Discussions', description: 'Participate in insightful panel discussions.' },
        { icon: <FaPodcast />, title: 'Speech Contests', description: 'Compete in speech contests and win prizes.' }
      ];
    case 10:
      return [
        { icon: <FaTruck />, title: 'Supply Chain Workshop', description: 'Master supply chain management.' },
        { icon: <FaWarehouse />, title: 'Logistics Management', description: 'Learn the ins and outs of logistics management.' },
        { icon: <FaPlaneDeparture />, title: 'Global Trade', description: 'Explore global trade and its impact on logistics.' },
        { icon: <FaIndustry />, title: 'Industry Insights', description: 'Gain insights into the logistics industry.' }
      ];
    case 11:
      return [
        { icon: <FaFilm />, title: 'Film Screenings', description: 'Enjoy screenings of classic and contemporary films.' },
        { icon: <FaVideo />, title: 'Filmmaking Workshop', description: 'Learn the art of filmmaking in our workshop.' },
        { icon: <FaPenFancy />, title: 'Scriptwriting Sessions', description: 'Hone your scriptwriting skills.' },
        { icon: <FaCamera />, title: 'Photography Club', description: 'Capture the magic of cinema through photography.' }
      ];
    case 12:
      return [
        { icon: <FaHandsHelping />, title: 'Volunteer Program', description: 'Join our volunteer program and give back to the community.' },
        { icon: <FaLeaf />, title: 'Environmental Campaign', description: 'Participate in environmental campaigns and activities.' },
        { icon: <FaHeart />, title: 'Charity Events', description: 'Support charitable causes through our events.' },
        { icon: <FaHome />, title: 'Community Building', description: 'Help build a stronger community through various initiatives.' }
      ];
    case 13:
      return [
        { icon: <FaHistory />, title: 'Cultural Heritage Workshop', description: 'Learn about and preserve cultural heritage.' },
        { icon: <FaLandmark />, title: 'Historical Tours', description: 'Explore historical sites and their significance.' },
        { icon: <FaTheaterMasks />, title: 'Traditional Arts', description: 'Participate in traditional arts and crafts sessions.' },
        { icon: <FaGlobe />, title: 'Cultural Exchange', description: 'Engage in cultural exchange programs.' }
      ];
    case 14:
      return [
        { icon: <FaCut />, title: 'Sewing Workshop', description: 'Master sewing techniques in our workshop.' },
        { icon: <FaPaintBrush />, title: 'Painting Classes', description: 'Unleash your creativity in painting classes.' },
        { icon: <FaPalette />, title: 'Art Exhibitions', description: 'Showcase your artwork in our exhibitions.' },
        { icon: <FaPenFancy />, title: 'Crafting Sessions', description: 'Join our crafting sessions and create beautiful items.' }
      ];
    case 15:
      return [
        { icon: <FaLightbulb />, title: 'Startup Workshops', description: 'Learn how to start and grow your own business.' },
        { icon: <FaMoneyCheckAlt />, title: 'Investment Sessions', description: 'Explore investment opportunities and strategies.' },
        { icon: <FaChartLine />, title: 'Market Analysis', description: 'Understand market trends and consumer behavior.' },
        { icon: <FaHandshake />, title: 'Networking Events', description: 'Connect with entrepreneurs and industry leaders.' }
      ];
    case 16:
      return [
        { icon: <FaBrain />, title: 'Mindfulness Workshops', description: 'Enhance your mental well-being with mindfulness practices.' },
        { icon: <FaComments />, title: 'Psychological Counseling', description: 'Receive guidance and support from professional counselors.' },
        { icon: <FaFeatherAlt />, title: 'Creative Expression Sessions', description: 'Explore your creativity as a form of therapy.' },
        { icon: <FaBookOpen />, title: 'Mental Health Awareness', description: 'Learn about mental health and how to maintain it.' }
      ];
    // Add more cases for other societies
    default:
      return [];
  }
};


const SocietyDetail = () => {
  const navigate = useNavigate();

  const handleSocietyFormClick = () => {
    navigate('/SocietyForm');
  };

  const { id } = useParams();
  const society = societies.find((s) => s.id === parseInt(id));

  if (!society) {
    return <div>Society not found</div>;
  }

  const sliderContent = getSliderContent(society.id);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
  };

  return (
    <div className="container my-5">
      <img src={society.image} alt={society.name} className="society-image" />
      <h1 className='societyName fs-1 fw-bold'>{society.name}</h1>
      <h6>{society.para}</h6>

      <Slider {...sliderSettings} className="society-slider">
        {sliderContent.map((item, index) => (
          <div key={index} className="slider-item">
            <div className="slider-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </Slider>
      <div className="text-center mt-4">
        <Button variant="dark" className="register-btn px-4 fw-bold" onClick={handleSocietyFormClick}>
          Join Now
        </Button>
      </div>
    </div>
  );

};

export default SocietyDetail;
