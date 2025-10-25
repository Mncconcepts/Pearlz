import React, { useState } from "react";
import "./Hero2.css";
import { Link, useNavigate } from "react-router-dom";
import Reviews from "../components/navbar/Reviews";
import Faq from "../components/navbar/Faq";
import { FaStar } from "react-icons/fa";

const categoryImages = [
  "/phase8.png", "/phase2.png", "/phase3.png", "/phase4.png",
  "/phase5.png", "/phase6.png", "/phase7.png", "/phase5.png",
  "/phase6.png", "/phase7.png", "/phase8.png", "/phase2.png",
];

const productImages = [
  "/phase6.png", "/phase8.png", "/phase9.png",
  "/phase10.png", "/phase11.png",
];

const dealImages = [
  "/phase1.png", "/phase4.png", "/phase8.png",
  "/phase6.png", "/phase9.png",
];

const promoImages = [
  "/second1.png", "/second5.png",
  "/second3.png", "/second4.png",
];

const promoTexts = [
  "Chosen By Influencers",
  "Carefully Crafted",
  "15% Off Only This Week",
  "Prevent Dry, Flaky Skin",
];

const Hero2 = () => {
  const [popupProduct, setPopupProduct] = useState(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [dots, setDots] = useState("");
  const navigate = useNavigate();
  const handleAddToCart = (product) => {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    setPopupProduct(product);
  };

  const handleViewCart = () => {
    navigate(`/singleshop/${popupProduct.id}`);
  };

  const handleBack = () => {
    setPopupProduct(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setDots("");

    // Simulate 3-dot animation
    let count = 0;
    const dotInterval = setInterval(() => {
      count = (count + 1) % 4;
      setDots(".".repeat(count));
    }, 500);

    // Simulate sending process
    setTimeout(() => {
      clearInterval(dotInterval);
      setSending(false);
      setSent(true);

      // Reset after a few seconds
      setTimeout(() => {
        setSent(false);
      }, 4000);
    }, 3000);
  };

  return (
    <div className="hero-container">
      <section className="shop-categories">
        <h2 data-aos="fade-down">Shop By Categories</h2>
        <div data-aos="zoom-in" className="categories">
          {["Concealer", "Cleansers", "Creams", "Brightening", "Foundations", "Suncare", "Serum", "Foundations", "Suncare", "Serum", "Concealer", "Cleansers"].map((category, index) => (
            <div key={index} className="category-item">
              <img src={categoryImages[index]} alt={category} loading="lazy" />
              <p>{category}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="popular-products">
        <h2 data-aos="fade-down">Popular On The Pearlz Store.</h2>
        <div className="product-list">
          {productImages.map((image, index) => (
            <div data-aos="fade-up" key={index} className="product-item">
              <img src={image} alt="Product" loading="lazy" />
              <p> Featured {index + 1}</p>
              <span>$0.00</span>
              <div> <FaStar className="ratings"></FaStar><FaStar className="ratings"></FaStar>3.5k</div>
              <button onClick={() => handleAddToCart({ id: index + 1, name: `Product Name ${index + 1}`, price: "$15", image })}>View Single</button>
            </div>
          ))}
        </div>
      </section>

      <section className="promotions">
        {promoImages.map((image, index) => (
          <div data-aos="zoom-in" key={index} className="promo-item">
            <img src={image} alt="Promotion" loading="lazy" />
            <p className="mt-3">{promoTexts[index]}</p>
          </div>
        ))}
      </section>

      <section className="best-deals">
        <h2 data-aos="fade-down">Best Deals On The Pearlz Store.</h2>
        <div className="product-list">
          {dealImages.map((image, index) => (
            <div data-aos="fade-down" key={index} className="product-item">
              <img src={image} alt="Deal" loading="lazy" />
              <p>Deal Product {index + 1}</p>
              <span>$0.00</span>
              <div> <FaStar className="ratings"></FaStar><FaStar className="ratings"></FaStar>3.5k</div>
              <button onClick={() => handleAddToCart({ id: index + 100, name: `Deal Product ${index + 1}`, price: "$XX.XX", image })}>View Single</button>
            </div>
          ))}
        </div>
      </section>

      <section className="custom-skincare">
        <h2>Get Your Customized Skincare Treatment</h2>
        <p>We are a passionate company that helps you identify your skin needs and provides you with tailor-made skincare solutions.</p>
        <Link to="/shop">
          <button className="btn">Shop Skincare</button>
        </Link>
      </section>

      <section className="custom-image flex items-center justify-between p-8">
        <div className="w-1/2">
          <h2 data-aos="fade-down" className="text-3xl font-bold mb-4">Discover Your Perfect Skincare Routine</h2>
          <p className="mb-4">We specialize in understanding your unique skin type and providing personalized skincare treatments to enhance your natural beauty.</p>
          <Link to="/shop">
            <button className="btn">Explore Products</button>
          </Link>
        </div>
        <img data-aos="fade-up" src="/second1.png" alt="Skincare" className="w-1/2 rounded-lg" loading="lazy" />
      </section>

      {/* Second Section */}
      <section className="custom-image flex items-center justify-between p-8">
        <img data-aos="zoom-in" src="/second4.png" alt="Healthy Skin" className="w-1/2 rounded-lg" loading="lazy" />
        <div className="w-1/2 text-right">
          <h2 data-aos="fade-down" className="text-3xl font-bold mb-4">Nourish Your Skin Naturally</h2>
          <p className="mb-4">Our products are crafted with natural ingredients to give your skin the care it deserves, ensuring a healthy and radiant glow.</p>
          <Link to="/shop">
            <button className="btn">View Collection</button>
          </Link>
        </div>
      </section>

      {/* Contact Form */}

      <section className="contact-form p-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto grid gap-4">
          <input type="text" placeholder="Your Name" className="p-3 border rounded-lg" required />
          <input type="email" placeholder="Your Email" className="p-3 border rounded-lg" required />
          <textarea placeholder="Your Message" className="p-3 border rounded-lg" rows="5" required></textarea>

          <button type="submit" className="btn flex items-center justify-center">
            {sending ? `Sending${dots}` : sent ? "Sent Successfully!" : "Send Message"}
          </button>
        </form>
      </section>

      <div className="custom-skincare">
        <h2>Find the right product that norishes your skin</h2>
        <p>We are a passionate company that helps you identify your skin needs and provides you with tailor-made skincare solutions.</p>
        <Link to="/shop">
          <button className="btn">Explore Our Shop Now</button>
        </Link>
      </div>
      <div>
        <Reviews />
        <Faq />
      </div>


      {/* Popup Card */}
      {popupProduct && (
        <>
          <div className="popup-overlay" onClick={handleBack}></div>
          {popupProduct && (
            <div className="popup-card">
              {popupProduct.image && (
                <img
                  src={popupProduct.image}
                  alt={popupProduct.name || "Product Image"}
                  className="popup-image"
                />
              )}
              <h2>{popupProduct.name || "Unnamed Product"}</h2>
              <p>Price: {popupProduct.price ? `$${popupProduct.price}` : "N/A"}</p>
              <div className="popup-actions">
                <Link to="/shop">
                  <button onClick={handleViewCart} className="popup-btn view-cart">
                    View Shop Product
                  </button>
                </Link>
                <button onClick={handleBack} className="popup-btn back">
                  Back
                </button>
              </div>
            </div>
          )}
        </>

      )}
    </div>
  );
};

export default Hero2;
