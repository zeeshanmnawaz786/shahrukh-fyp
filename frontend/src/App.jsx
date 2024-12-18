import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Hero from "./components/Hero";
import OurTeam from "./components/OurTeam";
import SocietiesSlider from "./components/SocietiesSlider";
import PresWords from "./components/PresWord";
import UniversityPage from "./components/MainPage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import RegistrationForm from "./components/RegistrationForm";
import SocietyDetail from "./components/SocietyDetail";
import SocietyForm from "./components/SocietyForm";
import AdminDashboard from "./components/AdminDashboard";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Check role from localStorage
    const role = localStorage.getItem("role");
    console.log("🚀 ~ useEffect ~ role:", role === "admin");
    setIsAdmin(role === "admin");

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
          <Route path="/our-team" element={<OurTeam />} />
          <Route
            path="/"
            element={
              <>
                <Hero />
                <SocietiesSlider />
                <PresWords />
                <UniversityPage />
                <Contact />
              </>
            }
          />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/SocietyForm" element={<SocietyForm />} />
          <Route path="/society/:id" element={<SocietyDetail />} />
          {isAdmin ? (
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          ) : (
            <Route path="/admin-dashboard" element={<Navigate to="/" />} />
          )}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
