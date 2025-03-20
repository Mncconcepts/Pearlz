import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import "./Welcome2.css";

const Welcome2 = () => {
  const navigate = useNavigate();
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 500);
  }, []);

  return (
    <div className="welcomee-container">

      <div className='back-arrow'
        style={{ position: 'absolute', top: '20px', left: '20px', cursor: 'pointer', zIndex: 10 }}
        onClick={() => navigate(-1)}
      > <p style={{ cursor: 'pointer' }} onClick={() => navigate(-1)}>
          ← Back
        </p>
        <FontAwesomeIcon icon={faArrowLeft} color="#fff" size="lg" />
      </div>

      <motion.img
        src="/welcome6.jpg"
        alt="Skincare"
        className="welcome-image"
        initial={{ scale: 1, opacity: 2 }}
        animate={{ scale: [1, 1.1, 1], opacity: 4 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear"
        }}
      />

      {/* Typing effect text */}
      {showText && (
        <h1 className="welcome-text">
          <Typewriter
            options={{
              strings: 'Welcome To PEARL, Your One-Stop Shopify Skincare Website.',
              autoStart: true,
              loop: false,
            }}
          />
        </h1>
      )}

      {/* Buttons */}
      <div className="button-container">
        <button
          className="welcome-button"
          onClick={() => navigate('/welcome3')}
        >
          Next
        </button>
        <button
          className="welcome-skip"
          onClick={() => navigate('/terms')}
        >
          Skip
        </button>
      </div>
      
      {/* Slide Indicator Dots */}
      <div className="dots-container">
        <span className="dot active"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Welcome2;
