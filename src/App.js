import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favourites from "./pages/FavouritesPage.jsx";
import Header from "./component/header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Photos from "./pages/Photos.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </Router>
  );
}

export default App;
