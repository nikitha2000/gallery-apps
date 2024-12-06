import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoItem from "./PhotoItem";
import toggleFavourite from "./toggleFavourite";
import "./GalleryLayout.css";

const Photos = ({ searchQuery }) => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );

        const updatedPhotos = response.data.slice(0, 20).map((photo) => ({
          ...photo,
          favourites: false,
        }));
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
    <>
      <div className="photos-container">
        {filteredPhotos.map((photo) => (
          <PhotoItem
            key={photo.id}
            photo={photo}
            onToggleFavourite={handleToggleFavourite}
          />
        ))}
      </div>
    </>
  );
};

export default Photos;
