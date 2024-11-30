import React from "react";
import PhotoItem from "../Gallery/PhotoItem";

const Favourites = ({ photos, hoveredImageId, onMouseEnter, onMouseLeave }) => {
  const favouritesPhotos = photos.filter((photo) => photo.favourites);

  return (
    <div className="photos-container">
      {favouritesPhotos.map((photo) => (
        <PhotoItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default Favourites;
