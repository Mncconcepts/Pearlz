import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes, useLocation, Outlet, useNavigate } from "react-router-dom";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Signup from "./components/navbar/Signup";
import Login from "./components/navbar/Login";
import Footer from "./components/navbar/Footer";
import WelcomePage from "./components/navbar/WelcomePage";
import Loader from "./components/navbar/Loader";
import Terms from "./components/navbar/Terms";

const Home = () => <h1></h1>;

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (profile) => {
    setUser(profile);
    navigate("/home");
  };

  const isWelcomePage = location.pathname === "/";
  const isTermsPage = location.pathname === "/terms";

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: true,
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // Skip loader for WelcomePage
    if (isWelcomePage) {
      setLoading(false);
      return;
    }

    // Optional: Skip loader on small screens for performance
    const isSmallScreen = window.innerWidth <= 576;
    if (isSmallScreen) {
      setLoading(false);
      return;
    }

    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<WelcomePage onLogin={handleLogin} />} />
            <Route path="/terms" element={<Terms onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup onLogin={handleLogin} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/home" element={<Home />} />
          </Routes>

          {!isWelcomePage && !isTermsPage && (
            <>
              <Navbar user={user} />
              <div className="main-container">
                <div className="content">
                  <Outlet />
                </div>
                <Footer />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
