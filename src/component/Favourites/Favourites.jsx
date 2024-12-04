import React, { useEffect, useState } from "react";
import PhotoItem from "../Gallery/PhotoItem";

const Favourites = ({ onToggleFavourite }) => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  useEffect(() => {
    const storedFavourites =
      JSON.parse(localStorage.getItem("favourites")) || [];

    setFavouritePhotos(storedFavourites);
  }, []);

  if (!favouritePhotos || favouritePhotos.length === 0) {
    return <div>No photos to display.</div>;
  }

  return (
    <div className="photos-container">
      {favouritePhotos.map((photo) => (
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
