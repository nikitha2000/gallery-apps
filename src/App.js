import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Challenges from "./component/Challenges/Challenges.jsx";
import Favourites from "./component/Favourites/Favourites";
import Header from "./component/header/Header.jsx";
import GalleryLayout from "./component/Gallery/GalleryLayout.jsx";
import Leaderboard from "./component/Leaderboard/Leaderboard.jsx";
import Videos from "./component/Videos/Videos.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<GalleryLayout />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/challenges" element={<Challenges />} />
      </Routes>
    </Router>
  );
}

export default App;
