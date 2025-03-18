import React, { useState, useEffect } from "react";
import "./Navbar.css";
import {
    FaSearch,
    FaHeart,
    FaShoppingCart,
    FaUser,
    FaEnvelope,
    FaBars,
    FaTimes,
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [profileImage, setProfileImage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const updateCartCount = () => {
            const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
            setCartCount(cartItems.length);
        };
        const storedProfile = localStorage.getItem("profileImage");
        if (storedProfile) {
            setProfileImage(storedProfile);
        }

        updateCartCount();

        // Listen for storage changes (when items are added)
        window.addEventListener("storage", updateCartCount);

        return () => {
            window.removeEventListener("storage", updateCartCount);
        };
    }, []);

    const toggleMenu = () => {
        setMenuToggle(!menuToggle);
    };

    const handleMenuClose = () => {
        setMenuToggle(false);
    };

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        const allItems = JSON.parse(localStorage.getItem("items")) || [];
        const filteredItems = allItems.filter((item) =>
            item.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setSearchResults(filteredItems);
    };

    return (
        <nav className="navbar">
            {/* Logo Section */}
            <div className="logo">Pearlz.</div>

            {/* Navigation Menu */}
            <div className="nav-menu">
                <ul className="nav-links">
                    <li onClick={handleMenuClose}>
                        <Link to="/home">Home</Link>
                    </li>
                    <li onClick={handleMenuClose}>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li onClick={handleMenuClose}>
                        <Link to="/services">Services</Link>
                    </li>
                    <li onClick={handleMenuClose}>
                        <Link to="/about">About</Link>
                    </li>
                    <li onClick={handleMenuClose}>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li onClick={handleMenuClose}>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <button className="joinn-btn-outline" onClick={() => navigate("/signup")}>Join Us</button>
            </div>

            {/* Hamburger Menu (Mobile) */}
            <div className="hamburger" onClick={toggleMenu}>
                {menuToggle ? <FaTimes /> : <FaBars />}
            </div>

            {/* Mobile Sliding Card Menu */}
            <div className={`mobile-menu ${menuToggle ? "open" : ""}`}>
                <ul className="mobile-nav">
                    <li onClick={handleMenuClose}>
                        <Link to="/home">Home</Link>
                    </li>
                    <li onClick={handleMenuClose}>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li onClick={handleMenuClose}>
                        <Link to="/services">Services</Link>
                    </li>
                    <li onClick={handleMenuClose}>
                        <Link to="/about">About</Link>
                    </li>
                    <li onClick={handleMenuClose}>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li onClick={handleMenuClose}>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>

                {/* Join Us Button Inside Card */}
                <button className="join-btn-outline" onClick={() => navigate("/signup")}>Join Us</button>
                <button className="join-btn-outline" onClick={() => navigate("/logout")}>Logout</button>

                {/* Social Icons Below Menu */}
                <div className="social-icons">
                    <a href="#">
                        <FaFacebook />
                    </a>
                    <a href="#">
                        <FaTwitter />
                    </a>
                    <a href="#">
                        <FaLinkedin />
                    </a>
                    <a href="#">
                        <FaInstagram />
                    </a>
                </div>
            </div>

            {/* Icons Section (Hidden on Mobile) */}
            <div className="nav-icons">
                <div className="search-icon" onClick={toggleSearch}>
                    <FaSearch className="icon" />
                    {searchOpen && (
                        <div className="search-dropdown" onClick={(e) => e.stopPropagation()}>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            <ul className="search-results">
                                {searchResults.map((item) => (
                                    <li key={item.id}>{item.name}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div className="heart-icon" onClick={() => navigate("/cartpage")}>
                    <FaHeart className="icon" />
                    {cartCount > 0 && <span className="cart-count-badge">{cartCount}</span>}
                </div>
                <FaShoppingCart className="icon" onClick={() => navigate("/shop")} />
                <FaUser className="icon" onClick={() => navigate("/profile")} />
            </div>
            {/* Profile Icon/Image */}
            <div className="profile-icon" onClick={() => navigate("/profile")}>
                    {profileImage ? (
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="profile-img"
                            style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                        />
                    ) : (
                        <FaUser className="icon" />
                    )}
                </div>
        </nav>
    );
};

export default Navbar;
