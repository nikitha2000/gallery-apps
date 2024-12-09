import React, { useState, useEffect } from "react";
import { Photo } from "../../type";
import toggleFavourite from "../../component/GalleryList/toggleFavourite";
import GalleryLayout from "../../component/GalleryList";

const FavouritePhotos = () => {
  const [favouritePhotos, setFavouritePhotos] = useState<Photo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const storedFavourites = JSON.parse(localStorage.getItem("favourites") || "[]") as Photo[];
      setFavouritePhotos(storedFavourites);
    } catch (error) {
      console.error("Error fetching favourite photos:", error);
      setError("Error fetching data!");
    }
  }, []);

  const handleToggleFavourite = (id:number) => {
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
