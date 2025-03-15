import React, { useState, useEffect } from "react";
import "./WelcomePage.css";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [showTitle, setShowTitle] = useState(false);
  const [whiteBg, setWhiteBg] = useState(false);
  const navigate = useNavigate();

  const titleText = "PEARLZ";

  useEffect(() => {
    // Change background to white after the circle covers the screen
    const bgTimer = setTimeout(() => {
      setWhiteBg(true);
    }, 2500);

    // Show title after background is fully white
    const textTimer = setTimeout(() => {
      setShowTitle(true);
    }, 2000);

    return () => {
      clearTimeout(bgTimer);
      clearTimeout(textTimer);
    };
  }, []);

  useEffect(() => {
    if (showTitle && textIndex < titleText.length) {
      const letterTimer = setTimeout(() => {
        setTextIndex((prevIndex) => prevIndex + 1);
      }, 300);
      return () => clearTimeout(letterTimer);
    }

    if (textIndex === titleText.length) {
      const navigateTimer = setTimeout(() => {
        navigate("/welcome2");
      }, 7000);
      return () => clearTimeout(navigateTimer);
    }
  }, [textIndex, showTitle, titleText, navigate]);

  return (
    <div className={`bdy ${whiteBg ? "white-bg" : ""}`}>
      {/* Sliding Circle Animation */}
      <div className="circle"></div>

      <div className="welcome-container">
        {showTitle && <h1 className="title">{titleText}</h1>}
      </div>
    </div>
  );
};

export default WelcomePage;
