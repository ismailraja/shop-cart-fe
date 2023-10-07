import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavigationMenu.css";

const NavigationMenuLogin = () => {
  const [isUserAdminDropdownOpen, setIsUserAdminDropdownOpen] = useState(false);
  const [isProductMgmtDropdownOpen, setIsProductMgmtDropdownOpen] =
    useState(false);

  const toggleUserAdminDropdown = () => {
    setIsUserAdminDropdownOpen(!isUserAdminDropdownOpen);
    setIsProductMgmtDropdownOpen(false); // Close the other dropdown
  };

  const toggleProductMgmtDropdown = () => {
    setIsProductMgmtDropdownOpen(!isProductMgmtDropdownOpen);
    setIsUserAdminDropdownOpen(false); // Close the other dropdown
  };

  return (
    <div class="navbar">
      <a href="#home">Home</a>
      <div class="subnav">
        <button class="subnavbtn">
          User <i class="fa fa-caret-down"></i>
        </button>
        <div class="subnav-content">
          <Link to="/userlogin">Login </Link>
          <Link to="/userlogin">Sign up </Link>
        </div>
      </div>
      <div class="subnav">
        <button class="subnavbtn">
          About <i class="fa fa-caret-down"></i>
        </button>
        <div class="subnav-content">
          <a href="#company">Company</a>
          <a href="#team">Team</a>
          <a href="#careers">Careers</a>
        </div>
      </div>

      <a href="#contact">Contact Us</a>
    </div>
  );
};

export default NavigationMenuLogin;
