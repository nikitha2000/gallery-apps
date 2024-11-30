import React from "react";
import "./Favourites.css";

const Favourites = ({ favourites }) => {
  return (
    <div className="favourites-section">
      {favourites.length === 0 ? (
        <p>No favourites yet !</p>
      ) : (
        <div className="favourites-list">
          {favourites.map((fav) => (
            <div key={fav.id} className="favourites-item">
              <img src={fav.src} alt="Favourite" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
