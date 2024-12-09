import React, { useState, useEffect } from "react";
import axios from "axios";
import toggleFavourite from "../../component/GalleryList/toggleFavourite";
import GalleryLayout from "../../component/GalleryList";

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

  if (error) {
    return <div>{error}</div>;
  }

  const handleToggleFavourite = (id) => {
    setPhotos((prevPhotos) => toggleFavourite(prevPhotos, id));
  };

  const filteredPhotos = photos.filter((photo) =>
    photo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <GalleryLayout
      searchQuery={searchQuery}
      photos={filteredPhotos}
      error={error}
      onToggleFavourite={handleToggleFavourite}
    />
  );
}

export default Photos;
