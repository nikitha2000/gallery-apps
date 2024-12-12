import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Photo } from "../../type";
import "./PhotoDetails.css";

const PhotoDetails = () => {
  const { photoId } = useParams<{ photoId: string }>();
  const [photo, setPhoto] = useState<Photo | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/photos/${photoId}`
        );
        setPhoto(response.data);
      } catch (error) {
        console.error("Error fetching photo:", error);
        setError("Error fetching data!");
      }
    };

    fetchPhoto();
  }, [photoId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!photo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="photo-details">
      <h2>{photo.title}</h2>
      <img className="photo-card" src={photo.thumbnailUrl} alt={photo.title} />
    </div>
  );
};

export default PhotoDetails;
