import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavigationMenu.css";

const NavigationMenu = () => {
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
          About <i class="fa fa-caret-down"></i>
        </button>
        <div class="subnav-content">
          <a href="#company">Company</a>
          <a href="#team">Team</a>
          <a href="#careers">Careers</a>
        </div>
      </div>
      <div class="subnav">
        <button class="subnavbtn">
          User Admin <i class="fa fa-caret-down"></i>
        </button>
        <div class="subnav-content">
          <Link to="/userlogin">Login </Link>
          <Link to="/userread">List </Link>
          <Link to="/usercreate">Add </Link>
          <Link to="/userread">Edit </Link>
          <Link to="/userread">Delete </Link>
        </div>
      </div>
      <div class="subnav">
        <button class="subnavbtn">
          Product <i class="fa fa-caret-down"></i>
        </button>
        <div class="subnav-content">
          <Link to="/productlist">List </Link>
          <Link to="/productcreate">Add </Link>
          <Link to="/productchange">Test Upload </Link>

          <Link to="/productlist">Edit </Link>
          <Link to="/productlist">Delete </Link>
        </div>
      </div>

      <div class="subnav">
        <button class="subnavbtn">
          Cart <i class="fa fa-caret-down"></i>
        </button>
        <div class="subnav-content">
          <Link to="/cartlist">List </Link>
          <Link to="/cartadd">Add Cart </Link>   

        </div>
      </div>
      <a href="#contact">Contact Us</a>
    </div>
  );
};

export default NavigationMenu;
