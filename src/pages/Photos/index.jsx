import React, { useState, useEffect } from "react";
import axios from "axios";
import GalleryLayout from "../../component/GalleryList";
import toggleFavourite from "../../component/GalleryList/toggleFavourite";

function Photos({ searchQuery }) {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const updatedPhotos = response.data
          .slice(0, 20)
          .map((photo) => ({ ...photo, favourites: false }));
        setPhotos(updatedPhotos);
      } catch (error) {
        console.error("Error fetching photos:", error);
        setError("Error fetching data!");
      }
    };
    fetchPhotos();
  }, []);

  const handleToggleFavourite = (id) => {
    setPhotos((prevPhotos) => toggleFavourite(prevPhotos, id));
  };
  return (
    <GalleryLayout
      searchQuery={searchQuery}
      photos={photos}
      error={error}
      onToggleFavourite={handleToggleFavourite}
    />
  );
}

export default Photos;
