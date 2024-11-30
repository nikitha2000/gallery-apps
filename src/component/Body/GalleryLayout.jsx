import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoItem from "./PhotoItem";
import Favourites from "../Favourites/Favourites"; // Adjust relative import path
import Navbar from "../Navigation/Navbar";
import "./GalleryLayout.css";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [hoveredImageId, setHoveredImageId] = useState(null);
  const [error, setError] = useState(null);
  const [selectedNavItem, setSelectedNavItem] = useState("Home");

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        // Ensure favourites property exists for all photos
        const updatedPhotos = response.data.map((photo) => ({
          ...photo,
          favourites: photo.favourites || false, // Add 'favourites' if not present
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

  const handleMouseEnter = (id) => {
    setHoveredImageId(id);
  };

  const handleMouseLeave = () => {
    setHoveredImageId(null);
  };

  const handleToggleFavourite = (id) => {
    setPhotos((prevPhotos) =>
      prevPhotos.map((photo) =>
        photo.id === id ? { ...photo, favourites: !photo.favourites } : photo
      )
    );
  };

  const handleNavItemSelect = (item) => {
    setSelectedNavItem(item);
  };

  return (
    <>
      <Navbar onNavItemSelect={handleNavItemSelect} />
      {selectedNavItem === "Favourites" ? (
        <Favourites
          photos={photos}
          hoveredImageId={hoveredImageId}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      ) : (
        <div className="photos-container">
          {photos.map((photo) => (
            <PhotoItem
              key={photo.id}
              photo={photo}
              hoveredImageId={hoveredImageId}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onToggleFavourite={handleToggleFavourite}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Photos;
