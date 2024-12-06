import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favourites from "./pages/FavouritesPage.jsx";
import Header from "./component/header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Navbar from "./component/Navigation/Navbar.jsx";
import Photos from "./pages/Photos.jsx";
import PhotoDetails from "./component/Gallery/PhotoDetails.jsx";
import "./App.css";

function App() {
  const [selectedNavItem, setSelectedNavItem] = useState("Home");
  const handleNavItemSelect = (item) => {
    setSelectedNavItem(item);
  };
  return (
    <Router>
      <Header />
      <Navbar onNavItemSelect={handleNavItemSelect} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/photos/:id" element={<PhotoDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
