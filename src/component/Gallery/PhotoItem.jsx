import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";
import "./PhotoItem.css";

const PhotoItem = ({ photo, onToggleFavourite }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    onToggleFavourite(photo.id);
    navigate(`/photos/${photo.id}`);
  };

  const favouriteButtonClass = photo.favourites
    ? "favourite-button active"
    : "favourite-button";

  return (
    <div
      className="photo-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <Link
        to={`/photos/${photo.id}`}
        onClick={() => console.log("Link clicked!")}>
        <img src={photo.thumbnailUrl} alt={photo.title} />
      </Link>

      {isHovered && (
        <div className="hover-buttons">
          <div className="top-right-container">
            <Button
              label={<img src="/asset/save.svg" alt="Save Icon" />}
              className="action-button"
            />
            <Button
              label={<img src="/asset/heart.svg" alt="Favourite Icon" />}
              className={favouriteButtonClass}
              onClick={handleClick}
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
