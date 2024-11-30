import React from "react";
import "./PhotoItem..css";
import Button from "../Button";

const PhotoItem = ({ photo, hoveredImageId, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="photo-item"
      onMouseEnter={() => onMouseEnter(photo.id)}
      onMouseLeave={onMouseLeave}>
      <img src={photo.thumbnailUrl} alt={photo.title} />

      {hoveredImageId === photo.id && (
        <div className="hover-buttons show">
          <div className="top-left-button">
            <Button
              label={<img src="/asset/save.svg" alt="Save Icon" />}
              className="save-button"
            />
            <Button
              label={<img src="/asset/heart.svg" alt="Heart Icon" />}
              className="save-button"
            />
          </div>
          <div className="bottom-left">
            <Button label={" Download"} className="download-button" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoItem;
