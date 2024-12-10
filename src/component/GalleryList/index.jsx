import React from "react";
import PhotoItem from "./PhotoItem";
import "./GalleryLayout.css";

const GalleryLayout = ({ photos, onToggleFavourite }) => {
  return (
    <div className="photos-container">
      {photos.map((photo) => (
        <PhotoItem
          key={photo.id}
          photo={photo}
          onToggleFavourite={() => onToggleFavourite(photo.id)}
        />
      ))}
    </div>
  );
};

export default GalleryLayout;
