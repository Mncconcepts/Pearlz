import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import blogData from "./Blogdata";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogData.posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="blog-container">
      <div className="banner">
        <img src="/cover3.png" alt="Blog Banner" loading="lazy" />
        <div data-aos="" className="banner-text">
          <h1>Blogs</h1>
          <p>Stay updated with the latest articles and insights</p>
        </div>
      </div>

      <div className="featured-posts-grid">
        {blogData.featured.map((post, index) => (
          <div key={index} className="featured-post">
            <img src={post.image} alt={post.title} loading="lazy"/>
            <div className="featured-content">
              <h2>{post.title}</h2>
              <p>{post.date}</p>
              <span className="tag">{post.category}</span>
              <Link to="/singleblog" className="see-more-btn">Read More</Link>
            </div>
          </div>
        ))}
      </div>

      <div className="posts-grid">
        {currentPosts.map((post, index) => (
          <div key={index} className="post-item">
            <img src={post.image} alt={post.title} loading="lazy" />
            <span className="tag">{post.category}</span>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from(
          { length: Math.ceil(blogData.posts.length / postsPerPage) },
          (_, index) => (
            <span
              key={index}
              className={currentPage === index + 1 ? "active" : ""}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </span>
          )
        )}
      </div>

      <div className="popular-posts">
        <h2>Popular Posts</h2>
        <div className="popular-grid">
          {blogData.popular.map((post, index) => (
            <div key={index} className="popular-item">
              <img src={post.image} alt={post.title} loading="lazy" />
              <p>{post.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;