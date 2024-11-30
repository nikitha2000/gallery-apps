import React from "react";
import PhotoItem from "../Body/PhotoItem";

const Favourites = ({ photos, hoveredImageId, onMouseEnter, onMouseLeave }) => {
  const favouritesPhotos = photos.filter((photo) => photo.favourites);

  return (
    <div className="photos-container">
      {favouritesPhotos.map((photo) => (
        <PhotoItem
          key={photo.id}
          photo={photo}
          hoveredImageId={hoveredImageId}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ))}
    </div>
  );
};

export default Favourites;
