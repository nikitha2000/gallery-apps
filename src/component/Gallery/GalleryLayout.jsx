import React, { useState, useEffect } from "react";
import axios from "axios";
import Favourites from "../Favourites/Favourites";
import Navbar from "../Navigation/Navbar";
import PhotoItem from "./PhotoItem";
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
    setPhotos((prevPhotos) => {
      const updatedPhotos = prevPhotos.map((photo) =>
        photo.id === id ? { ...photo, favourites: !photo.favourites } : photo
      );

      const favourites = updatedPhotos.filter((photo) => photo.favourites);
      localStorage.setItem("favourites", JSON.stringify(favourites));

      return updatedPhotos;
    });
  };

  const handleNavItemSelect = (item) => {
    setSelectedNavItem(item);
  };

  const sortedFavouritesPhotos = photos.filter((photo) => photo.favourites);

  return (
    <>
      <Navbar onNavItemSelect={handleNavItemSelect} />
      {selectedNavItem === "Favourites" ? (
        <Favourites
          photos={sortedFavouritesPhotos}
          onToggleFavourite={handleToggleFavourite}
        />
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
