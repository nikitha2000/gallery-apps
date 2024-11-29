import React from "react";
import Header from "./component/header/Header.jsx";
import Navbar from "./component/Navigation/Navbar.jsx";
import Body from "./component/Body/Body.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
