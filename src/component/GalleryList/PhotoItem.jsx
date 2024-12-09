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

  const favouriteButtonClass = photo.favourites ? "bg-red-500" : "bg-[#fcf7f7]";

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
              className="bg-[#fcf7f7] text-white border-none p-2 cursor-pointer h-12 w-12 flex items-center justify-center rounded-md"
            />
            <Button
              label={<img src="/asset/heart.svg" alt="Favourite Icon" />}
              className={`${favouriteButtonClass} text-white border-none p-2 cursor-pointer h-12 w-12 flex items-center justify-center rounded-md`}
              onClick={handleFavouriteIconClick}
            />
          </div>
          <div className=" bottom-[30px]">
            <span className="absolute bottom-7 left-7 text-white block w-auto max-w-[calc(100%-300px)] border-none text-[16px] overflow-hidden text-ellipsis whitespace-nowrap">
              {photo.title}
            </span>
            <Button
              label="Download"
              className="absolute bottom-[30px] right-[20px] bg-[#05a081] text-white h-12 rounded-full border-none text-lg justify-center"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoItem;
