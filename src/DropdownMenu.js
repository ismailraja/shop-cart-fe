// src/components/DropdownMenu.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DropdownMenu.css";

const DropdownMenu = () => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isUserSubMenuOpen, setIsUserSubMenuOpen] = useState(false);

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
    setIsProductDropdownOpen(false); // Close the product dropdown if open
  };

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
    setIsUserDropdownOpen(false); // Close the user dropdown if open
  };

  const toggleUserSubMenu = () => {
    setIsUserSubMenuOpen(!isUserSubMenuOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={toggleUserDropdown}>
        User List
      </button>
      {isUserDropdownOpen && (
        <ul className="dropdown-content">
          <li onClick={toggleUserSubMenu}>
            User Options
            {isUserSubMenuOpen && (
              <ul className="submenu">
                <li>
                  <Link to="/adduser">Add User</Link>
                </li>
                <li>
                  <Link to="/edituser">Edit User</Link>
                </li>
                <li>
                  <Link to="/listuser">List User</Link>
                </li>
                <li>
                  <Link to="/deleteuser">Delete User</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      )}

      <button className="dropdown-btn" onClick={toggleProductDropdown}>
        Product Management
      </button>
      {isProductDropdownOpen && (
        <ul className="dropdown-content">
          <li>
            <Link to="/productmanagement">Product 1</Link>
          </li>
          <li>
            <Link to="/productmanagement">Product 2</Link>
          </li>
          <li>
            <Link to="/productmanagement">Product 3</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
