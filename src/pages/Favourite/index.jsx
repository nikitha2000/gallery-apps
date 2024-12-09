import React, { useState, useEffect } from "react";
import GalleryLayout from "../../component/GalleryList";
import toggleFavourite from "../../component/GalleryList/toggleFavourite";

const FavouritePhotos = () => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const storedFavourites =
        JSON.parse(localStorage.getItem("favourites")) || [];
      setFavouritePhotos(storedFavourites);
    } catch (error) {
      console.error("Error fetching favourite photos:", error);
      setError("Error fetching data!");
    }
  }, []);

  const handleToggleFavourite = (id) => {
    setFavouritePhotos((prevPhotos) => toggleFavourite(prevPhotos, id));
  };

  return (
    <GalleryLayout
      photos={favouritePhotos}
      error={error}
      onToggleFavourite={handleToggleFavourite}
    />
  );
};

export default FavouritePhotos;
