import React from "react";
import PhotoItem from "./PhotoItem";
import "./GalleryLayout.css";

const GalleryLayout = ({
  searchQuery = "",
  photos,
  error,
  onToggleFavourite,
}) => {
  if (error) {
    return <div>{error}</div>;
  }

  const filteredPhotos = photos.filter((photo) =>
    photo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="photos-container">
      {filteredPhotos.map((photo) => (
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
