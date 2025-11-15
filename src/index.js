// index.js
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ButtonApp from "./components/ButtonApp";
import StoreApp from "./components/StoreApp";
import "./styles/global.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      {/* <Route path="/" element={<ButtonApp />} /> */}
      <Route path="/" element={<div className="home-page"><ButtonApp /></div>} />
      {/* <Route path="/store" element={<StoreApp />} /> */}
      <Route path="/store" element={<div className="store-page"><StoreApp /></div>} />
    </Routes>
  </Router>
);