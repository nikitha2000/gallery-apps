import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoItem from "./PhotoItem";
import Favourites from "../Favourites/Favourites";
import Navbar from "../Navigation/Navbar";
import "./GalleryLayout.css";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [selectedNavItem, setSelectedNavItem] = useState("Home");

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );

        const updatedPhotos = response.data.map((photo) => ({
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
        <Favourites photos={photos} onToggleFavourite={handleToggleFavourite} />
      ) : (
        <div className="photos-container">
          {photos.map((photo) => (
            <PhotoItem
              key={photo.id}
              photo={photo}
              onToggleFavourite={handleToggleFavourite}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Photos;
