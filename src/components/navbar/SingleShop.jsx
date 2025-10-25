import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./SingleShop.css";
import { FaStar } from "react-icons/fa";

const SingleShop = () => {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
  const [showCart, setShowCart] = useState(false);
  const [product, setProduct] = useState(null);
  const [review, setReview] = useState("");
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const cartIconRef = useRef(null);
  const [reviewStatus, setReviewStatus] = useState("Submit Review");
  const [isSubmitting, setIsSubmitting] = useState(false);


  useEffect(() => {
    const storedProduct = localStorage.getItem("selectedProduct");
    if (storedProduct) {
      setProduct(JSON.parse(storedProduct));
    }

    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setRelatedProducts(data);
      })
      .catch((err) => console.error("Error fetching related products:", err));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = () => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    animateAddToCart();
    setShowCart(true);
  };


  const animateAddToCart = () => {
    const cartButton = document.querySelector(".add-to-cart-btn");
    const cartIcon = cartIconRef.current;
    if (!cartButton || !cartIcon) return;

    const cartButtonRect = cartButton.getBoundingClientRect();
    const cartIconRect = cartIcon.getBoundingClientRect();

    const circle = document.createElement("div");
    circle.classList.add("flying-circle");
    circle.style.left = `${cartButtonRect.left + cartButtonRect.width / 2}px`;
    circle.style.top = `${cartButtonRect.top + cartButtonRect.height / 2}px`;
    document.body.appendChild(circle);

    requestAnimationFrame(() => {
      circle.style.transform = `translate(${cartIconRect.left - cartButtonRect.left}px, ${cartIconRect.top - cartButtonRect.top}px)`;
      circle.style.opacity = "0";
    });

    circle.addEventListener("transitionend", () => {
      circle.remove();
    });
  };


  const submitReview = (e) => {
    e.preventDefault();
    alert(`Review submitted: ${review}`);
    setReview("");
  };

  const handlePagination = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex >= relatedProducts.length) newIndex = 0;
    if (newIndex < 0) newIndex = relatedProducts.length - 1;
    setCurrentIndex(newIndex);
    setProduct(relatedProducts[newIndex]);
  };

  if (!product) {
    return <div>Loading product...</div>;
  }

  return (
    <div className={`single-shop-container ${showCart ? 'blurred' : ''}`}>

      <div className="product-details">
        <div className="product-image">
          <img src={product.img} alt={product.name} />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">${product.price}</p>
          <p>{product.description}</p>
          <div> <FaStar className="ratings"></FaStar><FaStar className="ratings"></FaStar><FaStar className="ratings"></FaStar><FaStar className="ratings"></FaStar>3.5k</div>
          <button className="add-to-cart-btn" onClick={addToCart}>Add to Cart</button>
          <button className="checkout-btn" onClick={() => navigate("/cartpage")}>Checkout</button>
          <div className="pagination">
            <button onClick={() => handlePagination(-1)}>&#10094; Prev</button>
            <span>{currentIndex + 1} / {relatedProducts.length}</span>
            <button onClick={() => handlePagination(1)}>Next &#10095;</button>
          </div>
        </div>
      </div>

      <div className="review-section">
        <h2>Leave a Review</h2>
        <form onSubmit={submitReview}>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write your review here..."
            required
          ></textarea>
          <button type="submit">Submit Review</button>
        </form>
      </div>

      <div className="related-products">
        <h2>Related Products</h2>
        <div className="related-products-grid slide-animation">
          {relatedProducts.map((relProd) => (
            <div
              key={relProd.id}
              className="related-product-card"
            >
              <img src={relProd.img} alt={relProd.name} />
              <h4>{relProd.name}</h4>
              <p>${relProd.price}</p>
              <button className="add-to-cart-btn" onClick={addToCart}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      <div ref={cartIconRef} className="hidden-cart-icon"></div>
    </div>
  );
};

export default SingleShop;
