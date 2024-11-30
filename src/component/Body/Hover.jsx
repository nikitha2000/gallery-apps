import React, { useState } from "react";
import "./Hover.css";
import Button from "../Button";

const HoverButtons = ({ isHovered, onAddToFavourites, image }) => {
  const [isFavourites, setIsFavourite] = useState(false);

  const handleHeartClick = () => {
    setIsFavourite(!isFavourites);
  };

  // if (!isFavourites) {
  //   onAddToFavourites(image);
  // }

  return (
    <div className={`hover-buttons ${isHovered ? "show" : ""}`}>
      {isHovered && (
        <div className="top-left-button">
          <Button
            label={<img src="/asset/save.svg" alt="Save Icon" />}
            className="save-button"
          />
          <Button
            label={<img src="/asset/heart.svg" alt="Heart Icon" />}
            className={`heart-button ${isFavourites ? "favourite" : ""}`}
            onClick={handleHeartClick}
          />
        </div>
      )}
      <div className="bottom-left">
        <Button label={" Download"} className="download-button" />
      </div>
    </div>
  );
};

export default HoverButtons;
