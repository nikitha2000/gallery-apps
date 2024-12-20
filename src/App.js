import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/header/Header";
import Navbar from "./component/Navigation/Navbar";
import PhotoDetails from "./component/Gallery/PhotoDetails";
import Favourites from "./pages/FavouritesPage";
import Home from "./pages/Home/Home";
import Photos from "./pages/Photos";
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
        <Route path="/photos/:photoId" element={<PhotoDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
