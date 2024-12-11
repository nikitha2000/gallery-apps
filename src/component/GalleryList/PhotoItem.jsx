import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
//import "./PhotoItem.css";

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

  const favouriteButtonClass = photo.favourites ? "bg-red" : "bg-light-pink";

  return (
    <div
      className="relative overflow-hidden text-center rounded-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <img
        src={photo.thumbnailUrl}
        alt={photo.title}
        className="w-full h-auto rounded-lg"
      />

      {isHovered && (
        <div
          className="absolute inset-0 flex flex-col justify-between items-end p-2 opacity-0 hover:opacity-100 transition-opacity"
          onClick={handlePhotoItemNavigate}>
          <div className="flex gap-2">
            <Button
              label={<img src="/asset/save.svg" alt="Save Icon" />}
              className="bg-light-pink text-white cursor-pointer p-2 h-12 w-12 flex items-center justify-center border-none rounded-md"
            />
            <Button
              label={<img src="/asset/heart.svg" alt="Favourite Icon" />}
              className={`${favouriteButtonClass} text-white p-2 h-12 w-12 flex items-center justify-center border-none rounded-md cursor-pointer`}
              onClick={handleFavouriteIconClick}
            />
          </div>
          <div className="bottom-8">
            <span className="block absolute w-auto max-w-custom-calc bottom-7 left-7 text-base text-white text-ellipsis whitespace-nowrap border-none overflow-hidden">
              {photo.title}
            </span>
            <Button
              label="Download"
              className="absolute justify-center bottom-8 right-5 h-12 bg-green border-none rounded-full text-lg text-white"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoItem;
