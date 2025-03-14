import React, { useState, useEffect, useRef } from "react";
import "./Services.css";
import { Link } from "react-router-dom";

const services = [
  { number: "01", title: "Cosmetic Surgery", image: "second4.png" },
  { number: "02", title: "Moles & Skin", image: "s2.png" },
  { number: "03", title: "Skin Infections", image: "s3.png" },
  { number: "04", title: "Melasma Treatment", image: "s4.png" },
  { number: "05", title: "Wart Removal", image: "s5.png" },
  { number: "06", title: "Acne Treatment", image: "s6.png" },
  // { number: "07", title: "Nail Treatment", image: "second3.png" },
  // { number: "08", title: "Anti Aging Surgery", image: "second5.png" },
  // { number: "02", title: "Moles & Skin", image: "s2.png" },
];

const statsData = [
  { id: 1, value: 4, label: "Years" },
  { id: 2, value: 8000, label: "Customers" },
  { id: 3, value: 5, label: "Branches" },
  { id: 4, value: 40, label: "Workers" },
];

const Services = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const statsRef = useRef(null);
  const observerRef = useRef(null);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startValues = statsData.map(() => 0);
          let endValues = statsData.map((stat) => stat.value);
          let duration = 3000;
          let startTime = null;

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            let progress = Math.min((timestamp - startTime) / duration, 1);

            let newValues = startValues.map((start, index) =>
              Math.floor(start + progress * (endValues[index] - start))
            );

            setCounts(newValues);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observerRef.current.observe(statsRef.current);
    }

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="services-container">
      <section className="hero">
        <h1 data-aos="fade-down">Our Services</h1>
        <p>HOME &gt; OUR SERVICES</p>
      </section>

      <section className="comprehensive-services">
        <h2 data-aos="fade-up">OUR COMPREHENSIVE SERVICES</h2>
        <p>
          At PEARLZ store, we are dedicated to providing top-quality skincare
          services tailored to meet your unique needs. Our team of experienced
          professionals utilizes advanced techniques, high-quality products,
          and the latest innovations in dermatology to deliver exceptional
          results.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <img data-aos="fade-up" src={service.image} alt={service.title} />
              <div className="service-info">
                <span>{service.number}</span>
                <h3>{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="dermatology">
        <div data-aos="zoom-in" className="dermatology-content">
          <h3>ADVANCING THE FIELD OF DERMATOLOGY</h3>
          <p>With our quality skin care product, designed for better fast effect.</p>
          <button onClick={togglePopup}>BOOK APPOINTMENT</button>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="stats" ref={statsRef}>
        {statsData.map((stat, index) => (
          <div key={stat.id} className="stat-item">
            <h4>{counts[index]}+</h4>
            <p>{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="before-after">
        <h3 data-aos="fade-down">BEFORE & AFTER TREATMENT</h3>
        <p>wild range reviews check out the section below</p>
        <div className="before-after-gallery">
          <div data-aos="fade-up" className="before-after-item">
            <img src="s4.png" alt="Before & After" />
          </div>
          <div data-aos="fade-up" className="before-after-item">
            <img src="s2.png" alt="Before & After" />
          </div>
        </div>
        <Link to="/shop">
          <button>View Shop Page</button>
        </Link>
      </section>

      <section className="dermatologyy bg-light">
        <div data-aos="zoom-in" className="dermatologyy-content">
          <h3>Want A Preffered Skin Care Product?</h3>
          <p>
            We have quality skin care product, designed for better fast effect, reach us out.
          </p>
          <Link to="/contact">
            <button>Contact Us</button>
          </Link>
        </div>
      </section>

      {showPopup && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <h2>Appointment Details</h2>
            <p>Book an appointment with our specialists today or Reach us out!</p>
            <Link to="/contact">
              <button className="btn btn-success me-2">Contact Us</button>
            </Link>
            <button onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
