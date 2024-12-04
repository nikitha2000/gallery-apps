import React from "react";
import Navbar from "../../component/Navigation/Navbar";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <div class="home-conatiner">
        <p class="home-banner">Welcome to Gallery App</p>
      </div>
    </>
  );
}

export default Home;
