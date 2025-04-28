import React, { useState, useEffect } from "react";
import "./Navbar.css";
import {
    FaSearch,
    FaShoppingCart,
    FaUser,
    FaBars,
    FaTimes,
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaHeart,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
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
        window.addEventListener("storage", updateCartCount);
        return () => window.removeEventListener("storage", updateCartCount);
    }, []);

    useEffect(() => {
        fetch("/products.json")
            .then((res) => res.json())
            .then((data) => {
                setAllProducts(data);
                setSearchResults(data);
            })
            .catch((err) => console.error("Error fetching products:", err));
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
        const storageItems = JSON.parse(localStorage.getItem("items")) || [];
        const mergedItems = [...storageItems, ...allProducts];

        const filteredItems = mergedItems.filter((item) =>
            item.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setSearchResults(filteredItems);
    };

    const handleSearchClick = (item) => {
        localStorage.setItem("selectedProduct", JSON.stringify(item));
        navigate(`/singleshop`);
        setSearchOpen(false);
        setSearchQuery("");
    };

    useEffect(() => {
        const updateCartCount = () => {
            const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
            setCartCount(cartItems.length);
        };
    
        updateCartCount();
    
        const interval = setInterval(updateCartCount, 1000);
    
        const storedProfile = localStorage.getItem("profileImage");
        if (storedProfile) {
            setProfileImage(storedProfile);
        }
    
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);
    


    return (
        <nav className="navbar">
            {/* Logo Section */}
            <Link to="/home" className="unstyled-link">
                <div className="logo">Pearlz.</div>
            </Link>

            {/* Navigation Menu */}
            <div className="nav-menu">
                <ul className="nav-links">
                    <li onClick={handleMenuClose}><Link to="/home">Home</Link></li>
                    <li onClick={handleMenuClose}><Link to="/shop">Shop</Link></li>
                    <li onClick={handleMenuClose}><Link to="/services">Services</Link></li>
                    <li onClick={handleMenuClose}><Link to="/about">About</Link></li>
                    <li onClick={handleMenuClose}><Link to="/blog">Blog</Link></li>
                    <li onClick={handleMenuClose}><Link to="/contact">Contact</Link></li>
                </ul>
                <button className="joinn-btn-outline" onClick={() => navigate("/signup")}>Join Us</button>
            </div>

            {/* Hamburger Menu */}
            <div className="hamburger" onClick={toggleMenu}>
                {menuToggle ? <FaTimes /> : <FaBars />}
            </div>

            {/* Mobile Sliding Menu */}
            <div className={`mobile-menu ${menuToggle ? "open" : ""}`}>
                <h3 className="top">PEARLZ.</h3>
                <ul className="mobile-nav">
                    <li onClick={handleMenuClose}><Link to="/home">HOME</Link></li>
                    <li onClick={handleMenuClose}><Link to="/shop">SHOP</Link></li>
                    <li onClick={handleMenuClose}><Link to="/services">SERVICES</Link></li>
                    <li onClick={handleMenuClose}><Link to="/about">ABOUT</Link></li>
                    <li onClick={handleMenuClose}><Link to="/blog">BLOG</Link></li>
                    <li onClick={handleMenuClose}><Link to="/contact">CONTACT</Link></li>
                </ul>
                <button className="join-btn-outline" onClick={() => navigate("/signup")}>Join Us</button>
                <button className="join-btn-outline" onClick={() => navigate("/logout")}>Logout</button>

                <div className="social-icons">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaLinkedin /></a>
                    <a href="#"><FaInstagram /></a>
                </div>
            </div>

            {/* Icons */}
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
                                onFocus={() => setSearchResults(allProducts)}
                            />
                            <ul className="search-results">
                                {searchResults.map((item) => (
                                    <li key={item.id} onClick={() => handleSearchClick(item)}>
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div className="icon-container" onClick={() => navigate("/cartpage")}>
                    <FaHeart className="icon" />
                    <span className="badge">{cartCount}</span>
                </div>

                <FaShoppingCart className="icon" onClick={() => navigate("/shop")} />
            </div>

            {/* Profile */}
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
