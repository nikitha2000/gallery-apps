import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhotoDetails from "./component/PhotoDetails";
import Header from "./component/header";
import Navbar from "./component/Navigation";
import Favourites from "./pages/Favourite";
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <Header />
      <Navbar setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/photos" element={<Photos searchQuery={searchQuery} />} />
        <Route path="/photos/:photoId" element={<PhotoDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
