import React, { useState, useEffect, useRef } from "react";
import "./About.css";
import profileImage from "/second1.png";
import ratingImage from "/s3.png";
import { Link } from "react-router-dom";
import Faq from "../components/navbar/Faq";

const About = () => {
    const [counts, setCounts] = useState([0, 0, 0]);
    const statsRef = useRef(null);
    const observerRef = useRef(null);
    const [showPopup, setShowPopup] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    let startValues = [0, 0, 0];
                    let endValues = [4.8, 25, 50000];
                    let duration = 2000;
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

    const handleSubscribe = (e) => {
        e.preventDefault();
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
        setShowSuccessPopup(true);

        setTimeout(() => {
            setShowSuccessPopup(false);
        }, 3000);
    };

    return (
        <div className="aboutt-container">
            <section className="heroe-section">
                <h1 data-aos="fade-right" className="">About Us</h1>
                <p>
                    <span>HOME / ABOUT</span>
                </p>
            </section>

            <section className="about-content">
                <div data-aos="fade-down" className="image-container">
                    <img src={profileImage} alt="Profile" />
                </div>
                <div className="text-container">
                    <h3 data-aos="fade-down" className="mt-5">ABOUT PEARLZ</h3>
                    <h2>We Sell Top Skin Care Products</h2>
                    <span> <p>
                        At PEARLZ store, we are dedicated to providing top-quality skincare services
                        tailored to meet your unique needs. Our team of experienced professionals utilizes
                        advanced techniques, high-quality products, and the latest innovations in dermatology
                        to deliver exceptional results.
                    </p></span>
                    <div className="statss" ref={statsRef}>
                        <div className="stat-box">
                            <h4>{counts[0]}/5</h4>
                            <p>12,000+ Ratings</p>
                        </div>
                        <div className="stat-box">
                            <h4>{counts[1]}+</h4>
                            <p>Product Health</p>
                        </div>
                        <div className="stat-box">
                            <h4>{counts[2].toLocaleString()}</h4>
                            <p>Sales Worldwide</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="why-choose-us bg-light">
                <div data-aos="fade-down" className="">
                    <h3>WHY CHOOSE US ?</h3>
                    <h2>Beauty Is Power, A Smile Is Its Sword</h2>
                </div>

                <div data-aos="zoom-in" className="features">
                    <div className="feature-box">100% Organic</div>
                    <div className="feature-box">Improve Health</div>
                    <div className="feature-box">Biological Safe</div>
                    <div className="experience">04+ Years Experience</div>
                </div>
                <Link to="/shop">
                    <button className="explore-btn">Explore Our Products</button>
                </Link>
            </section>
            <Faq />

            <section className="reviews">
                <div data-aos="fade-down" className="review-images">
                    <img src={ratingImage} alt="Reviews" />
                </div>
                <div className="text-container">
                    <h3>WE GIVE THE BEST</h3>
                    <h2>Because You Need Time For Yourself</h2>
                    <p>Trusted by Over 8K+ Customers</p>
                    <Link to="/shop">
                        <button className="btn btn-success" type="submit">Check Our Shop</button>
                    </Link>
                </div>
                <div className="newsletter">
                    <div data-aos="fade-down" className="newsletter-card">
                        <h3>STAY UPDATED</h3>
                        <h2>Subscribe to Our Newsletter</h2>
                        <p>Get the latest updates, skincare tips, and exclusive offers delivered straight to your inbox.</p>
                        <form className="newsletter-form" onSubmit={handleSubscribe}>
                            <input type="email" placeholder="Enter your email" required />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Success Message Popup */}
            {showSuccessPopup && (
                <div className="success-modal">
                    <div className="success-card">
                        <div className="checkmark">
                            <svg viewBox="0 0 52 52">
                                <circle cx="26" cy="26" r="25" fill="none" />
                                <path fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" d="M14 27l7 7 16-16" />
                            </svg>
                        </div>
                        <h3>Subscription Successful!</h3>
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;
