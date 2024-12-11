import React, { useState, useEffect } from "react";
import axios from "axios";
import { Photo } from "../../type"
import toggleFavourite from "../../component/GalleryList/toggleFavourite";
import GalleryLayout from "../../component/GalleryList";

interface PhotosProps {
    searchQuery: string; 
}

const Photos = ({ searchQuery }:PhotosProps) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const updatedPhotos = response.data
          .slice(0, 20)
          .map((photo:Photo) => ({ ...photo, favourites: false }));
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

  const handleToggleFavourite = (id:number) => {
    setPhotos((prevPhotos) => toggleFavourite(prevPhotos, id));
  };

  const filteredPhotos = photos.filter((photo) =>
    photo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <GalleryLayout   
      photos={filteredPhotos}
      error={error}
      onToggleFavourite={handleToggleFavourite}
    />
  );
}

export default Photos;
