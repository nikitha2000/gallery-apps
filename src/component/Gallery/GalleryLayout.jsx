import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoItem from "./PhotoItem";
import "./GalleryLayout.css";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        setPhotos(response.data);
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

  return (
    <div className="photos-container">
      {photos.map((photo) => (
        <PhotoItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default Photos;
