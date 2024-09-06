import React from "react";
import Button from "./Button";

const Header = () => {
  const userName = localStorage.getItem("userName");
  const handleLogout = () => {
    localStorage.clear(); // Clear all data from localStorage
    window.location.href = "/login"; // Redirect the user to the login page
  };

  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h3 className="h5 m-0 text-primary">
        Hi {userName ? userName : "User"}!
      </h3>
      <Button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Header;
