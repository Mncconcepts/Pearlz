import React, { useState, useEffect } from "react";
import "./WelcomePage.css";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const [textIndex, setTextIndex] = useState(0);
  const navigate = useNavigate();

  const titleText = "PEARLZ";

  useEffect(() => {
    // Typing effect for the title
    if (textIndex < titleText.length) {
      const timer = setTimeout(() => {
        setTextIndex((prevIndex) => prevIndex + 1);
      }, 300); 
      return () => clearTimeout(timer);
    }

    // Navigate after animation completes
    if (textIndex === titleText.length) {
      const navigateTimer = setTimeout(() => {
        navigate("/welcome2");
      }, 6000);
      return () => clearTimeout(navigateTimer);
    }
  }, [textIndex, titleText, navigate]);

  return (
    <div className="bdy">
      <div className="welcome-container">
        <h1 className="title fade-slide-in">
          {titleText.slice(0, textIndex)}
        </h1>
      </div>
    </div>
  );
};

export default WelcomePage;
