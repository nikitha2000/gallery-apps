import React from "react";
import PhotoItem from "../Gallery/PhotoItem";

const Favourites = ({ photos, onToggleFavourite }) => {
  return (
    <div className="photos-container">
      {photos.map((photo) => (
        <PhotoItem
          key={photo.id}
          photo={photo}
          onToggleFavourite={onToggleFavourite}
        />
      ))}
    </div>
  );
};

export default Favourites;
