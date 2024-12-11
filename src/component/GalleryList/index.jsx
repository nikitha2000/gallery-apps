import React from "react";
import PhotoItem from "./PhotoItem";
//import "./GalleryLayout.css";

const GalleryLayout = ({ photos, onToggleFavourite }) => {
  return (
    <div className="grid grid-cols-1 gap-custom-gap p-5 md:grid-cols-2 lg:grid-cols-4">
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
