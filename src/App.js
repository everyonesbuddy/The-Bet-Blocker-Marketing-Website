import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Home from "./components/Home";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;
