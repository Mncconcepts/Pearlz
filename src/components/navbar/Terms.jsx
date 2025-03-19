import React, { useEffect, useState } from 'react';
import './Terms.css';
import { FaUserShield } from 'react-icons/fa'; // Importing privacy icon
import { Link } from 'react-router-dom';

const Terms = () => {
    const [showCard, setShowCard] = useState(false);

    useEffect(() => {
        setTimeout(() => setShowCard(true), 100);
    }, []);

    return (
        <div className="terms-container">
            <div className={`blur-overlay ${showCard ? 'active' : ''}`} />
            <div className={`terms-card ${showCard ? 'active' : ''}`}>
                <div className="privacy-icon">
                    <FaUserShield size={50} />
                </div>

                <div className="terms-content">
                    <h1>Terms & Privacy Policy</h1>

                    <h2>Terms of Service</h2>
                    <p>
                        Welcome to PEARLZ. By accessing our website, you agree to comply with our terms. All skincare products are
                        intended for personal use only. Unauthorized resale, duplication, or distribution is strictly prohibited.
                        We may update our terms at any time without prior notice. Continued use constitutes acceptance.
                    </p>

                    <h2>Privacy Policy</h2>
                    <p>
                        PEARLZ is committed to protecting your privacy. We collect information (name, email, shipping address) only
                        to fulfill orders and offer support. Your data is never sold or shared. Payment information is encrypted and
                        handled securely via trusted third-party gateways. You may unsubscribe from marketing emails anytime.
                    </p>

                    <h2>Payment Terms</h2>
                    <p>
                        All payments must be made in full at the time of order placement. We accept major credit/debit cards, PayPal,
                        and other payment options offered at checkout. Orders will not be processed until payment is successfully
                        completed. PEARLZ reserves the right to cancel orders if fraudulent activity is suspected.
                    </p>

                    <h2>Order Issues</h2>
                    <p>
                        If you experience issues with your order (wrong item, damaged product, delayed shipping), please contact our
                        support team within 7 days of receiving the product. We will work promptly to resolve the issue. Refunds and
                        exchanges are subject to our return policy, available upon request.
                    </p>
                    <Link to="/signup">
                        <button className='terms-button w-100'>Agree and Continue</button>
                    </Link>
                    <p className="footer">© 2025 PEARLZ. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Terms;
