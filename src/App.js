import React from "react";
import Header from "./component/header/Header.jsx";
import Navbar from "./component/Navigation/Navbar.jsx";
import GalleryLayout from "./component/Gallery/GalleryLayout.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <GalleryLayout />
    </div>
  );
}

export default App;
