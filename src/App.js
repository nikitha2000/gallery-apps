import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/header/Index";
import Navbar from "./component/Navigation/Index";
import PhotoDetails from "./component/Gallery/PhotoDetails";
import Favourites from "./pages/FavouritePage/Index";
import Home from "./pages/Home/Index";
import Photos from "./pages/Photos/Index";
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
