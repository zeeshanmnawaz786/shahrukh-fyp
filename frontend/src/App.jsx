import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Hero from './components/Hero';
import OurTeam from './components/OurTeam';
import SocietiesSlider from './components/SocietiesSlider';
import PresWords from './components/PresWord';
import UniversityPage from './components/MainPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import RegistrationForm from './components/RegistrationForm';
import SocietyDetail from './components/SocietyDetail';
import SocietyForm from './components/SocietyForm';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <SocietiesSlider />
            <PresWords />
            <UniversityPage />
            <Contact />
          </>} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/SocietyForm" element={<SocietyForm />} />
          <Route path="/society/:id" element={<SocietyDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
