import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import "./PhotoItem.css";

const PhotoItem = ({ photo, onToggleFavourite }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handlePhotoItemNavigate = () => {
    navigate(`/photos/${photo.id}`);
  };

  const handleFavouriteIconClick = (e) => {
    e.stopPropagation();
    if (typeof onToggleFavourite === "function") {
      onToggleFavourite(photo.id);
    } else {
      console.error("onToggleFavourite is not a function");
    }
  };

  const favouriteButtonClass = photo.favourites
    ? "favourite-button active"
    : "favourite-button";

  return (
    <div
      className="photo-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <img src={photo.thumbnailUrl} alt={photo.title} />

      {isHovered && (
        <div className="hover-buttons" onClick={handlePhotoItemNavigate}>
          <div className="top-right-container">
            <Button
              label={<img src="/asset/save.svg" alt="Save Icon" />}
              className="action-button"
            />
            <Button
              label={<img src="/asset/heart.svg" alt="Favourite Icon" />}
              className={favouriteButtonClass}
              onClick={handleFavouriteIconClick}
            />
          </div>
          <div className="bottom-right-container">
            <span className="image-title">{photo.title}</span>
            <Button label="Download" className="download-button" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoItem;
