import React from "react";
import "./App.css";
import ImageSlider from "./ImageSlider";
import Login from "./Login"; // Import the Login component
import SignUp from "./SignUp"; // Import the SignUp component
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppSeclogin from "../../App";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to QDine </h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" exact element={<ImageSlider />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/seclogin" element={<AppSeclogin />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
