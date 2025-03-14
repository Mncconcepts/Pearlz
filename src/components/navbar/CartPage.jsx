import React, { useState, useEffect } from "react";
import "./CartPage.css";
import { motion } from "framer-motion";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [shipping, setShipping] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);

    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const handleQuantityChange = (id, change) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    setCart((prevCart) =>
      prevCart.map((item) => ({
        ...item,
        quantity: item.quantity || 1,
      }))
    );
  }, []);

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const subtotal = cart.reduce((acc, item) => {
    const itemPrice = parseFloat(item.price) || 0;
    const itemQuantity = parseInt(item.quantity, 10) || 0;
    return acc + itemPrice * itemQuantity;
  }, 0);

  const total = subtotal + shipping;

  return (
    <div className="cart-container">
      <div className={`cart-content ${showPopup ? "blurred" : ""}`}>
        <h1 className="cart-title">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td className="product-info">
                      <img src={item.img} alt={item.name} className="productt-img" />
                      <div>
                        <p className="product-name">{item.name}</p>
                        <button onClick={() => removeItem(item.id)} className="btn remove-btn">
                          Remove
                        </button>
                      </div>
                    </td>
                    <td>
                      <div className="quantity-control">
                        <button onClick={() => handleQuantityChange(item.id, -1)} className="qty-btn">
                          -
                        </button>
                        <span className="qty-text">{item.quantity}</span>
                        <button onClick={() => handleQuantityChange(item.id, 1)} className="qty-btn">
                          +
                        </button>
                      </div>
                    </td>
                    <td className="price">${(parseFloat(item.price) || 0).toFixed(2)}</td>
                    <td className="subtotal">${((parseFloat(item.price) || 0) * (parseInt(item.quantity, 10) || 0)).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="cart-summary-container">
              <div className="coupon-section">
                <h2>Have a coupon?</h2>
                <div className="coupon-input">
                  <input type="text" placeholder="Enter code" className="coupon-field" /> <br />
                  <button className="apply-btn">Apply</button>
                </div>
              </div>
            </div>

            <div className="cart-summary">
              <h2>Cart Summary</h2>
              <p>
                Subtotal: <span>${subtotal.toFixed(2)}</span>
              </p>
              <div className="shipping-options">
                <label>
                  <input type="radio" name="shipping" value={0} checked={shipping === 0} onChange={() => setShipping(0)} />
                  Free Shipping ($0.00)
                </label>
                <label>
                  <input type="radio" name="shipping" value={15} checked={shipping === 15} onChange={() => setShipping(15)} />
                  Express Shipping (+$15.00)
                </label>
              </div>
              <p className="total">Total: ${total.toFixed(2)}</p>
              <button className="checkout-btn" onClick={() => setShowPopup(true)}>Checkout</button>
            </div>
          </>
        )}
      </div>

      {/* Payment Popup */}
      {showPopup && (
        <motion.div
          className="checkout-popup"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="popup-content">
            <h2>Select Payment Method</h2>

            {/* Mastercard Section */}
            <div className="payment-section">
              <h3>Mastercard Payment</h3>
              <input type="text" className="input-field" placeholder="Card Number" />
              <div className="card-details">
                <input type="text" className="input-field small" placeholder="MM/YY" />
                <input type="text" className="input-field small" placeholder="CVV" />
              </div>
            </div>

            {/* PayPal Section */}
            <div className="payment-section">
              <h2>PayPal Payment</h2>

              <input type="email" className="input-field" placeholder="PayPal Email" required />

              <input type="text" className="input-field" placeholder="Full Name" required />

              <input type="text" className="input-field" placeholder="Billing Address" required />

              <input type="text" className="input-field" placeholder="City" required />

              <select className="input-field">
                <option value="">Select Country</option>
                <option value="NG">Nigeria</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="ZA">South Africa</option>
                <option value="FR">France</option>
              </select>
              <input type="text" className="input-field" placeholder="Zip Code" required />

              <input type="tel" className="input-field" placeholder="Phone Number" required />
            </div>
            {/* Buttons */}
            <button className="proceed-btn">Proceed to Payment</button>
            <button className="close-btn" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </motion.div>
      )}

    </div>
  );
};

export default CartPage;
