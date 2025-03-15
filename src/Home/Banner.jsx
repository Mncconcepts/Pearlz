import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Banner.css";
import { Link } from "react-router-dom";

const Hero = () => {
  
  const ratingCount = Math.floor(Math.random() * 50) + 1;

  const customerCount = Math.floor(Math.random() * 50) + 1 + "k+ Customers";

  return (
    <section className="hero-section">
      {/* Left Side - Text Content */}
      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          The Essence Of Health & Vitality in One Place
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          With our top quality skin product, Discover premium products with unbeatable 
          deals and top-rated customer service, wild range quality products just for you, 
          explore more beautiful products by clicking on the start shopping button
        </motion.p>

        {/* Ratings & Customer Counts */}
        <motion.div
          className="hero-ratings"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* Rating */}
          <div className="rating">
            <FaStar className="star active" />
            <FaStar className="star active" />
            <FaStar className="star active" />
            <FaStar className="star active" />
            <FaStar className="star inactive" />
            <span className="rating-text">({ratingCount}/50)</span>
          </div>

          {/* Customer Count */}
          <div className="customer-count">
            <span className="highlight">{customerCount}</span>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.button
          className="hero-btn"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link to="/shop" className="hero-btn-link">Start Shopping</Link>
        </motion.button>
      </div>

      {/* Right Side - Background Image */}
      <div className="hero-image">
      </div>
    </section>
  );
};

export default Hero;
