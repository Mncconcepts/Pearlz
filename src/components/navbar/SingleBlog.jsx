import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./SingleBlog.css";

const SingleBlog = () => {
  const location = useLocation();
  const post = location.state?.post || JSON.parse(localStorage.getItem("selectedBlog"));

  if (!post) {
    return <p className="error-message">Blog post not found!</p>;
  }

  return (
    <div className="single-blog">
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} className="blog-image" />
      <p className="blog-meta">
        <span>{post.date}</span> | <span>{post.category}</span>
      </p>

      {/* Display all post details dynamically */}
      <div className="blog-details">
        {Object.entries(post).map(([key, value], index) => (
          key !== "image" && ( // Exclude image from mapping
            <p key={index} className="blog-text">
              <strong>{key.replace(/_/g, " ").toUpperCase()}:</strong> {value}
            </p>
          )
        ))}
      </div>
      <Link to="/blog">
      <button className="btn btn-success" type="submit">Back to Blogpage</button>
      </Link>
    </div>
  );
};

export default SingleBlog;
