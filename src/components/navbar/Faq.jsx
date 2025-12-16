import React, { useState } from 'react';
import './Faq.css';
import { Link } from 'react-router-dom';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showForm, setShowForm] = useState(false); // State to control form visibility
  const [buttonText, setButtonText] = useState("Send Message"); // Button state

  const faqs = [
    {
      question: "What skincare routine is best for glowing skin?",
      answer: "A complete skincare routine includes cleansing, toning, moisturizing, and sun protection. Incorporate serums with Vitamin C and hyaluronic acid for hydration and a natural glow.",
    },
    {
      question: "Which products are suitable for sensitive skin?",
      answer: "Gentle, fragrance-free products with soothing ingredients like chamomile, aloe vera, and niacinamide are ideal for sensitive skin. Avoid harsh exfoliants and alcohol-based products.",
    },
    {
      question: "How can I reduce acne and breakouts?",
      answer: "Use a cleanser with salicylic acid or benzoyl peroxide, followed by a non-comedogenic moisturizer. Spot treatments with tea tree oil or retinoids can also help reduce breakouts.",
    },
    {
      question: "What is the importance of sunscreen in skincare?",
      answer: "Sunscreen protects your skin from harmful UV rays, preventing premature aging, dark spots, and skin cancer. Use a broad-spectrum SPF 30 or higher daily, even on cloudy days.",
    },
    {
      question: "How do I choose the right moisturizer for my skin type?",
      answer: "For oily skin, opt for lightweight, oil-free moisturizers. Dry skin benefits from richer creams with hyaluronic acid or ceramides, while combination skin needs a balanced formula.",
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Submitting...");

    setTimeout(() => {
      setButtonText("Sent Successfully!");
      setTimeout(() => {
        setButtonText("Send Message");
        setShowForm(false);
      }, 2000);
    }, 2000);
  };

  return (
    <div className="faq-section">
      <div className="faq-container">
        <div className="faq-questions">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div>{faq.question}</div>
              <div>+</div>
              {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>

        <div className="contact-box">
          <h3>Have More Questions?</h3>
          <p>Get expert advice on the best skincare routines, products, and tips to keep your skin healthy and glowing.</p>

          <button onClick={() => setShowForm(true)}>Send a Direct Mail</button>
        </div>
      </div>

      {/* Popup Form */}
      {showForm && (
        <div className="popupp-form">
          <div className="popupp-content">
            <span className="closee-btn" onClick={() => setShowForm(false)}>&times;</span>
            <h2>Send a Direct Message</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit" disabled={buttonText === "Submitting..."}>{buttonText}</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Faq;
