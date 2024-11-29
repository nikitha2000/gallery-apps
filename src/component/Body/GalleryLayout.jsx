import React, { useState, useEffect } from "react";
import axios from "axios";
import Hover from "./Hover";
import "./GalleryLayout.css";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [hoveredImageId, setHoveredImageId] = useState(null);
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

  const handleMouseEnter = (id) => {
    setHoveredImageId(id);
  };

  const handleMouseLeave = () => {
    setHoveredImageId(null);
  };

  return (
    <div className="photos-container">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="photo-item"
          onMouseEnter={() => handleMouseEnter(photo.id)}
          onMouseLeave={() => handleMouseLeave}>
          <img src={photo.thumbnailUrl} alt={photo.title} />
          {hoveredImageId === photo.id && <Hover isHovered={true} />}
        </div>
      ))}
    </div>
  );
};

export default Photos;
