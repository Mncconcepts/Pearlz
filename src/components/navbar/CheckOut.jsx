import React, { useState, useEffect } from "react";
import "./CheckOut.css";

const CheckOut = () => {
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Fetch products from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (Show Popup First)
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  // Handle Yes Button (Start Processing Payment)
  const handleYes = () => {
    setShowPopup(false);
    setIsProcessing(true);

    // Simulate 20 seconds payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
    }, 20000);
  };

  return (
    <div className="checkout-container">
      {/* Left Side - Selected Products */}
      <div className="cartt-summary">
        <h2>Selected Products</h2>
        <div className="cart-items-container">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <p>{item.name}</p>
                  <p>{item.quantity} x ${item.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No products in the cart.</p>
          )}
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="checkout-form">
        <h2>Enter Your Details</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Your Address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="checkout-btn">Place Order</button>
        </form>
      </div>

      {/* Confirmation Popup */}
      {showPopup && (
        <div className="poopup-overlay">
          <div className="poopup-card">
            <p>Are you sure you want to process your payment?</p>
            <div className="poopup-buttons">
              <button onClick={handleYes} className="yes-btn">Yes</button>
              <button onClick={() => setShowPopup(false)} className="no-btn">No</button>
            </div>
          </div>
        </div>
      )}

      {/* Processing Payment Loader */}
      {isProcessing && (
        <div className="processing-overlay">
          <div className="looader"></div>
          <p className="text-white text-bold ms-2">Processing Payment...</p>
        </div>
      )}

      {/* Payment Success Message */}
      {paymentSuccess && (
        <div className="success-overlayy">
          <h2>Payment Successfully!</h2>
          <p>Goods on the way now.</p>
          <div className="dispatch-image-container">
            <img src="/rider1.png" alt="Dispatch Rider" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOut;
