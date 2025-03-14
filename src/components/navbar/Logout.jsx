import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css";

const Logout = () => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleLogoutClick = () => {
    setShowConfirmation(true);  // Show the confirmation dialog
  };

  const handleLogout = () => {
    // Clear any user-related data (e.g., localStorage) if needed
    localStorage.removeItem("user");
    alert("You have been logged out.");
    navigate("/login"); // Redirect to the login page
  };

  const handleCancel = () => {
    setShowConfirmation(false); // Close the confirmation dialog
    navigate("/home"); // Redirect to the home page if cancelled
  };

  return (
    <div className="logout-container">
      {showConfirmation ? (
        <div className="logout-box">
          <h2>Are you sure you want to log out?</h2>
          <div className="logout-buttons">
            <button className="logout-yes" onClick={handleLogout}>
              Yes
            </button>
            <button className="logout-no" onClick={handleCancel}>
              No
            </button>
          </div>
        </div>
      ) : (
        <button className="logout-button" onClick={handleLogoutClick}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Logout;
