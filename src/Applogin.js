// App.js
import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Menulogin from "./NavigationMenuLogin.js";
import UserLogin from "./Component/User/UserLogin.js";
import App from "./App.js";

function Applogin() {
  return (
    <Router>
      <div>
        <h1>Food Order Portal </h1> {/* Add the project title here */}
        <Menulogin />
        <Routes>
          <Route path="/login" element={<UserLogin />} />
          <Route path="/home" element={<App />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Applogin;
