import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Help.css';

const Help = () => {
    const [showTicketForm, setShowTicketForm] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [ticketDetails, setTicketDetails] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setTicketDetails({ ...ticketDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setShowTicketForm(false);
        setShowSuccessPopup(true);

        setTimeout(() => {
            setShowSuccessPopup(false);
            setTicketDetails({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

    return (
        <div className="helps-section">
            <div data-aos="fade-left" className="helps-header">
                <h3>Need help?</h3>
                <p>We are always here for you. Reach out to us anytime</p>
            </div>

            <div className="helps-cards">
                <div data-aos="fade-up" className="helps-card">
                    <div className="helps-image">
                        <img src="/s6.png" alt="Customer Support" />
                    </div>
                    <div className="helps-content">
                        <h4>Customer Support</h4>
                        <p> Our dedicated and friendly support team is available around the clock, 
                            24 hours a day, 7 days a week, to assist you with any questions, concerns, 
                            or technical issues you may encounter. We are committed to providing you with 
                            timely, efficient, and helpful solutions to ensure a seamless experience.
                            Whether you need guidance with our services, have inquiries about our products, 
                            or require troubleshooting assistance, we are here to help. You can reach out to us 
                            at any time through multiple convenient channels, including live chat, email, and phone support.
                           </p>
                        <Link to="/contact">
                            <button>Contact Support</button>
                        </Link>
                    </div>
                </div>

                {/* Ticket Support */}
                <div data-aos="fade-up" className="helps-card">
                    <div className="helps-content">
                        <h4>Ticket Support</h4>
                        <p> If you are facing a complex issue that requires in-depth assistance,
                            we encourage you to submit a support ticket. Our dedicated team carefully
                            reviews each request to provide a thorough and effective resolution.
                            We are committed to addressing your concerns promptly, ensuring that
                            you receive the best possible support experience. No matter how big or
                            small your issue may be, our experts are here to guide you through the
                            process and deliver a solution tailored to your needs. </p>
                        <button onClick={() => setShowTicketForm(true)}>Submit a Ticket</button>
                    </div>
                    <div className="helps-image">
                        <img src="/blog5.png" alt="Ticket Support" />
                    </div>
                </div>

                {/* FAQ */}
                <div data-aos="fade-up" className="helps-card">
                    <div className="helps-image">
                        <img src="/blog6.png" alt="FAQ" />
                    </div>
                    <div className="helps-content">
                        <h4>FAQ</h4>
                        <p> Explore our comprehensive Frequently Asked Questions FAQ
                            section to find quick and reliable answers to the most
                            common inquiries. We have carefully compiled a wide range
                            of questions and detailed responses to help you resolve issues
                            efficiently, without the need to wait for support assistance.
                            Whether you need help with account management, troubleshooting,
                            or general guidance, our FAQ section is designed to provide
                            instant solutions. Save time by browsing through our well-organized
                            topics and get the information you need, whenever you need it. </p>
                        <Link to="/faq">
                            <button>Explore FAQ</button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Ticket Form Modal */}
            {showTicketForm && (
                <div className="ticket-modal">
                    <div className="ticket-card">
                        <h3>Submit a Ticket</h3>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="name" placeholder="Your Name" value={ticketDetails.name} onChange={handleInputChange} required />
                            <input type="email" name="email" placeholder="Your Email" value={ticketDetails.email} onChange={handleInputChange} required />
                            <input type="text" name="subject" placeholder="Subject" value={ticketDetails.subject} onChange={handleInputChange} required />
                            <textarea name="message" placeholder="Describe your issue" value={ticketDetails.message} onChange={handleInputChange} required />
                            <div className="ticket-buttons">
                                <button type="submit" className="btn-submit">Submit</button>
                                <button type="button" className="btn-cancel" onClick={() => setShowTicketForm(false)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

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
                        <h3>Message Sent Successfully!</h3>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Help;
