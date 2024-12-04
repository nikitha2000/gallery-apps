import React, { useEffect, useState } from "react";
import PhotoItem from "../Gallery/PhotoItem";

const Favourites = (onToggleFavourite) => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  useEffect(() => {
    const storedFavourites =
      JSON.parse(localStorage.getItem("favourites")) || [];
    setFavouritePhotos(storedFavourites);
  }, []);

  const handleToggleFavourite = (id) => {
    const updatedPhotos = favouritePhotos.map((photo) =>
      photo.id === id ? { ...photo, favourites: !photo.favourites } : photo
    );

    const newFavourites = updatedPhotos.filter((photo) => photo.favourites);
    localStorage.setItem("favourites", JSON.stringify(newFavourites));

    setFavouritePhotos(newFavourites);
  };

  if (!favouritePhotos || favouritePhotos.length === 0) {
    return <div>No photos to display.</div>;
  }

  return (
    <div className="photos-container">
      {favouritePhotos.map((photo) => (
        <PhotoItem
          key={photo.id}
          photo={photo}
          onToggleFavourite={handleToggleFavourite}
        />
      ))}
    </div>
  );
};

export default Favourites;
