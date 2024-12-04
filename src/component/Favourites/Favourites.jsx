import React, { useEffect, useState } from "react";
import toggleFavourite from "../Gallery/toggleFavourite";
import PhotoItem from "../Gallery/PhotoItem";

const Favourites = () => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  useEffect(() => {
    const storedFavourites =
      JSON.parse(localStorage.getItem("favourites")) || [];
    setFavouritePhotos(storedFavourites);
  }, []);

  const handleToggleFavourite = (id) => {
    setFavouritePhotos((prevPhotos) => toggleFavourite(prevPhotos, id));
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
