import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favourites from "./pages/FavouritesPage";
import Header from "./component/header/Header";
import Home from "./pages/Home/Home";
import Navbar from "./component/Navigation/Navbar";
import Photos from "./pages/Photos";
import PhotoDetails from "./component/Gallery/PhotoDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
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
