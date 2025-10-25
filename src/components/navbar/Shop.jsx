import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaEye, FaSync } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const navigate = useNavigate();
    const productsPerPage = 6;


    useEffect(() => {
        fetch("/products.json")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);


    const paginatedProducts = [];
    for (let i = 0; i < products.length; i += productsPerPage) {
        paginatedProducts.push(products.slice(i, i + productsPerPage));
    }

    const nextPage = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % paginatedProducts.length);
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + paginatedProducts.length) % paginatedProducts.length);
    };
    const handleViewProduct = (product) => {
        localStorage.setItem("selectedProduct", JSON.stringify(product));
        navigate("/singleshop");
    };


    return (
        <div className="shop-container">
            <div className="heroo-section">
                <h2 className="mt-2">Summer Offer 2025 Collection <br />Best Offer</h2>
                <button className="shop-now">Shop Now</button>
            </div>

            <div className="products-section">
                <div className="products-grid">
                    {paginatedProducts.length > 0 &&
                        paginatedProducts[currentPage].map((product) => (
                            <div data-aos="fade-up"
                                key={product.id}
                                className="product-card"
                                onMouseEnter={() => setHoveredProduct(product.id)}
                                onMouseLeave={() => setHoveredProduct(null)}
                            >
                                <span className="tags">{product.tag}</span> 

                                <div className="product-img-container">
                                    <img src={product.img} alt={product.name} className="product-img"/>

                                    {hoveredProduct === product.id && (
                                        <div className="hover-icons">
                                            <button
                                                className="iconn"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleViewProduct(product);
                                                }}
                                            >
                                                <FaEye />
                                            </button>
                                            <button
                                                className="iconn"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    window.location.reload();
                                                }}
                                            >
                                                <FaSync />
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <h6>{product.name}</h6>
                                <p className="price">
                                    {product.price}{" "}
                                    <span className="old-price">{product.oldPrice}</span>
                                </p>
                                <button
                                    className="add-to-cart"
                                    onClick={() => handleViewProduct(product)}
                                >
                                    View Product
                                </button>
                            </div>
                        ))}
                </div>
                
            </div>
            <FaArrowLeft className="nav-arrow left mt-5 me-5" onClick={prevPage} />
            <FaArrowRight className="nav-arrow right mt-5 ms-5" onClick={nextPage} />
        </div>
    );
};

export default Shop;
